import { Users, UserCheck, Handshake, PoundSterling, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STAGES = [
  { icon: Users, title: "Traffic", text: "Visitors discover your business through search, social and ads." },
  { icon: UserCheck, title: "Leads", text: "Interested visitors enquire, subscribe or get in touch." },
  { icon: Handshake, title: "Customers", text: "Leads are nurtured and converted into paying customers." },
  { icon: PoundSterling, title: "Revenue", text: "Repeat business and referrals compound your growth." },
];

export function ConversionFunnel() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".funnel-stage" });

  return (
    <section className="bg-brand-bg py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">The Journey</span>
          <h2 className="mt-3 h2-section text-slate-900">From Clicks to Customers</h2>
        </div>

        <div ref={ref} className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {STAGES.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="funnel-stage flex flex-1 items-center gap-4 lg:flex-col">
              <div className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-brand-border bg-white p-6 text-center shadow-sm">
                <span
                  className={
                    i === STAGES.length - 1
                      ? "flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange"
                      : "flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue-dark"
                  }
                >
                  <Icon size={24} />
                </span>
                <h3 className="font-heading text-base font-bold text-slate-900">{title}</h3>
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
