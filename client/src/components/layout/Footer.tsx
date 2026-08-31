import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { Logo } from "./Logo";

const QUICK_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact-us", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-condition", label: "Terms & Condition" },
];

const SERVICE_LINKS = [
  { to: "/payment-solution", label: "Payment Solution" },
  { to: "/business-energy", label: "Business Energy" },
  { to: "/merchant-cash-advance", label: "Merchant Cash Advance" },
  { to: "/digital-marketing", label: "Digital Marketing" },
];

export function Footer() {
  const settings = useSiteSettings();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            At Save4u we provide end to end digital solutions, making us a unique destination for
            all your business requirements.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Facebook, href: settings.socialLinks.facebook || "#" },
              { Icon: Linkedin, href: settings.socialLinks.linkedin || "#" },
              { Icon: Instagram, href: settings.socialLinks.instagram || "#" },
              { Icon: Twitter, href: settings.socialLinks.twitter || "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label="Social media link"
                className="rounded-full border border-slate-700 p-2 text-slate-300 transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="relative inline-block font-heading text-sm font-bold uppercase tracking-wide text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-8 after:bg-brand-orange">
            Quick Links
          </h3>
          <ul className="mt-6 space-y-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-brand-orange">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="relative inline-block font-heading text-sm font-bold uppercase tracking-wide text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-8 after:bg-brand-orange">
            Services
          </h3>
          <ul className="mt-6 space-y-3 text-sm">
            {SERVICE_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-brand-orange">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="relative inline-block font-heading text-sm font-bold uppercase tracking-wide text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-8 after:bg-brand-orange">
            Contact Us
          </h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-orange" />
              <span>{settings.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-brand-orange" />
              <a href={`mailto:${settings.contactEmail}`} className="hover:text-brand-orange">
                {settings.contactEmail}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-brand-orange" />
              <a href={`tel:${settings.contactPhone.replace(/\s+/g, "")}`} className="hover:text-brand-orange">
                {settings.contactPhone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} Save4u. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-brand-orange">
              Privacy Policy
            </Link>
            <Link to="/terms-and-condition" className="hover:text-brand-orange">
              Terms & Condition
            </Link>
            <Link to="/admin/login" className="hover:text-brand-orange">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
