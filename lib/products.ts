/**
 * Real products surfaced on the marketing site (home page featured listings
 * + industry pages). Image paths point to /public assets. Spaces in paths
 * are handled by encodeURI() at render time.
 */

export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  images: string[];
  year?: number;
  condition: "Refurbished" | "Used" | "New";
  location: string;
  highlights?: string[];
  /** If true, surfaces on the home page Featured Listings strip. */
  featured?: boolean;
};

export const products: Product[] = [
  // ===== Agriculture =====
  {
    slug: "cultivator",
    name: "Cultivator",
    category: "Agriculture Machinery",
    categorySlug: "agriculture-machinery",
    images: ["/Agriculture machinary and equipment/Cultivator.jpeg"],
    year: 2021,
    condition: "Used",
    location: "Coimbatore, India",
    highlights: ["Heavy-duty", "Multi-tine"],
    featured: true,
  },
  {
    slug: "rotavator",
    name: "Rotavator",
    category: "Agriculture Machinery",
    categorySlug: "agriculture-machinery",
    images: ["/Agriculture machinary and equipment/Rotavator.jpeg"],
    year: 2020,
    condition: "Refurbished",
    location: "Ludhiana, India",
    highlights: ["Field-ready", "Power tiller"],
  },
  {
    slug: "seed-drill-machine",
    name: "Seed Drill Machine",
    category: "Agriculture Machinery",
    categorySlug: "agriculture-machinery",
    images: ["/Agriculture machinary and equipment/Seed drill machine.jpeg"],
    year: 2022,
    condition: "Used",
    location: "Hyderabad, India",
    highlights: ["Precision sowing"],
  },

  // ===== Paper =====
  {
    slug: "a4-paper-production-line",
    name: "A4 Paper Production Line",
    category: "Paper Machinery",
    categorySlug: "paper-machinery",
    images: [
      "/Paper Industrial Machinery/A4-Paper Production Line/01.jpeg",
      "/Paper Industrial Machinery/A4-Paper Production Line/02.jpeg",
      "/Paper Industrial Machinery/A4-Paper Production Line/03.jpeg",
    ],
    year: 2021,
    condition: "Refurbished",
    location: "Coimbatore, India",
    highlights: ["Complete line", "Ready to install"],
    featured: true,
  },
  {
    slug: "waste-paper-recycling-plant",
    name: "Automatic Waste Paper Recycling Plant",
    category: "Paper Machinery",
    categorySlug: "paper-machinery",
    images: [
      "/Paper Industrial Machinery/Automatic waste paper recycling plant/01.jpeg",
      "/Paper Industrial Machinery/Automatic waste paper recycling plant/02.jpeg",
    ],
    year: 2020,
    condition: "Used",
    location: "Chennai, India",
    highlights: ["Eco-friendly", "High output"],
  },

  // ===== Pharmaceutical =====
  {
    slug: "bottle-filling-machine",
    name: "Bottle Filling Machine",
    category: "Pharmaceutical Machinery",
    categorySlug: "pharmaceutical-machinery",
    images: ["/Pharma ceutical machinery/Bottle Filling Machine.jpeg"],
    year: 2022,
    condition: "Refurbished",
    location: "Hyderabad, India",
    highlights: ["GMP compliant", "High speed"],
    featured: true,
  },
  {
    slug: "granulation-machine",
    name: "Granulation Machine",
    category: "Pharmaceutical Machinery",
    categorySlug: "pharmaceutical-machinery",
    images: ["/Pharma ceutical machinery/Granulation machine.jpeg"],
    year: 2021,
    condition: "Used",
    location: "Ahmedabad, India",
    highlights: ["Wet granulation"],
  },
  {
    slug: "pharma-packing-machine",
    name: "Pharma Packing Machine",
    category: "Pharmaceutical Machinery",
    categorySlug: "pharmaceutical-machinery",
    images: ["/Pharma ceutical machinery/pharma packing machine.jpeg"],
    year: 2020,
    condition: "Refurbished",
    location: "Mumbai, India",
    highlights: ["Blister + carton"],
  },

  // ===== Hospital =====
  {
    slug: "omega-j-1065",
    name: "Omega J 1065 — 2021",
    category: "Hospital Equipment",
    categorySlug: "hospital-equipment",
    images: ["/Hospital equipment/2021 Omega J 1065.jpeg"],
    year: 2021,
    condition: "Used",
    location: "Bangalore, India",
    highlights: ["Diagnostic-grade"],
    featured: true,
  },
  {
    slug: "operating-room-setup",
    name: "Operating Room Setup",
    category: "Hospital Equipment",
    categorySlug: "hospital-equipment",
    images: ["/Hospital equipment/Bigstock Operating Room.jpeg"],
    year: 2020,
    condition: "Refurbished",
    location: "Chennai, India",
    highlights: ["Complete OT", "Sterilised"],
  },
  {
    slug: "basic-medical-equipment",
    name: "Basic Medical Equipment Pack",
    category: "Hospital Equipment",
    categorySlug: "hospital-equipment",
    images: ["/Hospital equipment/Basic medical equipment.jpeg"],
    year: 2022,
    condition: "Used",
    location: "Delhi, India",
  },

  // ===== Leather =====
  {
    slug: "leather-buffing-machine",
    name: "Leather Buffing Machine",
    category: "Leather Processing Machinery",
    categorySlug: "leather-processing",
    images: ["/Leather processing machinery/Leather buffing machine.jpeg"],
    year: 2020,
    condition: "Used",
    location: "Kanpur, India",
    highlights: ["High RPM"],
  },
  {
    slug: "leather-sammying-machine",
    name: "Leather Sammying Machine",
    category: "Leather Processing Machinery",
    categorySlug: "leather-processing",
    images: ["/Leather processing machinery/Leather sammying machine.jpeg"],
    year: 2021,
    condition: "Refurbished",
    location: "Chennai, India",
    highlights: ["Moisture control"],
  },
  {
    slug: "leather-folding-machine",
    name: "Mild Steel Leather Folding Machine",
    category: "Leather Processing Machinery",
    categorySlug: "leather-processing",
    images: [
      "/Leather processing machinery/Mild steel leather folding machine.jpeg",
    ],
    year: 2019,
    condition: "Used",
    location: "Ambur, India",
    featured: true,
  },

  // ===== Plastic =====
  {
    slug: "electric-injection-molding-machine",
    name: "Electric Semi-Automatic Injection Molding Machine",
    category: "Plastic Machinery",
    categorySlug: "plastic-machinery",
    images: [
      "/Plastic/Electric semi-automatic plastic injection molding machine/01.jpeg",
      "/Plastic/Electric semi-automatic plastic injection molding machine/02.jpeg",
      "/Plastic/Electric semi-automatic plastic injection molding machine/03.jpeg",
    ],
    year: 2022,
    condition: "Refurbished",
    location: "Ahmedabad, India",
    highlights: ["Energy efficient", "Servo motor"],
    featured: true,
  },
  {
    slug: "pvc-pulverizing-machine",
    name: "PVC Pulverizing Machine",
    category: "Plastic Machinery",
    categorySlug: "plastic-machinery",
    images: [
      "/Plastic/PVC-pulverizing machines reduce plastic waste and production cost/01.jpeg",
      "/Plastic/PVC-pulverizing machines reduce plastic waste and production cost/02.jpeg",
      "/Plastic/PVC-pulverizing machines reduce plastic waste and production cost/03.jpeg",
    ],
    year: 2019,
    condition: "Used",
    location: "Mumbai, India",
    highlights: ["Reduces waste", "Lower production cost"],
  },
  {
    slug: "plastic-making-machine",
    name: "Plastic Making Machine",
    category: "Plastic Machinery",
    categorySlug: "plastic-machinery",
    images: [
      "/Plastic/Plastic Making Machine/01.jpeg",
      "/Plastic/Plastic Making Machine/02.jpeg",
      "/Plastic/Plastic Making Machine/03.jpeg",
    ],
    year: 2021,
    condition: "Refurbished",
    location: "Pune, India",
    highlights: ["Versatile output", "Robust build"],
  },

  // ===== Beverage & Food =====
  {
    slug: "fruit-juice-processing-plant",
    name: "Fruit Juice Processing Plant",
    category: "Beverage & Food Processing",
    categorySlug: "beverage-food-processing",
    images: [
      "/Beverage and Food Processing Machine/Fruit juice processing plant.jpeg",
    ],
    year: 2021,
    condition: "Refurbished",
    location: "Nashik, India",
    highlights: ["Pasteurisation", "Bottling included"],
    featured: true,
  },
  {
    slug: "food-packing-machine",
    name: "Food Packing Machine",
    category: "Beverage & Food Processing",
    categorySlug: "beverage-food-processing",
    images: ["/Beverage and Food Processing Machine/Packing Machine.jpeg"],
    year: 2020,
    condition: "Used",
    location: "Pune, India",
    highlights: ["Auto-seal"],
  },
  {
    slug: "food-beverage-line",
    name: "Food & Beverage Processing Line",
    category: "Beverage & Food Processing",
    categorySlug: "beverage-food-processing",
    images: ["/Beverage and Food Processing Machine/Food & Beverages.jpeg"],
    year: 2019,
    condition: "Used",
    location: "Coimbatore, India",
  },

  // ===== Chemical =====
  {
    slug: "stainless-steel-chemical-reactor",
    name: "Stainless Steel Chemical Reactor",
    category: "Chemical Industrial Machinery",
    categorySlug: "chemical-machinery",
    images: [
      "/Chemical industrial machinery/Stainless Steel Chemical Reactor.jpeg",
    ],
    year: 2021,
    condition: "Refurbished",
    location: "Vadodara, India",
    highlights: ["SS-316", "Jacketed"],
    featured: true,
  },
  {
    slug: "h2-liquification-unit",
    name: "Sino Science H2 Liquification Unit",
    category: "Chemical Industrial Machinery",
    categorySlug: "chemical-machinery",
    images: [
      "/Chemical industrial machinery/Sino science H2-liquification.jpeg",
    ],
    year: 2020,
    condition: "Used",
    location: "Mumbai, India",
    highlights: ["Cryogenic", "Industrial grade"],
  },

  // ===== Industrial =====
  {
    slug: "heavy-equipment",
    name: "Heavy Equipment Set",
    category: "Industrial Machinery",
    categorySlug: "industrial-machinery",
    images: ["/Industrial Machinery/Heavy Equipment.jpeg"],
    year: 2020,
    condition: "Used",
    location: "Pune, India",
    highlights: ["Heavy-duty"],
    featured: true,
  },
  {
    slug: "general-purpose-machinery",
    name: "General Purpose Machinery",
    category: "Industrial Machinery",
    categorySlug: "industrial-machinery",
    images: ["/Industrial Machinery/General purpose Machinery.jpeg"],
    year: 2022,
    condition: "Refurbished",
    location: "Bangalore, India",
  },
  {
    slug: "industrial-machinery-set",
    name: "Industrial Machinery — Production Set",
    category: "Industrial Machinery",
    categorySlug: "industrial-machinery",
    images: ["/Industrial Machinery/Industrial Machinery (2).jpeg"],
    year: 2021,
    condition: "Used",
    location: "Chennai, India",
  },

  // ===== Material Handling =====
  {
    slug: "industrial-robotic-arm",
    name: "Industrial Robotic Arm Controller",
    category: "Material Handling Machinery",
    categorySlug: "material-handling",
    images: ["/Material handling machine/Controller industrial robotic arm.jpeg"],
    year: 2022,
    condition: "Refurbished",
    location: "Pune, India",
    highlights: ["6-axis", "Programmable"],
    featured: true,
  },
  {
    slug: "material-handling-equipment",
    name: "Material Handling Equipment Set",
    category: "Material Handling Machinery",
    categorySlug: "material-handling",
    images: [
      "/Material handling machine/Material handling equipment types.jpeg",
    ],
    year: 2021,
    condition: "Used",
    location: "Mumbai, India",
  },
  {
    slug: "material-handling-tool",
    name: "Material Handling Tool",
    category: "Material Handling Machinery",
    categorySlug: "material-handling",
    images: ["/Material handling machine/Material handelling tool.jpeg"],
    year: 2020,
    condition: "Used",
    location: "Delhi, India",
  },

  // ===== Miscellaneous =====
  {
    slug: "stamping-punching-machine",
    name: "Stamping & Punching Machine",
    category: "Miscellaneous Machinery",
    categorySlug: "miscellaneous-machinery",
    images: [
      "/Miscellaneous machinery/Miscellaneous Stamping and Punching Machine.jpeg",
    ],
    year: 2021,
    condition: "Refurbished",
    location: "Coimbatore, India",
    highlights: ["Hydraulic"],
  },
  {
    slug: "rubber-machinery",
    name: "Rubber Machinery",
    category: "Miscellaneous Machinery",
    categorySlug: "miscellaneous-machinery",
    images: ["/Miscellaneous machinery/Rubber Machinery.jpeg"],
    year: 2020,
    condition: "Used",
    location: "Chennai, India",
  },
  {
    slug: "miscellaneous-equipment",
    name: "Miscellaneous Equipment",
    category: "Miscellaneous Machinery",
    categorySlug: "miscellaneous-machinery",
    images: ["/Miscellaneous machinery/Miscellaneous Equipment.jpeg"],
    year: 2019,
    condition: "Used",
    location: "Bangalore, India",
  },
];

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

/** Curated subset that appears on the home page Featured Listings strip. */
export const featuredProducts: Product[] = products.filter((p) => p.featured);

export function encodePath(path: string): string {
  return encodeURI(path);
}
