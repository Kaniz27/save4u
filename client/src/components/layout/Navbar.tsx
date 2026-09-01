import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { classNames } from "@/lib/utils";
import { Logo } from "./Logo";
import { ServicesDropdown } from "./ServicesDropdown";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/why-choose-us", label: "Why Choose Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={classNames(
          "fixed inset-x-0 top-11 z-40 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "border-b border-slate-100 bg-white/70 shadow-sm backdrop-blur-lg",
        )}
      >
        <nav className="container-page flex h-20 items-center justify-between">
          <Logo light={transparent} />

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={classNames(
                  "text-sm font-semibold transition-colors",
                  transparent
                    ? "text-white hover:text-brand-blue"
                    : "text-slate-700 hover:text-brand-blue-dark",
                )}
              >
                {link.label}
              </Link>
            ))}
            <ServicesDropdown dark={transparent} />
            <Link
              to="/contact-us"
              className={classNames(
                "text-sm font-semibold transition-colors",
                transparent
                  ? "text-white hover:text-brand-blue"
                  : "text-slate-700 hover:text-brand-blue-dark",
              )}
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:block">
            <Button to="/contact-us">Get a Quote</Button>
          </div>

          <button
            aria-label="Open menu"
            className={classNames(
              "rounded-full border p-2 md:hidden",
              transparent ? "border-white/40 text-white" : "border-slate-200 text-slate-700",
            )}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
