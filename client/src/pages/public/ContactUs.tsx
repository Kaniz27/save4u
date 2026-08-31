import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { LeadForm } from "@/components/services/LeadForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function ContactUs() {
  usePageMeta("Contact Us", "Get in touch with the Save4u team — payments, energy, funding and marketing enquiries welcome.");
  const settings = useSiteSettings();

  const INFO_CARDS = [
    { icon: MapPin, label: "Our Address", value: settings.address },
    { icon: Mail, label: "Email Us", value: settings.contactEmail, href: `mailto:${settings.contactEmail}` },
    { icon: Phone, label: "Call Us", value: settings.contactPhone, href: `tel:${settings.contactPhone.replace(/\s+/g, "")}` },
    { icon: Clock, label: "Opening Hours", value: "Mon – Fri: 9:00am – 5:30pm" },
  ];

  const SOCIALS = [
    { Icon: Facebook, href: settings.socialLinks.facebook || "#" },
    { Icon: Twitter, href: settings.socialLinks.twitter || "#" },
    { Icon: Instagram, href: settings.socialLinks.instagram || "#" },
    { Icon: Linkedin, href: settings.socialLinks.linkedin || "#" },
  ];

  return (
    <>
      <Breadcrumb current="Contact Us" />
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-brand-gradient py-16 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80)",
          }}
          aria-hidden
        />
        <div className="container-page relative">
          <span className="text-sm font-bold uppercase tracking-wide text-white/80">Contact Us</span>
          <h1 className="mt-3 h1-hero">Let's talk about your business</h1>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_CARDS.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue-dark transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon size={22} />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-orange">{label}</p>
                <p className="mt-2 text-sm text-slate-700">{value}</p>
              </>
            );
            return href ? (
              <a key={label} href={href} className="glass-card group p-6 text-center">
                {content}
              </a>
            ) : (
              <div key={label} className="glass-card group p-6 text-center">
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <LeadForm source="/contact-us" title="Send us a message" subtitle="We'll respond within one working day." />
          <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
            <iframe
              title="Save4u office location"
              src="https://www.google.com/maps?q=37+Victoria+Road,+Romford,+RM1+2LH&output=embed"
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section
        className="relative bg-fixed bg-cover bg-center py-24 text-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-blue-dark/70 to-brand-navy/85" />
        <div className="container-page relative">
          <div className="mx-auto flex max-w-xl items-center justify-center gap-4">
            <span className="h-px flex-1 bg-white/30" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Contact Us</span>
            <span className="h-px flex-1 bg-white/30" />
          </div>
          <h2 className="mt-5 h1-hero">Get in Touch</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            We're passionate about connecting with you and building strong partnerships — let's work together to
            achieve your goals.
          </p>

          <span className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-blue-dark shadow-lg">
            <MapPin size={26} />
          </span>

          <div className="mt-8 flex justify-center gap-4">
            {SOCIALS.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label="Social media link"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-navy shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:rotate-6 hover:bg-brand-orange hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
