import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Star, Settings2, SlidersHorizontal } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { classNames } from "@/lib/utils";

const LINKS = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/leads", label: "Leads (CRM)", icon: Users },
  { to: "/admin/reviews", label: "Reviews", icon: Star },
  { to: "/admin/services", label: "Services", icon: SlidersHorizontal },
  { to: "/admin/settings", label: "Settings", icon: Settings2 },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-white/60 bg-white/70 backdrop-blur-xl md:flex md:flex-col">
      <div className="flex h-20 items-center border-b border-slate-100 px-6">
        <Logo />
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {LINKS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              classNames(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white shadow-md shadow-brand-blue/30"
                  : "text-slate-600 hover:bg-brand-blue/10 hover:text-brand-blue-dark",
              )
            }
          >
            <Icon size={18} className="transition-transform duration-200 group-hover:scale-110" />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-slate-100 p-4 text-xs text-slate-400">Save4u Admin CRM</div>
    </aside>
  );
}
