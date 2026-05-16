import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Filter,
  Globe2,
  Headphones,
  MessageCircle,
} from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/industries";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Buy Used Industrial Machinery — Verified Sellers, Global Listings",
  description:
    "Browse thousands of verified used machinery listings on Yantra Biz. Filter by industry, condition, and location. Talk directly to sellers — no middlemen, no hidden fees.",
  alternates: { canonical: "/buy" },
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified sellers",
    body: "Every seller is identity-verified before their listings go live.",
  },
  {
    icon: Filter,
    title: "Powerful filters",
    body: "Narrow by industry, brand, year, condition, capacity, and location.",
  },
  {
    icon: Globe2,
    title: "Global inventory",
    body: "Source machines from across India and 16+ countries worldwide.",
  },
  {
    icon: Headphones,
    title: "Concierge help",
    body: "Get inspection, transport, and language support when you need it.",
  },
];

export default function BuyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Buy", url: "/buy" },
        ]}
      />

      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 gradient-hero overflow-hidden">
        <Container>
          <Reveal>
            <nav className="text-sm text-ink-500 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink-900">Buy</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/10">
                For buyers
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight leading-[1.05]">
                Find the right machine.{" "}
                <span className="gradient-text-primary">In days, not months.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ink-600 leading-relaxed">
                Skip the broker chain. Yantra Biz connects you directly with
                verified sellers of pre-owned and refurbished industrial
                machinery — across 11 industries and 16+ countries.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.webApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="xl">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href={whatsappLink(
                    "Hi, I'm looking to buy industrial machinery on Yantra Biz.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="xl">
                    <MessageCircle className="h-5 w-5" />
                    Talk to a buyer specialist
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* How buyers use Yantra Biz */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                Built for the way you actually buy machinery.
              </h2>
            </div>
          </Reveal>
          <StaggerContainer
            stagger={0.06}
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              {
                icon: Search,
                title: "Search",
                body: "Search by category, brand, year, or specification. Save your queries.",
              },
              {
                icon: Filter,
                title: "Shortlist",
                body: "Compare machines side-by-side. Watch a few before committing.",
              },
              {
                icon: MessageCircle,
                title: "Message",
                body: "Talk directly to the seller. Ask for more photos, specs, references.",
              },
              {
                icon: ShieldCheck,
                title: "Close",
                body: "Inspect, negotiate, and close. Our team helps where needed.",
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.title}>
                  <div className="rounded-2xl border border-ink-200 bg-white p-7 h-full">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display font-bold text-lg text-ink-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-ink-600 leading-relaxed">{s.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-24 bg-ink-50">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/10">
                Why buyers choose us
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                Less broker tax. More buying power.
              </h2>
            </div>
          </Reveal>
          <StaggerContainer
            stagger={0.05}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <StaggerItem key={b.title}>
                  <div className="rounded-2xl bg-white border border-ink-200 p-6 h-full">
                    <Icon className="h-7 w-7 text-accent" />
                    <h3 className="mt-4 font-display font-bold text-ink-900">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
              Pick your industry
            </h2>
            <p className="mt-3 text-ink-600 max-w-2xl">
              Each industry hub shows the categories you can buy, the typical
              machines listed, and what to watch for when shortlisting.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-ink-200 bg-white p-4 hover:border-primary/20 hover:shadow-soft transition-all"
                >
                  <div
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-lg shrink-0",
                      ind.iconBgClass,
                    )}
                  >
                    <Icon className={cn("h-5 w-5", ind.iconColorClass)} />
                  </div>
                  <span className="font-semibold text-sm text-ink-800 group-hover:text-primary transition-colors min-w-0 break-words leading-tight">
                    {ind.short}
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 px-8 md:px-12 py-12 text-white text-center overflow-hidden relative">
              <div
                aria-hidden
                className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl pointer-events-none"
              />
              <h2 className="relative text-3xl md:text-4xl font-bold tracking-tight">
                Start your search on the Yantra Biz app.
              </h2>
              <div className="relative mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={siteConfig.webApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="accent" size="xl">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href={siteConfig.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="white" size="xl">
                    Download for Android
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
