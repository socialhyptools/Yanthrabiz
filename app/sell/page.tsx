import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Globe2,
  TrendingUp,
  Wallet,
  MessageCircle,
  ListChecks,
} from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Sell Used Industrial Machinery — Reach Buyers in 16+ Countries",
  description:
    "List your pre-owned industrial machinery on Yantra Biz. Reach verified buyers worldwide. No success fees on direct deals, no broker chain — just buyers talking to sellers.",
  alternates: { canonical: "/sell" },
};

const steps = [
  {
    icon: ListChecks,
    title: "Create your listing",
    body:
      "Use the app to add specs, photos, and condition details. Most listings go live in under 10 minutes.",
  },
  {
    icon: Globe2,
    title: "Reach 16+ countries",
    body:
      "Your listing is visible to verified buyers across India and overseas markets, day one.",
  },
  {
    icon: MessageCircle,
    title: "Talk to buyers directly",
    body:
      "Get notified the moment a serious buyer messages you. Reply in the app, on WhatsApp, or by phone.",
  },
  {
    icon: Wallet,
    title: "Close on your terms",
    body:
      "Negotiate, schedule inspections, and finalise payment terms directly. We help with cross-border logistics when needed.",
  },
];

const wins = [
  {
    icon: TrendingUp,
    title: "Higher realisations",
    body: "Direct buyer reach typically delivers 15-30% better prices than working through brokers.",
  },
  {
    icon: Globe2,
    title: "True global reach",
    body: "Buyers in Africa, the Middle East, and South-East Asia browse Yantra Biz daily for Indian-origin machinery.",
  },
  {
    icon: Camera,
    title: "Better presentation",
    body: "Built-in photo guidance and spec templates make your listing look professional, automatically.",
  },
];

export default function SellPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Sell", url: "/sell" },
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
              <span className="text-ink-900">Sell</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700 border border-accent/10">
                For sellers
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight leading-[1.05]">
                Sell your idle machinery —{" "}
                <span className="gradient-text-accent">to a global buyer.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ink-600 leading-relaxed">
                List your used industrial machinery on Yantra Biz and reach
                verified buyers in 16+ countries. No broker chain, no inflated
                commissions — just the operators who actually need your machine.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.webApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="accent" size="xl">
                    List a machine
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href={whatsappLink(
                    "Hi, I'd like to sell machinery on Yantra Biz.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="xl">
                    <MessageCircle className="h-5 w-5" />
                    Talk to a seller specialist
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                Four steps. One platform.
              </h2>
              <p className="mt-3 text-ink-600">
                Whether you have one decommissioned machine or a full line to
                liquidate, the process is the same.
              </p>
            </div>
          </Reveal>

          <StaggerContainer
            stagger={0.08}
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.title}>
                  <div className="relative h-full rounded-3xl border border-ink-200 bg-white p-7">
                    <div className="absolute top-7 right-7 font-display text-4xl font-extrabold text-ink-100">
                      0{idx + 1}
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold text-ink-900 tracking-tight">
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

      {/* Wins */}
      <section className="py-20 md:py-24 bg-ink-50">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700 border border-accent/10">
                What sellers gain
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                Better outcomes than the broker route.
              </h2>
            </div>
          </Reveal>
          <StaggerContainer
            stagger={0.06}
            className="mt-12 grid md:grid-cols-3 gap-5"
          >
            {wins.map((w) => {
              const Icon = w.icon;
              return (
                <StaggerItem key={w.title}>
                  <div className="rounded-2xl bg-white border border-ink-200 p-7 h-full">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display font-bold text-lg text-ink-900">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-ink-600 leading-relaxed">{w.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-accent-700 via-accent-600 to-accent-800 px-8 md:px-12 py-12 text-white text-center overflow-hidden relative">
              <div
                aria-hidden
                className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl pointer-events-none"
              />
              <h2 className="relative text-3xl md:text-4xl font-bold tracking-tight">
                Ready to turn idle assets into a sale?
              </h2>
              <p className="relative mt-3 text-accent-50 max-w-xl mx-auto">
                List your first machine in under 10 minutes on the Yantra Biz
                app.
              </p>
              <div className="relative mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={siteConfig.webApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="white" size="xl">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href={whatsappLink(
                    "Hi, I'd like to sell machinery on Yantra Biz.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:border-white/60"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp us
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
