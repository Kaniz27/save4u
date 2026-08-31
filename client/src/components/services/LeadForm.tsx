import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { api, ApiClientError } from "@/lib/api";
import { SERVICE_LABELS } from "@/lib/utils";
import type { ServiceInterest } from "@/types";

const SERVICE_OPTIONS: ServiceInterest[] = [
  "payment-solution",
  "business-energy",
  "merchant-cash-advance",
  "digital-marketing",
  "general",
];

interface LeadFormProps {
  defaultServiceInterest?: ServiceInterest;
  lockServiceInterest?: boolean;
  source: string;
  title?: string;
  subtitle?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({
  defaultServiceInterest = "general",
  lockServiceInterest = false,
  source,
  title = "Get in touch",
  subtitle = "Tell us about your business and we'll be in touch shortly.",
}: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      company: String(form.get("company") || ""),
      serviceInterest: String(form.get("serviceInterest") || defaultServiceInterest),
      message: String(form.get("message") || ""),
      source,
    };

    try {
      await api.post("/leads", payload);
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof ApiClientError ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto text-emerald-500" size={40} />
        <h3 className="mt-4 font-heading text-lg font-bold text-emerald-800">Thanks — we've got it!</h3>
        <p className="mt-2 text-sm text-emerald-700">
          A member of the Save4u team will be in touch within one working day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-emerald-700 underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="font-heading text-xl font-bold text-slate-900">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Name *
          </label>
          <input id="name" name="name" required className="input" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input id="email" name="email" type="email" required className="input" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className="input" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700">
            Company
          </label>
          <input id="company" name="company" className="input" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="serviceInterest" className="mb-1 block text-sm font-medium text-slate-700">
            Service Interested In
          </label>
          <select
            id="serviceInterest"
            name={lockServiceInterest ? undefined : "serviceInterest"}
            defaultValue={defaultServiceInterest}
            disabled={lockServiceInterest}
            className="input disabled:bg-slate-50 disabled:text-slate-500"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {SERVICE_LABELS[opt]}
              </option>
            ))}
          </select>
          {/* A disabled <select> is excluded from FormData, so the locked value is
              submitted via this hidden input instead. */}
          {lockServiceInterest && <input type="hidden" name="serviceInterest" value={defaultServiceInterest} />}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
            Message *
          </label>
          <textarea id="message" name="message" rows={4} required className="input resize-none" />
        </div>

        {status === "error" && (
          <div className="sm:col-span-2 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle size={16} />
            {errorMessage}
          </div>
        )}

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-orange-dark disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
            {status === "submitting" ? "Sending…" : "Send Enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
