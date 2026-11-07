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
        <section className="section section-ink">
          <div className="shell research-method">
            <div>
              <p className="eyebrow eyebrow-light">How we work</p>
              <h2>Close the loop.</h2>
            </div>
            <div className="method-steps">
              <div>
                <span>01</span>
                <h3>Program</h3>
                <p>Shape light in space, time, frequency, and quantum state.</p>
              </div>
              <div>
                <span>02</span>
                <h3>Interrogate</h3>
                <p>Design measurements that reveal otherwise hidden states.</p>
              </div>
              <div>
                <span>03</span>
                <h3>Infer</h3>
                <p>Combine physical models with learning from data.</p>
              </div>
              <div>
                <span>04</span>
                <h3>Adapt</h3>
                <p>Use what we learn to decide and improve the next experiment.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
