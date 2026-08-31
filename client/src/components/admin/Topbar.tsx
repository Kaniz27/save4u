import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "@/lib/authContext";

export function Topbar({ title }: { title: string }) {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };

  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-white/60 bg-white/70 px-6 backdrop-blur-xl">
      <h1 className="font-heading text-xl font-bold text-slate-900">{title}</h1>
      <div className="flex items-center gap-4">
        <span className="hidden text-sm text-slate-500 sm:inline">{admin?.email}</span>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-red-200 hover:text-red-600"
        >
          <LogOut size={16} />
          Log out
        </button>
      </div>
    </header>
  );
}
