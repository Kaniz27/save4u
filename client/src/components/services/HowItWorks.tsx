import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ServiceStep } from "@/types";

export function HowItWorks({ steps }: { steps: ServiceStep[] }) {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".step-item" });

  if (steps.length === 0) return null;

  return (
    <section id="how-it-works" className="scroll-mt-32 bg-brand-bg py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">How It Works</span>
          <h2 className="mt-3 h2-section text-slate-900">
            Getting started is simple
          </h2>
        </div>

        <div ref={ref} className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="step-item text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue font-heading text-lg font-bold text-white">
                {s.step}
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
