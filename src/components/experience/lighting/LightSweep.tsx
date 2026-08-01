"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface LightSweepProps {
  color?: string;
  duration?: number;
  delay?: number;
  direction?: "horizontal" | "vertical";
  className?: string;
}

/**
 * LightSweep
 * 
 * Animated light sweep effect across element.
 * Generic lighting transition component.
 * 
 * Features:
 * - Horizontal or vertical sweep
 * - Customizable color and timing
 * - Respects prefers-reduced-motion
 * - Non-repeating animation
 * 
 * @example
 * <LightSweep 
 *   color="rgba(255, 255, 255, 0.1)" 
 *   direction="horizontal"
 *   duration={1.5}
 * />
 */
export function LightSweep({
  color = "rgba(255, 255, 255, 0.1)",
  duration = 1.2,
  delay = 0,
  direction = "horizontal",
  className = "",
}: LightSweepProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  const isHorizontal = direction === "horizontal";

  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      style={{
        background: `linear-gradient(${isHorizontal ? "90deg" : "180deg"}, transparent 0%, ${color} 50%, transparent 100%)`,
        width: isHorizontal ? "50%" : "100%",
        height: isHorizontal ? "100%" : "50%",
        top: 0,
        left: isHorizontal ? "-50%" : 0,
      }}
      initial={
        isHorizontal
          ? { left: "-50%" }
          : { top: "-50%" }
      }
      animate={
        isHorizontal
          ? { left: "100%" }
          : { top: "100%" }
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}
