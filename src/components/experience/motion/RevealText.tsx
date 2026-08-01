"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * RevealText
 * 
 * Generic text reveal animation component.
 * Reveals text with fade-in and slide-up effect.
 * 
 * Features:
 * - Respects prefers-reduced-motion
 * - Customizable delay and duration
 * - TypeScript strict mode compatible
 * 
 * @example
 * <RevealText delay={0.2} duration={0.8}>
 *   Your text content
 * </RevealText>
 */
export function RevealText({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
