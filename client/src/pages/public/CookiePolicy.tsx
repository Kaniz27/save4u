import { Link } from "react-router-dom";
import { Cookie, HardDrive, ListChecks, Settings2, RefreshCw, Lock } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { COOKIE_CONSENT_KEY } from "@/components/layout/CookieConsent";

const COOKIES = [
  {
    name: "save4u_cookie_consent",
    type: "Local storage",
    purpose: "Remembers whether you accepted or declined non-essential cookies so we don't ask again.",
    duration: "Until cleared",
  },
  {
    name: "save4u_token",
    type: "Strictly necessary cookie",
    purpose: "Keeps authorised staff signed in to the Save4u admin area. Not set for regular visitors.",
    duration: "7 days",
  },
];

function resetConsent() {
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch {
    // Storage may be blocked — nothing to reset.
  }
  window.location.reload();
}

const SECTIONS: LegalSection[] = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    icon: Cookie,
    content: (
      <p>
        Cookies are small text files placed on your device when you visit a website. Similar technologies, such
        as your browser's local storage, let a site remember information between visits. They are widely used to
        make websites work, or work more efficiently, and to provide information to the site owner.
      </p>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Cookies",
    icon: Lock,
    content: (
      <>
        <p>We keep our use of cookies to a minimum. We use them to:</p>
        <ul>
          <li>remember your cookie preferences;</li>
          <li>keep authorised staff securely signed in to our admin area; and</li>
          <li>keep the website secure and working properly.</li>
        </ul>
        <p>
          We do not use cookies to sell your data or to show you third-party advertising.
        </p>
      </>
    ),
  },
  {
    id: "cookies-we-use",
    title: "Cookies We Use",
    icon: ListChecks,
    content: (
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Purpose</th>
              <th className="px-4 py-3 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {COOKIES.map((c) => (
              <tr key={c.name} className="align-top">
                <td className="px-4 py-3 font-mono text-xs text-brand-navy">{c.name}</td>
                <td className="px-4 py-3">{c.type}</td>
                <td className="px-4 py-3">{c.purpose}</td>
                <td className="px-4 py-3 whitespace-nowrap">{c.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Content",
    icon: HardDrive,
    content: (
      <p>
        Some pages load images or fonts from third-party services, and links such as WhatsApp or social media
        take you to external websites. Those providers may set their own cookies, which are governed by their own
        policies rather than ours. See the "Links to Other Websites" section of our{" "}
        <Link to="/terms-and-condition#third-party-links">Terms &amp; Conditions</Link>.
      </p>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing Your Preferences",
    icon: Settings2,
    content: (
      <>
        <p>
          You can change your choice at any time using the button below, which will show the cookie banner again.
          You can also block or delete cookies through your browser settings; note that blocking strictly
          necessary cookies may stop parts of the site from working.
        </p>
        <button
          type="button"
          onClick={resetConsent}
          className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
        >
          <Settings2 size={16} />
          Change cookie preferences
        </button>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    icon: RefreshCw,
    content: (
      <p>
        We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
        updated "Last updated" date. This policy forms part of our{" "}
        <Link to="/terms-and-condition">Terms &amp; Conditions</Link> and should be read alongside our{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>
    ),
  },
];

export default function CookiePolicy() {
  usePageMeta("Cookie Policy", "How Save4u uses cookies and similar technologies on its website.");

  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="14 October 2026"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80"
      intro={
        <p>
          This Cookie Policy explains how <strong>Save4u</strong> ("us", "we" or "our") uses cookies and similar
          technologies when you visit <strong>save4u.co.uk</strong>, and the choices you have.
        </p>
      }
      sections={SECTIONS}
    />
  );
}
