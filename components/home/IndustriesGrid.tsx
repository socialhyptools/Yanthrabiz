import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/industries";
import { Container } from "@/components/shared/Container";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export function IndustriesGrid() {
  return (
    <section
      id="industries"
      className="relative py-20 md:py-28 mesh-bg overflow-hidden"
    >
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Industries
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
              One marketplace.{" "}
              <span className="gradient-text-primary">Eleven industries.</span>
            </h2>
            <p className="mt-4 text-lg text-ink-600 leading-relaxed">
              Whether you are sourcing a single pre-owned machine or replacing a
              full production line, Yantra Biz brings buyers and verified
              sellers together across the industries that move the world.
            </p>
          </div>
        </Reveal>

        <StaggerContainer
          stagger={0.06}
          className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
        >
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <StaggerItem key={ind.slug}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group relative block h-full rounded-2xl overflow-hidden bg-white border border-ink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-primary/20"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-ink-100">
                    {/* Flipped horizontally so the artwork's white space sits behind the title overlay on the left */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI(ind.banner)}
                      alt={`${ind.title} on Yantra Biz`}
                      className="absolute inset-0 w-full h-full object-cover scale-x-[-1] transition-transform duration-700 group-hover:scale-x-[-1.1] group-hover:scale-y-110"
                      loading="lazy"
                    />
                    {/* Gradient overlay for icon legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/65 via-ink-900/15 to-transparent" />

                    {/* Floating icon badge */}
                    <div
                      className={cn(
                        "absolute top-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 backdrop-blur shadow-soft transition-transform group-hover:scale-110",
                      )}
                    >
                      <Icon className={cn("h-5 w-5", ind.iconColorClass)} />
                    </div>

                    {/* Bottom: title sits on the image with gradient backing */}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="font-display text-lg md:text-xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] leading-tight">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-ink-600 leading-relaxed line-clamp-2">
                      {ind.tagline}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Explore industry
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:gap-2.5 transition-all"
            >
              See all industries
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
