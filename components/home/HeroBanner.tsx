"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SWIPE_THRESHOLD = 50;

type Slide = {
  id: number;
  desktop: string;
  mobile: string;
  alt: string;
};

const slides: Slide[] = [
  {
    id: 1,
    desktop: "/Banner/DESKTOP/Banner (1).jpeg",
    mobile: "/Banner/MOBILE/01.png",
    alt: "Yantra Biz featured industrial machinery",
  },
  {
    id: 2,
    desktop: "/Banner/DESKTOP/Banner (2).jpeg",
    mobile: "/Banner/MOBILE/02.png",
    alt: "Yantra Biz verified machinery marketplace",
  },
  {
    id: 3,
    desktop: "/Banner/DESKTOP/Banner (3).jpeg",
    mobile: "/Banner/MOBILE/03.png",
    alt: "Yantra Biz global machinery sourcing",
  },
  {
    id: 4,
    desktop: "/Banner/DESKTOP/Banner (4).jpeg",
    mobile: "/Banner/MOBILE/01.png",
    alt: "Yantra Biz refurbished machinery",
  },
  {
    id: 5,
    desktop: "/Banner/DESKTOP/Banner (5).jpeg",
    mobile: "/Banner/MOBILE/02.png",
    alt: "Yantra Biz industrial machinery deals",
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
