import { Link } from "react-router-dom";
import {
  Baby,
  Ban,
  Building2,
  Clock,
  Cookie,
  Database,
  Download,
  Eraser,
  Eye,
  Globe2,
  Hand,
  Lock,
  PauseCircle,
  PencilLine,
  RefreshCw,
  Scale,
  Share2,
  ShieldCheck,
  Target,
  UserCheck,
  BadgeAlert,
} from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { LegalPage, type LegalHighlight, type LegalSection } from "@/components/legal/LegalPage";

const HIGHLIGHTS: LegalHighlight[] = [
  { icon: Ban, title: "We never sell your data", text: "Your details are only used to help with the service you asked about." },
  { icon: Eye, title: "Only what we need", text: "We collect just the details you give us in our enquiry forms." },
  { icon: Lock, title: "Kept secure", text: "Encrypted connections and access limited to authorised staff." },
  { icon: UserCheck, title: "You stay in control", text: "Ask to see, correct or delete your data at any time." },
];

const RIGHTS = [
  { icon: Eye, title: "Access", text: "Get a copy of the personal data we hold about you." },
  { icon: PencilLine, title: "Rectification", text: "Have inaccurate or incomplete data corrected." },
  { icon: Eraser, title: "Erasure", text: "Ask us to delete your data where there's no reason to keep it." },
  { icon: PauseCircle, title: "Restriction", text: "Ask us to limit how we use your data." },
  { icon: Download, title: "Portability", text: "Receive your data in a portable, machine-readable format." },
  { icon: Hand, title: "Objection", text: "Object to processing based on legitimate interests or to direct marketing." },
];

function RightsGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {RIGHTS.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <Icon size={18} className="mt-0.5 shrink-0 text-brand-blue-dark" />
          <div>
            <p className="font-heading text-sm font-bold text-brand-navy">Right to {title.toLowerCase()}</p>
            <p className="mt-0.5 text-sm text-slate-600">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function buildSections(email: string, phone: string, address: string): LegalSection[] {
  const mail = <a href={`mailto:${email}`}>{email}</a>;

  return [
    {
      id: "who-we-are",
      title: "Who We Are",
      icon: Building2,
      content: (
        <>
          <p>
            Save4u is the data controller responsible for your personal data collected through this website. We
            help UK businesses find better payment processing, business energy, funding and digital marketing
            solutions by introducing them to trusted providers.
          </p>
          <p>
            <strong>Address:</strong> {address}
            <br />
            <strong>Email:</strong> {mail}
            <br />
            <strong>Phone:</strong> {phone}
          </p>
        </>
      ),
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: Database,
      content: (
        <>
          <p>When you send an enquiry through one of our forms, we collect:</p>
          <ul>
            <li>your name, email address and phone number;</li>
            <li>your company name;</li>
            <li>the service you're interested in and any message you write to us; and</li>
            <li>the page you sent the enquiry from, plus the date and time it was submitted.</li>
          </ul>
          <p>
            If you leave us a testimonial, we store your name, company name, rating and review, and we only publish
            it with your agreement. When you contact us by phone, email or WhatsApp, we keep a record of that
            conversation so we can help you.
          </p>
          <p>
            We do not use analytics or advertising trackers on this website. Our chat assistant runs in your
            browser and does not send what you type to our servers.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: Target,
      content: (
        <>
          <p>We use your information to:</p>
          <ul>
            <li>respond to your enquiry and give you quotes for our services;</li>
            <li>introduce you to suitable providers when you ask us to;</li>
            <li>manage our relationship with you and provide customer support;</li>
            <li>send you relevant offers, but only if you have agreed to receive them; and</li>
            <li>keep our website secure and meet our legal and regulatory obligations.</li>
          </ul>
        </>
      ),
    },
    {
      id: "legal-basis",
      title: "Our Legal Basis for Processing",
      icon: Scale,
      content: (
        <>
          <p>Under UK GDPR, we rely on the following legal bases:</p>
          <ul>
            <li>
              <strong>Contract:</strong> where we need your data to take steps you've asked for before entering a
              contract, or to deliver a service.
            </li>
            <li>
              <strong>Legitimate interests:</strong> to respond to business enquiries, run and improve our services
              and keep our website secure, where these interests are not overridden by your rights.
            </li>
            <li>
              <strong>Consent:</strong> for marketing messages. You can withdraw your consent at any time.
            </li>
            <li>
              <strong>Legal obligation:</strong> where we must keep records to comply with the law.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "data-sharing",
      title: "Who We Share Your Data With",
      icon: Share2,
      content: (
        <>
          <p>
            <strong>We never sell your personal data.</strong> We only share it where necessary, with:
          </p>
          <ul>
            <li>
              <strong>Our partner providers</strong> (such as payment processors, energy suppliers and funding
              providers), and only for the service you've asked about;
            </li>
            <li>
              <strong>Service providers who help us run our business</strong>, such as website hosting, database
              and email providers, who may only process your data on our instructions; and
            </li>
            <li>
              <strong>Regulators, law enforcement or professional advisers</strong>, where the law requires it.
            </li>
          </ul>
          <p>
            Once a provider receives your details, their own privacy policy applies to how they use them.
          </p>
        </>
      ),
    },
    {
      id: "international-transfers",
      title: "International Transfers",
      icon: Globe2,
      content: (
        <p>
          Some of our technology providers may store or process data outside the UK. When this happens, we make sure
          appropriate safeguards are in place, such as UK adequacy regulations or the International Data Transfer
          Agreement / UK Addendum to the EU Standard Contractual Clauses.
        </p>
      ),
    },
    {
      id: "data-retention",
      title: "How Long We Keep Your Data",
      icon: Clock,
      content: (
        <>
          <p>We only keep your personal data for as long as we need it for the purposes described above:</p>
          <ul>
            <li>
              <strong>Enquiries that don't go further</strong> are kept for up to 24 months, then deleted.
            </li>
            <li>
              <strong>Client records</strong> are kept for up to 6 years after our relationship ends, to meet legal,
              tax and accounting requirements.
            </li>
            <li>
              <strong>Marketing preferences</strong> are kept until you unsubscribe or withdraw your consent.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "security",
      title: "How We Protect Your Data",
      icon: ShieldCheck,
      content: (
        <>
          <p>We take appropriate technical and organisational steps to protect your personal data, including:</p>
          <ul>
            <li>encrypted HTTPS connections across our website;</li>
            <li>password-protected systems that only authorised staff can access; and</li>
            <li>secure, reputable hosting and database providers.</li>
          </ul>
          <p>
            No method of transmission over the internet is completely secure. If a data breach affects your rights,
            we will notify you and the ICO where the law requires us to.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "Cookies",
      icon: Cookie,
      content: (
        <p>
          We use a small number of cookies and similar technologies to run this website. See our{" "}
          <Link to="/cookie-policy">Cookie Policy</Link> for full details and to change your preferences.
        </p>
      ),
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: UserCheck,
      content: (
        <>
          <p>Under UK data protection law, you have the following rights over your personal data:</p>
          <RightsGrid />
          <p>
            You can also withdraw your consent at any time where we rely on it. To exercise any of these rights,
            email us at {mail}. Using your rights is free, and we will reply within one month.
          </p>
        </>
      ),
    },
    {
      id: "complaints",
      title: "Making a Complaint",
      icon: BadgeAlert,
      content: (
        <>
          <p>
            If you're unhappy with how we've handled your data, please contact us first so we can try to resolve it.
            You also have the right to complain to the Information Commissioner's Office (ICO), the UK regulator for
            data protection:
          </p>
          <p>
            <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">
              ico.org.uk/make-a-complaint
            </a>{" "}
            · 0303 123 1113
          </p>
        </>
      ),
    },
    {
      id: "children",
      title: "Children's Privacy",
      icon: Baby,
      content: (
        <p>
          Our services are designed for businesses and are not aimed at anyone under 18. We do not knowingly collect
          personal data from children. If you believe a child has given us their data, please contact us and we will
          delete it.
        </p>
      ),
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      icon: RefreshCw,
      content: (
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
          updated "Last updated" date. This policy should be read alongside our{" "}
          <Link to="/terms-and-condition">Terms &amp; Conditions</Link> and{" "}
          <Link to="/cookie-policy">Cookie Policy</Link>.
        </p>
      ),
    },
  ];
}

export default function PrivacyPolicy() {
  usePageMeta("Privacy Policy", "How Save4u collects, uses and protects your personal data under UK GDPR.");
  const settings = useSiteSettings();

  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="14 October 2026"
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80"
      intro={
        <p>
          <strong>Save4u</strong> ("we", "us", "our") is committed to protecting the privacy of everyone who visits
          our website and every client who uses our services. This policy explains what personal data we collect,
          why we collect it, how we keep it safe, and the rights you have under the UK GDPR and the Data Protection
          Act 2018.
        </p>
      }
      highlights={HIGHLIGHTS}
      sections={buildSections(settings.contactEmail, settings.contactPhone, settings.address)}
    />
  );
}
