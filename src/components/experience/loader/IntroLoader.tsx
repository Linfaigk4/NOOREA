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
 * Total duration: ~1.2s (optimized for faster brand reveal)
 * 
 * Sequence:
 * 1. Black screen (0.0s)
 * 2. Logo reveal with glow (0.0s - 0.8s)
 * 3. Fade out (0.8s - 1.2s)
 * 
 * Features:
 * - Preloads hero images in background
 * - Respects prefers-reduced-motion
 * - One-time per session (handled by LoaderProvider)
 */
export function IntroLoader({ onComplete, preloadImages = [] }: IntroLoaderProps) {
  const shouldReduceMotion = useReducedMotion();
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
        setTimeout(onComplete, 200);
      }, 400);
      return;
    }

    // Fade out at 0.8s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 800);

    // Complete at 1.2s
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, preloadImages, shouldReduceMotion]);

  return (
    <FadeLayer
      show={!fadeOut}
      duration={0.4}
      backgroundColor="var(--color-black)"
      className="z-[9999]"
    >
      {/* Noise texture */}
      <NoiseOverlay opacity={0.05} />

      {/* Logo reveal */}
      <div className="absolute inset-0">
        <LogoReveal onComplete={() => {}} />
      </div>
    </FadeLayer>
  );
}
