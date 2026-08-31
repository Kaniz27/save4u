import { ShieldCheck, Clock, PiggyBank, Users2, HeadphonesIcon, Award } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { classNames } from "@/lib/utils";

const REASON_COLORS = [
  { bg: "bg-brand-blue/10", text: "text-brand-blue-dark" },
  { bg: "bg-brand-orange/10", text: "text-brand-orange-dark" },
  { bg: "bg-slate-100", text: "text-brand-navy" },
];

const REASONS = [
  { icon: ShieldCheck, title: "Trusted Experts", text: "Years of combined experience across payments, energy, funding and marketing, all under one roof." },
  { icon: Clock, title: "Fast Turnaround", text: "From first enquiry to a live quote in days — we know time matters when you're running a business." },
  { icon: PiggyBank, title: "Real, Measurable Savings", text: "Every recommendation is backed by a whole-of-market comparison, not a single preferred supplier." },
  { icon: Users2, title: "One Dedicated Contact", text: "No call centres or ticket queues — a named specialist manages your account from day one." },
  { icon: HeadphonesIcon, title: "UK-Based Support", text: "Our support team is based in the UK and available when you actually need to speak to someone." },
  { icon: Award, title: "No Hidden Fees", text: "Transparent pricing on everything we recommend, with nothing buried in the small print." },
];

export default function WhyChooseUs() {
  usePageMeta("Why Choose Us", "See why hundreds of UK businesses choose Save4u for payments, energy, funding and marketing.");
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".reason-card" });
  const introRef = useScrollReveal<HTMLDivElement>({ selector: ".intro-item" });

  return (
    <>
      <Breadcrumb current="Why Choose Us" />
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-brand-gradient py-16 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80)",
          }}
          aria-hidden
        />
        <div className="container-page relative">
          <span className="text-sm font-bold uppercase tracking-wide text-white/80">Why Choose Us</span>
          <h1 className="mt-3 h1-hero">The partner UK businesses trust to save and grow</h1>
        </div>
      </section>

      <section className="container-page py-20">
        <div ref={introRef} className="grid items-center gap-12 md:grid-cols-2">
          <div className="intro-item">
            <span className="text-sm font-bold uppercase tracking-wide text-brand-orange">The Save4u Difference</span>
            <h2 className="mt-3 h2-section text-slate-900">
              We work for you, not for a supplier's commission target
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

      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(({ icon: Icon, title, text }, i) => {
              const color = REASON_COLORS[i % REASON_COLORS.length];
              return (
              <div key={title} className="reason-card glass-card group p-8">
                <span
                  className={classNames(
                    "flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110",
                    color.bg,
                    color.text,
                  )}
                >
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm text-slate-600">{text}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesGrid />

      <CtaBanner image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80" />
    </>
  );
}
