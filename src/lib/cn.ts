/**
 * Class Name Utility
 * Simple className merger without external dependencies
 */

type ClassValue = string | number | boolean | undefined | null;

/**
 * Merges class names
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
