import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Ban,
  Briefcase,
  CheckCircle2,
  Copyright,
  CreditCard,
  ExternalLink,
  Gift,
  Handshake,
  Info,
  Landmark,
  RefreshCw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: CheckCircle2,
    content: (
      <>
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these
          Terms. These Terms apply to all visitors, users and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part
          of the terms then you may not access the Service.
        </p>
      </>
    ),
  },
  {
    id: "our-services",
    title: "Our Services",
    icon: Briefcase,
    content: (
      <>
        <p>
          Save4u introduces businesses to third-party providers for payment processing, business energy, funding
          and digital marketing services. Final terms for any service are set by the relevant supplier and agreed
          directly between you and that supplier.
        </p>
        <p>
          While we aim to find the best available rates and terms, we cannot guarantee approval, savings or
          results for any individual business.
        </p>
      </>
    ),
  },
  {
    id: "purchases",
    title: "Purchases",
    icon: CreditCard,
    content: (
      <>
        <p>
          You are encouraged to familiarise yourself with your rights contained within the Sale of Goods Act
          1979, the Unfair Contract Terms Act 1977 and the Consumer Rights Act 2015.
        </p>
        <p>
          If you wish to purchase any product or service made available through the Service ("Purchase"), you
          may be asked to supply certain information relevant to your Purchase including, without limitation,
          your credit card number, the expiration date of your credit card, your billing address and your
          shipping information.
        </p>
        <p>You represent and warrant that:</p>
        <ul>
          <li>you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and</li>
          <li>the information you supply to us is true, correct and complete.</li>
        </ul>
        <p>
          You expressly agree that Save4u is not responsible for any loss or damage arising from the submission
          of false or inaccurate information. By submitting such information, you grant us the right to provide
          the information to third parties for purposes of facilitating the completion of Purchases.
        </p>
      </>
    ),
  },
  {
    id: "order-cancellation",
    title: "Refusal & Cancellation of Orders",
    icon: XCircle,
    content: (
      <>
        <p>
          We reserve the right to refuse or cancel your order at any time for certain reasons including but not
          limited to: product or service availability, errors in the description or price of the product or
          service, an error in your order, or other reasons. You expressly agree that Save4u cannot accept any
          liability for loss or damage arising out of such cancellation.
        </p>
        <p>
          We reserve the right to refuse or cancel your order if fraud or an unauthorised or illegal transaction
          is suspected.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    title: "Availability, Errors and Inaccuracies",
    icon: AlertTriangle,
    content: (
      <>
        <p>
          We are constantly updating our offerings of products and services on the Service. The products or
          services available on our Service may be mispriced, described inaccurately or unavailable, and we may
          experience delays in updating information on the Service and in our advertising on other websites. You
          expressly agree that any such offer of a product or service does not constitute a legal offer capable
          of attracting legal consequences.
        </p>
        <p>
          We cannot and do not guarantee the accuracy or completeness of any information, including prices,
          product images, specifications, availability and services. We reserve the right to change or update
          information and to correct errors, inaccuracies or omissions at any time without prior notice.
        </p>
        <p>This section is without prejudice to your existing statutory rights.</p>
      </>
    ),
  },
  {
    id: "promotions",
    title: "Contests, Sweepstakes and Promotions",
    icon: Gift,
    content: (
      <p>
        Any contests, sweepstakes or other promotions (collectively, "Promotions") made available through the
        Service may be governed by rules that are separate from these Terms. If you participate in any
        Promotions, please review the applicable rules as well as our{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>. If the rules for a Promotion conflict with these Terms
        and Conditions, the Promotion rules will apply.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: Copyright,
    content: (
      <p>
        The Service and its original content, features and functionality are and will remain the exclusive
        property of Save4u and its licensors. The Service is protected by copyright, trademark and other laws of
        both the United Kingdom and foreign countries. Our trademarks and trade dress may not be used in
        connection with any product or service without the prior written consent of Save4u.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Links to Other Websites",
    icon: ExternalLink,
    content: (
      <>
        <p>
          Our Service may contain links to third-party websites or services that are not owned or controlled by
          Save4u.
        </p>
        <p>
          Save4u has no control over, and assumes no responsibility for, the content, privacy policies or
          practices of any third-party websites or services. You further acknowledge and agree that Save4u shall
          not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be
          caused by or in connection with use of or reliance on any such content, goods or services available on
          or through any such websites or services.
        </p>
        <p>
          We strongly advise you to read the terms and conditions and privacy policies of any third-party
          websites or services that you visit.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    icon: Ban,
    content: (
      <>
        <p>
          We may terminate or suspend your access immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use
          the Service will immediately cease.
        </p>
        <p>
          All provisions of the Terms which by their nature should survive termination shall survive
          termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and
          limitations of liability.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    icon: Handshake,
    content: (
      <p>
        You agree to defend, indemnify and hold harmless Save4u and its licensees and licensors, and their
        employees, contractors, agents, officers and directors, from and against any and all claims, damages,
        obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's
        fees), resulting from or arising out of (a) your use and access of the Service, or (b) a breach of these
        Terms.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    icon: ShieldAlert,
    content: (
      <>
        <p>
          In no event shall Save4u, nor its directors, employees, partners, agents, suppliers or affiliates, be
          liable for any indirect, incidental, special, consequential or punitive damages, including without
          limitation, loss of profits, data, use, goodwill or other intangible losses, resulting from:
        </p>
        <ul>
          <li>your access to or use of or inability to access or use the Service;</li>
          <li>any conduct or content of any third party on the Service;</li>
          <li>any content obtained from the Service; and</li>
          <li>unauthorised access, use or alteration of your transmissions or content,</li>
        </ul>
        <p>
          whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or
          not we have been informed of the possibility of such damage, and even if a remedy set forth herein is
          found to have failed of its essential purpose.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    icon: Info,
    content: (
      <>
        <p>
          Your use of the Service is at your sole risk. The Service is provided on an <strong>"AS IS"</strong>{" "}
          and <strong>"AS AVAILABLE"</strong> basis. The Service is provided without warranties of any kind,
          whether express or implied, including, but not limited to, implied warranties of merchantability,
          fitness for a particular purpose, non-infringement or course of performance.
        </p>
        <p>Save4u, its subsidiaries, affiliates and its licensors do not warrant that:</p>
        <ul>
          <li>the Service will function uninterrupted, secure or available at any particular time or location;</li>
          <li>any errors or defects will be corrected;</li>
          <li>the Service is free of viruses or other harmful components; or</li>
          <li>the results of using the Service will meet your requirements.</li>
        </ul>
      </>
    ),
  },
  {
    id: "exclusions",
    title: "Exclusions",
    icon: Scale,
    content: (
      <p>
        Without limiting the generality of the foregoing and notwithstanding any other provision of these terms,
        under no circumstances will Save4u ever be liable to you or any other person for any indirect,
        incidental, consequential, special, punitive or exemplary loss or damage arising from, connected with, or
        relating to your use of the Service, these Terms, the subject matter of these Terms, the termination of
        these Terms or otherwise, including but not limited to personal injury, loss of data, business, markets,
        savings, income, profits, use, production, reputation or goodwill, anticipated or otherwise, or economic
        loss, under any theory of liability (whether in contract, tort, strict liability or any other theory or
        law or equity), regardless of any negligence or other fault or wrongdoing (including without limitation
        gross negligence and fundamental breach) by Save4u or any person for whom Save4u is responsible, and even
        if Save4u has been advised of the possibility of such loss or damage being incurred.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    icon: Landmark,
    content: (
      <>
        <p>
          These Terms shall be governed and construed in accordance with the laws of England and Wales, without
          regard to its conflict of law provisions.
        </p>
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
          rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us
          regarding our Service, and supersede and replace any prior agreements we might have between us
          regarding the Service.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    icon: RefreshCw,
    content: (
      <>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
          revision is material we will try to provide at least 30 days' notice prior to any new terms taking
          effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p>
          By continuing to access or use our Service after those revisions become effective, you agree to be
          bound by the revised terms. If you do not agree to the new terms, you must stop using the Service.
        </p>
      </>
    ),
  },
  {
    id: "privacy-and-cookies",
    title: "Privacy Policy and Cookie Policy",
    icon: ShieldCheck,
    content: (
      <p>
        Please refer to our <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
        <Link to="/cookie-policy">Cookie Policy</Link>. You agree that they constitute part of these terms. You
        must read our Privacy Policy and Cookie Policy before you use the Service.
      </p>
    ),
  },
];

export default function TermsAndConditions() {
  usePageMeta("Terms & Conditions", "Terms and conditions for using the Save4u website and services.");

  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="14 October 2026"
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80"
      intro={
        <>
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the{" "}
            <strong>save4u.co.uk</strong> website (the "Service") operated by <strong>Save4u</strong> ("us", "we"
            or "our").
          </p>
          <p className="mt-3">
            If you have any questions regarding these terms, please <Link to="/contact-us" className="font-semibold text-brand-blue-dark hover:underline">contact customer support</Link>.
          </p>
        </>
      }
      sections={SECTIONS}
    />
  );
}
