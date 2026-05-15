import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "categories");

export type CategoryFAQ = { question: string; answer: string };
export type CategoryType = { name: string; description: string };

export type CategoryDoc = {
  slug: string;
  title: string;
  hero_title: string;
  order: number;
  intro: string;
  types_heading: string;
  types: CategoryType[];
  why_choose: string;
  benefits: string;
  who_can_use: string[];
  cta_heading: string;
  cta: string;
  faq: CategoryFAQ[];
};

function parseSections(body: string): Map<string, string> {
  const sections = new Map<string, string>();
  const lines = body.split("\n");
  let currentHeading: string | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (currentHeading !== null) {
      sections.set(currentHeading, buffer.join("\n").trim());
    }
  };

  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)$/);
    if (h2Match) {
      flush();
      currentHeading = h2Match[1].trim();
      buffer = [];
    } else {
      buffer.push(line);
    }
  }
  flush();
  return sections;
}

function parseTypes(text: string): { heading: string; items: CategoryType[] } {
  const items: CategoryType[] = [];
  const lines = text.split("\n");
  let currentName: string | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (currentName !== null) {
      items.push({ name: currentName, description: buffer.join(" ").trim() });
    }
  };

  for (const line of lines) {
    const h3Match = line.match(/^###\s+(.+)$/);
    if (h3Match) {
      flush();
      currentName = h3Match[1].trim();
      buffer = [];
    } else if (line.trim()) {
      buffer.push(line.trim());
    }
  }
  flush();

  return { heading: "", items };
}

function parseFAQ(text: string): CategoryFAQ[] {
  const items: CategoryFAQ[] = [];
  const lines = text.split("\n");
  let currentQ: string | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (currentQ !== null) {
      items.push({ question: currentQ, answer: buffer.join(" ").trim() });
    }
  };

  for (const line of lines) {
    const h3Match = line.match(/^###\s+(.+)$/);
    if (h3Match) {
      flush();
      currentQ = h3Match[1].trim();
      buffer = [];
    } else if (line.trim()) {
      buffer.push(line.trim());
    }
  }
  flush();
  return items;
}

function parseList(text: string): string[] {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2).trim());
}

function findSection(
  sections: Map<string, string>,
  startsWith: string,
): { key: string; body: string } | null {
  for (const [key, body] of sections) {
    if (key.toLowerCase().startsWith(startsWith.toLowerCase())) {
      return { key, body };
    }
  }
  return null;
}

export function loadCategory(slug: string): CategoryDoc {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const sections = parseSections(content);

  const intro = sections.get("Intro") ?? "";

  const typesSection = findSection(sections, "Types of");
  const typesParsed = typesSection ? parseTypes(typesSection.body) : { heading: "", items: [] };

  const whySection = findSection(sections, "Why Choose");
  const benefitsSection = findSection(sections, "Benefits of");
  const whoSection =
    findSection(sections, "Who Can Use") ?? findSection(sections, "Who Can");
  const ctaSection =
    findSection(sections, "Buy or Sell") ?? findSection(sections, "Buy Or Sell");
  const faqSection = findSection(sections, "FAQ");

  return {
    slug: String(data.slug ?? slug),
    title: String(data.title ?? ""),
    hero_title: String(data.hero_title ?? data.title ?? ""),
    order: Number(data.order ?? 99),
    intro,
    types_heading: typesSection?.key ?? "",
    types: typesParsed.items,
    why_choose: whySection?.body ?? "",
    benefits: benefitsSection?.body ?? "",
    who_can_use: whoSection ? parseList(whoSection.body) : [],
    cta_heading: ctaSection?.key ?? "",
    cta: ctaSection?.body ?? "",
    faq: faqSection ? parseFAQ(faqSection.body) : [],
  };
}

export function getAllCategorySlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function loadAllCategories(): CategoryDoc[] {
  return getAllCategorySlugs()
    .map((slug) => loadCategory(slug))
    .sort((a, b) => a.order - b.order);
}
