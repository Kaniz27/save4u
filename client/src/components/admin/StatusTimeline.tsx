import { STATUS_LABELS, formatDateTime } from "@/lib/utils";
import type { LeadStatusChange } from "@/types";

export function StatusTimeline({ history }: { history: LeadStatusChange[] }) {
  return (
    <ol className="space-y-4">
      {history.map((entry, i) => (
        <li key={i} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
            {i < history.length - 1 && <span className="mt-1 w-px flex-1 bg-slate-200" />}
          </div>
          <div className="pb-4">
            <p className="text-sm font-semibold text-slate-800">{STATUS_LABELS[entry.status]}</p>
            <p className="text-xs text-slate-400">{formatDateTime(entry.changedAt)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
