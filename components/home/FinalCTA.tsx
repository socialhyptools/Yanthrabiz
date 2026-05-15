import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Container>
        <Reveal>
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 px-8 md:px-16 py-16 md:py-20 overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-primary-400/30 blur-3xl"
            />

            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Ready to find your next machine?
              </h2>
              <p className="mt-5 text-lg text-primary-100 leading-relaxed max-w-2xl">
                Sign in to Yantra Biz from your browser or download the
                mobile app to start browsing thousands of verified listings.
                Selling? List your machinery in minutes and reach buyers
                across 16+ countries.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.webApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="accent" size="xl" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href={whatsappLink(
                    `Hi, I'd like to know more about Yantra Biz.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="white" size="xl" className="w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-primary-200">
                <Link
                  href="/buy"
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  For Buyers
                </Link>
                <Link
                  href="/sell"
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  For Sellers
                </Link>
                <Link
                  href="/industries"
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Browse Industries
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
