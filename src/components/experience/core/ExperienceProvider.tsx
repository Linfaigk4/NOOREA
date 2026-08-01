"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import {
  ExperienceState,
  ExperienceAction,
  INITIAL_EXPERIENCE_STATE,
  experienceReducer,
} from "./ExperienceState";
import { ExperienceEventEmitter } from "./ExperienceEvents";

interface ExperienceContextValue {
  state: ExperienceState;
  dispatch: React.Dispatch<ExperienceAction>;
  events: ExperienceEventEmitter;
}

const ExperienceContext = createContext<ExperienceContextValue | undefined>(
  undefined
);

export interface ExperienceProviderProps {
  children: ReactNode;
}

/**
 * ExperienceProvider
 * 
 * Root provider for Experience System orchestration
 */
export function ExperienceProvider({ children }: ExperienceProviderProps) {
  const [state, dispatch] = useReducer(
    experienceReducer,
    INITIAL_EXPERIENCE_STATE
  );

  const events = useMemo(() => new ExperienceEventEmitter(), []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      events.clear();
    };
  }, [events]);

  const value = useMemo(
    () => ({
      state,
      dispatch,
      events,
    }),
    [state, events]
  );

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
}

/**
 * useExperienceContext
 * 
 * Access experience orchestration context
 */
export function useExperienceContext(): ExperienceContextValue {
  const context = useContext(ExperienceContext);

  if (!context) {
    throw new Error(
      "useExperienceContext must be used within ExperienceProvider"
    );
  }

  return context;
}
