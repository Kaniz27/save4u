import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/lib/authContext";

export function ProtectedRoute() {
  const { admin, loading } = useAuth();

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center text-slate-400">Loading…</div>;
  }

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
