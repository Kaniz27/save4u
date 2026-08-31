import { Target, Heart, Rocket, CheckCircle2 } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";

const VALUES = [
  { icon: Target, title: "Our Mission", text: "To be the single, trusted place UK businesses turn to for the essentials that keep them running lean and profitable." },
  { icon: Heart, title: "Our Approach", text: "Honest comparisons, clear pricing, and no pressure — we only recommend a switch when it genuinely benefits you." },
  { icon: Rocket, title: "Our Promise", text: "Fast turnarounds and a dedicated point of contact from your first enquiry through to ongoing support." },
];

const HOW_WE_WORK = [
  "We start with a free review of what you're currently paying and using",
  "You get a whole-of-market comparison, with the numbers laid out clearly",
  "If it's worth switching, we handle the paperwork and setup end-to-end",
  "One dedicated specialist stays with you long after the switch is done",
];

export default function About() {
  usePageMeta("About Us", "Learn about Save4u — end-to-end digital and business solutions for UK companies.");
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".value-card" });

  return (
    <>
      <Breadcrumb current="About Us" />
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-brand-gradient py-16 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)",
          }}
          aria-hidden
        />
        <div className="container-page relative">
          <span className="text-sm font-bold uppercase tracking-wide text-white/80">About Save4u</span>
          <h1 className="mt-3 h1-hero">End-to-end business solutions, all in one place</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/90">
            At Save4u we provide end to end digital solutions, making us a unique destination for
            all your business requirements.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt="Save4u business consultants meeting with a client"
            className="rounded-3xl object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="h2-section text-slate-900">Who we are</h2>
            <p className="mt-5 text-slate-600">
              Save4u was founded to remove the hassle of comparing and managing the suppliers every
              business depends on. Instead of juggling separate providers for card payments,
              energy, funding, and marketing, our clients work with one team that understands their
              business end-to-end.
            </p>
            <p className="mt-4 text-slate-600">
              We're proud to have helped hundreds of UK businesses reduce costs and access the
              funding and marketing support they need to grow — with transparent advice and no
              hidden fees.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <div ref={ref} className="grid gap-8 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="value-card glass-card group p-8 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue-dark transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <span className="text-sm font-bold uppercase tracking-wide text-brand-orange">How We Work</span>
            <h2 className="mt-3 h2-section text-slate-900">A simple process, from first call to switched supplier</h2>
            <p className="mt-5 text-slate-600">
              No lengthy sales process and no jargon — just a clear path from your first enquiry to a switch that
              actually saves you money.
            </p>
            <ul className="mt-6 space-y-3">
              {HOW_WE_WORK.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue-dark" />
                  {point}
                </li>
              ))}
            </ul>
            <Button to="/contact-us" className="mt-8">
              Start the Conversation
            </Button>
          </div>
          <div className="order-1 overflow-hidden rounded-3xl md:order-2">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="Save4u specialist walking a client through their options"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CtaBanner image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" />
    </>
  );
}
