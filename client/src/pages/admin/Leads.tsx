import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLeads } from "@/hooks/useLeads";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { SERVICE_LABELS, STATUS_LABELS } from "@/lib/utils";

export default function Leads() {
  usePageMeta("Leads (CRM)");
  const [status, setStatus] = useState("");
  const [serviceInterest, setServiceInterest] = useState("");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const { leads, meta, loading } = useLeads({ status, serviceInterest, q, page });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            className="input pl-9"
            placeholder="Search name, email, company…"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <select
          className="input w-auto"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All statuses</option>
          {Object.entries(STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select
          className="input w-auto"
          value={serviceInterest}
          onChange={(e) => {
            setServiceInterest(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All services</option>
          {Object.entries(SERVICE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
        <LeadsTable leads={leads} loading={loading} />
      </div>

      {meta && meta.pages > 1 && (
        <div className="flex items-center justify-between text-sm text-slate-500">
          <p>
            Page {meta.page} of {meta.pages} · {meta.total} leads
          </p>
          <div className="flex gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 disabled:opacity-40"
            >
              <ChevronLeft size={14} /> Prev
            </button>
            <button
              disabled={page >= meta.pages}
              onClick={() => setPage((p) => p + 1)}
              className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 disabled:opacity-40"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
