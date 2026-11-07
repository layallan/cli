"""Refresh Hao Zhang's journal bibliography. Run from any directory."""
import json
import re
import unicodedata
from html import unescape
from pathlib import Path

import requests
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
SNAPSHOT = ROOT / "public" / "journal-publications.json"
PREPRINTS = ROOT / "public" / "preprints.json"
ORCID = "0000-0002-8472-6137"
SCHOLAR_ID = "L7n2XRAAAAAJ"
CROSSREF = "https://api.crossref.org/works"
# Confirmed in the Scholar profile and by the publishers, including papers
# whose Crossref author records omit the author's ORCID.
VERIFIED_DOIS = {"10.1038/s44328-025-00053-y", "10.34133/ultrafastscience.0112", "10.1007/s44291-025-00093-8"}
session = requests.Session()
session.headers["User-Agent"] = "CLI-Lab-Bibliography/1.0 (https://github.com/layallan/cli)"


def get(url, **params):
    response = session.get(url, params=params, timeout=35)
    response.raise_for_status()
    return response


def clean(text):
    return " ".join(re.sub(r"<[^>]*>", "", unescape(text)).split())


def normalized(title):
    return "".join(c for c in unicodedata.normalize("NFKC", clean(title)).casefold() if c.isalnum())


def is_hao(author):
    return author.get("family", "").casefold() == "zhang" and author.get("given", "").casefold().strip(". ") in {"hao", "h"}


def identified_author(work):
    # Some deposits incorrectly attach this ORCID to another coauthor.
    return any(is_hao(a) and a.get("ORCID", "").endswith("/" + ORCID) for a in work.get("author", []))


def record(work):
    if work.get("type") != "journal-article" or not work.get("container-title") or not work.get("title"):
        return None
    if not any(is_hao(a) for a in work.get("author", [])):
        return None
    date = (work.get("published-print") or work.get("published") or work.get("published-online"))["date-parts"][0]
    venue = clean(work["container-title"][0])
    if work.get("volume"):
        venue += " " + work["volume"]
        if work.get("issue"):
            issue = work["issue"]
            venue += "(" + (str(int(issue)) if issue.isdigit() else issue) + ")"
    location = work.get("article-number") or work.get("page")
    spie_article = re.fullmatch(r"10\.1117/1\.apn?\.\d+\.\d+\.(\d{6})", work["DOI"], re.I)
    if spie_article:
        location = spie_article.group(1)
    if location:
        venue += ", " + location
    return {"doi": work["DOI"].lower(), "title": clean(work["title"][0]), "venue": venue, "year": str(date[0])}


def scholar_titles():
    titles = set()
    preprints = {}
    start = 0
    while True:
        page = BeautifulSoup(get("https://scholar.google.ca/citations", user=SCHOLAR_ID,
                                 hl="en", cstart=start, pagesize=100).content, "html.parser")
        rows = page.select("#gsc_a_b .gsc_a_tr")
        if not rows or not rows[0].select_one(".gsc_a_at"):
            raise RuntimeError("Scholar did not return a new page of works")
        page_ids = tuple(r.select_one(".gsc_a_at")["href"] for r in rows)
        if start and page_ids == previous_page:
            raise RuntimeError("Scholar repeated a page of works")
        previous_page = page_ids
        for row in rows:
            fields = row.select(".gs_gray")
            venue = fields[-1].get_text(" ", strip=True) if fields else ""
            arxiv = re.search(r"arxiv:\s*(\d{4}\.\d{4,5})", venue, re.I)
            if arxiv:
                identifier = arxiv.group(1)
                doi = "10.48550/arxiv." + identifier
                preprints[doi] = {
                    "doi": doi, "title": row.select_one(".gsc_a_at").get_text(" ", strip=True),
                    "venue": "arXiv:" + identifier, "year": "20" + identifier[:2],
                }
                continue
            if not venue or re.search(r"arxiv|conference|congress|patent|symposium|summit|\bproc\.|\bCLEO\b|photonic computing: from materials", venue, re.I):
                continue
            if re.search(r"\b[IVX]{2,}\b|\b[A-Za-z]{1,4}\d[A-Z]\d?[A-Z]?\.\s*\d", venue):
                continue
            titles.add(row.select_one(".gsc_a_at").get_text(" ", strip=True))
        more = page.select_one("#gsc_bpf_more")
        if len(rows) < 100 or (more and more.has_attr("disabled")):
            return titles, preprints
        start += len(rows)


def refresh():
    old = json.loads(SNAPSHOT.read_text(encoding="utf-8")) if SNAPSHOT.exists() else []
    records = {p["doi"]: p for p in old}

    def add(work):
        entry = record(work)
        if entry:
            records[entry["doi"]] = entry

    start = 0
    while True:
        page = get(CROSSREF, filter=f"orcid:{ORCID},type:journal-article", rows=100, offset=start).json()["message"]
        for work in page["items"]:
            if identified_author(work):
                add(work)
        start += len(page["items"])
        if start >= page["total-results"]:
            break
        if not page["items"]:
            raise RuntimeError("Incomplete Crossref response")

    profile = get(f"https://pub.orcid.org/v3.0/{ORCID}/works")
    groups = profile.json()["group"]
    confirmed = set(VERIFIED_DOIS)
    for group in groups:
        for summary in group["work-summary"]:
            if summary["type"] == "journal-article":
                confirmed.update(x["external-id-value"].lower() for x in summary["external-ids"]["external-id"]
                                 if x["external-id-type"] == "doi" and x["external-id-relationship"] == "self")
    for doi in sorted(confirmed):
        add(get(f"{CROSSREF}/{doi}").json()["message"])

    try:
        titles, discovered = scholar_titles()
    except (requests.RequestException, RuntimeError) as exc:
        print(f"Scholar unavailable ({exc}). Using verified ORCID and publisher records.")
    else:
        existing = {p["doi"]: p for p in json.loads(PREPRINTS.read_text(encoding="utf-8"))}
        # Keep curated repository titles, journal links and acceptance notes.
        save_snapshot(PREPRINTS, {**discovered, **existing}.values())
        known = {normalized(p["title"]) for p in records.values()}
        for title in sorted(titles):
            key = normalized(title)
            if key in known:
                continue
            try:
                response = get(CROSSREF, **{"query.bibliographic": title, "filter": "type:journal-article", "rows": 3})
            except requests.HTTPError as exc:
                if exc.response.status_code != 429:
                    raise
                print("Crossref title search is rate-limited. Remaining titles will be retried next run.")
                break
            candidates = response.json()["message"]["items"]
            for work in candidates:
                if work.get("title") and normalized(work["title"][0]) == key and record(work):
                    add(work)
                    known.add(key)
                    break
        print(f"Read {len(titles)} candidate titles from Scholar.")

    if not records:
        raise RuntimeError("No verified journal records. The existing snapshot was preserved.")
    save_snapshot(SNAPSHOT, records.values())
    print(f"Saved {len(records)} journal articles.")


def save_snapshot(path, records):
    ordered = sorted(records, key=lambda p: (-int(p["year"]), p["title"].casefold(), p["doi"]))
    temp = path.with_suffix(".tmp")
    temp.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temp.replace(path)


if __name__ == "__main__":
    session.headers["Accept"] = "application/json"
    refresh()
