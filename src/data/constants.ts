export const BRAND_NAME = "NOOREA";
export const BRAND_TAGLINE = "Premium Skincare for Radiant Beauty";
export const BRAND_DESCRIPTION =
  "NOOREA celebrates natural beauty through carefully crafted skincare that honors the unique radiance within.";

// WhatsApp Configuration
// ⚠️ IMPORTANT: Remplacer par le véritable numéro WhatsApp Business NOOREA
// Format: Code pays + numéro (ex: "+33612345678" pour France, "+212612345678" pour Maroc)
export const WHATSAPP_NUMBER = "+1234567890"; // ⚠️ PLACEHOLDER - À CONFIGURER
export const WHATSAPP_MESSAGE = "Bonjour NOOREA, je souhaite en savoir plus sur vos produits";

/**
 * Génère une URL WhatsApp avec message pré-rempli
 * @param message - Message personnalisé (optionnel, utilise WHATSAPP_MESSAGE par défaut)
 * @returns URL WhatsApp formatée
 */
export function createWhatsAppUrl(message?: string): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message || WHATSAPP_MESSAGE);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: "Instagram" },
  { label: "Facebook", href: "#", icon: "Facebook" },
  { label: "TikTok", href: "#", icon: "Music" },
];

export const FOOTER_LINKS = {
  Product: [
    { label: "All Products", href: "#" },
    { label: "Collections", href: "#" },
    { label: "Skincare Guide", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Our Story", href: "#" },
    { label: "Sustainability", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Shipping & Returns", href: "#" },
  ],
  Contact: [
    { label: "Email: hello@NOOREA.com", href: "mailto:hello@NOOREA.com" },
    { label: "WhatsApp", href: "https://wa.me/" },
  ],
};

export const HERO_MESSAGES = {
  title: "Radiant Beauty,\nNaturally Luminous",
  subtitle: "Experience the transformative power of premium skincare",
  cta: "Discover Our Collection",
  ctaSecondary: "Learn More",
};

export const BRAND_INTRO = {
  title: "Crafted for Your Radiance",
  description:
    "At NOOREA, we believe every skin tells a story of unique beauty. Our premium skincare collection is designed to enhance and celebrate your natural radiance through carefully selected ingredients and timeless formulations.",
};

export const EDITORIAL_SECTIONS = [
  {
    title: "Discover Our Products",
    subtitle: "Curated Collection",
    image: "/NOREA-ASSETS/editorial/product-focus/product-focus-01.png",
  },
  {
    title: "Sensory Experience",
    subtitle: "Luxury Unfolded",
    image: "/NOREA-ASSETS/editorial/sensory/sensory-01.png",
  },
  {
    title: "Brand Heritage",
    subtitle: "Premium Craftsmanship",
    image: "/NOREA-ASSETS/editorial/brand-editorial/brand-editorial-01.png",
  },
];
