import { Link } from "react-router-dom";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import type { Service } from "@/types";

export function RelatedServices({ services, currentSlug }: { services: Service[]; currentSlug: string }) {
  const related = services.filter((s) => s.slug !== currentSlug);

  if (related.length === 0) return null;

  return (
    <section className="bg-brand-bg py-20">
      <div className="container-page text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">Keep Exploring</span>
        <h2 className="mt-3 h2-section text-slate-900">Other ways we help</h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {related.map((s) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              className="group inline-flex items-center gap-3 rounded-full bg-brand-blue px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-brand-blue-dark hover:shadow-xl"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <DynamicIcon name={s.icon} size={16} />
              </span>
              {s.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
