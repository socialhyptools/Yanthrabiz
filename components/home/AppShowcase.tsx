"use client";

import { motion } from "framer-motion";
import {
  Check,
  Smartphone,
  Container as ContainerIcon,
  Pill,
  Utensils,
  Search,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { GooglePlayIcon, AppleIcon } from "@/components/icons/StoreBadges";

const bullets = [
  "Search across 11 industries from your pocket",
  "Direct messaging with verified sellers",
  "Saved searches, price alerts, and watchlists",
  "Document & spec sharing made easy",
  "Available in English, Hindi, and Tamil",
];

export function AppShowcase() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-primary-400/30 blur-3xl"
      />

      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="lg:col-span-7 text-white">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white border border-white/15">
                <Smartphone className="h-3.5 w-3.5" />
                Mobile-first
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                The whole marketplace,{" "}
                <span className="text-accent-300">in your pocket.</span>
              </h2>
              <p className="mt-4 text-lg text-primary-100 leading-relaxed max-w-xl">
                Browse, message, and close deals from the field, the factory
                floor, or anywhere in between. The Yantra Biz app brings the
                global machinery marketplace to wherever you are.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-7 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-primary-100">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={siteConfig.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-white text-ink-900 px-5 py-3 font-semibold shadow-soft hover:shadow-glow transition-shadow"
                >
                  <GooglePlayIcon className="h-7 w-7" />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-wider text-ink-500">
                      Get it on
                    </span>
                    <span>Google Play</span>
                  </span>
                </a>
                <a
                  href={siteConfig.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-white text-ink-900 px-5 py-3 font-semibold shadow-soft hover:shadow-glow transition-shadow"
                >
                  <AppleIcon className="h-7 w-7" />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-wider text-ink-500">
                      Download on the
                    </span>
                    <span>App Store</span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — Phone mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const mockListings = [
  {
    tag: "Plastic",
    title: "Injection Molding 250T",
    price: "Available",
    icon: ContainerIcon,
    tint: "from-sky-100 to-sky-50",
    iconColor: "text-sky-700",
  },
  {
    tag: "Pharma",
    title: "Tablet Press — 36 Station",
    price: "Refurbished",
    icon: Pill,
    tint: "from-emerald-100 to-emerald-50",
    iconColor: "text-emerald-700",
  },
  {
    tag: "Food",
    title: "Liquid Filling Line",
    price: "Used · Y2020",
    icon: Utensils,
    tint: "from-lime-100 to-lime-50",
    iconColor: "text-lime-700",
  },
] as const;

function PhoneMockup() {
  return (
    <div className="relative w-[280px] sm:w-[320px] aspect-[9/19]">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-8 bg-accent/30 rounded-full blur-3xl"
      />
      <div className="relative h-full w-full rounded-[3rem] bg-ink-900 border-[10px] border-ink-900 shadow-glow overflow-hidden">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-ink-900 z-10" />
        {/* Screen content */}
        <div className="h-full w-full bg-gradient-to-b from-primary-50 to-white overflow-hidden">
          <div className="px-4 pt-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-primary">Yantra Biz</span>
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-primary-700 grid place-items-center text-[10px] font-bold text-white">
                AK
              </div>
            </div>
            <div className="mt-3 rounded-xl bg-white border border-ink-200 px-3 py-2.5 flex items-center gap-2 shadow-soft">
              <Search className="h-4 w-4 text-ink-400" />
              <span className="text-xs text-ink-500">Search machinery…</span>
            </div>

            <div className="mt-4 flex gap-2 overflow-hidden">
              {["All", "Plastic", "Pharma", "Paper"].map((c, i) => (
                <span
                  key={c}
                  className={
                    i === 0
                      ? "shrink-0 rounded-full bg-primary text-white text-[10px] font-semibold px-3 py-1.5"
                      : "shrink-0 rounded-full bg-white border border-ink-200 text-[10px] font-medium text-ink-600 px-3 py-1.5"
                  }
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-4 space-y-3">
              {mockListings.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl bg-white border border-ink-200 shadow-soft p-2.5 flex gap-2.5"
                  >
                    <div
                      className={`h-14 w-14 rounded-lg bg-gradient-to-br ${item.tint} shrink-0 grid place-items-center relative overflow-hidden`}
                    >
                      <Icon className={`h-7 w-7 ${item.iconColor}`} />
                      <span className="absolute bottom-1 right-1 text-[7px] font-bold uppercase tracking-wider text-ink-900/40">
                        YB
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-semibold uppercase tracking-wider text-accent">
                        {item.tag}
                      </div>
                      <div className="text-xs font-semibold text-ink-900 truncate">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-ink-500 mt-0.5">
                        {item.price}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
