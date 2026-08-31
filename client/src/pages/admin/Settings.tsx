import { useEffect, useState, type FormEvent } from "react";
import { Save, Loader2 } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { api } from "@/lib/api";
import type { SiteSettings } from "@/types";

export default function Settings() {
  usePageMeta("Site Settings");
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    api
      .get<SiteSettings>("/settings")
      .then(setSettings)
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!settings) return;
    setSaving(true);
    setSaved(false);
    const form = new FormData(e.currentTarget);
    const payload: SiteSettings = {
      contactEmail: String(form.get("contactEmail") || ""),
      contactPhone: String(form.get("contactPhone") || ""),
      address: String(form.get("address") || ""),
      socialLinks: {
        facebook: String(form.get("facebook") || ""),
        linkedin: String(form.get("linkedin") || ""),
        instagram: String(form.get("instagram") || ""),
        twitter: String(form.get("twitter") || ""),
      },
    };

    try {
      const updated = await api.put<SiteSettings>("/settings", payload);
      setSettings(updated);
      setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  if (loading || !settings) return <div className="text-slate-400">Loading settings…</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="font-heading text-base font-bold text-slate-900">Contact Details</h3>
        <div className="mt-4 grid gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Contact Email</label>
            <input name="contactEmail" type="email" defaultValue={settings.contactEmail} className="input" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Contact Phone</label>
            <input name="contactPhone" defaultValue={settings.contactPhone} className="input" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Address</label>
            <textarea name="address" defaultValue={settings.address} rows={2} className="input resize-none" required />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="font-heading text-base font-bold text-slate-900">Social Links</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Facebook</label>
            <input name="facebook" defaultValue={settings.socialLinks.facebook} className="input" placeholder="https://facebook.com/…" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">LinkedIn</label>
            <input name="linkedin" defaultValue={settings.socialLinks.linkedin} className="input" placeholder="https://linkedin.com/…" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Instagram</label>
            <input name="instagram" defaultValue={settings.socialLinks.instagram} className="input" placeholder="https://instagram.com/…" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">X / Twitter</label>
            <input name="twitter" defaultValue={settings.socialLinks.twitter} className="input" placeholder="https://x.com/…" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          {saving ? "Saving…" : "Save Settings"}
        </button>
        {saved && <span className="text-sm font-medium text-emerald-600">Saved</span>}
      </div>
    </form>
  );
}
