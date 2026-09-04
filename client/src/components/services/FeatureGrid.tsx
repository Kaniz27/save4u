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

      <div ref={ref} className="mt-14 grid gap-8 sm:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="feature-item group flex cursor-default flex-col items-center rounded-2xl border border-brand-orange/30 bg-white text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand-orange hover:shadow-glow active:scale-95"
          >
            {f.image ? (
              <span className="block w-full p-4 pb-0">
                <span className="block h-44 w-full overflow-hidden rounded-xl">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </span>
              </span>
            ) : (
              <span className="mt-8 flex h-32 w-32 items-center justify-center rounded-2xl bg-brand-blue/10 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-blue/20">
                <DynamicIcon name={f.icon} size={72} />
              </span>
            )}

            <div className="flex flex-1 flex-col items-center p-8">
              <h3 className="font-heading text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-blue-dark">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{f.description}</p>

              <a
                href="#enquiry"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-blue px-7 py-2.5 text-sm font-bold text-brand-blue-dark transition-colors duration-200 hover:bg-brand-blue hover:text-white"
              >
                Find out more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
