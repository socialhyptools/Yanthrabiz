import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, telLink, mailtoLink } from "@/lib/site";
import { industries } from "@/lib/industries";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import { GooglePlayIcon, AppleIcon } from "@/components/icons/StoreBadges";

const socialIcons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-950 text-ink-300 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 15% 0%, rgb(26 42 124 / 0.35) 0%, transparent 45%), radial-gradient(circle at 85% 100%, rgb(218 31 38 / 0.18) 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-flex items-center mb-5">
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-ink-400 leading-relaxed max-w-md">
              The global marketplace for used and refurbished industrial
              machinery. Connecting buyers and verified sellers across 11
              industries and 16+ countries.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={siteConfig.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                <GooglePlayIcon className="h-6 w-6" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-wider text-ink-400">
                    Get it on
                  </span>
                  <span className="font-semibold">Google Play</span>
                </span>
              </a>
              <a
                href={siteConfig.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                <AppleIcon className="h-6 w-6" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-wider text-ink-400">
                    Download on the
                  </span>
                  <span className="font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </div>

          {/* Industries column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {industries.slice(0, 8).map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-ink-400 hover:text-white transition-colors text-sm"
                  >
                    {ind.short}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-white hover:text-accent-400 transition-colors text-sm font-semibold"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-ink-400 hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/buy"
                  className="text-ink-400 hover:text-white transition-colors text-sm"
                >
                  For Buyers
                </Link>
              </li>
              <li>
                <Link
                  href="/sell"
                  className="text-ink-400 hover:text-white transition-colors text-sm"
                >
                  For Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-ink-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-ink-400 hover:text-white transition-colors text-sm"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-ink-400 hover:text-white transition-colors text-sm"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Get in touch
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={telLink()}
                  className="flex items-start gap-2.5 text-ink-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={mailtoLink()}
                  className="flex items-start gap-2.5 text-ink-400 hover:text-white transition-colors text-sm break-all"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-ink-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.city},{" "}
                  {siteConfig.address.state} {siteConfig.address.postalCode},{" "}
                  {siteConfig.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {Object.entries(siteConfig.socials).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              if (!Icon) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} on ${key}`}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/5 text-ink-400 hover:bg-accent hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
