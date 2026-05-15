import { Quote, Star } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: {
    /** Tailwind gradient utility string */
    bg: string;
    /** Optional tonal ring (white/colored ring around avatar) */
    ring: string;
  };
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We sourced a refurbished injection molding press from Yantra Biz in three weeks — what used to take us six months of broker calls. The seller was verified, the spec matched, and the price was honest.",
    name: "Arvind Kapoor",
    role: "Plant Head",
    company: "Northway Polymers, Mumbai",
    avatar: {
      bg: "bg-gradient-to-br from-primary-700 via-primary-600 to-primary-900",
      ring: "ring-primary-100",
    },
  },
  {
    quote:
      "As a small dairy, getting access to good used food-processing equipment is everything. The app is fast, the listings are real, and there are no middlemen pushing prices up.",
    name: "Lakshmi Iyer",
    role: "Founder",
    company: "Velan Foods, Coimbatore",
    avatar: {
      bg: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700",
      ring: "ring-emerald-100",
    },
  },
  {
    quote:
      "I had four idle tablet presses sitting in our annex for two years. Listed them on a Tuesday, had three serious inquiries by Friday, and shipped the first one overseas the next month.",
    name: "Rakesh Mehta",
    role: "Operations Director",
    company: "Suryam Pharma Solutions",
    avatar: {
      bg: "bg-gradient-to-br from-accent-500 via-accent-600 to-accent-800",
      ring: "ring-accent-100",
    },
  },
  {
    quote:
      "What stood out was the support. When we needed export documentation help for a buyer in Dubai, their team walked us through it. That kind of hand-holding is rare in this industry.",
    name: "Maria Sequeira",
    role: "Export Manager",
    company: "Atlantis Paper Mills, Goa",
    avatar: {
      bg: "bg-gradient-to-br from-amber-500 via-orange-500 to-orange-700",
      ring: "ring-amber-100",
    },
  },
  {
    quote:
      "We've bought two harvesters and a rotavator through the platform. Every transaction has been transparent. The verified-seller badge actually means something here.",
    name: "Karthik Rajan",
    role: "Director",
    company: "Rajan Agro Industries",
    avatar: {
      bg: "bg-gradient-to-br from-violet-500 via-violet-600 to-purple-800",
      ring: "ring-violet-100",
    },
  },
  {
    quote:
      "The global reach is the differentiator. We had a buyer from Kenya pay for and collect a leather splitting machine within forty days. No platform we tried before could do that.",
    name: "Imran Sheikh",
    role: "Co-founder",
    company: "Marigold Leather Works",
    avatar: {
      bg: "bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-800",
      ring: "ring-sky-100",
    },
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ink-50">
      <Container>
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/10">
              Testimonials
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
              Trusted by operators{" "}
              <span className="gradient-text-primary">across industries.</span>
            </h2>
            <p className="mt-4 text-lg text-ink-600 leading-relaxed">
              Buyers, sellers, and entire production lines have moved through
              Yantra Biz. Here is what some of them have to say.
            </p>
          </div>
        </Reveal>

        <StaggerContainer
          stagger={0.08}
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <article className="h-full rounded-3xl bg-white border border-ink-200 p-7 hover:shadow-card transition-shadow flex flex-col">
                <Quote className="h-7 w-7 text-accent" />
                <div className="mt-2 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-ink-700 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3.5 pt-5 border-t border-ink-100">
                  <div
                    className={`relative h-12 w-12 shrink-0 rounded-full ${t.avatar.bg} ring-4 ${t.avatar.ring} shadow-soft grid place-items-center`}
                  >
                    <span className="font-display font-bold text-white text-sm tracking-wide">
                      {initials(t.name)}
                    </span>
                    <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-ink-900 truncate">
                      {t.name}
                    </div>
                    <div className="text-xs text-ink-500 truncate">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
