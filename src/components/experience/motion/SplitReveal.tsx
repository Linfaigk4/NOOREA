"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface SplitRevealProps {
  text: string;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

/**
 * SplitReveal
 * 
 * Reveals text word-by-word with stagger animation.
 * Generic implementation for any text content.
 * 
 * Features:
 * - Word-by-word reveal
 * - Respects prefers-reduced-motion
 * - Customizable stagger timing
 * 
 * @example
 * <SplitReveal 
 *   text="Your inspiring text here" 
 *   staggerDelay={0.1}
 * />
 */
export function SplitReveal({
  text,
  delay = 0,
  staggerDelay = 0.08,
  className = "",
}: SplitRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <div className={className}>{text}</div>;
  }

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
