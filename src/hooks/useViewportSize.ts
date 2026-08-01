"use client";

import { useState, useEffect } from "react";
import type { ViewportSize } from "@/types";

/**
 * useViewportSize
 * 
 * Tracks viewport dimensions
 * 
 * @returns Current viewport width and height
 * 
 * @example
 * const { width, height } = useViewportSize();
 */
export function useViewportSize(): ViewportSize {
  const [size, setSize] = useState<ViewportSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 1440,
    height: typeof window !== "undefined" ? window.innerHeight : 900,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
