import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-16 pb-10 md:pt-24 md:pb-14 gradient-hero overflow-hidden">
        <Container size="narrow">
          <Reveal>
            <nav className="text-sm text-ink-500 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink-900">Privacy</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-[1.1]">
              Privacy Policy
            </h1>
            <p className="mt-3 text-ink-500">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container size="narrow">
          <article className="prose-content space-y-7 text-ink-700 leading-relaxed">
            <p className="text-lg">
              {siteConfig.name} ("we", "us", "our") respects your privacy. This
              policy explains what information we collect when you visit this
              website or use our app, how we use it, and the choices you have.
            </p>

            <Section heading="Information we collect">
              <p>
                When you use Yantra Biz, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Information you provide directly — such as your name, email,
                  phone number, and company details when you create an account,
                  list machinery, or contact us.
                </li>
                <li>
                  Usage information — including pages viewed, listings opened,
                  searches performed, and time spent on the platform.
                </li>
                <li>
                  Device and network information — IP address, browser type,
                  operating system, and approximate location based on IP.
                </li>
                <li>
                  Cookies and similar technologies for analytics, preferences,
                  and authentication.
                </li>
              </ul>
            </Section>

            <Section heading="How we use information">
              <ul className="list-disc pl-6 space-y-2">
                <li>To operate and improve the marketplace.</li>
                <li>To verify sellers and prevent fraud.</li>
                <li>
                  To connect buyers and sellers and facilitate communication
                  between them.
                </li>
                <li>
                  To send important service updates, security notices, and
                  occasional marketing — you can opt out of marketing at any
                  time.
                </li>
                <li>To comply with legal obligations.</li>
              </ul>
            </Section>

            <Section heading="Sharing your information">
              <p>
                We do not sell your personal information. We share information
                only with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Other users when necessary to facilitate a transaction (for
                  example, sharing a buyer's contact details with a seller once
                  contact is initiated).
                </li>
                <li>
                  Service providers — analytics, hosting, payment processors —
                  who process data on our behalf under confidentiality terms.
                </li>
                <li>
                  Law enforcement, regulators, or other parties when required by
                  law.
                </li>
              </ul>
            </Section>

            <Section heading="Your rights and choices">
              <p>
                Depending on your jurisdiction, you may have rights to access,
                correct, delete, or export your personal information, and to
                object to or restrict certain processing. To exercise these
                rights, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary font-semibold hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </Section>

            <Section heading="Data security">
              <p>
                We use industry-standard safeguards to protect your information.
                No system is perfectly secure, so we encourage you to use strong
                passwords and protect your account credentials.
              </p>
            </Section>

            <Section heading="Children">
              <p>
                Yantra Biz is intended for businesses and adult professionals.
                We do not knowingly collect personal information from anyone
                under 18.
              </p>
            </Section>

            <Section heading="International transfers">
              <p>
                Yantra Biz operates globally. Your information may be processed
                in countries other than the one where you live. Where required,
                we put in place safeguards consistent with applicable law.
              </p>
            </Section>

            <Section heading="Changes to this policy">
              <p>
                We may update this policy from time to time. If we make material
                changes, we will notify you through the platform or by email.
                The "Last updated" date at the top of this page reflects the
                most recent revision.
              </p>
            </Section>

            <Section heading="Contact us">
              <p>
                Questions about this policy? Email us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary font-semibold hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                or write to {siteConfig.legalName}, {siteConfig.address.line1},{" "}
                {siteConfig.address.city} — {siteConfig.address.postalCode},{" "}
                {siteConfig.address.country}.
              </p>
            </Section>
          </article>
        </Container>
      </section>
    </>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-ink-900 tracking-tight mb-3">
        {heading}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
