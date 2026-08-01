"use client";

import { ReactNode } from "react";
import { ExperienceProvider } from "@/contexts/ExperienceContext";

export interface ProvidersProps {
  children: ReactNode;
}

/**
 * Providers
 * 
 * Root provider composition for the application
 */
export function Providers({ children }: ProvidersProps) {
  return <ExperienceProvider>{children}</ExperienceProvider>;
}
