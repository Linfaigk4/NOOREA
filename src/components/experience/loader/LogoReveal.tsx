"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlowLayer, LightSweep } from "@/components/experience";
import { RGBA_COLORS } from "@/constants/colors";

export interface LogoRevealProps {
  onComplete?: () => void;
}

/**
 * LogoReveal
 * 
 * Premium logo reveal animation with golden glow and light sweep.
 * Part of intro loader sequence.
 * 
 * Timeline:
 * 0.0s - 0.5s: Logo fade in
 * 0.5s - 1.2s: Glow layer appears
 * 1.0s - 1.8s: Light sweep across
 */
export function LogoReveal({ onComplete }: LogoRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    // Instant display for reduced motion
    setTimeout(() => onComplete?.(), 100);
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-light tracking-tighter text-white md:text-7xl lg:text-8xl">
            NOOREA
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10"
        >
          <h1 className="text-6xl font-light tracking-tighter text-white md:text-7xl lg:text-8xl">
            NOOREA
          </h1>
        </motion.div>

        {/* Golden Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="absolute inset-0 -z-10"
        >
          <GlowLayer
            color={RGBA_COLORS.goldGlow}
            blur={120}
            opacity={0.25}
          />
        </motion.div>

        {/* Light Sweep */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.0,
            duration: 0.3,
          }}
          onAnimationComplete={() => {
            setTimeout(() => onComplete?.(), 500);
          }}
          className="absolute inset-0 -z-20 overflow-hidden"
        >
          <LightSweep
            color="rgba(255, 255, 255, 0.15)"
            direction="horizontal"
            duration={0.8}
            delay={0}
          />
        </motion.div>
      </div>
    </div>
  );
}
