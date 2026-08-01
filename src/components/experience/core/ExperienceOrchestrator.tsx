"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CursorLight,
  NoiseOverlay,
  IntroLoader,
} from "@/components/experience";
import { RGBA_COLORS } from "@/constants/colors";
import { useExperienceContext } from "./ExperienceProvider";

export interface ExperienceOrchestratorProps {
  children: ReactNode;
  enableIntro?: boolean;
  enableCursor?: boolean;
  enableNoise?: boolean;
  preloadImages?: string[];
  sessionKey?: string;
}

/**
 * ExperienceOrchestrator
 * 
 * Central orchestrator for all Experience System components.
 * Coordinates intro, global effects, transitions, and lifecycle.
 * 
 * Features:
 * - Manages IntroLoader lifecycle
 * - Controls global effects (cursor, noise)
 * - Handles smooth transitions
 * - Preloads assets
 * - Session-based intro (once per session)
 * - Memory cleanup
 * 
 * Usage:
 * <ExperienceProvider>
 *   <ExperienceOrchestrator enableIntro enableCursor>
 *     {children}
 *   </ExperienceOrchestrator>
 * </ExperienceProvider>
 */
export function ExperienceOrchestrator({
  children,
  enableIntro = true,
  enableCursor = true,
  enableNoise = true,
  preloadImages = [],
  sessionKey = "NOREA_intro_shown",
}: ExperienceOrchestratorProps) {
  const { state, dispatch } = useExperienceContext();

  // Check if intro should be shown (session-based)
  const shouldShowIntro = () => {
    if (typeof window === "undefined") return false;
    if (!enableIntro) return false;
    const hasShown = sessionStorage.getItem(sessionKey);
    return !hasShown;
  };

  const [showIntro, setShowIntro] = useState(shouldShowIntro);
  const [showContent, setShowContent] = useState(!shouldShowIntro());

  // Initialize intro if needed
  useEffect(() => {
    if (showIntro) {
      dispatch({ type: "START_INTRO" });
    } else {
      // Skip directly to active state
      dispatch({ type: "INTRO_COMPLETE" });
      dispatch({ type: "TRANSITION_COMPLETE" });
      dispatch({ type: "ENABLE_GLOBAL_EFFECTS" });
    }
  }, [showIntro, dispatch]);
  const handleIntroComplete = () => {
    // Mark as shown in session
    if (typeof window !== "undefined") {
      sessionStorage.setItem(sessionKey, "true");
    }

    dispatch({ type: "INTRO_COMPLETE" });
    dispatch({ type: "START_TRANSITION" });

    // Show content immediately (transition will be handled by AnimatePresence)
    setShowContent(true);

    // Complete transition after content fade in
    setTimeout(() => {
      dispatch({ type: "TRANSITION_COMPLETE" });
      setShowIntro(false);
    }, 700);

    // Enable global effects after transition
    setTimeout(() => {
      dispatch({ type: "ENABLE_CURSOR" });
      dispatch({ type: "ENABLE_GLOBAL_EFFECTS" });
    }, 1000);
  };

  return (
    <div className="relative min-h-screen">
      {/* Global Effects - Always rendered once active */}
      {state.globalEffectsEnabled && (
        <>
          {enableNoise && <NoiseOverlay opacity={0.03} />}
          {enableCursor && (
            <CursorLight size={200} color={RGBA_COLORS.goldGlow} blur={100} />
          )}
        </>
      )}

      {/* Intro Loader */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroLoader
            onComplete={handleIntroComplete}
            preloadImages={preloadImages}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="min-h-screen"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
