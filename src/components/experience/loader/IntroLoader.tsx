"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LogoReveal } from "./LogoReveal";
import { FadeLayer, NoiseOverlay } from "@/components/experience";

export interface IntroLoaderProps {
  onComplete: () => void;
  preloadImages?: string[];
}

/**
 * IntroLoader
 * 
 * Premium intro sequence for first-time visitors.
 * Total duration: ~3.2s
 * 
 * Sequence:
 * 1. Black screen (0.0s)
 * 2. Logo reveal with glow (0.0s - 1.8s)
 * 3. Tagline appear (1.8s - 2.5s)
 * 4. Fade out (2.5s - 3.2s)
 * 
 * Features:
 * - Preloads hero images in background
 * - Respects prefers-reduced-motion
 * - One-time per session (handled by LoaderProvider)
 */
export function IntroLoader({ onComplete, preloadImages = [] }: IntroLoaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [showTagline, setShowTagline] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Preload images in background
    if (preloadImages.length > 0) {
      preloadImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }

    // Reduced motion: quick exit
    if (shouldReduceMotion) {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 300);
      }, 800);
      return;
    }

    // Normal sequence: tagline at 1.8s
    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 1800);

    // Fade out at 2.5s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete at 3.2s
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, preloadImages, shouldReduceMotion]);

  return (
    <FadeLayer
      show={!fadeOut}
      duration={0.7}
      backgroundColor="var(--color-black)"
      className="z-[9999]"
    >
      {/* Noise texture */}
      <NoiseOverlay opacity={0.05} />

      {/* Logo reveal */}
      <div className="absolute inset-0">
        <LogoReveal onComplete={() => {}} />
      </div>

      {/* Tagline */}
      {showTagline && !shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-x-0 bottom-[35%] px-6 text-center md:bottom-[30%]"
        >
          <p className="text-sm font-light tracking-widest text-[var(--color-sand)] md:text-base">
            L&apos;éclat révèle ce que le temps ne peut cacher.
          </p>
        </motion.div>
      )}
    </FadeLayer>
  );
}
