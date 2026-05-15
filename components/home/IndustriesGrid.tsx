import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/industries";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
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
                  className="group relative block h-full rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-primary/20"
                >
                  <div
                    aria-hidden
                    className={cn(
                      "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br",
                      ind.accentClass,
                    )}
                  />
                  <div className="relative">
                    <div
                      className={cn(
                        "inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                        ind.iconBgClass,
                      )}
                    >
                      <Icon className={cn("h-6 w-6", ind.iconColorClass)} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink-900 tracking-tight group-hover:text-primary transition-colors">
                      {ind.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed line-clamp-3">
                      {ind.tagline}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all">
                      Explore
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
