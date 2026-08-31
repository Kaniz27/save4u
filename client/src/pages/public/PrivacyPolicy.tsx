import { usePageMeta } from "@/hooks/usePageMeta";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function PrivacyPolicy() {
  usePageMeta("Privacy Policy", "How Save4u collects, uses and protects your data.");

  return (
    <>
    <Breadcrumb current="Privacy Policy" />
    <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-brand-gradient py-16 text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80)",
        }}
        aria-hidden
      />
      <div className="container-page relative">
        <span className="text-sm font-bold uppercase tracking-wide text-white/80">Save4u</span>
        <h1 className="mt-3 h1-hero">Privacy Policy</h1>
      </div>
    </section>
    <section className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-slate-500">Last updated: 30 August 2026</p>

        <div className="prose-content mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">1. Introduction</h2>
            <p className="mt-2">
              Save4u ("we", "us", "our") is committed to protecting the privacy of visitors to our
              website and clients who use our services. This policy explains what personal data we
              collect, how we use it, and the rights you have over it.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">2. Information We Collect</h2>
            <p className="mt-2">
              When you submit an enquiry through our website, we collect your name, email address,
              phone number, company name, and any message you provide, along with which service you
              expressed interest in.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">3. How We Use Your Information</h2>
            <p className="mt-2">
              We use the information you provide to respond to your enquiry, provide quotes for our
              services, and, where you have consented, keep you informed about relevant offers.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">4. Data Sharing</h2>
            <p className="mt-2">
              We do not sell your personal data. We may share it with trusted suppliers (such as
              payment processors or energy suppliers) solely to fulfil the service you have
              requested.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">5. Your Rights</h2>
            <p className="mt-2">
              Under UK GDPR you have the right to access, correct, or request deletion of your
              personal data. To exercise these rights, contact us at support@save4u.co.uk.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-lg font-bold text-slate-900">6. Contact Us</h2>
            <p className="mt-2">
              If you have any questions about this policy, please contact us at
              support@save4u.co.uk or +44 2034884072.
            </p>
          </section>
        </div>
      </div>
    </section>
    <CtaBanner />
    </>
  );
}
