"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export interface FloatingImageProps {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * FloatingImage
 * 
 * Creates subtle floating animation for images or elements.
 * Generic wrapper for any content that needs ambient motion.
 * 
 * Features:
 * - Subtle vertical floating effect
 * - Respects prefers-reduced-motion
 * - Customizable amplitude and speed
 * 
 * @example
 * <FloatingImage amplitude={10} duration={3}>
 *   <img src="..." alt="..." />
 * </FloatingImage>
 */
export function FloatingImage({
  children,
  amplitude = 5,
  duration = 3,
  delay = 0,
  className = "",
}: FloatingImageProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
