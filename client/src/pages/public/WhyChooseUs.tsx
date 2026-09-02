import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Icon8 } from "@/components/ui/Icon8";
import { PageHero } from "@/components/layout/PageHero";
import { SplitText } from "@/components/ui/SplitText";
import { classNames } from "@/lib/utils";
import type { ServiceFaq } from "@/types";

const WHY_BULLETS = ["Whole-of-market comparisons, not one preferred supplier", "A named specialist, not a call centre", "Fair, transparent pricing"];

const WHY_FAQS: ServiceFaq[] = [
  { question: "Will switching disrupt my business?", answer: "No — we handle the transition end-to-end and time any changeover to suit you, so there's no disruption to trading." },
  { question: "Am I tied into a long contract?", answer: "We only recommend terms that are fair and transparent — no hidden lock-ins or auto-renewal traps." },
  { question: "What if I'm already under contract with another supplier?", answer: "We can review your current terms and let you know the best time to switch without incurring exit fees." },
  { question: "Do you only work with large businesses?", answer: "Not at all — we work with businesses of every size, from sole traders to multi-site operations." },
];

const REASON_COLORS = [
  { bg: "bg-brand-blue/10", text: "text-brand-blue-dark" },
  { bg: "bg-brand-blue-dark/10", text: "text-brand-blue-dark" },
  { bg: "bg-slate-100", text: "text-brand-navy" },
];

const REASONS = [
  { icon: "security-checked", title: "Trusted Experts", text: "Years of combined experience across payments, energy, funding and marketing, all under one roof." },
  { icon: "clock", title: "Fast Turnaround", text: "From first enquiry to a live quote in days — we know time matters when you're running a business." },
  { icon: "coins", title: "Real, Measurable Savings", text: "Every recommendation is backed by a whole-of-market comparison, not a single preferred supplier." },
  { icon: "conference-call", title: "One Dedicated Contact", text: "No call centres or ticket queues — a named specialist manages your account from day one." },
  { icon: "headphones", title: "UK-Based Support", text: "Our support team is based in the UK and available when you actually need to speak to someone." },
  { icon: "prize", title: "No Hidden Fees", text: "Transparent pricing on everything we recommend, with nothing buried in the small print." },
];

export default function WhyChooseUs() {
  usePageMeta("Why Choose Us", "See why hundreds of UK businesses choose Save4u for payments, energy, funding and marketing.");
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".reason-card" });
  const introRef = useScrollReveal<HTMLDivElement>({ selector: ".intro-item" });

  return (
    <>
      <Breadcrumb current="Why Choose Us" />
      <PageHero
        heading={["The Partner UK Businesses", "Trust to Save and Grow"]}
        bullets={WHY_BULLETS}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Save4u client reviewing their savings with a specialist"
        ctaLabel="Talk to a Specialist"
        ctaTo="/contact-us"
      />

      <section className="container-page py-20">
        <div ref={introRef} className="grid items-center gap-12 md:grid-cols-2">
          <div className="intro-item">
            <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">The Save4u Difference</span>
            <h2 className="mt-3 h2-section text-slate-900">
              <SplitText as="span" text="We work for you, not for a supplier's commission target" trigger="scroll" />
            </h2>
            <p className="mt-5 text-slate-600">
              Most brokers push whichever supplier pays them the most. We compare the whole market,
              show you the numbers, and let you decide — because a client who trusts our advice
              today is a client who comes back when their next contract is up for renewal.
            </p>
            <p className="mt-4 text-slate-600">
              That's why the same clients who switched their card machine with us end up coming
              back for their energy contract, a cash advance, or help with their marketing —
              they've already seen how we work.
            </p>
            <Button to="/contact-us" className="mt-8">
              Talk to a Specialist
            </Button>
          </div>
          <div className="intro-item overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="Save4u specialist reviewing a client's business costs"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-bg py-20">
        <div className="container-page">
          <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(({ icon, title, text }, i) => {
              const color = REASON_COLORS[i % REASON_COLORS.length];
              return (
              <div
                key={title}
                className="reason-card glass-card group cursor-default p-8 hover:bg-white hover:shadow-glow-blue active:scale-95"
              >
                <span
                  className={classNames(
                    "flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110",
                    color.bg,
                  )}
                >
                  <Icon8 slug={icon} alt={title} size={64} className="h-11 w-11" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-blue-dark">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{text}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesGrid />

      <FaqAccordion faqs={WHY_FAQS} />

      <CtaBanner image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80" />
    </>
  );
}
