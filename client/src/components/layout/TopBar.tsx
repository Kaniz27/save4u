import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

export function TopBar() {
  const settings = useSiteSettings();

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-11 w-full bg-brand-navy text-slate-300">
      <div className="container-page flex h-full items-center justify-between">
        <div className="hidden items-center gap-5 text-sm md:flex">
          <span className="text-slate-400">Sales &amp; Support Enquiry</span>
          <a
            href={`tel:${settings.contactPhone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 font-medium text-white transition-colors hover:text-brand-blue"
          >
            <Phone size={13} className="text-brand-blue" />
            {settings.contactPhone}
          </a>
          <a
            href={`mailto:${settings.contactEmail}`}
            className="flex items-center gap-1.5 font-medium text-white transition-colors hover:text-brand-blue"
          >
            <Mail size={13} className="text-brand-blue" />
            {settings.contactEmail}
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {[
            { Icon: Facebook, href: settings.socialLinks.facebook || "#" },
            { Icon: Twitter, href: settings.socialLinks.twitter || "#" },
            { Icon: Instagram, href: settings.socialLinks.instagram || "#" },
            { Icon: Linkedin, href: settings.socialLinks.linkedin || "#" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label="Social media link"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-navy transition-transform duration-200 hover:scale-110 hover:bg-brand-blue hover:text-white"
            >
              <Icon size={12} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
