"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export interface AmbientBackgroundProps {
  children: ReactNode;
  baseColor?: string;
  animate?: boolean;
  className?: string;
}

/**
 * AmbientBackground
 * 
 * Ambient background with optional subtle animation.
 * Generic container for page backgrounds.
 * 
 * Features:
 * - Solid color with optional gradient
 * - Optional gentle breathing animation
 * - Respects prefers-reduced-motion
 * 
 * @example
 * <AmbientBackground baseColor="#faf8f6" animate>
 *   {children}
 * </AmbientBackground>
 */
export function AmbientBackground({
  children,
  baseColor = "#faf8f6",
  animate = false,
  className = "",
}: AmbientBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion || !animate) {
    return (
      <div
        className={className}
        style={{ backgroundColor: baseColor }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ backgroundColor: baseColor }}
      animate={{
        backgroundColor: [
          baseColor,
          `${baseColor}ee`,
          baseColor,
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
