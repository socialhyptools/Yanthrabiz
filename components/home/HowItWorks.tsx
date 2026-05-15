import { Search, MessageSquare, Handshake } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/Reveal";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Discover",
    body:
      "Browse thousands of verified listings across 11 industries. Filter by condition, location, brand, and budget right inside the app.",
  },
  {
    n: "02",
    icon: MessageSquare,
    title: "Connect",
    body:
      "Message verified sellers directly. Request specs, photos, and price quotes — no middlemen, no inflated markups.",
  },
  {
    n: "03",
    icon: Handshake,
    title: "Close",
    body:
      "Finalise the deal on your terms. Schedule inspections, transport, and payment through trusted networks our team can introduce.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-ink-50">
      <Container>
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/10">
              How it works
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
              From search to handshake in{" "}
              <span className="gradient-text-primary">three steps.</span>
            </h2>
            <p className="mt-4 text-lg text-ink-600 leading-relaxed">
              We built Yantra Biz to make industrial machinery as simple to
              transact as anything else online.
            </p>
          </div>
        </Reveal>

        <StaggerContainer
          stagger={0.12}
          className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.n}>
                <div className="relative h-full rounded-3xl bg-white border border-ink-200 p-8 hover:shadow-card transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-soft">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="font-display text-5xl font-extrabold text-ink-100">
                      {step.n}
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-ink-600 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
