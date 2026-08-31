import { usePageMeta } from "@/hooks/usePageMeta";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function TermsAndConditions() {
  usePageMeta("Terms & Condition", "Terms and conditions for using the Save4u website and services.");

  return (
    <>
    <Breadcrumb current="Terms & Condition" />
    <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-brand-gradient py-16 text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80)",
        }}
        aria-hidden
      />
      <div className="container-page relative">
        <span className="text-sm font-bold uppercase tracking-wide text-white/80">Save4u</span>
        <h1 className="mt-3 h1-hero">Terms & Condition</h1>
      </div>
    </section>
    <section className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-slate-500">Last updated: 30 August 2026</p>

        <div className="prose-content mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By using the Save4u website or submitting an enquiry, you agree to be bound by these
              terms and conditions. If you do not agree, please do not use the site.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">2. Our Services</h2>
            <p className="mt-2">
              Save4u introduces businesses to third-party providers for payment processing, business
              energy, funding, and digital marketing services. Final terms for any service are set
              by the relevant supplier and agreed directly with you.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">3. No Guarantee of Outcome</h2>
            <p className="mt-2">
              While we aim to find the best available rates and terms, we cannot guarantee approval,
              savings, or results for any individual business.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">4. Website Use</h2>
            <p className="mt-2">
              You agree to use this website only for lawful purposes and not to submit false or
              misleading information through our enquiry forms.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">5. Limitation of Liability</h2>
            <p className="mt-2">
              Save4u is not liable for any loss arising from your use of this website or from
              services provided by third-party suppliers we introduce you to.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">6. Contact Us</h2>
            <p className="mt-2">
              Questions about these terms can be sent to support@save4u.co.uk or +44 2034884072.
            </p>
          </section>
        </div>
      </div>
    </section>
    <CtaBanner />
    </>
  );
}
