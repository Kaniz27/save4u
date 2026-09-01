import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { classNames } from "@/lib/utils";
import type { SubService } from "@/types";

export function SubServiceGrid({ subServices }: { subServices: SubService[] }) {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".subservice-card" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (subServices.length === 0) return null;

  return (
    <section className="bg-slate-50 py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">
            Ways We Help
          </span>
          <h2 className="mt-3 h2-section text-slate-900">
            Choose the option that fits your business
          </h2>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subServices.map((sub, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={sub.title}
                className="subservice-card glass-card flex flex-col overflow-hidden"
              >
                {sub.image ? (
                  <img src={sub.image} alt={sub.title} className="h-44 w-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-44 w-full items-center justify-center bg-brand-blue/10">
                    <DynamicIcon name={sub.icon} size={36} className="text-brand-blue-dark" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-dark">
                    <DynamicIcon name={sub.icon} size={18} />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">{sub.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{sub.description}</p>

                  {sub.detail && (
                    <>
                      <div
                        className={classNames(
                          "grid transition-all duration-300 ease-in-out",
                          isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm text-slate-500">{sub.detail}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-blue-dark"
                      >
                        {isOpen ? "Show less" : "Find out more"}
                        <ChevronDown size={14} className={classNames("transition-transform", isOpen && "rotate-180")} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
