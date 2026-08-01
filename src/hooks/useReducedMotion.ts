"use client";

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * useReducedMotion
 * 
 * Detects user's motion preference
 * Wrapper around Framer Motion's hook with consistent naming
 * 
 * @returns boolean - true if user prefers reduced motion
 * 
 * @example
 * const shouldReduceMotion = useReducedMotion();
 * if (shouldReduceMotion) return null;
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
