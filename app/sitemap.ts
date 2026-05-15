import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { industrySlugs } from "@/lib/industries";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/industries", priority: 0.9, freq: "weekly" },
    { path: "/buy", priority: 0.8, freq: "monthly" },
    { path: "/sell", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.6, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "monthly" },
    { path: "/terms", priority: 0.3, freq: "monthly" },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...industrySlugs.map((slug) => ({
      url: `${base}/industries/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
