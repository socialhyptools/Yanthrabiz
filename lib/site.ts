/**
 * Editable site copy and links.
 * This is the single source of truth for brand text, contact info,
 * and external destinations. Update values here to update everywhere.
 */

export const siteConfig = {
  name: "Yantra Biz",
  shortName: "Yantra Biz",
  legalName: "Yantra Biz",
  domain: "yantrabiz.com",
  url: "https://www.yantrabiz.com",
  description:
    "Yantra Biz is the global marketplace for used industrial machinery. Buy and sell pre-owned and refurbished machinery across 11+ industries — from agriculture and pharma to plastic, paper, leather, food, and chemical processing.",
  tagline: "The Global Marketplace for Used Industrial Machinery",
  ogImage: "/og-default.png",

  // ===== External destinations (where the marketing site sends visitors) =====
  webApp: "https://yantrabiz.in/Yantrabiz/web/login",
  playStore:
    "https://play.google.com/store/apps/details?id=shopping.in.Yanthra",
  appStore: "https://apps.apple.com/in/app/yantrabiz/id6756346956",

  // ===== Contact =====
  phone: "+91 80560 89262",
  phoneIntl: "+918056089262", // for tel: and wa.me links
  whatsapp: "+918056089262", // sales WhatsApp (using public number until sales line is provided)
  email: "admin@yantrabiz.com",
  address: {
    line1: "No. 3/2, Avadi Main Road",
    line2: "Konimedu, Redhills",
    city: "Tiruvallur",
    state: "Tamil Nadu",
    postalCode: "600052",
    country: "India",
  },

  // ===== Social =====
  // Only include verified, live profiles here — the footer and Organization
  // JSON-LD iterate this object and skip platforms not listed.
  socials: {
    facebook: "https://www.facebook.com/YantraApp",
    instagram: "https://www.instagram.com/_yantra_official/",
    youtube: "https://www.youtube.com/@Yantra_App",
  },

  // ===== Brand stats (shown across the site) =====
  stats: [
    { label: "Countries Served", value: "16+" },
    { label: "Machines Listed", value: "1,200+" },
    { label: "Verified Sellers", value: "350+" },
    { label: "Buyer Satisfaction", value: "98%" },
  ],

  // ===== Founding / company facts =====
  foundedYear: 2024,
} as const;

export type SiteConfig = typeof siteConfig;

// Helpers
export function whatsappLink(message?: string) {
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : "";
  return `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}${text}`;
}

export function telLink() {
  return `tel:${siteConfig.phoneIntl}`;
}

export function mailtoLink(subject?: string) {
  const s = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${siteConfig.email}${s}`;
}
