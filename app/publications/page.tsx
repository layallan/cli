import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-shell";
import publications from "../../public/journal-publications.json";
import preprints from "../../public/preprints.json";
import { PublicationList } from "./journal-list";

export const metadata: Metadata = {
  title: "Publications",
  description: "Journal articles and preprints on intelligent photonics, nonlinear optics, imaging, and advanced instruments.",
};

export default function PublicationsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          title="Publications"
          description="Selected work spanning intelligent photonics, nonlinear optics, ultrafast science, quantum interfaces, imaging, and accelerator laser systems."
        />
        <section className="section shell publication-section">
          <PublicationList journals={publications} preprints={preprints} />
          <p className="publication-note">
            <a href="https://scholar.google.ca/citations?view_op=list_works&hl=zh-CN&user=L7n2XRAAAAAJ">Full profile on Google Scholar ↗</a>
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
