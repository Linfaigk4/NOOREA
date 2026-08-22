/**
 * Design System Colors
 * Centralized color palette with golden gradient system
 */

export const COLORS = {
  // Base neutrals
  cream: "#faf8f6",
  ivory: "#f5f3f0",
  sand: "#e8e4dd",
  beige: "#d4cfc6",
  taupe: "#8b837a",
  charcoal: "#2b2b2b",
  black: "#1a1a1a",
  
  // Gold system (linear gradient foundation)
  goldDark: "#7A4E12",
  goldDeep: "#8A5A12",
  gold: "#B8860B",
  goldMedium: "#C69214",
  goldLight: "#D4AF37",
  goldHighlight: "#F3D77A",
  goldShine: "#FFF1B8",
  white: "#ffffff",
} as const;

export const RGBA_COLORS = {
  // Golden glow variants
  goldGlow: "rgba(212, 175, 143, 0.15)",
  goldGlowStrong: "rgba(212, 175, 143, 0.3)",
  goldGlowHighlight: "rgba(243, 215, 120, 0.4)",
  // Overlay variants
  overlay: "rgba(26, 26, 26, 0.5)",
  overlayLight: "rgba(250, 248, 246, 0.9)",
} as const;

// CSS Gradients for export (can be used in styled-components or inline styles)
export const GOLD_GRADIENTS = {
  // Primary gradient - diagonal
  primary: "linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 25%, var(--gold-light) 50%, var(--gold-highlight) 75%, var(--gold-shine) 100%)",
  // Vertical gradient
  vertical: "linear-gradient(180deg, var(--gold-dark) 0%, var(--gold) 40%, var(--gold-light) 70%, var(--gold-shine) 100%)",
  // Radial for circular logo
  radial: "radial-gradient(circle at center, var(--gold-shine) 0%, var(--gold-light) 20%, var(--gold) 50%, var(--gold-dark) 100%)",
  // Subtle hover gradient
  subtle: "linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)",
} as const;
