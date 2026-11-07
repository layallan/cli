import "./news.css";
import { PageHero } from "../components/page-hero";
import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero title="News" />
        <div className="section shell">
        <ul className="lab-news-list">
          <li>
            <time dateTime="2026">2026</time>
            <span>Hao Zhang will chair the CLEO 2027 A&amp;T Topical Review on <strong>AI for Programmable and Agentic Photonic Systems: From Light Generation and Measurement to Autonomous Operation</strong>.</span>
          </li>
          <li>
            <time dateTime="2026">2026</time>
            <span>Hao Zhang has been invited to give a talk at the 49th Photonics and Electromagnetics Research Symposium (PIERS).</span>
          </li>
          <li>
            <time dateTime="2026-08">2026.08</time>
            <span>Hao Zhang will give an invited contribution talk, <em>“Upstream Photocathode Laser Tailoring for Optimized Longitudinal Phase Space in High-Brightness FELs,”</em> at FEL 2026.</span>
          </li>
          <li>
            <time dateTime="2026-08">2026.08</time>
            <span>Our paper, <a href="https://www.spiedigitallibrary.org/journals/advanced-photonics-nexus/volume-5/issue-6/066002/Tunable-phase-coherent-FWM-for-quantum-wavelength-interconnects/10.1117/1.APN.5.6.066002.short" target="_blank" rel="noopener"><em>“Tunable Phase-Coherent FWM for Quantum Wavelength Interconnects,”</em></a> has been accepted by <em>Advanced Photonics Nexus</em>.</span>
          </li>
          <li>
            <time dateTime="2026-08">2026.08</time>
            <span>Our paper, <a href="https://www.spiedigitallibrary.org/journals/advanced-photonics/volume-8/issue-4/044003/Structured-light-at-the-extreme--harnessing-spatiotemporal-control-for/10.1117/1.AP.8.4.044003.short" target="_blank" rel="noopener"><em>“Structured Light at the Extreme: Harnessing Spatiotemporal Control for High-Field Laser-Matter Interactions,”</em></a> has been accepted by <em>Advanced Photonics</em>.</span>
          </li>
          <li>
            <time dateTime="2026-08">2026.08</time>
            <span>Our quantum wavelength interconnects research has been featured by SPIE in <a href="https://spie.org/news/a-translator-for-quantum-light" target="_blank" rel="noopener"><em>“A Translator for Quantum Light.”</em></a></span>
          </li>
          <li>
            <time dateTime="2026">2026</time>
            <span>Our work on deep learning-assisted modeling for chi(2) nonlinear optics has been published in <em>Advanced Photonics</em>.</span>
          </li>
          <li>
            <time dateTime="2026">2026</time>
            <span>Our paper on vignetting-free upconversion imaging through scattering in ENZ materials has been published in <em>Light: Science &amp; Applications</em>.</span>
          </li>
          <li>
            <time dateTime="2026">2026</time>
            <span>Hao Zhang will give an invited talk, <em>“Optical Shaping Meets Machine Learning,”</em> at OPTICA Advanced Photonics Congress.</span>
          </li>
          <li>
            <time dateTime="2026">2026</time>
            <span>Our group will present three contributions at OPTICA Advanced Photonics Congress: two talks, including one invited talk, and one poster.</span>
          </li>
          <li>
            <time dateTime="2026">2026</time>
            <span>Our group will present three posters at Frontiers in Optics + Laser Science (FiO+LS).</span>
          </li>
          <li>
            <time dateTime="2026">2026</time>
            <span>Our group will present two contributions at the 33rd Linear Accelerator Conference (LINAC): one oral presentation and one poster.</span>
          </li>
          <li>
            <time dateTime="2026">2026</time>
            <span>Our group will present three contributions at the Conference on Lasers and Electro-Optics (CLEO): two talks and one poster.</span>
          </li>
          <li>
            <time dateTime="2025">2025</time>
            <span>Hao Zhang received the FiO+LS Technical Group Poster Competition Award, the IEEE Photonics Society Graduate Student Scholarship, and the SPIE Optics and Photonics Scholarship.</span>
          </li>
        </ul>
        </div>
      </main>
    </SiteShell>
  );
}
