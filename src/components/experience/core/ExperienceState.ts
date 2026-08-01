/**
 * Experience State Types
 * Centralized state management for Experience System
 */

export type ExperiencePhase =
  | "idle"
  | "intro"
  | "transition"
  | "ready"
  | "active";

export interface ExperienceState {
  phase: ExperiencePhase;
  isLoading: boolean;
  introComplete: boolean;
  assetsPreloaded: boolean;
  cursorEnabled: boolean;
  globalEffectsEnabled: boolean;
}

export const INITIAL_EXPERIENCE_STATE: ExperienceState = {
  phase: "idle",
  isLoading: false,
  introComplete: false,
  assetsPreloaded: false,
  cursorEnabled: false,
  globalEffectsEnabled: false,
};

export type ExperienceAction =
  | { type: "START_INTRO" }
  | { type: "INTRO_COMPLETE" }
  | { type: "START_TRANSITION" }
  | { type: "TRANSITION_COMPLETE" }
  | { type: "ENABLE_CURSOR" }
  | { type: "ENABLE_GLOBAL_EFFECTS" }
  | { type: "ASSETS_PRELOADED" }
  | { type: "RESET" };

export function experienceReducer(
  state: ExperienceState,
  action: ExperienceAction
): ExperienceState {
  switch (action.type) {
    case "START_INTRO":
      return {
        ...state,
        phase: "intro",
        isLoading: true,
      };

    case "INTRO_COMPLETE":
      return {
        ...state,
        phase: "transition",
        introComplete: true,
      };

    case "START_TRANSITION":
      return {
        ...state,
        phase: "transition",
      };

    case "TRANSITION_COMPLETE":
      return {
        ...state,
        phase: "ready",
        isLoading: false,
      };

    case "ENABLE_CURSOR":
      return {
        ...state,
        cursorEnabled: true,
      };

    case "ENABLE_GLOBAL_EFFECTS":
      return {
        ...state,
        globalEffectsEnabled: true,
        phase: "active",
      };

    case "ASSETS_PRELOADED":
      return {
        ...state,
        assetsPreloaded: true,
      };

    case "RESET":
      return INITIAL_EXPERIENCE_STATE;

    default:
      return state;
  }
}
