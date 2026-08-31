import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ServiceFeature } from "@/types";

export function FeatureGrid({ features }: { features: ServiceFeature[] }) {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".feature-item" });

  if (features.length === 0) return null;

  return (
    <section className="container-page py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand-orange">Key Benefits</span>
        <h2 className="mt-3 h2-section text-slate-900">
          Why businesses choose this service
        </h2>
      </div>

      <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="feature-item glass-card group p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-dark transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <DynamicIcon name={f.icon} size={20} />
            </span>
            <h3 className="mt-4 font-heading text-base font-bold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
