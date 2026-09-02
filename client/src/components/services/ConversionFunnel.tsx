import { ArrowRight } from "lucide-react";
import { Icon8 } from "@/components/ui/Icon8";
import { SplitText } from "@/components/ui/SplitText";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STAGES = [
  { icon: "group", title: "Traffic", text: "Visitors discover your business through search, social and ads." },
  { icon: "conference-call", title: "Leads", text: "Interested visitors enquire, subscribe or get in touch." },
  { icon: "handshake", title: "Customers", text: "Leads are nurtured and converted into paying customers." },
  { icon: "money", title: "Revenue", text: "Repeat business and referrals compound your growth." },
];

export function ConversionFunnel() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".funnel-stage" });

  return (
    <section className="bg-brand-bg py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">The Journey</span>
          <h2 className="mt-3 h2-section text-slate-900">
            <SplitText as="span" text="From Clicks to Customers" trigger="scroll" />
          </h2>
        </div>

        <div ref={ref} className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {STAGES.map(({ icon, title, text }, i) => (
            <div key={title} className="funnel-stage flex flex-1 items-center gap-4 lg:flex-col">
              <div className="group flex flex-1 cursor-default flex-col items-center gap-3 rounded-2xl border border-brand-border bg-white p-6 text-center shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-glow-blue active:scale-95">
                <span
                  className={
                    i === STAGES.length - 1
                      ? "flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-orange/15 transition-all duration-300 group-hover:scale-110"
                      : "flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-blue/10 transition-all duration-300 group-hover:scale-110"
                  }
                >
                  <Icon8 slug={icon} alt={title} size={64} className="h-11 w-11" />
                </span>
                <h3 className="font-heading text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-blue-dark">
                  {title}
                </h3>
                <p className="text-sm text-slate-600">{text}</p>
              </div>
              {i < STAGES.length - 1 && (
                <ArrowRight size={20} className="hidden shrink-0 text-brand-blue/50 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
