"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

export interface SectionTransitionProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

/**
 * SectionTransition
 * 
 * Scroll-triggered section entrance animation.
 * Generic transition wrapper for page sections.
 * 
 * Features:
 * - Multiple entrance directions
 * - Trigger once on scroll into view
 * - Respects prefers-reduced-motion
 * - Customizable delay
 * 
 * @example
 * <SectionTransition direction="up" delay={0.2}>
 *   {sectionContent}
 * </SectionTransition>
 */
export function SectionTransition({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: SectionTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const offset = directionMap[direction];

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...offset }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
