/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";

export function CoverMotion({ imageRoot }: { imageRoot: string }) {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const cover = coverRef.current;
    if (!track || !cover) return;

    let frame = 0;
    let previousOffset = -1;
    function update() {
      frame = 0;
      if (!track || !cover) return;
      const rect = track.getBoundingClientRect();
      const range = Math.max(1, rect.height - parseFloat(getComputedStyle(cover).minHeight));
      const offset = Math.min(range, Math.max(0, -rect.top));
      if (offset === previousOffset) return;
      previousOffset = offset;
      cover.style.setProperty("--cover-offset", `${offset}px`);
      cover.style.setProperty("--cover-progress", String(offset / range));
      track.toggleAttribute("data-scrolled", offset > 24);
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    function onResize() {
      previousOffset = -1;
      onScroll();
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="cover-track" ref={trackRef}>
      <section className="lab-cover" ref={coverRef}>
        <img className="lab-cover-image" alt="" src={`${imageRoot}/highlights/upstream.jpg`} fetchPriority="high" />
        <div
          aria-hidden="true"
          className="cover-measurement"
          style={{
            backgroundImage: `url(${imageRoot}/home/xtcav-frames.webp)`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
        <div className="shell">
          <h1>Teach <em>light</em><br />how to think.</h1>
          <a className="cover-link" href="#about">About the lab <span aria-hidden="true">↓</span></a>
        </div>
        <button type="button" className="cover-playback" onClick={() => setPaused(!paused)}>
          {paused ? "Play animation" : "Pause animation"}
        </button>
      </section>
    </div>
  );
}
