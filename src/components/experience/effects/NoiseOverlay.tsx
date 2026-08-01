"use client";

export interface NoiseOverlayProps {
  opacity?: number;
  blendMode?: string;
  className?: string;
}

/**
 * NoiseOverlay
 * 
 * CSS-based noise texture overlay.
 * Generic grain effect for premium aesthetic.
 * 
 * Features:
 * - Pure CSS implementation (no canvas)
 * - Customizable opacity and blend mode
 * - Performant (no JavaScript animation)
 * 
 * @example
 * <NoiseOverlay opacity={0.03} blendMode="overlay" />
 */
export function NoiseOverlay({
  opacity = 0.03,
  blendMode = "overlay",
  className = "",
}: NoiseOverlayProps) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 ${className}`}
      style={{
        opacity,
        mixBlendMode: blendMode as React.CSSProperties["mixBlendMode"],
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
