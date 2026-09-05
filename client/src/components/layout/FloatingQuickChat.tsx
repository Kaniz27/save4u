import { Link } from "react-router-dom";
import { classNames } from "@/lib/utils";

const TOPICS = [
  {
    label: "Need a Card Machine?",
    to: "/payment-solution",
    accent: "bg-brand-blue/90",
    ring: "bg-brand-blue/50",
  },
  {
    label: "Need Fast Funding?",
    to: "/merchant-cash-advance",
    accent: "bg-brand-orange/90",
    ring: "bg-brand-orange/50",
  },
  {
    label: "Want More Customers?",
    to: "/digital-marketing",
    accent: "bg-brand-blue-dark/90",
    ring: "bg-brand-blue-dark/50",
  },
  {
    label: "High Energy Bills?",
    to: "/business-energy",
    accent: "bg-brand-orange-dark/90",
    ring: "bg-brand-orange-dark/50",
  },
];

export function FloatingQuickChat() {
  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col-reverse items-end gap-3">
      {TOPICS.map(({ label, to, accent, ring }, i) => (
        <Link
          key={label}
          to={to}
          aria-label={label}
          style={{ animationDelay: `${i * 0.12}s` }}
          className="animate-float-in relative block"
        >
          <span
            aria-hidden="true"
            className={classNames("pointer-events-none absolute inset-0 rounded-full animate-ping", ring)}
            style={{ animationDelay: `${i * 0.5}s`, animationDuration: "2.6s" }}
          />
          <span
            className={classNames(
              "relative block whitespace-nowrap rounded-full border border-white/50 px-4 py-2.5 text-sm font-bold text-white shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 active:scale-95",
              accent,
            )}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}
