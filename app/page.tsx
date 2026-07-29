/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SiteShell } from "./components/site-shell";
import { frontiers } from "./data";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow">
                Center of Light Intelligence Research Lab
              </p>
              <h1>
                Teach light
                <br />
                how to think.
              </h1>
              <p className="hero-deck">
                We are shaping a new scientific paradigm in which light can
                sense, infer, adapt, and act—transforming how we understand
                matter, control complex systems, and accelerate discovery.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/research">
                  Explore our research <span aria-hidden="true">→</span>
                </Link>
                <Link className="button button-quiet" href="/team">
                  Meet the team
                </Link>
              </div>
            </div>
            <div className="hero-object" aria-hidden="true">
              <div className="beam beam-one" />
              <div className="beam beam-two" />
              <div className="aperture">
                <div className="aperture-core" />
              </div>
              <p>LIGHT · MATTER · INFERENCE · CONTROL</p>
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Application frontiers</p>
              <h2>One intelligence, four frontiers.</h2>
            </div>
            <p>
              Light Intelligence connects foundational photonics with the
              physical questions that matter most.
            </p>
          </div>
          <div className="frontier-grid">
            {frontiers.map((frontier) => (
              <Link
                className="frontier-card"
                href={`/research#${frontier.slug}`}
                key={frontier.slug}
              >
                <div className="frontier-image">
                  <img src={frontier.image} alt="" />
                </div>
                <div className="frontier-card-copy">
                  <h3>{frontier.title}</h3>
                  <p>{frontier.short}</p>
                  <span className="text-link">Discover the frontier →</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="image-credit">Concept images created with ChatGPT.</p>
        </section>

        <section className="section section-ink">
          <div className="shell education-grid">
            <div>
              <p className="eyebrow eyebrow-light">Education</p>
              <h2>Learn across boundaries. Build through inquiry.</h2>
            </div>
            <div className="education-copy">
              <p className="large-copy">
                We train scientists who can move fluently between photonics,
                physics, computation, and real experiments.
              </p>
              <p>
                Education at CLI is research-centered: students learn by
                formulating questions, building instruments and models,
                testing them against reality, and communicating what they
                discover.
              </p>
              <div className="principles">
                <span>First principles</span>
                <span>Cross-disciplinary fluency</span>
                <span>Models ↔ experiments</span>
                <span>Mentorship and open exchange</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section shell invitation">
          <p className="eyebrow">Build with us</p>
          <h2>Light becomes intelligent when disciplines meet.</h2>
          <p>
            We welcome researchers and collaborators who want to connect
            photonics, machine learning, advanced instruments, and discovery.
          </p>
          <Link className="button button-primary" href="/team#join">
            Opportunities at CLI <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
