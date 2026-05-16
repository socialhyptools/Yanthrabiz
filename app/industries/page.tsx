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
                    className="group relative block h-full rounded-3xl overflow-hidden border border-ink-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-primary/20"
                  >
                    <div className="aspect-[16/10] relative overflow-hidden bg-ink-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={encodeURI(ind.banner)}
                        alt={`${ind.title} on Yantra Biz`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-900/20 to-transparent" />

                      <div className="absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 backdrop-blur shadow-soft">
                        <Icon className={cn("h-5 w-5", ind.iconColorClass)} />
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <h2 className="font-display text-xl md:text-2xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] leading-tight">
                          {ind.title}
                        </h2>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-ink-600 leading-relaxed">{ind.tagline}</p>
                      <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
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
