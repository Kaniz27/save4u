import { useRef, useState, type KeyboardEvent, type FocusEvent } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Zap, Banknote, Megaphone, ChevronDown, Globe, Monitor } from "lucide-react";
import { classNames } from "@/lib/utils";

const SERVICES = [
  {
    to: "/payment-solution",
    label: "Payment Solutions",
    icon: CreditCard,
    children: [
      { to: "/payment-solution#card-machines", label: "Card Machines", icon: CreditCard },
      { to: "/payment-solution#online-payments", label: "Online Payments", icon: Globe },
      { to: "/payment-solution#epos-system", label: "EPOS", icon: Monitor },
    ],
  },
  { to: "/business-energy", label: "Business Energy", icon: Zap },
  { to: "/merchant-cash-advance", label: "Merchant Cash Advance", icon: Banknote },
  { to: "/digital-marketing", label: "Digital Marketing", icon: Megaphone },
];

export function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setOpen(false);
      containerRef.current?.querySelector("button")?.focus();
    }
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <button
        className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors hover:text-brand-blue-dark"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        onFocus={handleEnter}
      >
        Services
        <ChevronDown size={16} className={classNames("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 rounded-2xl border border-white/40 bg-white/90 p-2 shadow-xl backdrop-blur-lg"
        >
          {SERVICES.map(({ to, label, icon: Icon, children }) => (
            <div key={to}>
              <Link
                to={to}
                role="menuitem"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-blue/10 hover:text-brand-blue-dark"
                onClick={() => setOpen(false)}
              >
                <span className="rounded-lg bg-brand-blue/10 p-2 text-brand-blue-dark">
                  <Icon size={18} />
                </span>
                {label}
              </Link>
              {children && (
                <div className="ml-11 mb-1 space-y-0.5 border-l border-brand-border pl-3">
                  {children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      role="menuitem"
                      className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-brand-blue/10 hover:text-brand-blue-dark"
                      onClick={() => setOpen(false)}
                    >
                      <child.icon size={13} />
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
