import {
  ShieldCheck,
  MapPin,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import type { Product } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/Reveal";

/**
 * Renders a grid of real product cards for an industry page.
 * Each card supports up to 3 images and shows a small thumbnail row.
 */
export function ProductGallery({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <StaggerContainer
      stagger={0.08}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
    >
      {products.map((p) => (
        <StaggerItem key={p.slug}>
          <article className="group h-full rounded-3xl bg-white border border-ink-200 overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="aspect-[16/10] relative overflow-hidden bg-ink-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={encodeURI(p.images[0])}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink-900/30 to-transparent" />
              <div className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                {p.condition}
              </div>
              <div className="absolute top-3 right-3 rounded-full bg-emerald-500/95 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white inline-flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" />
                Verified
              </div>
            </div>

            {/* Thumbnail strip (extra images) */}
            {p.images.length > 1 && (
              <div className="flex gap-1.5 p-2 border-b border-ink-100 bg-ink-50/40">
                {p.images.slice(0, 3).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square w-16 md:w-20 rounded-lg overflow-hidden bg-white border border-ink-200"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI(img)}
                      alt={`${p.name} view ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="p-5 md:p-6 flex flex-col flex-1">
              <h3 className="font-display text-xl font-bold text-ink-900 leading-tight">
                {p.name}
              </h3>

              {p.highlights && p.highlights.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center text-[11px] font-medium text-ink-700 bg-ink-100 rounded-full px-2.5 py-0.5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex items-center gap-4 text-xs text-ink-500">
                {p.year && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {p.year}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {p.location}
                </span>
              </div>

              <a
                href={siteConfig.webApp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all self-start"
              >
                Enquire on the app
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
