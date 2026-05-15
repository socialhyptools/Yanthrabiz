import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  loadCategory,
  getAllCategorySlugs,
} from "@/lib/content";
import {
  industries,
  getIndustryBySlug,
} from "@/lib/industries";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Prose } from "@/components/shared/Prose";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
} from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const cat = loadCategory(slug);
    const description = cat.intro
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 200);
    return {
      title: `${cat.title} — Buy & Sell Online`,
      description,
      alternates: { canonical: `/industries/${slug}` },
      openGraph: {
        title: `${cat.title} | ${siteConfig.name}`,
        description,
        url: `${siteConfig.url}/industries/${slug}`,
        type: "website",
      },
    };
  } catch {
    return { title: "Industry not found" };
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let cat;
  try {
    cat = loadCategory(slug);
  } catch {
    notFound();
  }

  const meta = getIndustryBySlug(slug);
  if (!meta) notFound();
  const Icon = meta.icon;

  const related = industries.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
          { name: cat.title, url: `/industries/${slug}` },
        ]}
      />
      <FAQPageJsonLd faqs={cat.faq} />

      {/* Hero */}
      <section className="relative pt-12 md:pt-16 pb-16 md:pb-20 gradient-hero overflow-hidden">
        <Container>
          <Reveal>
            <nav className="text-sm text-ink-500 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/industries" className="hover:text-primary">
                Industries
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink-900">{cat.title}</span>
            </nav>

            <div className="flex items-start gap-4">
              <div
                className={cn(
                  "shrink-0 inline-flex h-16 w-16 items-center justify-center rounded-2xl",
                  meta.iconBgClass,
                )}
              >
                <Icon className={cn("h-8 w-8", meta.iconColorClass)} />
              </div>
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/70 backdrop-blur px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary border border-primary/10">
                  <Sparkles className="h-3 w-3" />
                  Industry
                </div>
                <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-ink-900 tracking-tight leading-[1.05]">
                  {cat.hero_title}
                </h1>
              </div>
            </div>

            <div className="mt-7 grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <Prose text={cat.intro} size="lg" />
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.webApp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="lg">
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href={whatsappLink(
                      `Hi, I'm interested in ${cat.title} on Yantra Biz.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg">
                      <MessageCircle className="h-5 w-5" />
                      Chat with our team
                    </Button>
                  </a>
                </div>
              </div>

              {/* Side panel — quick actions */}
              <aside className="lg:sticky lg:top-24 rounded-3xl border border-ink-200 bg-white p-6 shadow-soft">
                <h2 className="font-display font-bold text-lg text-ink-900">
                  Buy or sell {cat.title.toLowerCase()}
                </h2>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  Browse verified listings or list your machine in minutes. Our
                  team helps with inspections, transport, and cross-border
                  logistics.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <Link href="/buy">
                    <Button variant="primary" size="md" className="w-full">
                      I want to buy
                    </Button>
                  </Link>
                  <Link href="/sell">
                    <Button variant="outline" size="md" className="w-full">
                      I want to sell
                    </Button>
                  </Link>
                </div>
              </aside>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Types */}
      {cat.types.length > 0 && (
        <section className="py-20 md:py-24">
          <Container>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                {cat.types_heading || `Types of ${cat.title}`}
              </h2>
              <p className="mt-3 text-lg text-ink-600 max-w-2xl">
                Explore the most common categories of {cat.title.toLowerCase()}{" "}
                listed on the platform.
              </p>
            </Reveal>

            <StaggerContainer
              stagger={0.06}
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {cat.types.map((t, idx) => (
                <StaggerItem key={t.name}>
                  <article className="h-full rounded-2xl border border-ink-200 bg-white p-7 hover:border-primary/20 hover:shadow-soft transition-all">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex h-9 w-9 items-center justify-center rounded-lg font-display font-bold text-sm",
                          meta.iconBgClass,
                          meta.iconColorClass,
                        )}
                      >
                        0{idx + 1}
                      </span>
                      <h3 className="font-display text-xl font-bold text-ink-900 tracking-tight">
                        {t.name}
                      </h3>
                    </div>
                    <p className="mt-4 text-ink-600 leading-relaxed">
                      {t.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      )}

      {/* Why + Benefits */}
      <section className="py-20 md:py-24 bg-ink-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {cat.why_choose && (
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  Why Yantra Biz
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
                  Why operators choose Yantra Biz for {meta.short.toLowerCase()}
                </h2>
                <div className="mt-5">
                  <Prose text={cat.why_choose} />
                </div>
              </Reveal>
            )}

            {cat.benefits && (
              <Reveal delay={0.1}>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
                  Benefits
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
                  Benefits of modern {meta.short.toLowerCase()} equipment
                </h2>
                <div className="mt-5">
                  <Prose text={cat.benefits} />
                </div>
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      {/* Who can use */}
      {cat.who_can_use.length > 0 && (
        <section className="py-20 md:py-24">
          <Container>
            <Reveal>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  Who it's for
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 tracking-tight">
                  Built for the operators who run this industry
                </h2>
              </div>
            </Reveal>

            <StaggerContainer
              stagger={0.05}
              className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {cat.who_can_use.map((line) => (
                <StaggerItem key={line}>
                  <div className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-5">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-ink-700 leading-relaxed">{line}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      )}

      {/* CTA */}
      {cat.cta && (
        <section className="py-12 md:py-20">
          <Container>
            <Reveal>
              <div className="relative rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 px-8 md:px-12 py-12 md:py-14 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl pointer-events-none"
                />
                <div className="relative grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 text-white">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                      {cat.cta_heading || `Get started with ${cat.title}`}
                    </h2>
                    <div className="mt-4 text-primary-100">
                      <Prose
                        text={cat.cta}
                        className="text-primary-100 [&_p]:text-primary-100"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 lg:items-end">
                    <a
                      href={siteConfig.webApp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="accent" size="lg" className="w-full lg:w-auto">
                        Get Started
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </a>
                    <a
                      href={whatsappLink(
                        `Hi, I'm interested in ${cat.title} on Yantra Biz.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="white" size="lg" className="w-full lg:w-auto">
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp us
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {cat.faq.length > 0 && (
        <section className="py-20 md:py-24 bg-ink-50">
          <Container size="narrow">
            <Reveal>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/10">
                  FAQ
                </div>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                  Common questions
                </h2>
                <p className="mt-3 text-ink-600">
                  Everything you need to know about buying and selling{" "}
                  {cat.title.toLowerCase()} on Yantra Biz.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 space-y-3">
              {cat.faq.map((item, idx) => (
                <Reveal key={item.question} delay={idx * 0.05}>
                  <details className="group rounded-2xl border border-ink-200 bg-white overflow-hidden open:shadow-soft transition-shadow">
                    <summary className="flex items-start justify-between gap-4 cursor-pointer p-5 md:p-6 list-none">
                      <h3 className="font-display font-semibold text-ink-900 text-base md:text-lg pr-4">
                        {item.question}
                      </h3>
                      <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink-100 text-ink-700 group-open:bg-primary group-open:text-white transition-colors">
                        <svg
                          className="h-4 w-4 transition-transform group-open:rotate-45"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-5 md:px-6 pb-6 -mt-2 text-ink-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related industries */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
                  Explore related industries
                </h2>
                <p className="mt-2 text-ink-600">
                  Same trusted marketplace. Different machinery.
                </p>
              </div>
              <Link
                href="/industries"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
              >
                View all
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((ind) => {
              const RIcon = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group rounded-2xl border border-ink-200 bg-white p-6 hover:-translate-y-1 hover:shadow-card hover:border-primary/20 transition-all"
                >
                  <div
                    className={cn(
                      "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                      ind.iconBgClass,
                    )}
                  >
                    <RIcon className={cn("h-5 w-5", ind.iconColorClass)} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900 group-hover:text-primary transition-colors">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 line-clamp-2">
                    {ind.tagline}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
