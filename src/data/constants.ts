export const BRAND_NAME = "NOOREA";
export const BRAND_TAGLINE = "Premium Skincare for Radiant Beauty";
export const BRAND_DESCRIPTION =
  "NOOREA celebrates natural beauty through carefully crafted skincare that honors the unique radiance within.";

// WhatsApp Configuration - NOOREA Official
export const WHATSAPP_NUMBER = "+2250703397700";
export const WHATSAPP_MESSAGE = "Bonjour NOOREA 👋\n\nJe souhaite obtenir des informations sur vos produits.";

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
  { label: "Accueil", href: "/" },
  { label: "Notre Histoire", href: "/notre-histoire" },
  { label: "La Collection", href: "/collection" },
  { label: "Engagements", href: "/engagements" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "#contact-section" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/noorea.ci/", icon: "Instagram" },
  { label: "Facebook", href: "https://www.facebook.com/noorea.ci", icon: "Facebook" },
  { label: "TikTok", href: "https://www.tiktok.com/@noorea.ci", icon: "Music" },
];

export const FOOTER_LINKS = {
  Product: [
    { label: "Tous les produits", href: "/collection" },
    { label: "La Collection", href: "/collection" },
    { label: "Guide de soin", href: "#" },
  ],
  Company: [
    { label: "À propos", href: "#" },
    { label: "Notre Histoire", href: "#story-section" },
    { label: "Démarche RSE", href: "#" },
  ],
  Legal: [
    { label: "Politique de confidentialité", href: "#" },
    { label: "Conditions Générales", href: "#" },
    { label: "Livraison & Retours", href: "#" },
  ],
  Contact: [
    { label: "Email: aminatou@noorea.ci", href: "mailto:aminatou@noorea.ci" },
    { label: "WhatsApp", href: "https://wa.me/2250703397700" },
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
