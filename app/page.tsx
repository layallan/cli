/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ResearchSupport } from "./components/research-support";
import { CoverMotion } from "./components/cover-motion";
import { SiteShell } from "./components/site-shell";
import { frontiers } from "./data";
import "./home.css";

const images = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images`;

const highlights = [
  {
    title: "Shaping relativistic electron beams at the source",
    image: "upstream.jpg",
    source: "Nature Communications · Pre-accepted",
    href: "https://arxiv.org/abs/2601.03580",
  },
  {
    title: "Classifying extracellular vesicles with optical tweezers",
    image: "vesicle-biosensing.png",
    source: "npj Biosensing (2025)",
    href: "https://doi.org/10.1038/s44328-025-00053-y",
  },
  {
    title: "DeepTimeGate: reconstructing images through scattering media",
    image: "deeptime-gate.png",
    source: "Light: Science & Applications (2026)",
    href: "https://doi.org/10.1038/s41377-026-02375-6",
  },
  {
    title: "Inverse design of optical waveforms",
    image: "inverse-shaping.png",
    source: "Light: Advanced Manufacturing · Pre-accepted",
    href: "https://arxiv.org/abs/2603.12503",
  },
  {
    title: "Shaping light to control charged particles",
    image: "charged-particles.png",
    source: "Optical Materials Express (2026)",
    href: "https://doi.org/10.1364/OME.584710",
  },
  {
    title: "Converting wavelengths for quantum interconnects",
    image: "quantum-transduction.png",
    source: "Advanced Photonics Nexus (2026)",
    href: "https://doi.org/10.1117/1.APN.5.6.066002",
  },
  {
    title: "Structured light for high-field laser–matter interactions",
    image: "structured-light.png",
    source: "Advanced Photonics (2026)",
    href: "https://doi.org/10.1117/1.AP.8.4.044003",
  },
  {
    title: "Programming hard X-ray spectral combs with laser–Compton scattering",
    image: "compton-scattering.png",
    source: "arXiv preprint (2026)",
    href: "https://arxiv.org/abs/2610.17166",
  },
  {
    title: "Predicting the spatial mode distribution of light",
    image: "spatial-modes.png",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <main className="lab-home">
        <CoverMotion imageRoot={images} />

        <section className="lab-intro shell" id="about">
          <div>
            <h2>Welcome to the Center of Light Intelligence Research Lab</h2>
            <p>We develop Light Intelligence for scientific discovery and new applications in biosensing, quantum technology, and energy. We combine programmable light, physical models, and machine learning to design experiments around the questions we want to answer.</p>
            <Link href="/team">Meet the team →</Link>
          </div>
        </section>

        <section className="lab-directions shell" id="research-directions">
          <h2>Research directions</h2>
          <div className="lab-direction-list">
            {frontiers.map(item => (
              <article key={item.slug}>
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
                <div>
                  <h3><Link href={`/research#${item.slug}`}>{item.title}</Link></h3>
                  <p>{item.short}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="lab-highlights shell" id="research-highlights">
          <div className="lab-section-heading">
            <h2>Research Highlights</h2>
            <Link href="/publications">All publications →</Link>
          </div>
          <div className="lab-papers">
            {highlights.map(paper => (
              <article key={paper.image}>
                <a className="lab-toc" href={`${images}/highlights/${paper.image}`} aria-label={`View full figure: ${paper.title}`}>
                  <img src={`${images}/highlights/${paper.image}`} alt={`Graphical abstract: ${paper.title}`} loading="lazy" />
                </a>
                <h3>{paper.title}</h3>
                {paper.href && <a href={paper.href}>{paper.source} ↗</a>}
              </article>
            ))}
          </div>
        </section>

        <section className="lab-more shell" id="opportunities">
          <div>
            <h2>Education &amp; opportunities</h2>
            <p>We prepare the next generation of scientists, engineers, and entrepreneurs for careers in academia, industry, and business. We welcome applicants from all backgrounds and especially encourage first-generation college students and members of groups underrepresented in science and engineering to apply.</p>
            <p>Our projects span photonics, machine learning, and scientific instrumentation, with collaborators around the world. Tell us what you would like to investigate. We would be happy to discuss a project that fits your interests.</p>
            <Link href="/team#join">Opportunities at CLI →</Link>
          </div>
          <img src={`${images}/home/teamwork.jpg`} width="1080" height="720" loading="lazy" alt="Four hands with different skin tones stacked together." />
        </section>
        <section className="lab-supporters shell" id="supporters">
          <h2>Research support</h2>
          <ResearchSupport />
        </section>
      </main>
    </SiteShell>
  );
}
