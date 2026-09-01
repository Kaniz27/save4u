import { CreditCard, Zap, Banknote, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Free-license Unsplash photography — swap for real Save4u photography when available.
const SERVICES = [
  {
    to: "/payment-solution",
    icon: CreditCard,
    title: "Payment Solution",
    description: "Lower processing fees, faster settlement, and card machines built for you.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    to: "/business-energy",
    icon: Zap,
    title: "Business Energy",
    description: "Whole-of-market comparisons so you never overpay for gas or electricity.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    to: "/merchant-cash-advance",
    icon: Banknote,
    title: "Merchant Cash Advance",
    description: "Flexible funding against future card sales, with no fixed monthly repayments.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    to: "/digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, paid ads, and social media strategies that drive real growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

export function ServicesGrid() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".service-card" });

  return (
    <section className="bg-slate-50 py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">Our Services</span>
          <h2 className="mt-3 h2-section text-slate-900">
            Everything your business needs to save and grow
          </h2>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ to, icon: Icon, title, description, image }) => (
            <Link
              key={to}
              to={to}
              className="service-card group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-glow"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent" />
                <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-blue-dark shadow-md transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Icon size={20} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-dark">
                  Find out more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
