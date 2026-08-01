"use client";

import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/constants/breakpoints";
import type { Breakpoint } from "@/types";

/**
 * useBreakpoint
 * 
 * Tracks current responsive breakpoint
 * 
 * @returns Current breakpoint name
 * 
 * @example
 * const breakpoint = useBreakpoint();
 * if (breakpoint === "mobile") { ... }
 */
export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= BREAKPOINTS.wide) {
        setBreakpoint("wide");
      } else if (width >= BREAKPOINTS.desktop) {
        setBreakpoint("desktop");
      } else if (width >= BREAKPOINTS.tablet) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
