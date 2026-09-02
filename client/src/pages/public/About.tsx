import { Target, Heart, Rocket } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { TrustBadges } from "@/components/home/TrustBadges";
import { HowItWorks } from "@/components/services/HowItWorks";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHero } from "@/components/layout/PageHero";
import type { ServiceStep, ServiceFaq } from "@/types";

const ABOUT_BULLETS = [
  "One team for payments, energy, funding & marketing",
  "Whole-of-market comparisons, always free",
  "A dedicated specialist for your account",
];

const VALUES = [
  { icon: Target, title: "Our Mission", text: "To be the single, trusted place UK businesses turn to for the essentials that keep them running lean and profitable." },
  { icon: Heart, title: "Our Approach", text: "Honest comparisons, clear pricing, and no pressure — we only recommend a switch when it genuinely benefits you." },
  { icon: Rocket, title: "Our Promise", text: "Fast turnarounds and a dedicated point of contact from your first enquiry through to ongoing support." },
];

const HOW_WE_WORK: ServiceStep[] = [
  { step: 1, title: "Free Review", description: "We start with a free review of what you're currently paying and using." },
  { step: 2, title: "Clear Comparison", description: "You get a whole-of-market comparison, with the numbers laid out plainly." },
  { step: 3, title: "We Handle Setup", description: "If it's worth switching, we handle the paperwork and setup end-to-end." },
  { step: 4, title: "Ongoing Support", description: "One dedicated specialist stays with you long after the switch is done." },
];

const ABOUT_FAQS: ServiceFaq[] = [
  { question: "Is there any obligation to switch?", answer: "None at all. Every review is free and comes with no pressure — you decide whether switching makes sense for your business." },
  { question: "Which areas of the UK do you cover?", answer: "We work with businesses across the whole of the UK, with a UK-based support team available Monday to Friday." },
  { question: "How long does a switch take?", answer: "Most switches are live within days once we have the details we need — we'll always give you a clear timeline upfront." },
  { question: "Do you charge for the initial review?", answer: "No — the comparison and recommendation are completely free, whether or not you decide to switch." },
];

export default function About() {
  usePageMeta("About Us", "Learn about Save4u — end-to-end digital and business solutions for UK companies.");
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".value-card" });

  return (
    <>
      <Breadcrumb current="About Us" />
      <PageHero
        heading={
          <>
            End-to-End Business
            <br />
            Solutions, One Team
          </>
        }
        bullets={ABOUT_BULLETS}
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Save4u team member reviewing a client's business costs"
        ctaLabel="Start the Conversation"
        ctaTo="/contact-us"
      />

      <section className="container-page py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt="Save4u business consultants meeting with a client"
            className="rounded-3xl object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="h2-section text-slate-900">Who we are</h2>
            <p className="mt-5 text-slate-600">
              Save4u was founded to remove the hassle of comparing and managing the suppliers every
              business depends on. Instead of juggling separate providers for card payments,
              energy, funding, and marketing, our clients work with one team that understands their
              business end-to-end.
            </p>
            <p className="mt-4 text-slate-600">
              We're proud to have helped hundreds of UK businesses reduce costs and access the
              funding and marketing support they need to grow — with transparent advice and no
              hidden fees.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div ref={ref} className="grid gap-8 md:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="value-card glass-card group p-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue-dark transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustBadges />

      <HowItWorks steps={HOW_WE_WORK} />

      <FaqAccordion faqs={ABOUT_FAQS} />

      <CtaBanner image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" />
    </>
  );
}
