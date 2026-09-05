import { useState } from "react";
import { Plus } from "lucide-react";
import { classNames } from "@/lib/utils";
import type { ServiceFaq } from "@/types";

export function HomeFaqSection({ faqs }: { faqs: ServiceFaq[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (faqs.length === 0) return null;

  return (
    <section className="bg-brand-bg py-24">
      <div className="container-page grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">FAQ</span>
          <h2 className="mt-3 h2-section text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-md text-slate-600">
            Got questions about our card machines, funding, energy switching, or marketing services? Here are the
            answers to what business owners ask us most.
          </p>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-sm font-bold text-slate-900 sm:text-base">{faq.question}</span>
                    <Plus
                      size={18}
                      className={classNames("shrink-0 text-brand-blue-dark transition-transform duration-300", isOpen && "rotate-45")}
                    />
                  </button>
                  <div
                    className={classNames(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden px-6">
                      <p className="pb-5 text-sm text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm items-start justify-center pt-5">
          <div className="absolute top-10 h-72 w-72 rounded-full bg-white" />
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80"
            alt="Save4u specialist helping a business owner"
            className="relative w-full rounded-3xl object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
