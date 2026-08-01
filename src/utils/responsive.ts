/**
 * Responsive Utilities
 * Helper functions for responsive design
 */

import { BREAKPOINTS } from "@/constants/breakpoints";
import type { Breakpoint } from "@/types";

/**
 * Checks if width matches breakpoint
 */
export function matchesBreakpoint(
  width: number,
  breakpoint: Breakpoint
): boolean {
  return width >= BREAKPOINTS[breakpoint];
}

/**
 * Gets current breakpoint from width
 */
export function getCurrentBreakpoint(width: number): Breakpoint {
  if (width >= BREAKPOINTS.wide) return "wide";
  if (width >= BREAKPOINTS.desktop) return "desktop";
  if (width >= BREAKPOINTS.tablet) return "tablet";
  return "mobile";
}

/**
 * Responsive value selector
 */
export function getResponsiveValue<T>(
  breakpoint: Breakpoint,
  values: Partial<Record<Breakpoint, T>>,
  fallback: T
): T {
  return values[breakpoint] ?? fallback;
}
