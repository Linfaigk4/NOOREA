"use client";

import { HeroBackground } from "./HeroBackground";
import { HeroProduct } from "./HeroProduct";
import { HeroIdentity } from "./HeroIdentity";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

export type HeroPhase = "identity";

/**
 * Hero — Composition immédiate selon maquette de référence
 * 
 * Structure:
 * - Grand logo circulaire en haut à gauche
 * - Titre NOOREA imposant
 * - Accroche centrée
 * - 3 CTA alignés horizontalement
 * - Produits éclairés à droite (35-40% largeur)
 * - Ambiance noir chaud + beige + or dégradé
 */
export function Hero() {
  return (
    <section id="scene1" className="relative h-screen overflow-hidden bg-gradient-to-br from-[#1a0f0a] via-[#1a1a1a] to-[#2b2b2b]">
      <HeroBackground phase="identity" />
      <HeroProduct phase="identity" />
      <HeroIdentity phase="identity" />
      <HeroScrollIndicator phase="identity" />
    </section>
  );
}
