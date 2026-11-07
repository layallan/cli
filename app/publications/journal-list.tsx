"use client";

import { useEffect, useState } from "react";

type Article = { doi: string; title: string; venue: string; year: string; publishedDoi?: string; status?: string };

function isArticle(article: Partial<Article> | null): article is Article {
  return !!article && typeof article.doi === "string" && /^10\.\d{4,9}\//.test(article.doi)
    && typeof article.title === "string" && typeof article.venue === "string"
    && typeof article.year === "string" && /^\d{4}$/.test(article.year);
}

function usePublicationFeed(initial: Article[], feed: "journal-publications" | "preprints") {
  const [articles, setArticles] = useState(initial);
  useEffect(() => {
    const controller = new AbortController();
    // The weekly data commit can reach the live static site between Pages releases.
    async function refresh() {
      const response = await fetch(`https://raw.githubusercontent.com/layallan/cli/main/public/${feed}.json`, { signal: controller.signal });
      if (!response.ok) return;
      const next = await response.json();
      if (Array.isArray(next) && next.length && next.every(isArticle)) setArticles(next);
    }
    refresh().catch(() => { /* Offline readers keep the prerendered bibliography. */ });
    return () => controller.abort();
  }, [feed]);
  return articles;
}

export function PublicationList({ journals, preprints }: { journals: Article[]; preprints: Article[] }) {
  const journalArticles = usePublicationFeed(journals, "journal-publications");
  const manuscripts = usePublicationFeed(preprints, "preprints");
  const works = new Map(journalArticles.map(article => [article.doi.toLowerCase(), { article, versions: [] as Article[] }]));
  for (const manuscript of manuscripts) {
    const journal = manuscript.publishedDoi && works.get(manuscript.publishedDoi.toLowerCase());
    if (journal) journal.versions.push(manuscript);
    else works.set(manuscript.doi.toLowerCase(), { article: manuscript, versions: [] });
  }
  const entries = [...works.values()].sort((a, b) => a.article.title.localeCompare(b.article.title, "en"));
  const years = [...new Set(entries.map(({ article }) => article.year))].sort().reverse();
  return years.map(year => (
    <section className="publication-year-group" key={year}>
      <h2 className="publication-year-heading">{year}</h2>
      <div className="publication-list">
        {entries.filter(({ article }) => article.year === year).map(({ article, versions }, index) => (
          <article className="publication-row" key={article.doi}>
            <span className="publication-number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3><a href={`https://doi.org/${article.doi}`}>{article.title}</a></h3>
              <p>
                {article.venue}{article.status && ` · ${article.status}`}
                {article.publishedDoi && <> · <a href={`https://doi.org/${article.publishedDoi}`}>Published version</a></>}
                {versions.map(version => (
                  <span key={version.doi}> · <a href={`https://doi.org/${version.doi}`}>Preprint ({version.venue})</a></span>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  ));
}
