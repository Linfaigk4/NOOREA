"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface GradientMeshProps {
  colors?: string[];
  animate?: boolean;
  duration?: number;
  opacity?: number;
  className?: string;
}

/**
 * GradientMesh
 * 
 * Animated gradient mesh background.
 * Generic decorative background element.
 * 
 * Features:
 * - Multiple color stops
 * - Optional animation
 * - Respects prefers-reduced-motion
 * - Blur effect for soft appearance
 * 
 * @example
 * <GradientMesh 
 *   colors={["#d4af8f", "#c0a080", "#f5f3f0"]}
 *   animate
 *   opacity={0.2}
 * />
 */
export function GradientMesh({
  colors = ["#d4af8f", "#c0a080", "#f5f3f0"],
  animate = false,
  duration = 10,
  opacity = 0.15,
  className = "",
}: GradientMeshProps) {
  const shouldReduceMotion = useReducedMotion();

  const gradientStyle = {
    background: `radial-gradient(at 0% 0%, ${colors[0]} 0%, transparent 50%),
                 radial-gradient(at 100% 0%, ${colors[1]} 0%, transparent 50%),
                 radial-gradient(at 100% 100%, ${colors[2]} 0%, transparent 50%)`,
    opacity,
    filter: "blur(60px)",
  };

  if (shouldReduceMotion || !animate) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 ${className}`}
        style={gradientStyle}
      />
    );
  }

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={gradientStyle}
      animate={{
        opacity: [opacity, opacity * 1.2, opacity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
