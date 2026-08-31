import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SERVICE_LABELS, STATUS_LABELS, STATUS_COLORS, formatDateTime } from "@/lib/utils";
import type { Lead } from "@/types";

export function LeadsTable({ leads, loading }: { leads: Lead[]; loading: boolean }) {
  if (loading) {
    return <div className="p-10 text-center text-slate-400">Loading leads…</div>;
  }

  if (leads.length === 0) {
    return <div className="p-10 text-center text-slate-400">No leads match these filters.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-xs uppercase text-slate-400">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Contact</th>
            <th className="px-6 py-3">Service</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Received</th>
            <th className="px-6 py-3" />
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id} className="border-t border-slate-50 hover:bg-slate-50">
              <td className="px-6 py-3">
                <p className="font-medium text-slate-800">{lead.name}</p>
                {lead.company && <p className="text-xs text-slate-400">{lead.company}</p>}
              </td>
              <td className="px-6 py-3 text-slate-500">
                <p>{lead.email}</p>
                {lead.phone && <p className="text-xs text-slate-400">{lead.phone}</p>}
              </td>
              <td className="px-6 py-3 text-slate-500">{SERVICE_LABELS[lead.serviceInterest]}</td>
              <td className="px-6 py-3">
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_COLORS[lead.status]}`}>
                  {STATUS_LABELS[lead.status]}
                </span>
              </td>
              <td className="px-6 py-3 text-slate-500">{formatDateTime(lead.createdAt)}</td>
              <td className="px-6 py-3 text-right">
                <Link to={`/admin/leads/${lead._id}`} className="inline-flex items-center gap-1 text-brand-blue-dark hover:underline">
                  View <ChevronRight size={14} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
