/**
 * Slugify utility for NOOREA products
 * 
 * Converts product names to URL-safe slugs
 * 
 * Examples:
 * "Sérum Éclat Visage" → "serum-eclat-visage"
 * "Bright Serum Face" → "bright-serum-face"
 * "Crème Visage Réparatrice" → "creme-visage-reparatrice"
 */

/**
 * Convert a string to a URL-safe slug
 * 
 * @param text - The text to slugify
 * @returns URL-safe slug in lowercase with hyphens
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD") // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric chars (except spaces and hyphens)
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
}

/**
 * Generate a product slug from a Product object
 * Uses nameEn for consistency since it's always in English
 * 
 * @param product - Product object with nameEn property
 * @returns URL-safe slug
 */
export function getProductSlug(product: { nameEn: string }): string {
  return slugify(product.nameEn);
}

/**
 * Find a product by its slug
 * 
 * @param products - Array of products
 * @param slug - URL slug to match
 * @returns Product if found, undefined otherwise
 */
export function findProductBySlug<T extends { nameEn: string }>(
  products: T[],
  slug: string
): T | undefined {
  return products.find((product) => getProductSlug(product) === slug);
}
