import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-shell";
import { publications } from "../data";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Selected publications in intelligent photonics, nonlinear optics, imaging, and advanced instruments.",
};

export default function PublicationsPage() {
  const publicationsByYear = publications.reduce<
    Record<string, Array<(typeof publications)[number]>>
  >((groups, publication) => {
    (groups[publication.year] ??= []).push(publication);
    return groups;
  }, {});

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Publications"
          title="Ideas tested against the physical world."
          description="Selected work spanning intelligent photonics, nonlinear optics, ultrafast science, quantum interfaces, imaging, and accelerator laser systems."
        />
        <section className="section shell publication-section">
          {Object.entries(publicationsByYear)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, yearPublications]) => (
              <section className="publication-year-group" key={year}>
                <h2 className="publication-year-heading">{year}</h2>
                <div className="publication-list">
                  {yearPublications.map((publication, index) => (
                    <article className="publication-row" key={publication.title}>
                      <span className="publication-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{publication.title}</h3>
                        <p>{publication.venue}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          <p className="publication-note">
            For a complete and current record, visit{" "}
            <a
              href="https://scholar.google.com/citations?user=L7n2XRAAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar ↗
            </a>
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
