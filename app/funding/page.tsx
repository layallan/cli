import { ResearchSupport } from "../components/research-support";
import { PageHero } from "../components/page-hero";
import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Funding",
};

export default function FundingPage() {
  return (
    <SiteShell>
      <main>
        <PageHero title="Funding" />
        <section className="section shell">
          <ResearchSupport />
        </section>
      </main>
    </SiteShell>
  );
}
