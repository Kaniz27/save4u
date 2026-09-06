import { useRef, useState, type KeyboardEvent, type FocusEvent } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Zap, Banknote, Megaphone, ChevronDown, Globe, Monitor } from "lucide-react";
import { classNames } from "@/lib/utils";

const SERVICES = [
  {
    to: "/payment-solution",
    label: "Payment Solutions",
    icon: CreditCard,
    color: "blue",
    children: [
      { to: "/payment-solution#card-machines", label: "Card Machines", icon: CreditCard },
      { to: "/payment-solution#online-payments", label: "Online Payments", icon: Globe },
      { to: "/payment-solution#epos-system", label: "EPOS", icon: Monitor },
    ],
  },
  { to: "/business-energy", label: "Business Energy", icon: Zap, color: "orange" },
  { to: "/merchant-cash-advance", label: "Merchant Cash Advance", icon: Banknote, color: "green" },
  { to: "/digital-marketing", label: "Digital Marketing", icon: Megaphone, color: "pink" },
];

const COLOR_STYLES: Record<string, { icon: string; hover: string }> = {
  blue: { icon: "bg-brand-blue/15 text-brand-blue-dark", hover: "hover:bg-brand-blue/10 hover:text-brand-blue-dark" },
  orange: { icon: "bg-brand-orange/15 text-brand-orange-dark", hover: "hover:bg-brand-orange/10 hover:text-brand-orange-dark" },
  green: { icon: "bg-emerald-500/15 text-emerald-600", hover: "hover:bg-emerald-500/10 hover:text-emerald-600" },
  pink: { icon: "bg-fuchsia-500/15 text-fuchsia-600", hover: "hover:bg-fuchsia-500/10 hover:text-fuchsia-600" },
};

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
          {SERVICES.map(({ to, label, icon: Icon, color, children }) => {
            const styles = COLOR_STYLES[color];
            return (
              <div key={to}>
                <Link
                  to={to}
                  role="menuitem"
                  className={classNames(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-800 transition-colors",
                    styles.hover,
                  )}
                  onClick={() => setOpen(false)}
                >
                  <span className={classNames("rounded-lg p-2", styles.icon)}>
                    <Icon size={18} />
                  </span>
                  {label}
                </Link>
                {children && (
                  <div className="ml-11 mb-1 space-y-0.5 border-l-2 border-brand-border pl-3">
                    {children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        role="menuitem"
                        className={classNames(
                          "flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-600 transition-colors",
                          styles.hover,
                        )}
                        onClick={() => setOpen(false)}
                      >
                        <child.icon size={13} />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
