import { useState, type FormEvent } from "react";
import { X, Star } from "lucide-react";
import { SERVICE_LABELS } from "@/lib/utils";
import type { Review, ServiceInterest } from "@/types";

const SERVICE_OPTIONS: ServiceInterest[] = [
  "payment-solution",
  "business-energy",
  "merchant-cash-advance",
  "digital-marketing",
];

export interface ReviewFormValues {
  clientName: string;
  companyName: string;
  rating: number;
  quote: string;
  serviceUsed: ServiceInterest | "";
  isPublished: boolean;
}

export function ReviewModal({
  review,
  onClose,
  onSave,
}: {
  review: Review | null;
  onClose: () => void;
  onSave: (values: ReviewFormValues) => Promise<void>;
}) {
  const [rating, setRating] = useState(review?.rating ?? 5);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    const form = new FormData(e.currentTarget);
    try {
      await onSave({
        clientName: String(form.get("clientName") || ""),
        companyName: String(form.get("companyName") || ""),
        rating,
        quote: String(form.get("quote") || ""),
        serviceUsed: (String(form.get("serviceUsed") || "") as ServiceInterest) || "",
        isPublished: form.get("isPublished") === "on",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-bold text-slate-900">
            {review ? "Edit Review" : "Add Review"}
          </h3>
          <button onClick={onClose} className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Client Name *</label>
              <input name="clientName" defaultValue={review?.clientName} required className="input" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Company</label>
              <input name="companyName" defaultValue={review?.companyName} className="input" />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setRating(n)}
                  aria-label={`${n} star`}
                  className="text-brand-orange"
                >
                  <Star size={22} fill={n <= rating ? "currentColor" : "none"} strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Quote *</label>
            <textarea name="quote" defaultValue={review?.quote} required rows={3} className="input resize-none" />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Service Used</label>
            <select name="serviceUsed" defaultValue={review?.serviceUsed ?? ""} className="input">
              <option value="">Not specified</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {SERVICE_LABELS[opt]}
                </option>
              ))}
            </select>
          </div>

          <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <input type="checkbox" name="isPublished" defaultChecked={review?.isPublished} className="h-4 w-4 rounded border-slate-300" />
            Published on homepage
          </label>

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600">
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
