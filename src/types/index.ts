/**
 * Global Type Definitions
 * Core types for the Experience System
 */

export type Direction = "up" | "down" | "left" | "right";

export type Breakpoint = "mobile" | "tablet" | "desktop" | "wide";

export interface ViewportSize {
  width: number;
  height: number;
}

export interface ScrollPosition {
  x: number;
  y: number;
  progress: number;
}

export interface SceneState {
  id: string;
  isActive: boolean;
  progress: number;
  inView: boolean;
}

export interface AnimationPreset {
  duration: number;
  delay: number;
  ease: number[];
}

export interface UserPreferences {
  reducedMotion: boolean;
  theme: "light" | "dark";
  colorScheme: string;
}
