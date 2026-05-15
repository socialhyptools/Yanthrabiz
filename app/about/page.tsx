import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Globe2, HeartHandshake, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import { CountUp } from "@/components/shared/CountUp";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Yantra Biz — Global Marketplace for Used Industrial Machinery",
  description:
    "Yantra Biz connects buyers and verified sellers of pre-owned and refurbished industrial machinery across 11 industries and 16+ countries. Built to make machinery trade transparent, direct, and accessible.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Trust by default",
    body:
      "Every seller is verified. Every listing carries real specs. No phantom inventory, no inflated brokerage, no hidden middlemen.",
  },
  {
    icon: Globe2,
    title: "Global by design",
    body:
      "Used machinery is a globally distributed resource. We make it tradable across borders — and we help with the messy bits when needed.",
  },
  {
    icon: HeartHandshake,
    title: "Direct connections",
    body:
      "Buyers talk to sellers. Sellers talk to buyers. We stay out of the conversation that closes the deal — and stay in the one that protects it.",
  },
  {
    icon: Compass,
    title: "Built for operators",
    body:
      "Plant heads, founders, fleet managers, and procurement teams use Yantra Biz every day. Every workflow is shaped by their feedback.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
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
              <span className="text-ink-900">About</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/10">
                About {siteConfig.name}
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight leading-[1.05]">
                Making industrial machinery as{" "}
                <span className="gradient-text-primary">tradable as anything else.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ink-600 leading-relaxed">
                Yantra Biz is the global marketplace for used and refurbished
                industrial machinery. We connect operators across {industriesCount()}{" "}
                industries with verified sellers — directly, transparently, and
                without the inflated layers of traditional brokerage.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal as="div" className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Our mission
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                Unlock the value sitting on factory floors worldwide.
              </h2>
            </Reveal>
            <Reveal as="div" delay={0.1} className="lg:col-span-7 space-y-5 text-lg text-ink-700 leading-relaxed">
              <p>
                There is more usable industrial machinery sitting idle in
                warehouses, basements, and decommissioned plants than there is
                being purchased new each year. Most of it never finds its next
                operator — locked behind brokers, geographies, and a lack of
                visibility.
              </p>
              <p>
                Yantra Biz exists to change that. We give sellers a global
                audience and give buyers a transparent, verified place to source
                the machines that keep their lines running. We measure success
                in deals closed and downtime avoided, not in clicks or
                impressions.
              </p>
              <p>
                We started in Tiruvallur, India and serve operators across
                {" "}{siteConfig.stats[0].value} countries today. Every workflow on the
                platform is shaped by the feedback of the buyers and sellers who
                actually use it.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="py-16 md:py-20 bg-ink-50">
        <Container>
          <Reveal>
            <h2 className="text-center text-2xl md:text-3xl font-bold text-ink-900 tracking-tight max-w-2xl mx-auto">
              Numbers from the marketplace
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {siteConfig.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white border border-ink-200 px-6 py-7 text-center"
              >
                <div className="text-4xl font-bold text-primary tracking-tight">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-1.5 text-sm font-medium text-ink-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
                What we stand for
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
                Four ideas that shape every product decision.
              </h2>
            </div>
          </Reveal>

          <StaggerContainer
            stagger={0.06}
            className="mt-12 grid sm:grid-cols-2 gap-5 md:gap-6"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <article className="h-full rounded-3xl border border-ink-200 bg-white p-8 hover:shadow-soft transition-shadow">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold text-ink-900 tracking-tight">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-ink-600 leading-relaxed">{v.body}</p>
                  </article>
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
            <div className="rounded-3xl bg-gradient-to-br from-primary-900 to-primary-700 px-8 md:px-12 py-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Want to talk to the team?
              </h2>
              <p className="mt-3 text-primary-100 max-w-xl mx-auto">
                Whether you are a buyer, a seller, or a partner — we love
                talking to people who care about industrial machinery.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Contact us
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <a
                  href={siteConfig.webApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="white" size="lg">
                    Get Started
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

function industriesCount() {
  return "11";
}
