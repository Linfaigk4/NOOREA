"use client";

import { createContext, useContext, ReactNode } from "react";
import type { UserPreferences } from "@/types";

interface ExperienceContextValue {
  preferences: UserPreferences;
}

const ExperienceContext = createContext<ExperienceContextValue | undefined>(
  undefined
);

export interface ExperienceProviderProps {
  children: ReactNode;
  preferences?: Partial<UserPreferences>;
}

/**
 * ExperienceProvider
 * 
 * Provides global experience configuration
 */
export function ExperienceProvider({
  children,
  preferences = {},
}: ExperienceProviderProps) {
  const defaultPreferences: UserPreferences = {
    reducedMotion: false,
    theme: "light",
    colorScheme: "default",
    ...preferences,
  };

  return (
    <ExperienceContext.Provider value={{ preferences: defaultPreferences }}>
      {children}
    </ExperienceContext.Provider>
  );
}

/**
 * useExperience
 * 
 * Access experience context
 */
export function useExperience(): ExperienceContextValue {
  const context = useContext(ExperienceContext);

  if (!context) {
    throw new Error("useExperience must be used within ExperienceProvider");
  }

  return context;
}
