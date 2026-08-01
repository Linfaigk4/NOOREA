"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export interface CursorLightProps {
  size?: number;
  color?: string;
  opacity?: number;
  blur?: number;
}

/**
 * CursorLight
 * 
 * Cursor-following light effect.
 * Generic interactive lighting component.
 * 
 * Features:
 * - Smooth cursor tracking with spring physics
 * - Customizable appearance
 * - Auto-disables on touch devices
 * - GPU-accelerated rendering
 * 
 * @example
 * <CursorLight 
 *   size={200} 
 *   color="rgba(212, 175, 143, 0.2)" 
 *   blur={100}
 * />
 */
export function CursorLight({
  size = 200,
  color = "rgba(212, 175, 143, 0.2)",
  opacity = 0.3,
  blur = 100,
}: CursorLightProps) {
  // Compute touch device status directly without effect
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const updateCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
    };

    window.addEventListener("mousemove", updateCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, [cursorX, cursorY, size, isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed z-50"
      style={{
        left: 0,
        top: 0,
        width: size,
        height: size,
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          opacity,
        }}
      />
    </motion.div>
  );
}
