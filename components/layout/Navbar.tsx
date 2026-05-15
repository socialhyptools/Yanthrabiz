"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ExternalLink, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { industries } from "@/lib/industries";
import { Button } from "@/components/ui/Button";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/industries", label: "Industries" },
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "glass border-b border-ink-200/60 shadow-soft"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
          <div className="flex h-18 items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/yantralogo.webp"
                alt={`${siteConfig.name} logo`}
                width={44}
                height={44}
                priority
                className="h-10 w-10 object-contain"
              />
              <span className="font-display font-bold text-lg tracking-tight text-primary">
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-2 text-[15px] font-medium rounded-md transition-colors",
                  isActive("/")
                    ? "text-primary bg-primary-50"
                    : "text-ink-700 hover:text-primary",
                )}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <Link
                  href="/industries"
                  className={cn(
                    "inline-flex items-center gap-1 px-3 py-2 text-[15px] font-medium rounded-md transition-colors",
                    isActive("/industries")
                      ? "text-primary bg-primary-50"
                      : "text-ink-700 hover:text-primary",
                  )}
                >
                  Industries
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      industriesOpen && "rotate-180",
                    )}
                  />
                </Link>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    >
                      <div className="w-[680px] rounded-2xl border border-ink-200 bg-white shadow-card p-4">
                        <div className="grid grid-cols-2 gap-1">
                          {industries.map((ind) => {
                            const Icon = ind.icon;
                            return (
                              <Link
                                key={ind.slug}
                                href={`/industries/${ind.slug}`}
                                className="group flex items-start gap-3 rounded-xl p-3 hover:bg-ink-50 transition-colors"
                              >
                                <div
                                  className={cn(
                                    "shrink-0 rounded-lg p-2",
                                    ind.iconBgClass,
                                  )}
                                >
                                  <Icon
                                    className={cn(
                                      "h-5 w-5",
                                      ind.iconColorClass,
                                    )}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-semibold text-sm text-ink-900 group-hover:text-primary transition-colors">
                                    {ind.title}
                                  </div>
                                  <div className="text-xs text-ink-500 line-clamp-2 mt-0.5">
                                    {ind.tagline}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <Link
                          href="/industries"
                          className="mt-3 flex items-center justify-center gap-1 rounded-lg bg-primary-50 py-2.5 text-sm font-semibold text-primary hover:bg-primary-100 transition-colors"
                        >
                          View all industries
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {primaryLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-[15px] font-medium rounded-md transition-colors",
                    isActive(link.href)
                      ? "text-primary bg-primary-50"
                      : "text-ink-700 hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.webApp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex"
              >
                <Button variant="primary" size="md">
                  Get Started
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-ink-800 hover:bg-ink-100 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to offset fixed nav */}
      <div className="h-18" aria-hidden />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-white"
          >
            <div className="h-18" aria-hidden />
            <div className="overflow-y-auto h-[calc(100vh-4.5rem)] px-5 py-6">
              <nav className="flex flex-col gap-1">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 py-3 px-3 text-lg font-semibold rounded-lg transition-colors",
                      isActive(link.href)
                        ? "text-primary bg-primary-50"
                        : "text-ink-900 hover:bg-ink-50",
                    )}
                  >
                    {link.href === "/" && <Home className="h-5 w-5" />}
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-2 px-3">
                  Industries
                </div>
                <div className="flex flex-col gap-0.5">
                  {industries.map((ind) => {
                    const Icon = ind.icon;
                    return (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-ink-50 transition-colors"
                      >
                        <div className={cn("rounded-md p-1.5", ind.iconBgClass)}>
                          <Icon className={cn("h-4 w-4", ind.iconColorClass)} />
                        </div>
                        <span className="text-sm font-medium text-ink-800">
                          {ind.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={siteConfig.webApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button variant="primary" size="lg" className="w-full">
                    Get Started
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href={siteConfig.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button variant="outline" size="lg" className="w-full">
                    Get on Google Play
                  </Button>
                </a>
                <a
                  href={siteConfig.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button variant="outline" size="lg" className="w-full">
                    Download on the App Store
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
