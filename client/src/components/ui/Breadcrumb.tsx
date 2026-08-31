import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50">
      <div className="container-page flex items-center gap-2 py-3 text-sm text-slate-500">
        <Link to="/" className="flex items-center gap-1 hover:text-brand-blue-dark">
          <Home size={14} />
          Home
        </Link>
        <ChevronRight size={14} className="text-slate-300" />
        <span className="font-medium text-slate-700">{current}</span>
      </div>
    </nav>
  );
}
