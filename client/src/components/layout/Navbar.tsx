import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { ServicesDropdown } from "./ServicesDropdown";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { classNames } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/why-choose-us", label: "Why Choose Us" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const settings = useSiteSettings();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={classNames(
          "fixed inset-x-0 top-11 z-40 border-b border-slate-100 backdrop-blur-lg transition-shadow duration-300",
          scrolled ? "bg-white/95 shadow-lg" : "bg-white/70 shadow-sm",
        )}
      >
        <nav className="container-page flex h-20 items-center justify-between">
          <Logo compact={scrolled} />

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand-blue-dark"
              >
                {link.label}
              </Link>
            ))}
            <ServicesDropdown />
            <Link
              to="/contact-us"
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand-blue-dark"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${settings.contactPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue/40 px-5 py-3 text-sm font-semibold text-brand-blue-dark transition-colors hover:bg-brand-blue/10"
            >
              <Phone size={16} />
              Call Us
            </a>
            <Button to="/contact-us">Get a Free Quote</Button>
          </div>

          <button
            aria-label="Open menu"
            className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
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
