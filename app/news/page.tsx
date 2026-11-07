/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "../components/page-hero";
import { SiteShell } from "../components/site-shell";
import "./news.css";

export const metadata: Metadata = { title: "News" };

const imageRoot = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/news`;
const marks = {
  cleo: ["cleo.png", "CLEO"],
  piers: ["piers.png", "PIERS"],
  fel: ["fel.png", "FEL 2026"],
  ap: ["ap.png", "Advanced Photonics"],
  apn: ["apn.png", "Advanced Photonics Nexus"],
  optics: ["optics.svg", "optics.org"],
  spie: ["spie.svg", "SPIE"],
  light: ["light.svg", "Light: Science & Applications"],
  optica: ["optica.svg", "Optica"],
  fio: ["fio.png", "Frontiers in Optics + Laser Science"],
  linac: ["linac.png", "LINAC 2026"],
  ucla: ["ucla.svg", "UCLA"],
  ieee: ["ieee.png", "IEEE Photonics Society"],
  vesiculab: ["vesiculab.png", "Vesiculab"],
  hpl: ["hpl.png", "High Power Laser Science and Engineering cover"],
  brighter: ["brighter.png", "The Brighter Side of News"],
  west: ["", "West LA Times"],
} as const;

type NewsEntry = {
  date?: string;
  label?: string;
  marks: (keyof typeof marks)[];
  story: ReactNode;
  links?: [string, string][];
};

const entries: NewsEntry[] = [
  {
    date: "2026", marks: ["cleo"],
    story: <>Hao Zhang will chair the CLEO 2027 A&amp;T Topical Review on <strong>AI for Programmable and Agentic Photonic Systems: From Light Generation and Measurement to Autonomous Operation</strong>.</>,
  },
  {
    date: "2026", marks: ["piers"],
    story: "Hao Zhang has been invited to speak at the 49th Photonics and Electromagnetics Research Symposium (PIERS) in Daejeon.",
  },
  {
    date: "2026", marks: ["ucla", "optics", "brighter", "west"],
    story: "Four news outlets covered DeepTimeGate, our collaboration with the University of Rochester combining an ultrafast optical gate with machine learning to reconstruct images through scattering media.",
    links: [
      ["UCLA Newsroom", "https://newsroom.ucla.edu/releases/biomedical-imaging-autonomous-vehicle-sensors-get-AI-boost"],
      ["The Brighter Side of News", "https://www.thebrighterside.news/post/new-optical-shutter-uses-light-and-ai-to-see-through-dense-fog-and-tissue/"],
      ["optics.org", "https://optics.org/news/improved-imaging-through-complex-media-offers-new-views-of-tissues"],
      ["West LA Times", "https://westlatimes.com/ucla-and-university-of-rochester-develop-improved-imaging-system-for-complex-media"],
    ],
  },
  {
    date: "2026-08", marks: ["fel"],
    story: <>FEL 2026 invited Hao Zhang to present <em>Upstream Photocathode Laser Tailoring for Optimized Longitudinal Phase Space in High-Brightness FELs</em>.</>,
  },
  {
    date: "2026-08", marks: ["apn"],
    story: <><em>Advanced Photonics Nexus</em> accepted our paper on tunable, phase-coherent four-wave mixing for quantum wavelength interconnects.</>,
    links: [["Read the paper", "https://www.spiedigitallibrary.org/journals/advanced-photonics-nexus/volume-5/issue-6/066002/Tunable-phase-coherent-FWM-for-quantum-wavelength-interconnects/10.1117/1.APN.5.6.066002.short"]],
  },
  {
    date: "2026-08", marks: ["ap"],
    story: <><em>Advanced Photonics</em> accepted our paper on spatiotemporal control of structured light for high-field laser–matter interactions.</>,
    links: [["Read the paper", "https://www.spiedigitallibrary.org/journals/advanced-photonics/volume-8/issue-4/044003/Structured-light-at-the-extreme--harnessing-spatiotemporal-control-for/10.1117/1.AP.8.4.044003.short"]],
  },
  {
    date: "2026-08", marks: ["spie"],
    story: <>SPIE featured our work on quantum wavelength conversion in <em>A Translator for Quantum Light</em>.</>,
    links: [["SPIE News", "https://spie.org/news/a-translator-for-quantum-light"]],
  },
  {
    date: "2026-05", marks: ["optics"],
    story: <>optics.org reported on our <em>Advanced Photonics</em> study using deep learning to model how ultrafast pulses mix in materials with a second-order (χ²) optical response.</>,
    links: [["optics.org", "https://optics.org/news/stanford-and-slac-lab-advance-simulation-of-nonlinear-optical-physics"]],
  },
  {
    date: "2026", marks: ["light"],
    story: <><em>Light: Science &amp; Applications</em> published our paper on reconstructing vignetting-free upconversion images through scattering in epsilon-near-zero materials.</>,
  },
  {
    date: "2026", marks: ["optica"],
    story: <>Our Optica Advanced Photonics Congress program includes two talks and one poster. Hao Zhang’s invited talk is <em>Optical Shaping Meets Machine Learning</em>.</>,
  },
  {
    date: "2026", marks: ["fio"],
    story: "Our group’s contributions to Frontiers in Optics + Laser Science include three posters.",
  },
  {
    date: "2026", marks: ["linac"],
    story: "Our contributions to the 33rd Linear Accelerator Conference include an oral presentation and a poster.",
  },
  {
    date: "2026", marks: ["cleo"],
    story: "Our CLEO program includes two talks and one poster.",
  },
  {
    date: "2025-10", marks: ["vesiculab"],
    story: "Vesiculab highlighted our work using nanoaperture optical tweezers and deep learning to distinguish extracellular vesicles from cancerous and noncancerous cells.",
    links: [["Vesiculab on LinkedIn", "https://lnkd.in/p/gRysR7EH"]],
  },
  {
    date: "2025", marks: ["fio"],
    story: "Hao Zhang received the FiO+LS Technical Group Poster Competition Award.",
  },
  {
    date: "2025-07", marks: ["ieee"],
    story: "The IEEE Photonics Society awarded Hao Zhang a 2025 Graduate Scholarship.",
    links: [["UCLA ECE newsletter", "https://www.ee.ucla.edu/ece-newsletter-jul-8/"]],
  },
  {
    date: "2025-06", marks: ["spie"],
    story: "SPIE awarded Hao Zhang its 2025 Optics and Photonics Scholarship.",
    links: [["UCLA ECE newsletter", "https://www.ee.ucla.edu/ece-newsletter-jun-2/"]],
  },
  {
    date: "2025-05", marks: ["cleo"],
    story: "Hao Zhang earned third place in the Best Student Poster Awards presented by the American Physical Society’s Division of Laser Science at CLEO 2025.",
    links: [["UCLA ECE newsletter", "https://www.ee.ucla.edu/ece-newsletter-may-19/"]],
  },
  {
    date: "2024-12", marks: ["hpl"],
    story: <>The LCLS-II photoinjector appeared on the cover of <em>High Power Laser Science and Engineering</em>, featuring our paper on its laser infrastructure.</>,
    links: [["UCLA ECE newsletter", "https://www.ee.ucla.edu/ece-newsletter-dec-16/"]],
  },
  {
    date: "2024-12", marks: ["optica"],
    story: <>Hao Zhang won the student paper competition at the 2024 Advanced Solid State Lasers Conference for <em>Simultaneous Upconversion and Spectral Phase Control in Gas-Filled Fibers</em>.</>,
    links: [["UCLA ECE newsletter", "https://www.ee.ucla.edu/ece-newsletter-dec-16/"]],
  },
  {
    label: "Invention", marks: ["ucla"],
    story: "UCLA lists Sergio Carbajo and Hao Zhang as inventors of a method that converts the frequency of light while shaping its spectrum and temporal profile (UCLA case 2024-254).",
    links: [["UCLA technology disclosure", "https://ucla.technologypublisher.com/technology/56154"]],
  },
];

export default function NewsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero title="News" />
        <div className="section shell">
          <ul className="lab-news-list">
            {entries.map(({ date, label, marks: logos, story, links }, index) => (
              <li key={index}>
                {date ? <time dateTime={date}>{date.replace("-", ".")}</time> : <span className="news-label">{label}</span>}
                <div className="news-story">
                  <p>{story}</p>
                  {links && <div className="news-links">{links.map(([name, href]) => <a key={href} href={href}>{name}</a>)}</div>}
                </div>
                <div className={logos.length > 1 ? "news-marks news-marks-group" : "news-marks"}>
                  {logos.map(key => key === "west" ? (
                    <span className="news-wordmark" key={key}>{marks[key][1]}</span>
                  ) : (
                    <img key={key} className={`mark-${key}`} src={`${imageRoot}/${marks[key][0]}`} alt={marks[key][1]} loading="lazy" />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </SiteShell>
  );
}
