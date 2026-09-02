import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SERVICES = [
  {
    to: "/payment-solution",
    title: "Payment Solutions",
    description: "Fast, secure card machines and EPOS systems for every business type — retail, hospitality, or mobile.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
  },
  {
    to: "/merchant-cash-advance",
    title: "Merchant Cash Advance",
    description: "Access flexible business funding with fast approval and repayments that flex with your card sales.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
  },
  {
    to: "/digital-marketing",
    title: "Digital Marketing",
    description: "Grow your business online with SEO, social media, and ad campaigns built around your goals.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
  },
  {
    to: "/business-energy",
    title: "Business Energy",
    description: "Compare and switch business energy suppliers to cut costs and lock in better rates.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=400&q=80",
  },
];

export function HomeServicesGrid() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".home-service-card" });

  return (
    <section id="services" className="scroll-mt-32 bg-brand-bg py-24">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">Our Services</span>
          <h2 className="mt-3 h2-section text-slate-900">Everything Your Business Needs</h2>
          <p className="mt-4 text-slate-600">
            Four powerful services designed to help your business accept payments, grow online, cut costs, and access
            funding — all in one place.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ to, title, description, image }) => (
            <div
              key={to}
              className="home-service-card flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-glow-blue"
            >
              <span className="mb-6 h-28 w-28 overflow-hidden rounded-full bg-brand-blue/10">
                <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-3 min-h-[60px] text-sm text-slate-600">{description}</p>
              <Link
                to={to}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-blue-dark"
              >
                Find out more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
