import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageSquare, Headset, Check } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LeadForm } from "@/components/services/LeadForm";
import { TrustBadges } from "@/components/home/TrustBadges";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Icon8 } from "@/components/ui/Icon8";
import { SplitText } from "@/components/ui/SplitText";
import type { ServiceFaq } from "@/types";

const CONTACT_BULLETS = ["We reply within one working day", "No cost, no obligation to switch", "Speak directly to a specialist"];

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl" />

      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue-dark shadow-sm backdrop-blur-sm">
            <MessageSquare size={14} />
            Get In Touch
          </span>
          <h1 className="h1-hero mt-6 text-brand-navy">
            <SplitText as="span" className="block" text="Let's Talk About" delay={0.1} />
            <SplitText as="span" className="block" text="Your Business" delay={0.3} />
          </h1>
          <p className="mt-5 max-w-xl text-slate-600">
            Tell us what you're looking to improve and our team will help you find the right solution.
          </p>
          <ul className="mt-7 space-y-3.5">
            {CONTACT_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-base font-medium text-slate-700">
                <Check size={20} strokeWidth={3} className="shrink-0 text-brand-blue-dark" />
                {bullet}
              </li>
            ))}
          </ul>
          <a
            href="#contact-form"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-orange-dark hover:shadow-glow hover:scale-[1.03]"
          >
            Send a Message
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-8 shadow-xl">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-2xl" />
            <div className="flex items-center gap-3 border-b border-brand-border pb-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue-dark">
                <Headset size={20} />
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-brand-navy">Talk to a Specialist</p>
                <p className="text-xs text-slate-500">Usually replies within an hour</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-blue/10 px-4 py-2.5 text-sm text-brand-navy">
                Hi — I'd like a quote for card payments and business funding.
              </div>
              <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-brand-bg px-4 py-2.5 text-sm text-brand-navy">
                Happy to help! I'll have a specialist call you within one working day.
              </div>
            </div>
          </div>

          <div className="glass-card absolute -right-4 -top-4 flex items-center gap-3 p-3.5 sm:-right-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
              <Mail size={16} />
            </span>
            <p className="font-heading text-xs font-bold text-brand-navy">Reply in 1 working day</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const CONTACT_FAQS: ServiceFaq[] = [
  { question: "How quickly will you get back to me?", answer: "We respond to every enquiry within one working day, usually much sooner." },
  { question: "What details do I need to provide?", answer: "Just your name, contact details and a short message about what you're looking for — we'll take it from there." },
  { question: "Can I request a call back instead?", answer: "Yes — mention a good time to call in your message and a specialist will ring you directly." },
  { question: "Is there any cost or obligation to get in touch?", answer: "None — getting in touch is completely free, with no obligation to switch anything." },
];

export default function ContactUs() {
  usePageMeta(
    "Contact Our Business Growth Team",
    "Get in touch with the Save4u team — payments, funding and marketing enquiries welcome.",
  );
  const settings = useSiteSettings();
  const infoRef = useScrollReveal<HTMLDivElement>({ selector: ".info-card" });

  const INFO_CARDS = [
    { icon: "map-pin", label: "Our Address", value: settings.address },
    { icon: "new-post", label: "Email Us", value: settings.contactEmail, href: `mailto:${settings.contactEmail}` },
    { icon: "phone", label: "Call Us", value: settings.contactPhone, href: `tel:${settings.contactPhone.replace(/\s+/g, "")}` },
    { icon: "clock", label: "Opening Hours", value: "Mon – Fri: 9:00am – 5:30pm" },
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
      <ContactHero />

      <section id="contact-form" className="container-page py-16">
        <div ref={infoRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_CARDS.map(({ icon, label, value, href }) => {
            const content = (
              <>
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-blue/10 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-blue/20">
                  <Icon8 slug={icon} alt={label} size={64} className="h-11 w-11" />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-blue-dark transition-colors duration-300 group-hover:text-brand-navy">
                  {label}
                </p>
                <p className="mt-2 text-sm text-slate-700">{value}</p>
              </>
            );
            return href ? (
              <a
                key={label}
                href={href}
                className="info-card glass-card group cursor-pointer p-6 text-center hover:bg-white hover:shadow-glow-blue active:scale-95"
              >
                {content}
              </a>
            ) : (
              <div
                key={label}
                className="info-card glass-card group cursor-default p-6 text-center hover:bg-white hover:shadow-glow-blue active:scale-95"
              >
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

      <TrustBadges />

      <FaqAccordion faqs={CONTACT_FAQS} />

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
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-navy shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:rotate-6 hover:bg-brand-blue hover:text-white"
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
