/**
 * Animation Timings
 * Consistent animation durations and delays
 */

export const DURATIONS = {
  instant: 0,
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
  slowest: 1.2,
  ambient: 3,
} as const;

export const DELAYS = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.4,
} as const;

export const STAGGER = {
  tight: 0.05,
  normal: 0.08,
  relaxed: 0.15,
} as const;
