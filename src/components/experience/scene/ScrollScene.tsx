"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

export interface ScrollSceneProps {
  children: ReactNode;
  height?: string;
  parallaxStrength?: number;
  className?: string;
}

/**
 * ScrollScene
 * 
 * Container with scroll-based parallax effect.
 * Generic scene wrapper for scroll-driven experiences.
 * 
 * Features:
 * - Scroll-triggered parallax
 * - Customizable height
 * - Respects prefers-reduced-motion
 * - Optimized for performance
 * 
 * @example
 * <ScrollScene height="100vh" parallaxStrength={0.5}>
 *   {content}
 * </ScrollScene>
 */
export function ScrollScene({
  children,
  height = "100vh",
  parallaxStrength = 0.3,
  className = "",
}: ScrollSceneProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, parallaxStrength * 100]
  );

  if (shouldReduceMotion) {
    return (
      <div
        ref={ref}
        className={`relative overflow-hidden ${className}`}
        style={{ minHeight: height }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight: height }}
    >
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
