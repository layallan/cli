/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-shell";
import { frontiers } from "../data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Four application frontiers for Light Intelligence, from quantum technology to autonomous science.",
};

export default function ResearchPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          title="Research"
          description="We develop Light Intelligence for scientific discovery and new applications. Across these four directions, we use programmable light and learning algorithms to probe biological samples, study quantum systems and materials, and guide scientific instruments."
        />
        <section className="section shell research-list">
          {frontiers.map((frontier) => (
            <article
              className="research-item"
              id={frontier.slug}
              key={frontier.slug}
            >
              <div className="research-image" id={frontier.slug === "materials" ? "quantum" : undefined}>
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
