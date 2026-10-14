import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { CalendarDays, ChevronDown, FileText, Mail, Phone, PhoneCall, ShieldCheck, Cookie, ArrowRight, type LucideIcon } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CtaBanner } from "@/components/home/CtaBanner";
import { SplitText } from "@/components/ui/SplitText";
import { useSiteSettings } from "@/hooks/useSiteSettings";

export interface LegalSection {
  id: string;
  title: string;
  icon: LucideIcon;
  content: ReactNode;
}

export interface LegalHighlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface LegalPageProps {
  title: string;
  intro: ReactNode;
  lastUpdated: string;
  heroImage: string;
  sections: LegalSection[];
  /** Optional "at a glance" cards shown between the intro and the first section. */
  highlights?: LegalHighlight[];
}

const LEGAL_LINKS = [
  { to: "/terms-and-condition", label: "Terms & Conditions", icon: FileText },
  { to: "/privacy-policy", label: "Privacy Policy", icon: ShieldCheck },
  { to: "/cookie-policy", label: "Cookie Policy", icon: Cookie },
];

/** Tracks which section is currently in view so the table of contents can highlight it. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function LegalPage({ title, intro, lastUpdated, heroImage, sections, highlights }: LegalPageProps) {
  const settings = useSiteSettings();
  const { pathname } = useLocation();
  const active = useActiveSection(sections.map((s) => s.id));

  const toc = (
    <ol className="space-y-1 text-sm">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className={`flex items-start gap-3 rounded-lg px-3 py-2 transition-colors ${
              active === s.id
                ? "bg-brand-blue/10 font-semibold text-brand-blue-dark"
                : "text-slate-600 hover:bg-slate-50 hover:text-brand-navy"
            }`}
          >
            <span className="w-5 shrink-0 tabular-nums text-xs leading-5 opacity-70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="leading-5">{s.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <Breadcrumb current={title} />

      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-brand-gradient py-16 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden
        />
        <div className="container-page relative">
          <span className="text-sm font-bold uppercase tracking-wide text-white/80">Save4u Legal</span>
          <h1 className="mt-3 h1-hero">
            <SplitText as="span" text={title} />
          </h1>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <CalendarDays size={14} />
            Last updated: {lastUpdated}
          </span>
        </div>
      </section>

      <section className="bg-brand-bg py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <details className="group rounded-2xl border border-brand-border bg-white shadow-sm lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-heading text-sm font-bold text-brand-navy">
                On this page
                <ChevronDown size={18} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-slate-100 p-2">{toc}</div>
            </details>

            <div className="hidden rounded-2xl border border-brand-border bg-white p-4 shadow-sm lg:block">
              <p className="px-3 pb-2 pt-1 font-heading text-xs font-bold uppercase tracking-wide text-slate-400">
                On this page
              </p>
              <nav aria-label="Table of contents" className="max-h-[50vh] overflow-y-auto">
                {toc}
              </nav>
            </div>

            <div className="mt-6 hidden rounded-2xl border border-brand-border bg-white p-4 shadow-sm lg:block">
              <p className="px-3 pb-2 pt-1 font-heading text-xs font-bold uppercase tracking-wide text-slate-400">
                Legal
              </p>
              <ul className="space-y-1 text-sm">
                {LEGAL_LINKS.map(({ to, label, icon: Icon }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                        pathname === to
                          ? "bg-brand-orange/10 font-semibold text-brand-orange-dark"
                          : "text-slate-600 hover:bg-slate-50 hover:text-brand-navy"
                      }`}
                    >
                      <Icon size={16} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0 space-y-6">
            <div className="rounded-2xl border-l-4 border-brand-orange bg-white p-6 text-[15px] leading-relaxed text-slate-600 shadow-sm sm:p-8">
              {intro}
            </div>

            {highlights && (
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map(({ icon: Icon, title: label, text }) => (
                  <div
                    key={label}
                    className="flex gap-4 rounded-2xl border border-brand-border bg-white/80 p-5 shadow-sm backdrop-blur"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-bold text-brand-navy">{label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {sections.map(({ id, title: heading, icon: Icon, content }, i) => (
              <article
                key={id}
                id={id}
                className="scroll-mt-32 rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <header className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-blue">
                    <Icon size={20} />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-brand-orange">
                      Section {i + 1}
                    </span>
                    <h2 className="font-heading text-lg font-bold leading-snug text-brand-navy sm:text-xl">{heading}</h2>
                  </div>
                </header>
                <div className="legal-body mt-5 space-y-4 text-[15px] leading-relaxed text-slate-600">{content}</div>
              </article>
            ))}

            <div className="overflow-hidden rounded-2xl bg-brand-navy p-6 text-white shadow-lg sm:p-8">
              <h2 className="font-heading text-xl font-bold">Have a question about this policy?</h2>
              <p className="mt-2 text-sm text-slate-300">
                Our customer support team is happy to help. Get in touch and we'll get back to you as soon as
                possible.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/20"
                >
                  <Mail size={16} className="text-brand-blue" />
                  {settings.contactEmail}
                </a>
                {settings.landlinePhone && (
                  <a
                    href={`tel:${settings.landlinePhone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/20"
                  >
                    <PhoneCall size={16} className="text-brand-blue" />
                    Landline: {settings.landlinePhone}
                  </a>
                )}
                <a
                  href={`tel:${settings.contactPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/20"
                >
                  <Phone size={16} className="text-brand-blue" />
                  {settings.contactPhone}
                </a>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-brand-orange-dark"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
