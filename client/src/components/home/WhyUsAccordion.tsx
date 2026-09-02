import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon8 } from "@/components/ui/Icon8";
import { SplitText } from "@/components/ui/SplitText";
import { classNames } from "@/lib/utils";

const ITEMS = [
  {
    icon: "flash-on",
    title: "Fast Setup",
    text: "Get up and running in as little as three days with our simple, guided onboarding process.",
  },
  {
    icon: "percentage",
    title: "Simple, Fair Pricing",
    text: "Competitive, transparent rates with no hidden fees or long lock-in contracts.",
  },
  {
    icon: "headphones",
    title: "UK-Based Support",
    text: "Our UK-based team is available Monday to Friday to help with anything from setup to general questions.",
  },
  {
    icon: "conference-call",
    title: "Never On Your Own",
    text: "One named specialist manages your account from day one, so you're never speaking to a stranger.",
  },
];

export function WhyUsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div className="relative mx-auto flex min-h-[320px] w-full max-w-sm items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-brand-bg" />
          <img
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=700&q=80"
            alt="Modern EPOS and card payment setup"
            className="relative max-w-[260px] rounded-3xl object-cover shadow-xl"
            loading="lazy"
          />
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">Why Us</span>
          <h2 className="mt-3 h2-section text-slate-900">
            <SplitText as="span" text="Why Choose Our Services" trigger="scroll" />
          </h2>

          <div className="mt-8 flex flex-col gap-3">
            {ITEMS.map(({ icon, title, text }, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={title}
                  className={classNames(
                    "overflow-hidden rounded-2xl transition-all duration-300 active:scale-[0.98]",
                    isOpen ? "bg-brand-blue/10" : "bg-brand-bg hover:bg-brand-blue/10",
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={classNames(
                          "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-300",
                          isOpen && "scale-110",
                        )}
                      >
                        <Icon8 slug={icon} alt={title} size={48} className="h-8 w-8" />
                      </span>
                      <span className="font-heading text-base font-bold text-slate-900 sm:text-lg">{title}</span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={classNames("shrink-0 text-brand-navy transition-transform duration-300", isOpen && "rotate-180")}
                    />
                  </button>
                  <div
                    className={classNames(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden px-6">
                      <p className="pb-5 pl-[4.5rem] text-sm text-slate-600">{text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
