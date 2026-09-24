"use client";

import { useEffect, useState } from "react";

/* The silent 24 second loop that sits behind the hero copy.

   Rendered from the client and only when it is wanted, rather than rendered
   always and hidden with CSS. A display:none video still gets fetched by most
   browsers, and the requirement is that a phone never pays 1.6 MB for a
   background. Not mounting the element is the only way to guarantee that.

   The still is painted as a CSS background on the section itself, so the hero
   looks the same before hydration, on a phone, and with reduced motion. */

const WIDE = "(min-width: 721px)";
const CALM = "(prefers-reduced-motion: reduce)";

export function HeroLoop() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia(WIDE);
    const calm = window.matchMedia(CALM);
    const decide = () => setPlay(wide.matches && !calm.matches);
    decide();
    wide.addEventListener("change", decide);
    calm.addEventListener("change", decide);
    return () => {
      wide.removeEventListener("change", decide);
      calm.removeEventListener("change", decide);
    };
  }, []);

  if (!play) return null;

  return (
    <video
      className="ff-hero-video"
      src="/media/factorfox-hero-loop.mp4"
      poster="/media/factorfox-hero-poster-1600.webp"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
