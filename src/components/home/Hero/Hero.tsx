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
 * Timeline:
 * 0-2s: light (peau + lumière)
 * 2-4s: texture (détails révélés)
 * 4-6s: truth (message "La lumière ne ment jamais")
 * 6-8s: reveal (produit entre dans le cadre)
 * 8-10s: identity (NOOREA + tagline + CTA)
 */
export function Hero() {
  const [phase, setPhase] = useState<HeroPhase>("light");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("texture"), 2000),
      setTimeout(() => setPhase("truth"), 4000),
      setTimeout(() => setPhase("reveal"), 6000),
      setTimeout(() => setPhase("identity"), 8000),
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
