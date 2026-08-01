"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

export interface UseScrollProgressOptions {
  target?: RefObject<HTMLElement>;
  offset?: Array<
    | "start"
    | "end"
    | "center"
    | `${number}px`
    | `${number}%`
    | `start start`
    | `start end`
    | `end start`
    | `end end`
  >;
}

export interface UseScrollProgressReturn {
  scrollYProgress: MotionValue<number>;
  scrollY: MotionValue<number>;
  progress: MotionValue<number>;
}

/**
 * useScrollProgress
 * 
 * Tracks scroll progress for a target element or viewport
 * 
 * @param options - Configuration options
 * @returns Scroll progress values
 * 
 * @example
 * const { scrollYProgress } = useScrollProgress({
 *   target: ref,
 *   offset: ["start end", "end start"]
 * });
 */
export function useScrollProgress(
  options: UseScrollProgressOptions = {}
): UseScrollProgressReturn {
  const { target, offset = ["start start", "end end"] as const } = options;

  const { scrollYProgress, scrollY } = useScroll({
    target,
    offset,
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return {
    scrollYProgress,
    scrollY,
    progress,
  };
}
