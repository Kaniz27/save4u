import { ShieldCheck, Clock, Users2, PiggyBank, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/Button";

const HIGHLIGHTS = [
  { icon: ShieldCheck, title: "Trusted Experts", text: "Years of experience across payments, energy, funding and marketing." },
  { icon: Clock, title: "Fast Turnaround", text: "Quotes and switches completed in days, not weeks." },
  { icon: PiggyBank, title: "Real Savings", text: "Whole-of-market comparisons that put money back in your business." },
  { icon: Users2, title: "Dedicated Support", text: "A UK-based team you can actually reach when you need to." },
];

export function WhyChooseUsHighlights() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".highlight-item" });

  return (
    <section className="container-page py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand-orange">Why Choose Us</span>
        <h2 className="mt-3 h2-section text-slate-900">Built around your business, not ours</h2>
      </div>

      <div ref={ref} className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="highlight-item glass-card group p-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue-dark transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <Icon size={24} />
            </span>
            <h3 className="mt-4 font-heading text-base font-bold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button to="/why-choose-us" variant="secondary">
          See Why Businesses Choose Us <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}
