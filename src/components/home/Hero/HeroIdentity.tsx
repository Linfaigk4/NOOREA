"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CircularLogo } from "./CircularLogo";
import { createWhatsAppUrl } from "@/data/constants";
import Link from "next/link";

interface HeroIdentityProps {
  phase: "identity";
}

/**
 * HeroIdentity — Composition selon maquette de référence
 * 
 * Structure exacte:
 * - Grand logo circulaire en haut à gauche (zone 60-65%)
 * - Titre NOOREA imposant au centre-gauche
 * - Accroche sous le titre
 * - 3 CTA alignés horizontalement (remontés)
 * - Texte descriptif sous les boutons
 * - Image produits à droite (35-40%)
 * 
 * Mobile: Layout vertical avec tous les éléments empilés
 */
export function HeroIdentity({ phase }: HeroIdentityProps) {
  return (
    <div className="absolute inset-0 flex items-center">
      {/* Zone gauche — Contenu principal (60-65% desktop, 100% mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full md:w-[65%] h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 md:pt-24 pb-16 md:pb-12"
      >
        {/* Grand logo circulaire en haut à gauche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 md:mb-8 lg:mb-12 flex justify-center md:justify-start"
        >
          <CircularLogo size="hero" animate={true} />
        </motion.div>

        {/* Titre NOOREA — Très grand */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wider text-[#faf8f6] mb-4 md:mb-6 lg:mb-8 text-center md:text-left"
          style={{
            fontFamily: "var(--font-geist-sans)",
            letterSpacing: "0.05em",
          }}
        >
          NOOREA
        </motion.h1>

        {/* Accroche — Grande mais plus petite que le titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#f5f3f0] leading-relaxed font-light mb-6 md:mb-10 lg:mb-12 max-w-2xl text-center md:text-left mx-auto md:mx-0"
        >
          « Révélez la lumière qui vit en votre peau. »
        </motion.p>

        {/* Boutons — 3 CTA alignés horizontalement sur desktop, verticaux sur mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-10 items-stretch sm:items-center justify-center md:justify-start"
        >
          {/* Bouton 1 — PARLER À NOOREA (pilule dorée) */}
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 rounded-full text-[#1a1a1a] text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #C9952E 0%, #F5D77A 50%, #C9952E 100%)",
              boxShadow: "0 4px 20px rgba(212, 175, 55, 0.3)",
            }}
          >
            <MessageCircle size={18} />
            PARLER À NOOREA
          </a>

          {/* Bouton 2 — EXPLORER LA COLLECTION (rectangulaire doré) */}
          <Link href="/collection" className="w-full sm:w-auto">
            <button
              className="w-full px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base font-medium text-[#faf8f6] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-95"
              style={{
                background: "linear-gradient(135deg, #8B5A00 0%, #C9952E 50%, #F5D77A 100%)",
                boxShadow: "0 4px 20px rgba(212, 175, 55, 0.25)",
              }}
            >
              EXPLORER LA COLLECTION
            </button>
          </Link>

          {/* Bouton 3 — DÉCOUVRIR NOOREA (outline transparent) */}
          <button
            onClick={() => {
              const storySection = document.getElementById("story-section");
              if (storySection) {
                storySection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base font-medium text-[#F5D77A] border-2 transition-all duration-300 hover:bg-[rgba(212,175,55,0.15)] active:scale-95"
            style={{
              borderColor: "#C9952E",
            }}
          >
            DÉCOUVRIR NOOREA
          </button>
        </motion.div>

        {/* Texte descriptif */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-[rgba(255,255,255,0.65)] max-w-xl leading-relaxed text-center md:text-left mx-auto md:mx-0"
        >
          Des rituels de soin pensés pour nourrir, révéler et célébrer l&apos;éclat unique de chaque peau.
        </motion.p>
      </motion.div>
    </div>
  );
}
