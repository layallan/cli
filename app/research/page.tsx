/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-shell";
import { frontiers } from "../data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research in Light Intelligence, biosensing, energy and climate, quantum interconnects, autonomous instruments, and accelerator-based X-ray sources.",
};

export default function ResearchPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          title="Research"
          description="We develop Light Intelligence for scientific discovery and new applications. Our research ranges from probing cells and tracking energy in molecules to connecting quantum devices, automating experiments, and shaping electron beams for X-ray sources."
        />
        <section className="section shell research-list">
          {frontiers.map((frontier) => (
            <article
              className="research-item"
              id={frontier.slug}
              key={frontier.slug}
            >
              <div className="research-image">
                <img src={frontier.image} alt={frontier.imageAlt} />
              </div>
              <div className="research-copy">
                <h2>{frontier.title}</h2>
                <p className="large-copy">{frontier.description}</p>
                <div className="capability-list">
                  {frontier.capabilities.map((capability) => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
