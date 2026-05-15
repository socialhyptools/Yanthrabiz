"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Search, ShieldCheck, Globe } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/shared/CountUp";
import { Container } from "@/components/shared/Container";

const easeOut = "easeOut" as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden gradient-hero pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Decorative orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />

      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-primary mb-6"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span className="uppercase tracking-wider">
                Serving 16+ countries worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: easeOut }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold leading-[1.05] tracking-tight text-ink-900"
            >
              Buy and sell{" "}
              <span className="gradient-text-primary">used industrial</span>{" "}
              <br className="hidden sm:block" />
              machinery — <span className="gradient-text-accent">globally.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
              className="mt-6 text-lg sm:text-xl text-ink-600 leading-relaxed max-w-2xl"
            >
              From agriculture and pharma to paper, plastic, food, and chemical
              processing — {siteConfig.name} connects you with verified sellers
              and serious buyers across 11 industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: easeOut }}
              className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href={siteConfig.webApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="xl" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Link href="/industries">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Browse Industries
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Verified sellers
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Search className="h-4 w-4 text-primary" />
                11 industries
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-primary" />
                Global reach
              </span>
            </motion.div>
          </div>

          {/* Right column — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
            className="lg:col-span-5 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-ink-200 bg-white/70 backdrop-blur px-6 py-7 hover:shadow-card transition-shadow"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary tracking-tight">
                <CountUp value={stat.value} />
              </div>
              <div className="mt-1.5 text-sm text-ink-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative max-w-md mx-auto lg:max-w-none px-2 lg:px-0">
      {/* Main card — listing preview */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-3xl bg-white border border-ink-200 shadow-glow overflow-hidden"
      >
        {/* Image area — real machinery photo */}
        <div className="aspect-[16/10] relative overflow-hidden bg-ink-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/injectionMolding.jpg"
            alt="Used injection molding machine listing on Yantra Biz marketplace"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          {/* Top-down gradient overlay for badge legibility */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/30"
          />

          {/* Top-left badge */}
          <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white text-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-soft">
            Featured
          </div>
          {/* Top-right status chip */}
          <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-white/15 backdrop-blur border border-white/20 px-2 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-semibold text-white">Active</span>
          </div>
          {/* Bottom-right tag */}
          <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-ink-900/80 backdrop-blur border border-white/10 px-2 py-1 text-[10px] font-semibold text-white">
            Refurbished
          </div>
        </div>

        {/* Content section */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">
              Plastic Machinery
            </div>
            <div className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5">
              Available
            </div>
          </div>
          <div className="mt-1.5 font-semibold text-ink-900 text-[15px]">
            Injection Molding Line — 250T
          </div>
          <div className="mt-1 text-xs text-ink-500">
            Year 2021 · Ahmedabad, India
          </div>
          <div className="mt-3 pt-3 border-t border-ink-100 grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-ink-400">
                Clamp force
              </div>
              <div className="text-xs font-semibold text-ink-900">250 T</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-ink-400">
                Shot wt
              </div>
              <div className="text-xs font-semibold text-ink-900">680 g</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-ink-400">
                Hours
              </div>
              <div className="text-xs font-semibold text-ink-900">14,200</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating "Verified seller" — top right, overlapping card */}
      <motion.div
        animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-3 right-2 lg:-right-3 rounded-2xl bg-white border border-ink-200 shadow-card px-3.5 py-2.5 flex items-center gap-2.5 z-10"
      >
        <div className="h-8 w-8 rounded-lg bg-emerald-100 grid place-items-center">
          <ShieldCheck className="h-4 w-4 text-emerald-700" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-ink-900">Verified seller</div>
          <div className="text-[10px] text-ink-500">Trust score 98%</div>
        </div>
      </motion.div>

      {/* Floating "16+ countries" — bottom left, overlapping card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 left-2 lg:-left-3 rounded-2xl bg-white border border-ink-200 shadow-card px-3.5 py-2.5 flex items-center gap-2.5 z-10"
      >
        <div className="h-8 w-8 rounded-lg bg-primary-100 grid place-items-center">
          <Globe className="h-4 w-4 text-primary" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-ink-900">16+ countries</div>
          <div className="text-[10px] text-ink-500">Buyers worldwide</div>
        </div>
      </motion.div>
    </div>
  );
}
