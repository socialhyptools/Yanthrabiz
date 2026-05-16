import {
  Wheat,
  FileText,
  Pill,
  Stethoscope,
  Layers3,
  Container,
  Utensils,
  FlaskConical,
  Factory,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type IndustryMeta = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  icon: LucideIcon;
  accentClass: string;
  iconBgClass: string;
  iconColorClass: string;
  /** Path to the high-quality category banner (used on industries grid + detail page hero) */
  banner: string;
};

/**
 * Static index of the 11 industries shown on the Yantra Biz site.
 * Source of truth for navigation, footer, and home page grid.
 * Long-form content for each industry lives in /content/categories/*.md
 */
export const industries: IndustryMeta[] = [
  {
    slug: "agriculture-machinery",
    title: "Agriculture Machinery",
    short: "Agriculture",
    tagline:
      "Tractors, harvesters, rotavators, seed drills — for farms of every scale.",
    icon: Wheat,
    accentClass: "from-amber-500/20 to-emerald-500/10",
    iconBgClass: "bg-amber-50",
    iconColorClass: "text-amber-700",
    banner: "/Category Banner/Agriculture machinary and equipment.jpeg",
  },
  {
    slug: "paper-machinery",
    title: "Paper Industrial Machinery",
    short: "Paper",
    tagline:
      "Paper making, cutting, printing, and recycling lines for every output.",
    icon: FileText,
    accentClass: "from-orange-500/20 to-yellow-500/10",
    iconBgClass: "bg-orange-50",
    iconColorClass: "text-orange-700",
    banner: "/Category Banner/Papper industrial machinery.jpeg",
  },
  {
    slug: "pharmaceutical-machinery",
    title: "Pharmaceutical Machinery",
    short: "Pharma",
    tagline:
      "Tablet, capsule, liquid filling and blister packing for pharma production.",
    icon: Pill,
    accentClass: "from-emerald-500/20 to-teal-500/10",
    iconBgClass: "bg-emerald-50",
    iconColorClass: "text-emerald-700",
    banner: "/Category Banner/Pharma ceutical machinery.jpeg",
  },
  {
    slug: "hospital-equipment",
    title: "Hospital Equipment",
    short: "Hospital",
    tagline:
      "Diagnostic, surgical, monitoring, and patient-care equipment, verified.",
    icon: Stethoscope,
    accentClass: "from-rose-500/20 to-pink-500/10",
    iconBgClass: "bg-rose-50",
    iconColorClass: "text-rose-700",
    banner: "/Category Banner/Hospital equipment.jpeg",
  },
  {
    slug: "leather-processing",
    title: "Leather Processing Machinery",
    short: "Leather",
    tagline:
      "Cutting, splitting, buffing and stitching machines for leather goods.",
    icon: Layers3,
    accentClass: "from-stone-500/20 to-amber-700/10",
    iconBgClass: "bg-stone-100",
    iconColorClass: "text-stone-700",
    banner: "/Category Banner/Leather processing machinery.jpeg",
  },
  {
    slug: "plastic-machinery",
    title: "Plastic Industrial Machinery",
    short: "Plastic",
    tagline:
      "Injection molding, extrusion, blow molding, and recycling lines.",
    icon: Container,
    accentClass: "from-sky-500/20 to-cyan-500/10",
    iconBgClass: "bg-sky-50",
    iconColorClass: "text-sky-700",
    banner: "/Category Banner/Plastic industrial machinery.jpeg",
  },
  {
    slug: "beverage-food-processing",
    title: "Beverage & Food Processing",
    short: "Food & Beverage",
    tagline:
      "Mixing, cutting, beverage processing, and packaging for F&B units.",
    icon: Utensils,
    accentClass: "from-lime-500/20 to-green-500/10",
    iconBgClass: "bg-lime-50",
    iconColorClass: "text-lime-700",
    banner: "/Category Banner/Beverage and Food Processing Machine.jpeg",
  },
  {
    slug: "chemical-machinery",
    title: "Chemical Industrial Machinery",
    short: "Chemical",
    tagline:
      "Mixing, reactor, filling, and storage systems for chemical plants.",
    icon: FlaskConical,
    accentClass: "from-violet-500/20 to-purple-500/10",
    iconBgClass: "bg-violet-50",
    iconColorClass: "text-violet-700",
    banner: "/Category Banner/Chemical industrial machinery.jpeg",
  },
  {
    slug: "industrial-machinery",
    title: "Industrial Machinery",
    short: "Industrial",
    tagline:
      "Manufacturing, processing, packaging, and material handling at scale.",
    icon: Factory,
    accentClass: "from-slate-500/20 to-blue-500/10",
    iconBgClass: "bg-slate-100",
    iconColorClass: "text-slate-700",
    banner: "/Category Banner/Industrial Machinery.jpeg",
  },
  {
    slug: "material-handling",
    title: "Material Handling Machinery",
    short: "Material Handling",
    tagline: "Lifting, conveying, warehouse, and manual handling equipment.",
    icon: Truck,
    accentClass: "from-blue-500/20 to-indigo-500/10",
    iconBgClass: "bg-blue-50",
    iconColorClass: "text-blue-700",
    banner: "/Category Banner/Material handling machine.jpeg",
  },
  {
    slug: "miscellaneous-machinery",
    title: "Miscellaneous Machinery",
    short: "Miscellaneous",
    tagline:
      "Utility, workshop, support and multi-purpose machines for any unit.",
    icon: Wrench,
    accentClass: "from-zinc-500/20 to-gray-500/10",
    iconBgClass: "bg-zinc-100",
    iconColorClass: "text-zinc-700",
    banner: "/Category Banner/Miscellaneous machinery.jpeg",
  },
];

export function getIndustryBySlug(slug: string): IndustryMeta | undefined {
  return industries.find((i) => i.slug === slug);
}

export const industrySlugs = industries.map((i) => i.slug);
