import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { icon8Url } from "@/lib/icons8";
import icoBadge from "@/assets/badge-ico.jpeg";
import energyOmbudsmanBadge from "@/assets/badge-energy-ombudsman.jpeg";

const COMPLIANCE_BADGES = [
  { src: icoBadge, alt: "ICO — Information Commissioner's Office registered", href: "https://ico.org.uk" },
  { src: energyOmbudsmanBadge, alt: "Energy Ombudsman — ADR scheme member", href: "https://www.energyombudsman.org" },
];

const PAYMENT_METHODS = [
  { slug: "visa", alt: "Visa" },
  { slug: "mastercard", alt: "Mastercard" },
  { slug: "maestro", alt: "Maestro" },
  { slug: "amex", alt: "American Express" },
  { slug: "apple-pay", alt: "Apple Pay" },
  { slug: "google-pay", alt: "Google Pay" },
];

const LEGAL_NOTICE =
  "SAVE 4U is a trading name of SAVE 4U LTD, a company registered in England & Wales (CoN-15332365). VAT Registration No GB457 6350 70. We are registered under the Energy Broker Alternative Dispute Resolution (ADR) scheme, Reg No C35SAVE16. Registered office address: 764 Barking Road, London, England, E13 9PJ. Our business trading address: Metloc Business Centre, Unit 15 & 16, 37 Victoria Road, Romford, London, RM1 2LH.";

const QUICK_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact-us", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-condition", label: "Terms & Condition" },
];

const SERVICE_LINKS = [
  { to: "/payment-solution", label: "Payment Solutions" },
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
                className="rounded-full border border-slate-700 p-2 text-slate-300 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-400">We Accept</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method.slug}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm"
              >
                <img
                  src={icon8Url(method.slug, 48, "color")}
                  alt={method.alt}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="relative inline-block font-heading text-sm font-bold uppercase tracking-wide text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-8 after:bg-brand-blue">
            Quick Links
          </h3>
          <ul className="mt-6 space-y-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-brand-blue">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="relative inline-block font-heading text-sm font-bold uppercase tracking-wide text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-8 after:bg-brand-blue">
            Services
          </h3>
          <ul className="mt-6 space-y-3 text-sm">
            {SERVICE_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-brand-blue">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="relative inline-block font-heading text-sm font-bold uppercase tracking-wide text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-8 after:bg-brand-blue">
            Contact Us
          </h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-blue" />
              <span>{settings.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-brand-blue" />
              <a href={`mailto:${settings.contactEmail}`} className="hover:text-brand-blue">
                {settings.contactEmail}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-brand-blue" />
              <a href={`tel:${settings.contactPhone.replace(/\s+/g, "")}`} className="hover:text-brand-blue">
                {settings.contactPhone}
              </a>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            {COMPLIANCE_BADGES.map((badge) => (
              <a
                key={badge.alt}
                href={badge.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-20 w-28 items-center justify-center rounded-xl bg-white p-3 shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <img src={badge.src} alt={badge.alt} className="h-full w-full object-contain" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-white/[0.03]">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="font-heading text-lg font-bold text-white">Ready to grow?</p>
          <Button to="/contact-us">
            Get a Free Quote <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} Save4u. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-brand-blue">
              Privacy Policy
            </Link>
            <Link to="/terms-and-condition" className="hover:text-brand-blue">
              Terms & Condition
            </Link>
            <Link to="/admin/login" className="hover:text-brand-blue">
              Admin Login
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-brand-navy/60">
        <div className="container-page py-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">Company Information</p>
          <p className="mx-auto mt-2 max-w-4xl text-[11px] leading-relaxed text-slate-500">{LEGAL_NOTICE}</p>
        </div>
      </div>
    </footer>
  );
}
