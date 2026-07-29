/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-shell";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the researchers building the Center of Light Intelligence Research Lab.",
};

export default function TeamPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="People"
          title="One team, fluent in many scientific languages."
          description="CLI brings together photonics, machine learning, physics, advanced instruments, and the application domains where they can create new knowledge."
        />
        <section className="section shell">
          <article className="lead-profile">
            <div className="portrait-wrap">
              <img
                src={`${basePath}/images/team/hao-zhang.jpeg`}
                alt="Portrait of Hao Zhang"
              />
            </div>
            <div className="profile-copy">
              <p className="eyebrow">Group Lead</p>
              <h2>Hao Zhang</h2>
              <p className="profile-role">
                Photonics researcher working at the intersection of
                intelligent light, nonlinear optics, machine learning, and
                advanced scientific instruments.
              </p>
              <p>
                Hao leads the LCLS laser subgroup and develops new ways to
                shape, measure, model, and control light across nonlinear
                optics, ultrafast science, and accelerator applications.
              </p>
              <div className="profile-links">
                <a
                  href="https://profiles.stanford.edu/331519"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stanford profile ↗
                </a>
                <a
                  href="https://scholar.google.com/citations?user=L7n2XRAAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Scholar ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/zhanghao27/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </article>
        </section>
        <section className="section team-directory-section">
          <div className="shell team-directory">
            <section className="team-group">
              <div className="team-group-heading">
                <p className="eyebrow">Researchers</p>
                <h2>Postdoctoral Researchers</h2>
              </div>
              <div className="team-group-empty">
                <span>01</span>
                <p>Member profiles will be added here.</p>
              </div>
            </section>
            <section className="team-group">
              <div className="team-group-heading">
                <p className="eyebrow">Researchers</p>
                <h2>Graduate Students</h2>
              </div>
              <div className="team-group-empty">
                <span>02</span>
                <p>Member profiles will be added here.</p>
              </div>
            </section>
            <section className="team-group">
              <div className="team-group-heading">
                <p className="eyebrow">Community</p>
                <h2>Alumni</h2>
              </div>
              <div className="team-group-empty">
                <span>03</span>
                <p>The CLI alumni directory will grow with the center.</p>
              </div>
            </section>
          </div>
        </section>
        <section className="section soft-section" id="join">
          <div className="shell join-grid">
            <div>
              <p className="eyebrow">Join CLI</p>
              <h2>Come build the field with us.</h2>
            </div>
            <div>
              <p className="large-copy">
                We are interested in people who enjoy crossing disciplinary
                boundaries and testing ideas in real experiments.
              </p>
              <div className="join-roles">
                <span>Graduate researchers</span>
                <span>Postdoctoral scholars</span>
                <span>Visiting researchers</span>
                <span>Collaborators</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
