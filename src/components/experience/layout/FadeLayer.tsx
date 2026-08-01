"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export interface FadeLayerProps {
  children: ReactNode;
  show: boolean;
  duration?: number;
  backgroundColor?: string;
  className?: string;
}

/**
 * FadeLayer
 * 
 * Controlled fade overlay for transitions.
 * Generic layer component for cross-fades and transitions.
 * 
 * Features:
 * - Controlled visibility
 * - Customizable duration and color
 * - Respects prefers-reduced-motion
 * - Pointer events handled automatically
 * 
 * @example
 * <FadeLayer show={isTransitioning} backgroundColor="black">
 *   Loading...
 * </FadeLayer>
 */
export function FadeLayer({
  children,
  show,
  duration = 0.4,
  backgroundColor = "transparent",
  className = "",
}: FadeLayerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
      }}
      style={{
        backgroundColor,
        pointerEvents: show ? "auto" : "none",
      }}
      className={`fixed inset-0 z-40 ${className}`}
    >
      {children}
    </motion.div>
  );
}
