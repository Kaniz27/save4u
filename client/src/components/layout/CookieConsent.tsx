import { useEffect, useRef, useState } from "react";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/gsap";

const STORAGE_KEY = "save4u_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible || !ref.current) return;
    gsap.fromTo(
      ref.current,
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
    );
  }, [visible]);

  const dismiss = (choice: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, choice);
    if (!ref.current) {
      setVisible(false);
      return;
    }
    gsap.to(ref.current, {
      y: 120,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => setVisible(false),
    });
  };

  if (!visible) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md"
    >
      <div className="glass-card flex flex-col gap-4 border-brand-blue/20 bg-white/95 p-6 shadow-xl backdrop-blur-lg sm:flex-row sm:items-start">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
          <Cookie size={22} />
        </span>
        <div className="flex-1">
          <p className="font-heading text-sm font-bold text-brand-navy">We use cookies</p>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
            We use cookies to run this site and understand how it's used. See our{" "}
            <Link to="/privacy-policy" className="font-semibold text-brand-blue-dark hover:underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              onClick={() => dismiss("accepted")}
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-5 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-brand-orange-dark hover:shadow-glow active:scale-95"
            >
              Accept All
            </button>
            <button
              onClick={() => dismiss("declined")}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-bold text-slate-700 transition-all duration-200 hover:border-brand-blue/40 hover:bg-brand-blue/5 active:scale-95"
            >
              Necessary Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
