import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { SplitText } from "@/components/ui/SplitText";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ServiceFeature } from "@/types";

export function FeatureGrid({ features }: { features: ServiceFeature[] }) {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".feature-item" });

  if (features.length === 0) return null;

  return (
    <section className="container-page py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">Key Benefits</span>
        <h2 className="mt-3 h2-section text-slate-900">
          <SplitText as="span" text="Why businesses choose this service" trigger="scroll" />
        </h2>
      </div>

      <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="feature-item glass-card group cursor-default p-6 hover:bg-white hover:shadow-glow-blue active:scale-95"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-blue/10 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-blue/20">
              <DynamicIcon name={f.icon} size={44} />
            </span>
            <h3 className="mt-4 font-heading text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-blue-dark">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
