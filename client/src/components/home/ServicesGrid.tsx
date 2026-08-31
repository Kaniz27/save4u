import { CreditCard, Zap, Banknote, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SERVICES = [
  {
    to: "/payment-solution",
    icon: CreditCard,
    title: "Payment Solution",
    description: "Lower processing fees, faster settlement, and card machines built for you.",
  },
  {
    to: "/business-energy",
    icon: Zap,
    title: "Business Energy",
    description: "Whole-of-market comparisons so you never overpay for gas or electricity.",
  },
  {
    to: "/merchant-cash-advance",
    icon: Banknote,
    title: "Merchant Cash Advance",
    description: "Flexible funding against future card sales, with no fixed monthly repayments.",
  },
  {
    to: "/digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, paid ads, and social media strategies that drive real growth.",
  },
];

export function ServicesGrid() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".service-card" });

  return (
    <section className="bg-slate-50 py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-orange">Our Services</span>
          <h2 className="mt-3 h2-section text-slate-900">
            Everything your business needs to save and grow
          </h2>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ to, icon: Icon, title, description }) => (
            <Link
              key={to}
              to={to}
              className="service-card group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-glow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-dark transition-colors group-hover:bg-brand-orange group-hover:text-white">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-dark">
                Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
