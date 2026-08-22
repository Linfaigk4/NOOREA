"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CircularLogo } from "./CircularLogo";
import { GoldButton } from "@/components/ui/GoldButton";
import Link from "next/link";

interface HeroIdentityProps {
  phase: "light" | "texture" | "truth" | "reveal" | "identity";
}

/**
 * HeroIdentity — Phase 5: L'identité NOOREA
 * Responsabilité : Logo circulaire NOOREA + nouvelle tagline + CTA
 * 
 * NEW DESIGN:
 * - Logo in circular gradient composition
 * - Tagline: "Révélez la lumière qui vit en votre peau"
 * - Two CTAs: DÉCOUVRIR NOOREA, EXPLORER LA COLLECTION
 */
export function HeroIdentity({ phase }: HeroIdentityProps) {
  return (
    <AnimatePresence>
      {phase === "identity" && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 lg:px-16"
        >
          <div className="max-w-4xl text-center space-y-12">
            
            {/* Logo in Circular Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <CircularLogo size="xl" animate={false} />
            </motion.div>

            {/* Brand Name */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl font-light tracking-tighter text-white md:text-6xl lg:text-7xl"
            >
              NOOREA
            </motion.h2>

            {/* Main Tagline - NEW */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-[var(--color-sand)] leading-relaxed font-light"
            >
              {"« Révélez la lumière qui vit en votre peau."}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-[var(--color-taupe)] max-w-2xl mx-auto"
            >
              Des rituels de soin pensés pour nourrir, révéler et célébrer l&apos;éclat unique de chaque peau.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Link href="/collection">
                <GoldButton size="lg" variant="primary">
                  EXPLORER LA COLLECTION
                </GoldButton>
              </Link>
              
              <GoldButton size="lg" variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                DÉCOUVRIR NOOREA
              </GoldButton>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
