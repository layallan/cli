"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import "./slideshow.css";

const imageRoot = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images`;
const slides = [
  ["home/optical-table.webp", "At the optical table"],
  ["gallery/spie-meeting.webp", "At SPIE Optics + Photonics"],
  ["gallery/control-room-group.webp", "With colleagues in the accelerator control room"],
  ["gallery/optical-setup.webp", "Inside the optical setup"],
  ["gallery/optica-meeting.webp", "At an Optica meeting"],
  ["gallery/lecture-hall.webp", "Presenting research in the lecture hall"],
  ["gallery/meeting-colleagues.webp", "With colleagues at a research meeting"],
  ["gallery/outdoor-facility.webp", "Visiting the outdoor facility"],
  ["gallery/student-session.webp", "A student session on the conference stage"],
  ["gallery/bench-side.webp", "Working alongside the optical setup"],
  ["gallery/facility-group.webp", "Group photo during a facility visit"],
  ["gallery/journal-cover.webp", "The cover of High Power Laser Science and Engineering"],
  ["gallery/outdoor-group.webp", "Meeting colleagues outdoors"],
  ["gallery/accelerator-controls.webp", "At the accelerator controls"],
  ["gallery/between-sessions.webp", "Catching up between sessions"],
  ["gallery/conference-group.webp", "A group photo at the conference"],
  ["gallery/beamline-mascot.webp", "A small mascot on the beamline"],
  ["gallery/conference-stage.webp", "On stage at a conference session"],
  ["gallery/exhibition.webp", "At the exhibition booths"],
  ["gallery/spie-exhibition.webp", "At the SPIE exhibition"],
  ["gallery/green-light.webp", "Green light in the optics lab"],
  ["gallery/conference-snapshots.webp", "Conference snapshots"],
  ["home/xtcav-measurement.png", "Longitudinal phase space measured with XTCAV"],
] as const;

export function ResearchSlideshow() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [file, alt] = slides[index];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => setPlaying(!preference.matches);
    const checkVisibility = () => setVisible(!document.hidden);
    applyPreference();
    checkVisibility();
    preference.addEventListener("change", applyPreference);
    document.addEventListener("visibilitychange", checkVisibility);
    return () => {
      preference.removeEventListener("change", applyPreference);
      document.removeEventListener("visibilitychange", checkVisibility);
    };
  }, []);

  useEffect(() => {
    if (!playing || !visible || hovered) return;
    const timer = window.setInterval(() => setIndex(n => (n + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing, visible, hovered]);

  function step(direction: number) {
    setPlaying(false);
    setIndex(n => (n + direction + slides.length) % slides.length);
  }

  return (
    <section className="research-slides" aria-label="Research photographs" aria-roledescription="carousel"
      onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          step(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
      <figure>
        <a className="research-slide-frame" href={`${imageRoot}/${file}`}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          onFocus={() => setPlaying(false)}>
          <img key={file} src={`${imageRoot}/${file}`} alt={alt} />
        </a>
        <div className="research-slide-footer">
          <span className="slide-count" aria-live={playing ? "off" : "polite"}>{index + 1} / {slides.length}</span>
          <div className="research-slide-controls">
            <button type="button" aria-label="Previous photo" onClick={() => step(-1)}>←</button>
            <button type="button" onClick={() => setPlaying(p => !p)}>{playing ? "Pause" : "Play"}</button>
            <button type="button" aria-label="Next photo" onClick={() => step(1)}>→</button>
          </div>
        </div>
      </figure>
    </section>
  );
}
