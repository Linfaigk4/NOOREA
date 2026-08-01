/**
 * Experience Events
 * Event system for Experience orchestration
 */

export type ExperienceEventType =
  | "intro:start"
  | "intro:complete"
  | "transition:start"
  | "transition:complete"
  | "cursor:enable"
  | "effects:enable"
  | "assets:preloaded";

export interface ExperienceEvent {
  type: ExperienceEventType;
  timestamp: number;
  data?: unknown;
}

type EventCallback = (event: ExperienceEvent) => void;

/**
 * ExperienceEventEmitter
 * 
 * Simple event emitter for experience coordination
 */
export class ExperienceEventEmitter {
  private listeners: Map<ExperienceEventType, Set<EventCallback>> = new Map();

  on(eventType: ExperienceEventType, callback: EventCallback): () => void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }

    this.listeners.get(eventType)!.add(callback);

    // Return unsubscribe function
    return () => {
      this.listeners.get(eventType)?.delete(callback);
    };
  }

  emit(eventType: ExperienceEventType, data?: unknown): void {
    const event: ExperienceEvent = {
      type: eventType,
      timestamp: Date.now(),
      data,
    };

    this.listeners.get(eventType)?.forEach((callback) => {
      callback(event);
    });
  }

  clear(): void {
    this.listeners.clear();
  }
}
