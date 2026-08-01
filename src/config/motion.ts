/**
 * Framer Motion Configuration
 * Reusable animation presets and variants
 */

import type { Transition, Variants } from "framer-motion";
import { DURATIONS } from "@/constants/timings";

/**
 * Easing Functions
 */
export const EASING = {
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: { damping: 20, stiffness: 300 },
} as const;

/**
 * Transition Presets
 */
export const TRANSITIONS = {
  fast: {
    duration: DURATIONS.fast,
    ease: EASING.easeInOut,
  },
  normal: {
    duration: DURATIONS.normal,
    ease: EASING.easeOutExpo,
  },
  slow: {
    duration: DURATIONS.slow,
    ease: EASING.easeOutExpo,
  },
  spring: {
    type: "spring" as const,
    ...EASING.spring,
  },
} satisfies Record<string, Transition>;

/**
 * Common Animation Variants
 */
export const VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
} satisfies Record<string, Variants>;
