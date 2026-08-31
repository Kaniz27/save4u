import { useRef, useState, type KeyboardEvent, type FocusEvent } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Zap, Banknote, Megaphone, ChevronDown } from "lucide-react";
import { classNames } from "@/lib/utils";

const SERVICES = [
  { to: "/payment-solution", label: "Payment Solution", icon: CreditCard },
  { to: "/business-energy", label: "Business Energy", icon: Zap },
  { to: "/merchant-cash-advance", label: "Merchant Cash Advance", icon: Banknote },
  { to: "/digital-marketing", label: "Digital Marketing", icon: Megaphone },
];

export function ServicesDropdown({ dark }: { dark: boolean }) {
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
        className={classNames(
          "flex items-center gap-1 text-sm font-semibold transition-colors",
          dark ? "text-white hover:text-brand-orange" : "text-slate-700 hover:text-brand-blue-dark",
        )}
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
          className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/40 bg-white/90 p-2 shadow-xl backdrop-blur-lg"
        >
          {SERVICES.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
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
          ))}
        </div>
      )}
    </div>
  );
}
