import { useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useService, useServices } from "@/hooks/useServices";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { SubServiceGrid } from "@/components/services/SubServiceGrid";
import { ConversionFunnel } from "@/components/services/ConversionFunnel";
import { HowItWorks } from "@/components/services/HowItWorks";
import { HighlightList } from "@/components/services/HighlightList";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { LeadForm } from "@/components/services/LeadForm";
import { RelatedServices } from "@/components/services/RelatedServices";
import { CtaBanner } from "@/components/home/CtaBanner";
import { SplitText } from "@/components/ui/SplitText";
import type { ServiceInterest } from "@/types";

const ENQUIRY_POINTS = [
  "A named specialist reviews your enquiry personally",
  "Whole-of-market comparison, no pressure to switch",
  "We'll respond within one working day",
];

function LoadingState() {
  return <div className="flex min-h-[60vh] items-center justify-center text-slate-400">Loading…</div>;
}

function NotFoundState() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-2 text-center">
      <h1 className="font-heading text-2xl font-bold text-slate-900">Service not found</h1>
      <p className="text-slate-500">This service page hasn't been set up yet.</p>
    </div>
  );
}

// Distinct, on-topic placeholder imagery per service for the alternating
// image/text HighlightList rows — flagged as placeholders in the README.
const HIGHLIGHT_IMAGES: Record<string, string[]> = {
  "payment-solution": [
    "https://www.takepayments.com/media/11phqqjy/card_machines_a920_pro_graphic-402x.png",
    "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
  ],
  "business-energy": [
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
  ],
  "merchant-cash-advance": [
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
  ],
  "digital-marketing": [
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  ],
};

const SEO_TITLES: Record<string, string> = {
  "payment-solution": "Card Payment Solutions for UK Businesses",
  "merchant-cash-advance": "Flexible Merchant Cash Advance for UK Businesses",
  "digital-marketing": "Digital Marketing Services for UK Businesses",
};

export default function ServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const { service, loading, error } = useService(slug);
  const { services } = useServices();

  usePageMeta(SEO_TITLES[slug] ?? service?.name ?? "Service", service?.description);

  if (loading) return <LoadingState />;
  if (error || !service) return <NotFoundState />;

  return (
    <>
      <Breadcrumb current={service.name} />
      <ServiceHero service={service} />

      <section className="container-page py-16">
        <p className="mx-auto max-w-3xl text-center text-lg text-slate-600">{service.description}</p>
      </section>

      <FeatureGrid features={service.features} />
      <SubServiceGrid subServices={service.subServices} />
      {service.layoutVariant === "marketing" && <ConversionFunnel />}
      <HowItWorks steps={service.howItWorks} />

      <HighlightList
        title={`Why businesses choose our ${service.name.toLowerCase()}`}
        highlights={service.highlights}
        images={HIGHLIGHT_IMAGES[service.slug] ?? HIGHLIGHT_IMAGES["payment-solution"]}
      />

      <section id="enquiry" className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">Get Started</span>
            <h2 className="mt-3 h2-section text-slate-900">
              <SplitText as="span" text={`Interested in ${service.name}?`} trigger="scroll" />
            </h2>
            <p className="mt-4 text-slate-600">
              Fill in your details and a specialist will get back to you — no obligation, no pressure, just clear
              advice on whether {service.name.toLowerCase()} makes sense for your business.
            </p>
            <ul className="mt-6 space-y-3">
              {ENQUIRY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue-dark" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm
            defaultServiceInterest={service.slug as ServiceInterest}
            lockServiceInterest
            source={`/${service.slug}`}
            title="Send an enquiry"
            subtitle="Takes less than a minute."
          />
        </div>
      </section>

      <FaqAccordion faqs={service.faqs} />

      <CtaBanner
        title={`Ready to get started with ${service.name}?`}
        subtitle={`Speak to a Save4u specialist today and see how our ${service.name.toLowerCase()} can work for your business.`}
        image={service.ctaImage || undefined}
      />

      <RelatedServices services={services} currentSlug={service.slug} />
    </>
  );
}
