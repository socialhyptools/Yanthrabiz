import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Calendar,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { featuredProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

export function FeaturedListings() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-ink-50/60 to-white">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10 md:mb-14 flex-wrap">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
                Featured listings
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
                Real machinery,{" "}
                <span className="gradient-text-primary">ready to ship.</span>
              </h2>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">
                A small slice of the verified listings live on Yantra Biz right
                now. Browse the full marketplace to see thousands more across
                every industry.
              </p>
            </div>
            <a
              href={siteConfig.webApp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
            >
              View all listings
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <StaggerContainer
          stagger={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {featuredProducts.map((p) => (
            <StaggerItem key={p.slug}>
              <article className="group h-full rounded-3xl bg-white border border-ink-200 overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden bg-ink-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={encodeURI(p.images[0])}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink-900/30 to-transparent" />
                  <div className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {p.condition}
                  </div>
                  <div className="absolute top-3 right-3 rounded-full bg-emerald-500/95 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white inline-flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    Verified
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <Link
                    href={`/industries/${p.categorySlug}`}
                    className="text-[10px] font-semibold uppercase tracking-wider text-accent hover:underline"
                  >
                    {p.category}
                  </Link>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-ink-900 leading-tight">
                    {p.name}
                  </h3>

                  {p.highlights && p.highlights.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center text-[10px] font-medium text-ink-700 bg-ink-100 rounded-full px-2 py-0.5"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-4 text-xs text-ink-500">
                    {p.year && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {p.year}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {p.location}
                    </span>
                  </div>

                  <a
                    href={siteConfig.webApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all self-start"
                  >
                    View details
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.2}>
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.webApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                Explore the marketplace
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Link href="/industries">
              <Button variant="outline" size="lg">
                Browse all industries
              </Button>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
