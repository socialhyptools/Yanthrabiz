import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/industries";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "All Industries — Used Industrial Machinery Marketplace",
  description: `Explore all ${industries.length} industries on Yantra Biz — agriculture, pharmaceutical, paper, plastic, leather, food and beverage, chemical, hospital, material handling, and more.`,
  alternates: { canonical: "/industries" },
  openGraph: {
    title: `All Industries | ${siteConfig.name}`,
    description: `Explore all ${industries.length} industries on Yantra Biz.`,
    url: `${siteConfig.url}/industries`,
  },
};

export default function IndustriesIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ]}
      />
      <ItemListJsonLd
        name="Industries on Yantra Biz"
        items={industries.map((i) => ({
          name: i.title,
          url: `/industries/${i.slug}`,
          description: i.tagline,
        }))}
      />

      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 gradient-hero overflow-hidden">
        <Container>
          <Reveal>
            <nav className="text-sm text-ink-500 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink-900">Industries</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight leading-[1.05]">
              Every industry,{" "}
              <span className="gradient-text-primary">one marketplace.</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-ink-600 leading-relaxed max-w-3xl">
              Yantra Biz powers buyers and verified sellers across {industries.length}{" "}
              core industries — from heavy industrial lines to specialised
              pharmaceutical and hospital equipment.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <StaggerContainer
            stagger={0.06}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group relative block h-full rounded-3xl border border-ink-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-primary/20 overflow-hidden"
                  >
                    <div
                      aria-hidden
                      className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br",
                        ind.accentClass,
                      )}
                    />
                    <div className="relative">
                      <div
                        className={cn(
                          "inline-flex h-14 w-14 items-center justify-center rounded-2xl",
                          ind.iconBgClass,
                        )}
                      >
                        <Icon
                          className={cn("h-7 w-7", ind.iconColorClass)}
                        />
                      </div>
                      <h2 className="mt-6 font-display text-xl font-bold text-ink-900 tracking-tight group-hover:text-primary transition-colors">
                        {ind.title}
                      </h2>
                      <p className="mt-2.5 text-ink-600 leading-relaxed">
                        {ind.tagline}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Explore industry
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
