import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "@/components/admin/Sidebar";
import { Topbar } from "@/components/admin/Topbar";

const TITLES: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/leads": "Leads (CRM)",
  "/admin/reviews": "Reviews",
  "/admin/services": "Services",
  "/admin/settings": "Settings",
};

function titleFor(pathname: string): string {
  if (pathname.startsWith("/admin/leads/")) return "Lead Detail";
  return TITLES[pathname] ?? "Admin";
}

export function AdminLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-brand-blue/5 via-slate-50 to-brand-blue-dark/5">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar title={titleFor(pathname)} />
        <main className="flex-1 overflow-x-hidden p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
