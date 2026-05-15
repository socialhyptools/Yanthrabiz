import {
  ShieldCheck,
  Globe2,
  Clock,
  Wallet,
  Users,
  Headphones,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified listings",
    body:
      "Every seller on Yantra Biz is verified before listings go live. Specs you can trust, photos that match reality.",
  },
  {
    icon: Globe2,
    title: "Global reach",
    body:
      "Buyers in 16+ countries, sellers across India and beyond. Cross-border machinery sourcing made approachable.",
  },
  {
    icon: Clock,
    title: "Time saved",
    body:
      "Skip weeks of brokers and email chains. Find a candidate machine in minutes, not months.",
  },
  {
    icon: Wallet,
    title: "Better economics",
    body:
      "Pre-owned and refurbished machinery at a fraction of new prices, with full transparency on condition.",
  },
  {
    icon: Users,
    title: "Direct connections",
    body:
      "Talk to the actual seller — no middlemen taking commissions, no information bottlenecks.",
  },
  {
    icon: Headphones,
    title: "Concierge support",
    body:
      "Our team helps with inspections, logistics referrals, and language assistance when deals cross borders.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
              Why Yantra Biz
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
              A marketplace built for{" "}
              <span className="gradient-text-accent">serious operators.</span>
            </h2>
            <p className="mt-4 text-lg text-ink-600 leading-relaxed">
              Real listings, real sellers, real outcomes. Every product decision
              we make optimises for the trust a high-value machinery purchase
              demands.
            </p>
          </div>
        </Reveal>

        <StaggerContainer
          stagger={0.06}
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <div className="h-full rounded-2xl border border-ink-200 bg-white p-7 hover:border-primary/20 hover:shadow-soft transition-all">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-ink-600 leading-relaxed">{f.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
