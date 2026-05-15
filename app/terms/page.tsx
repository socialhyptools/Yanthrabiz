import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
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
              <span className="text-ink-900">Terms</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-[1.1]">
              Terms of Service
            </h1>
            <p className="mt-3 text-ink-500">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container size="narrow">
          <article className="space-y-7 text-ink-700 leading-relaxed">
            <p className="text-lg">
              These terms govern your use of {siteConfig.name} (the
              "Platform"). By accessing the Platform or using our mobile or web
              applications, you agree to be bound by these terms.
            </p>

            <Section heading="The platform">
              <p>
                {siteConfig.name} is a marketplace that connects buyers and
                sellers of pre-owned, refurbished, and surplus industrial
                machinery. We are not a party to any transaction between users.
                We do not own, manufacture, refurbish, or warrant the machinery
                listed on the Platform.
              </p>
            </Section>

            <Section heading="Eligibility">
              <p>
                You must be at least 18 years old and able to enter into binding
                contracts to use {siteConfig.name}. If you are using the
                Platform on behalf of a business, you represent that you are
                authorised to bind that business.
              </p>
            </Section>

            <Section heading="Accounts">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You are responsible for the accuracy of the information you
                  provide and for keeping your account credentials confidential.
                </li>
                <li>
                  You are responsible for activity on your account. Notify us
                  immediately if you suspect unauthorised access.
                </li>
                <li>
                  We may suspend or terminate accounts that violate these terms
                  or that we reasonably believe present risk to other users.
                </li>
              </ul>
            </Section>

            <Section heading="Listings">
              <p>
                Sellers are solely responsible for the accuracy of their
                listings — including specifications, condition, photographs,
                pricing, and availability. Listings must not be illegal,
                deceptive, or infringe third-party rights.
              </p>
              <p>
                We reserve the right to remove listings that violate these terms
                or that we believe are harmful to the marketplace.
              </p>
            </Section>

            <Section heading="Transactions">
              <p>
                Buyers and sellers transact directly. Inspections, payment,
                title transfer, transport, taxes, customs, and any other
                obligations of the sale are between the parties. We do not act
                as an escrow agent and do not guarantee any transaction.
              </p>
              <p>
                Where our team facilitates introductions to logistics or
                inspection partners, those services are governed by separate
                agreements between you and the partner.
              </p>
            </Section>

            <Section heading="Prohibited use">
              <ul className="list-disc pl-6 space-y-2">
                <li>Illegal, fraudulent, or deceptive conduct.</li>
                <li>
                  Misrepresentation of identity, machinery condition, or
                  ownership.
                </li>
                <li>
                  Circumventing the Platform to evade fees, verification, or
                  safety mechanisms.
                </li>
                <li>
                  Scraping, reverse engineering, or interfering with the
                  Platform's operation.
                </li>
                <li>
                  Posting content that infringes intellectual property, defames
                  others, or violates applicable law.
                </li>
              </ul>
            </Section>

            <Section heading="Fees">
              <p>
                Most marketplace features are free to use. Optional premium
                services — such as featured listings or concierge logistics
                referrals — may carry fees, which will always be disclosed
                before you opt in.
              </p>
            </Section>

            <Section heading="Intellectual property">
              <p>
                {siteConfig.name}, our logos, and the Platform's content
                (excluding user-submitted listings) are protected by
                intellectual-property laws. You may not use our brand assets
                without permission.
              </p>
              <p>
                You retain ownership of the content you submit. By posting
                content on the Platform, you grant us a non-exclusive,
                worldwide, royalty-free licence to host, display, and promote
                that content as part of the marketplace.
              </p>
            </Section>

            <Section heading="Disclaimers">
              <p>
                The Platform is provided "as is" and "as available". To the
                fullest extent permitted by law, we disclaim all warranties —
                express or implied — including fitness for a particular purpose
                and non-infringement. We do not warrant the accuracy of
                listings, the conduct of users, or uninterrupted availability of
                the Platform.
              </p>
            </Section>

            <Section heading="Limitation of liability">
              <p>
                To the maximum extent permitted by law, {siteConfig.name} and
                its affiliates will not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or for any loss of
                profits or revenues, arising out of or in connection with your
                use of the Platform.
              </p>
            </Section>

            <Section heading="Indemnity">
              <p>
                You agree to indemnify and hold {siteConfig.name} harmless from
                any claims, damages, or expenses arising from your breach of
                these terms or your misuse of the Platform.
              </p>
            </Section>

            <Section heading="Governing law">
              <p>
                These terms are governed by the laws of India, without regard to
                its conflict-of-laws principles. Disputes will be resolved in
                the courts located at Chennai, Tamil Nadu, India, unless
                applicable law requires otherwise.
              </p>
            </Section>

            <Section heading="Changes">
              <p>
                We may update these terms from time to time. If we make material
                changes, we will notify you through the Platform or by email.
                Continued use after notice constitutes acceptance of the
                revised terms.
              </p>
            </Section>

            <Section heading="Contact">
              <p>
                Questions about these terms? Email us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary font-semibold hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
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
