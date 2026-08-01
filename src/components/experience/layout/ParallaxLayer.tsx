"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

export interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * ParallaxLayer
 * 
 * Scroll-based parallax effect for layered content.
 * Generic parallax wrapper for any content.
 * 
 * Features:
 * - Customizable parallax speed
 * - Respects prefers-reduced-motion
 * - Smooth scroll performance
 * 
 * @example
 * <ParallaxLayer speed={0.5}>
 *   <img src="..." alt="..." />
 * </ParallaxLayer>
 */
export function ParallaxLayer({
  children,
  speed = 0.5,
  className = "",
}: ParallaxLayerProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-100 * speed, 100 * speed]
  );

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
