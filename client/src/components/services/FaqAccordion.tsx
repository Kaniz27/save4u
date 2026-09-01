import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { classNames } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import type { ServiceFaq } from "@/types";

export function FaqAccordion({ faqs }: { faqs: ServiceFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <section className="bg-slate-50 py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">FAQs</span>
          <h2 className="mt-3 h2-section text-slate-900">Frequently asked questions</h2>
          <p className="mt-4 text-slate-600">
            Can't find the answer you're looking for? Our team is happy to talk through anything about this
            service that isn't covered here.
          </p>
          <Button to="/contact-us" variant="secondary" className="mt-8">
            Ask a Question
          </Button>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="glass-card overflow-hidden">
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm font-bold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={classNames("shrink-0 text-brand-blue-dark transition-transform duration-300", isOpen && "rotate-180")}
                  />
                </button>
                <div
                  className={classNames(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden px-6">
                    <p className="pb-4 text-sm text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
