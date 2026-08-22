"use client";

import { useState, useEffect } from "react";
import { HeroBackground } from "./HeroBackground";
import { HeroTruth } from "./HeroTruth";
import { HeroProduct } from "./HeroProduct";
import { HeroIdentity } from "./HeroIdentity";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

export type HeroPhase = "light" | "texture" | "truth" | "reveal" | "identity";

/**
 * Hero — Scène 1: L'entrée immersive
 * La lumière dorée révèle NOOREA
 * 
 * Timeline (optimized for speed):
 * 0-1s: light (peau + lumière)
 * 1-2s: texture (détails révélés)
 * 2-2.5s: truth (message "La lumière ne ment jamais")
 * 2.5-4s: reveal (produit entre dans le cadre)
 * 4-5s: identity (NOOREA + tagline + CTA)
 */
export function Hero() {
  const [phase, setPhase] = useState<HeroPhase>("light");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("texture"), 1000),
      setTimeout(() => setPhase("truth"), 2000),
      setTimeout(() => setPhase("reveal"), 2500),
      setTimeout(() => setPhase("identity"), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="scene1" className="relative h-screen overflow-hidden bg-[var(--color-black)]">
      <HeroBackground phase={phase} />
      <HeroTruth phase={phase} />
      <HeroProduct phase={phase} />
      <HeroIdentity phase={phase} />
      <HeroScrollIndicator phase={phase} />
    </section>
  );
}
