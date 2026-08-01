"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface GlowLayerProps {
  color?: string;
  opacity?: number;
  blur?: number;
  pulse?: boolean;
  pulseDuration?: number;
  className?: string;
}

/**
 * GlowLayer
 * 
 * Creates a soft glow overlay effect.
 * Generic lighting component for ambient illumination.
 * 
 * Features:
 * - Customizable color, opacity, blur
 * - Optional pulse animation
 * - Respects prefers-reduced-motion
 * - GPU-accelerated rendering
 * 
 * @example
 * <GlowLayer 
 *   color="rgba(212, 175, 143, 0.15)" 
 *   blur={80}
 *   pulse
 * />
 */
export function GlowLayer({
  color = "rgba(212, 175, 143, 0.15)",
  opacity = 0.15,
  blur = 80,
  pulse = false,
  pulseDuration = 2,
  className = "",
}: GlowLayerProps) {
  const shouldReduceMotion = useReducedMotion();

  const style = {
    boxShadow: `0 0 ${blur}px ${blur / 2}px ${color}`,
    opacity,
  };

  if (shouldReduceMotion || !pulse) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 ${className}`}
        style={style}
      />
    );
  }

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={style}
      animate={{
        opacity: [opacity, opacity * 1.3, opacity],
      }}
      transition={{
        duration: pulseDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
