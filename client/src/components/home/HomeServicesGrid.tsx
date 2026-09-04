import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitText } from "@/components/ui/SplitText";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SERVICES = [
  {
    to: "/payment-solution",
    title: "Payment Solutions",
    description: "Fast, secure card machines and EPOS systems for every business type — retail, hospitality, or mobile.",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=400&q=80",
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
          <h2 className="mt-3 h2-section text-slate-900">
            <SplitText as="span" text="Everything Your Business Needs" trigger="scroll" />
          </h2>
          <p className="mt-4 text-slate-600">
            Four powerful services designed to help your business accept payments, grow online, cut costs, and access
            funding — all in one place.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid gap-8 sm:grid-cols-2">
          {SERVICES.map(({ to, title, description, image }) => (
            <div
              key={to}
              className="home-service-card group flex flex-col items-center rounded-2xl border border-brand-orange/30 bg-white text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand-orange hover:shadow-glow active:scale-95"
            >
              <span className="block w-full p-4 pb-0">
                <span className="block h-44 w-full overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </span>
              </span>
              <div className="flex flex-1 flex-col items-center p-8">
                <h3 className="font-heading text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-blue-dark">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
                <Link
                  to={to}
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-blue px-7 py-2.5 text-sm font-bold text-brand-blue-dark transition-colors duration-200 hover:bg-brand-blue hover:text-white"
                >
                  Find out more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
