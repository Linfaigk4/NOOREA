/**
 * Animation Utilities
 * Helper functions for animation calculations
 */

import type { Transition } from "framer-motion";
import { DURATIONS, DELAYS } from "@/constants/timings";
import { EASING } from "@/config/motion";

/**
 * Creates a staggered transition
 */
export function createStagger(
  index: number,
  staggerDelay: number = 0.1,
  baseDuration: number = DURATIONS.normal
): Transition {
  return {
    duration: baseDuration,
    delay: index * staggerDelay,
    ease: EASING.easeOutExpo,
  };
}

/**
 * Creates a delayed transition
 */
export function createDelayed(
  delay: number = DELAYS.medium,
  duration: number = DURATIONS.normal
): Transition {
  return {
    duration,
    delay,
    ease: EASING.easeOutExpo,
  };
}

/**
 * Calculates parallax offset
 */
export function calculateParallax(
  scrollProgress: number,
  strength: number = 0.5
): number {
  return scrollProgress * strength * 100;
}

/**
 * Clamps a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}
