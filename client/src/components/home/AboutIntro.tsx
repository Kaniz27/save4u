import { ArrowRight, ShieldCheck, Wifi, Smile, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/Button";

const FEATURES = [
  {
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    title: "Security",
    description: "Ensures secure transactions through encryption and compliance with global standards.",
  },
  {
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    title: "Connectivity",
    description: "Can connect to various payment networks and systems, often via the internet or mobile networks.",
  },
  {
    icon: Smile,
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
    title: "Customer Satisfaction",
    description: "Fast and secure transactions enhance the shopping experience, leading to happier customers.",
  },
  {
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    title: "Scalability",
    description: "Suitable for businesses of all sizes, from small startups to large enterprises.",
  },
];

export function AboutIntro() {
  const introRef = useScrollReveal<HTMLDivElement>({ selector: ".reveal-item" });
  const featuresRef = useScrollReveal<HTMLDivElement>({ selector: ".feature-card" });

  return (
    <section className="container-page py-20">
      <div ref={introRef} className="grid items-center gap-12 md:grid-cols-2">
        <div className="reveal-item overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Save4u team collaborating in a modern office"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="reveal-item">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">Welcome to Save 4u</span>
          <h2 className="mt-3 h2-section text-slate-900">
            Drive your success with our industry-specific excellent solutions
          </h2>
          <p className="mt-5 text-slate-600">
            We collaborate with leading financial institutions to provide clear and
            easy-to-understand comparisons. This allows our customers to confidently choose the
            products and services that best suit their needs.
          </p>
          <Button to="/about" variant="secondary" className="mt-8">
            Learn More <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <div ref={featuresRef} className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, image, title, description }) => (
          <div key={title} className="feature-card glass-card group overflow-hidden">
            <div className="relative h-36 w-full overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
              <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-brand-blue-dark shadow-sm backdrop-blur-sm">
                <Icon size={20} />
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
