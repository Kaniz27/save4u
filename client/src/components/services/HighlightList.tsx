import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { SplitText } from "@/components/ui/SplitText";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { classNames } from "@/lib/utils";
import type { ServiceHighlight } from "@/types";

interface HighlightListProps {
  title: string;
  subtitle?: string;
  highlights: ServiceHighlight[];
  images: string[];
}

export function HighlightList({ title, subtitle, highlights, images }: HighlightListProps) {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".highlight-row" });

  if (highlights.length === 0) return null;

  return (
    <section className="container-page py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">Learn More</span>
        <h2 className="mt-3 h2-section text-slate-900">
          <SplitText as="span" text={title} trigger="scroll" />
        </h2>
        {subtitle && <p className="mt-4 text-slate-600">{subtitle}</p>}
      </div>

      <div ref={ref} className="mt-14 space-y-16">
        {highlights.map((h, i) => {
          const reversed = i % 2 === 1;
          const image = images[i % images.length];
          return (
            <div key={h.title} className="highlight-row grid items-center gap-10 md:grid-cols-2">
              <div className={classNames("overflow-hidden rounded-3xl", reversed && "md:order-2")}>
                <img src={image} alt={h.title} className="h-72 w-full object-cover" loading="lazy" />
              </div>
              <div className={classNames(reversed && "md:order-1")}>
                <span className="group flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-blue/10 transition-all duration-300 hover:scale-110 hover:bg-brand-blue/20">
                  <DynamicIcon name={h.icon} size={44} />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-bold text-slate-900">{h.title}</h3>
                <p className="mt-3 text-slate-600">{h.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
