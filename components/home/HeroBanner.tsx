"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const SWIPE_THRESHOLD = 50;

type Overlay = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  cta?: { label: string; href: string };
  /** Position: "left" (default) or "right" — choose based on where the banner artwork leaves empty space */
  position?: "left" | "right";
};

type Slide = {
  id: number;
  desktop: string;
  mobile: string;
  alt: string;
  /** Optional overlay shown on desktop only; mobile uses the banner's own design */
  overlay?: Overlay;
};

const slides: Slide[] = [
  {
    id: 1,
    desktop: "/Banner/DESKTOP/Banner (1).jpeg",
    mobile: "/Banner/MOBILE/01.png",
    alt: "Yantra Biz — best deals on used machinery",
  },
  {
    id: 2,
    desktop: "/Banner/DESKTOP/Banner (2).jpeg",
    mobile: "/Banner/MOBILE/02.png",
    alt: "Yantra Biz — powering industries with used machines",
  },
  {
    id: 3,
    desktop: "/Banner/DESKTOP/Banner (3).jpeg",
    mobile: "/Banner/MOBILE/03.png",
    alt: "Yantra Biz — how to sell your industrial machinery",
    overlay: {
      eyebrow: "For sellers",
      headline: "Turn idle machinery into your next sale.",
      subhead:
        "List in minutes. Reach verified buyers across 16+ countries. Close direct, with no broker chain.",
      cta: { label: "List a machine", href: siteConfig.webApp },
      position: "left",
    },
  },
  {
    id: 4,
    desktop: "/Banner/DESKTOP/Banner (4).jpeg",
    mobile: "/Banner/MOBILE/01.png",
    alt: "Yantra Biz — refurbished industrial machinery",
  },
  {
    id: 5,
    desktop: "/Banner/DESKTOP/Banner (5).jpeg",
    mobile: "/Banner/MOBILE/02.png",
    alt: "Yantra Biz — industrial machinery deals",
  },
];

const AUTOPLAY_MS = 5500;

export function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, paused]);

  const onTouchStart = (e: React.TouchEvent) => {
    setPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    setPaused(false);
    if (touchStartX.current === null || touchStartY.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const dx = touchStartX.current - endX;
    const dy = touchStartY.current - endY;
    touchStartX.current = null;
    touchStartY.current = null;
    // Only fire swipe when horizontal motion clearly dominates vertical
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
    if (dx > 0) next();
    else prev();
  };

  return (
    <section className="relative pb-16 md:pb-20 -mt-6 md:-mt-10">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div
          className="relative aspect-[16/9] overflow-hidden rounded-xl md:rounded-2xl bg-primary-950 shadow-card touch-pan-y select-none"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute inset-0">
            <AnimatePresence initial={false}>
              <motion.div
                key={slides[index].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={encodeURI(slides[index].desktop)}
                  alt={slides[index].alt}
                  className="absolute inset-0 w-full h-full object-cover hidden sm:block"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={encodeURI(slides[index].mobile)}
                  alt={slides[index].alt}
                  className="absolute inset-0 w-full h-full object-cover sm:hidden"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* Overlay text — desktop only, slide-specific */}
                {slides[index].overlay && (
                  <div
                    className={cn(
                      "hidden md:flex absolute inset-y-0 items-center px-10 lg:px-16",
                      slides[index].overlay.position === "right"
                        ? "right-0 left-1/2 justify-end text-right"
                        : "left-0 right-1/2",
                    )}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: slides[index].overlay.position === "right" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                      className="text-white max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                    >
                      {slides[index].overlay.eyebrow && (
                        <div className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wider border border-white/20">
                          {slides[index].overlay.eyebrow}
                        </div>
                      )}
                      <h2 className="mt-4 font-display text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.05] tracking-tight">
                        {slides[index].overlay.headline}
                      </h2>
                      {slides[index].overlay.subhead && (
                        <p className="mt-4 text-base lg:text-lg text-white/90 leading-relaxed">
                          {slides[index].overlay.subhead}
                        </p>
                      )}
                      {slides[index].overlay.cta && (
                        <a
                          href={slides[index].overlay.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-primary-900 px-5 py-3 text-sm lg:text-base font-semibold shadow-card hover:bg-white/95 hover:shadow-glow transition-all"
                        >
                          {slides[index].overlay.cta.label}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="hidden sm:inline-flex absolute left-3 md:left-5 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/85 backdrop-blur border border-white/30 text-ink-900 hover:bg-white shadow-card transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="hidden sm:inline-flex absolute right-3 md:right-5 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/85 backdrop-blur border border-white/30 text-ink-900 hover:bg-white shadow-card transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-ink-900/40 backdrop-blur px-3 py-1.5 border border-white/10">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index
                      ? "w-8 bg-white"
                      : "w-1.5 bg-white/50 hover:bg-white/75",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
