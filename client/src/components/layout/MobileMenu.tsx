import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/payment-solution", label: "Payment Solution" },
  { to: "/business-energy", label: "Business Energy" },
  { to: "/merchant-cash-advance", label: "Merchant Cash Advance" },
  { to: "/digital-marketing", label: "Digital Marketing" },
  { to: "/contact-us", label: "Contact Us" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const listRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open && listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out" },
      );
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-brand-navy/95 backdrop-blur-lg md:hidden">
      <div className="container-page flex items-center justify-between py-5">
        <Logo light />
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="rounded-full border border-white/30 p-2 text-white"
        >
          <X size={20} />
        </button>
      </div>
      <ul ref={listRef} className="container-page flex flex-1 flex-col gap-1 overflow-y-auto py-4">
        {LINKS.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="block rounded-xl px-3 py-3 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="mt-4">
          <Button to="/contact-us" className="w-full">
            Get a Quote
          </Button>
        </li>
      </ul>
    </div>
  );
}
