import { useState, type FormEvent } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Building2 } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLead } from "@/hooks/useLeads";
import { api } from "@/lib/api";
import { SERVICE_LABELS, STATUS_LABELS, STATUS_COLORS, formatDateTime } from "@/lib/utils";
import { StatusTimeline } from "@/components/admin/StatusTimeline";
import type { Lead, LeadStatus } from "@/types";

export default function LeadDetail() {
  const { id } = useParams<{ id: string }>();
  const { lead, loading, refetch } = useLead(id);
  usePageMeta(lead ? `Lead: ${lead.name}` : "Lead Detail");
  const [noteText, setNoteText] = useState("");
  const [savingStatus, setSavingStatus] = useState(false);
  const [savingNote, setSavingNote] = useState(false);

  const updateStatus = async (status: LeadStatus) => {
    if (!id) return;
    setSavingStatus(true);
    try {
      await api.patch<Lead>(`/leads/${id}`, { status });
      await refetch();
    } finally {
      setSavingStatus(false);
    }
  };

  const submitNote = async (e: FormEvent) => {
    e.preventDefault();
    if (!id || !noteText.trim()) return;
    setSavingNote(true);
    try {
      await api.patch<Lead>(`/leads/${id}`, { note: noteText.trim() });
      setNoteText("");
      await refetch();
    } finally {
      setSavingNote(false);
    }
  };

  if (loading || !lead) {
    return <div className="text-slate-400">Loading lead…</div>;
  }

  return (
    <div className="space-y-6">
      <Link to="/admin/leads" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800">
        <ArrowLeft size={14} /> Back to leads
      </Link>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-heading text-xl font-bold text-slate-900">{lead.name}</h2>
                <p className="text-sm text-slate-500">{SERVICE_LABELS[lead.serviceInterest]} · via {lead.source}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_COLORS[lead.status]}`}>
                {STATUS_LABELS[lead.status]}
              </span>
            </div>

            <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-brand-blue-dark" /> {lead.email}
              </p>
              {lead.phone && (
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-brand-blue-dark" /> {lead.phone}
                </p>
              )}
              {lead.company && (
                <p className="flex items-center gap-2">
                  <Building2 size={16} className="text-brand-blue-dark" /> {lead.company}
                </p>
              )}
              <p className="text-slate-400">Received {formatDateTime(lead.createdAt)}</p>
            </div>

            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">{lead.message}</div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-base font-bold text-slate-900">Internal Notes</h3>
            <div className="mt-4 space-y-3">
              {lead.notes.length === 0 && <p className="text-sm text-slate-400">No notes yet.</p>}
              {lead.notes.map((note, i) => (
                <div key={note._id ?? i} className="rounded-xl border border-slate-100 p-3 text-sm">
                  <p className="text-slate-700">{note.text}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {note.author} · {formatDateTime(note.createdAt)}
                  </p>
                </div>
              ))}
            </div>
            <form onSubmit={submitNote} className="mt-4 flex gap-2">
              <input
                className="input"
                placeholder="Add an internal note…"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
              <button
                type="submit"
                disabled={savingNote || !noteText.trim()}
                className="shrink-0 rounded-full bg-brand-blue-dark px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
              >
                Add
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-base font-bold text-slate-900">Update Status</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {(Object.keys(STATUS_LABELS) as LeadStatus[]).map((s) => (
                <button
                  key={s}
                  disabled={savingStatus || lead.status === s}
                  onClick={() => updateStatus(s)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors disabled:cursor-default ${
                    lead.status === s ? STATUS_COLORS[s] : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  {STATUS_LABELS[s]}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-base font-bold text-slate-900">Status Timeline</h3>
            <div className="mt-4">
              <StatusTimeline history={lead.statusHistory} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
