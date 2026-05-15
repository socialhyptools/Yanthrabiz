# Yantra Biz — Marketing Website

The marketing and discovery website for [Yantra Biz](https://www.yantrabiz.com), the global marketplace for used industrial machinery. The actual marketplace (buyer app, seller app, web app, admin) lives elsewhere; this site is the brand's landing experience and SEO surface area. CTAs route visitors into the existing app and web app.

## Stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js 15 (App Router) with **static export** |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + tailwindcss-animate |
| Animations | Framer Motion |
| Icons | lucide-react + inline SVG (social) |
| Content | Markdown with frontmatter (gray-matter) |
| Fonts | Plus Jakarta Sans (via `next/font`) |
| Deploy | Hostinger (any static host) |

Static export means every route compiles to a real HTML file in `out/` — no Node runtime required at the host, and excellent SEO out of the box.

## Repository layout

```
.
├─ app/                    # Next.js App Router routes
│  ├─ layout.tsx           # Root layout: nav, footer, JSON-LD, fonts, metadata
│  ├─ page.tsx             # Home
│  ├─ industries/
│  │  ├─ page.tsx          # All industries index
│  │  └─ [slug]/page.tsx   # Dynamic industry detail (1 per markdown file)
│  ├─ about/page.tsx
│  ├─ buy/page.tsx
│  ├─ sell/page.tsx
│  ├─ contact/page.tsx
│  ├─ privacy/page.tsx
│  ├─ terms/page.tsx
│  ├─ not-found.tsx
│  ├─ sitemap.ts           # /sitemap.xml
│  ├─ robots.ts            # /robots.txt
│  └─ globals.css
├─ components/
│  ├─ layout/              # Navbar, Footer
│  ├─ home/                # Home page sections
│  ├─ shared/              # Reveal, CountUp, Container, Prose
│  ├─ icons/               # Inline social SVG icons
│  ├─ seo/                 # JSON-LD schema components
│  └─ ui/                  # Button primitive
├─ content/
│  └─ categories/          # 11 markdown files — long-form industry content
├─ lib/
│  ├─ site.ts              # ★ Editable site config: brand, URLs, contact info
│  ├─ industries.ts        # ★ The 11 industries (slug, icon, color, tagline)
│  ├─ content.ts           # Markdown loader (parses frontmatter + sections)
│  └─ utils.ts             # cn() className helper
├─ public/                 # Static assets (logo, .htaccess, favicons)
├─ next.config.ts          # output: 'export', trailing slash, image config
├─ tailwind.config.ts      # Brand tokens, fonts, animations
└─ eslint.config.mjs
```

## Editing the site

**Most copy changes happen in one of three places:**

- `lib/site.ts` — brand name, tagline, contact info, social URLs, stats, app store / web app destinations.
- `lib/industries.ts` — the list of 11 industries shown in navigation and home grid (icon, color, short tagline).
- `content/categories/*.md` — long-form industry pages (intro, types, benefits, FAQ).

Each markdown file follows this structure:

```markdown
---
slug: agriculture-machinery
title: Agriculture Machinery and Equipment
hero_title: Buy and Sell Agriculture Machinery Online
order: 1
---

## Intro
...

## Types of X
### Subtype A
...

## Why Choose Yantra Biz
...

## Benefits of X
...

## Who Can Use These Machines
- bullet
- bullet

## Buy or Sell X Today
...

## FAQ
### Question?
Answer.
```

The content loader (`lib/content.ts`) parses this into structured data the category page component renders.

## Development

```bash
npm install
npm run dev           # http://localhost:3000
```

## Production build

```bash
npm run build
```

Output lives in `out/` — fully static HTML/CSS/JS. The build also generates:
- `out/sitemap.xml`
- `out/robots.txt`
- `out/404.html`
- `out/.htaccess` (HTTPS, caching, security headers)

## Deploying to Hostinger

1. Run `npm run build` locally.
2. Open Hostinger's **File Manager** (or use FTP) and navigate to `public_html/`.
3. Upload **everything inside** `out/` (not the `out/` folder itself) — including the hidden `.htaccess`.
4. In `lib/site.ts`, make sure `url` matches the production domain.
5. Visit `https://yantrabiz.com/` to verify.

If you set up GitLab CI for auto-deploy, the pipeline should `npm ci && npm run build` and then FTP `out/*` to `public_html/` on Hostinger.

## SEO

The site ships with:
- Per-page `<title>`, `<meta description>`, canonical URL, OG / Twitter cards (via Next.js Metadata API).
- Auto-generated `sitemap.xml` (covers all 11 industry pages + static routes).
- `robots.txt`.
- JSON-LD structured data: `Organization`, `WebSite` with SearchAction, `BreadcrumbList` (every page), `FAQPage` (every industry — eligible for FAQ rich snippets), `ItemList`.
- Semantic HTML hierarchy, alt text, `<nav>`, `<main>`, `<article>`.
- Self-hosted Plus Jakarta Sans via `next/font` (no FOUT).
- Static HTML for every route — instant LCP, no client-side rendering tax.

The SEO team can:
- Update titles / descriptions per page (top of each page file).
- Edit keywords in the markdown frontmatter and body for each industry.
- Plug in Google Analytics / Tag Manager by adding a script tag to `app/layout.tsx`.
- Add hreflang or canonical adjustments via the Metadata API.

## Brand tokens

Defined in `tailwind.config.ts`:

- `primary` (navy `#1a2a7c`) with full 50–950 shade scale
- `accent` (red `#da1f26`) with full 50–950 shade scale
- `ink` (neutral) with full 50–950 shade scale
- `background`, `foreground`, `border`, `ring`, `muted`

Custom utilities in `app/globals.css`:
- `.gradient-hero`, `.mesh-bg` — backgrounds
- `.gradient-text-primary`, `.gradient-text-accent` — gradient text fills
- `.glass` — glassmorphism

## Notes for future development

- **Multilingual** — add `next-intl` and a `[locale]/` segment when expanding beyond English.
- **CMS** — if marketing wants to edit content without touching markdown, plug in Sanity or Strapi behind the existing content loader.
- **Blog** — drop an `app/blog/[slug]/page.tsx` and a `content/blog/` directory; same content-loader pattern.
- **Analytics** — drop GA/GTM into `app/layout.tsx`.
- **Form backend** — the contact form currently routes to WhatsApp; swap to Formspree/Web3Forms by changing the form's `action`.
