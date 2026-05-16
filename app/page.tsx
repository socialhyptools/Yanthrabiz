import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { HeroBanner } from "@/components/home/HeroBanner";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyUs } from "@/components/home/WhyUs";
import { AppShowcase } from "@/components/home/AppShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { WebsiteJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";
import { industries } from "@/lib/industries";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <WebsiteJsonLd />
      <ItemListJsonLd
        name="Industries on Yantra Biz"
        items={industries.map((i) => ({
          name: i.title,
          url: `/industries/${i.slug}`,
          description: i.tagline,
        }))}
      />
      <Hero />
      <HeroBanner />
      <IndustriesGrid />
      <FeaturedListings />
      <HowItWorks />
      <WhyUs />
      <AppShowcase />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
