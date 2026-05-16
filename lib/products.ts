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
};

export const products: Product[] = [
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
];

export const featuredProducts = products;

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

export function encodePath(path: string): string {
  return encodeURI(path);
}
