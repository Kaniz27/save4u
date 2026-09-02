export const SERVICE_LABELS: Record<string, string> = {
  "payment-solution": "Payment Solution",
  "business-energy": "Business Energy",
  "merchant-cash-advance": "Merchant Cash Advance",
  "digital-marketing": "Digital Marketing",
  general: "General Enquiry",
};

export const STATUS_LABELS: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  converted: "Converted",
  closed: "Closed",
};

export const STATUS_COLORS: Record<string, string> = {
  new: "bg-brand-blue/15 text-brand-blue-dark",
  contacted: "bg-amber-100 text-amber-700",
  converted: "bg-emerald-100 text-emerald-700",
  closed: "bg-slate-200 text-slate-600",
};

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function classNames(...values: (string | false | null | undefined)[]): string {
  return values.filter(Boolean).join(" ");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
