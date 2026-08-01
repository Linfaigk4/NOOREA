"use client";

import { useState, ReactNode } from "react";
import { IntroLoader } from "./IntroLoader";

export interface LoaderProviderProps {
  children: ReactNode;
  enabled?: boolean;
  preloadImages?: string[];
  sessionKey?: string;
}

/**
 * LoaderProvider
 * 
 * Manages intro loader lifecycle.
 * Shows loader only once per session using sessionStorage.
 * 
 * Usage:
 * <LoaderProvider enabled={true} preloadImages={[...]}>
 *   {children}
 * </LoaderProvider>
 * 
 * Features:
 * - Session-based: shown once per browser session
 * - Easily disabled via enabled prop
 * - SSR-safe (checks window)
 */
export function LoaderProvider({
  children,
  enabled = true,
  preloadImages = [],
  sessionKey = "NOREA_intro_shown",
}: LoaderProviderProps) {
  // Compute initial state without effects
  const shouldShowLoader = () => {
    if (typeof window === "undefined") return false;
    if (!enabled) return false;
    const hasShown = sessionStorage.getItem(sessionKey);
    return !hasShown;
  };

  const [showLoader, setShowLoader] = useState(shouldShowLoader);

  const handleComplete = () => {
    // Mark as shown in session
    if (typeof window !== "undefined") {
      sessionStorage.setItem(sessionKey, "true");
    }
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && (
        <IntroLoader onComplete={handleComplete} preloadImages={preloadImages} />
      )}
      {children}
    </>
  );
}
