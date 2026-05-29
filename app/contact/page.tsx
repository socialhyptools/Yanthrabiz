import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  HelpCircle,
  Zap,
  Globe2,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  siteConfig,
  telLink,
  mailtoLink,
  whatsappLink,
} from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Industrial Machinery Experts | Get Quote Today",
  description:
    "Get in touch with our team for industrial machinery solutions, pricing, and enquiries. Contact us today for expert assistance and quick support.",
  alternates: { canonical: "/contact/" },
};

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: siteConfig.phone,
    response: "Typically replies in minutes",
    href: whatsappLink("Hi, I'd like to talk to the Yantra Biz team."),
    cta: "Start a chat",
    accent: "from-emerald-500 to-green-600",
    iconBg: "bg-white/15",
    badge: "Fastest",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: siteConfig.phone,
    response: "Mon–Sat · 09:00–18:00 IST",
    href: telLink(),
    cta: "Call now",
    accent: "from-primary-700 to-primary-900",
    iconBg: "bg-white/15",
    badge: null,
  },
  {
    icon: Mail,
    title: "Email",
    detail: siteConfig.email,
    response: "Replies within 2 business hours",
    href: mailtoLink("Yantra Biz enquiry"),
    cta: "Send an email",
    accent: "from-accent-600 to-accent-800",
    iconBg: "bg-white/15",
    badge: null,
  },
];

const promises = [
  {
    icon: Zap,
    title: "2-hour response",
    body: "Our team is on every channel during business hours.",
  },
  {
    icon: Globe2,
    title: "Multilingual",
    body: "English, Hindi, and Tamil — we'll meet you in your language.",
  },
  {
    icon: Headphones,
    title: "No bots",
    body: "Every message reaches a real person on the Yantra Biz team.",
  },
];

const quickAnswers = [
  {
    q: "I want to buy a specific machine — can your team help me find it?",
    a: "Yes. Drop us a WhatsApp message with the machine type, budget, and timeline. Our buyer concierge will scan active listings and reach out to known sellers on your behalf.",
  },
  {
    q: "How do I list my used machinery for sale?",
    a: "Download the Yantra Biz mobile app or sign in from your browser, create a seller account, and follow the guided listing flow. Listings typically go live in under 10 minutes after verification.",
  },
  {
    q: "Do you handle cross-border logistics?",
    a: "We don't move freight ourselves, but we maintain a vetted list of freight forwarders and customs agents across 16+ countries. We're happy to introduce you to the right partner.",
  },
  {
    q: "Is there a fee to buy or sell on Yantra Biz?",
    a: "Browsing and contacting sellers is free. Optional premium features — featured listings, concierge sourcing — are clearly priced before you opt in.",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 gradient-hero overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
        <Container>
          <Reveal>
            <nav className="text-sm text-ink-500 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink-900">Contact</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                We're online — replies in minutes
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink-900 tracking-tight leading-[1.04]">
                Let's talk.{" "}
                <span className="gradient-text-primary">
                  We actually reply.
                </span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ink-600 leading-relaxed">
                Whether you are sourcing a machine, listing one, or exploring a
                partnership — pick the channel you prefer below. WhatsApp is
                fastest, but phone, email, and the message form all reach a
                real human on our team.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Channels */}
      <section className="pb-12 md:pb-16">
        <Container>
          <StaggerContainer
            stagger={0.08}
            className="grid md:grid-cols-3 gap-5"
          >
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={c.title}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`group relative block h-full rounded-3xl bg-gradient-to-br ${c.accent} p-7 text-white hover:-translate-y-1 hover:shadow-glow transition-all overflow-hidden`}
                  >
                    {c.badge && (
                      <span className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider border border-white/20">
                        {c.badge}
                      </span>
                    )}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/10 blur-2xl"
                    />
                    <div className="relative">
                      <div
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${c.iconBg} backdrop-blur border border-white/20`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className="mt-6 font-display text-2xl font-bold tracking-tight">
                        {c.title}
                      </h2>
                      <p className="mt-1 text-white/90 font-semibold">
                        {c.detail}
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        {c.response}
                      </p>
                      <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all">
                        {c.cta}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Promises strip */}
          <Reveal delay={0.1}>
            <div className="mt-8 grid md:grid-cols-3 gap-4 rounded-2xl bg-ink-50 border border-ink-200 p-6">
              {promises.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex items-start gap-3">
                    <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-ink-200">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink-900 text-sm">
                        {p.title}
                      </div>
                      <div className="text-xs text-ink-600 mt-0.5 leading-relaxed">
                        {p.body}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Form + Office */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white via-ink-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Form */}
            <Reveal as="div" className="lg:col-span-3">
              <ContactForm />
            </Reveal>

            {/* Office */}
            <Reveal as="div" delay={0.1} className="lg:col-span-2">
              <div className="rounded-3xl bg-white border border-ink-200 shadow-soft overflow-hidden">
                {/* Map embed */}
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city} ${siteConfig.address.postalCode}, ${siteConfig.address.country}`,
                    )}&output=embed`}
                    title={`${siteConfig.name} office location`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>

                <div className="p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
                    <MapPin className="h-3.5 w-3.5" />
                    Visit us
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-ink-900 tracking-tight">
                    Yantra Biz HQ
                  </h2>
                  <address className="mt-3 not-italic text-ink-700 leading-relaxed">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.city} — {siteConfig.address.postalCode}
                    <br />
                    {siteConfig.address.state}, {siteConfig.address.country}
                  </address>

                  <div className="mt-5 pt-5 border-t border-ink-100 flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div className="text-ink-700">
                      <div className="font-semibold">Working hours</div>
                      <div className="text-sm text-ink-500">
                        Mon – Sat · 09:00 – 18:00 IST
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-ink-100 flex items-center gap-2">
                    <a
                      href={telLink()}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary-50 text-primary hover:bg-primary hover:text-white transition-colors py-2.5 text-sm font-semibold"
                      aria-label="Call us"
                    >
                      <Phone className="h-4 w-4" />
                      Call
                    </a>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors py-2.5 text-sm font-semibold"
                      aria-label="WhatsApp us"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat
                    </a>
                    <a
                      href={mailtoLink()}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-accent-50 text-accent-700 hover:bg-accent hover:text-white transition-colors py-2.5 text-sm font-semibold"
                      aria-label="Email us"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Quick answers */}
      <section className="py-20 md:py-24">
        <Container size="narrow">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <HelpCircle className="h-3.5 w-3.5" />
                Quick answers
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                Save yourself a message
              </h2>
              <p className="mt-3 text-ink-600">
                A handful of questions our team gets most often. If yours isn't
                here, send us a note — we'll come back fast.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 space-y-3">
            {quickAnswers.map((item, idx) => (
              <Reveal key={item.q} delay={idx * 0.05}>
                <details className="group rounded-2xl border border-ink-200 bg-white overflow-hidden open:shadow-soft transition-shadow">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer p-5 md:p-6 list-none">
                    <h3 className="font-display font-semibold text-ink-900 text-base md:text-lg pr-4">
                      {item.q}
                    </h3>
                    <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink-100 text-ink-700 group-open:bg-primary group-open:text-white transition-colors">
                      <svg
                        className="h-4 w-4 transition-transform group-open:rotate-45"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-6 -mt-2 text-ink-600 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
