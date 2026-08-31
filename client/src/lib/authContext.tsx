import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { api, ApiClientError } from "./api";
import type { AdminUser } from "@/types";

interface AuthContextValue {
  admin: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const data = await api.get<AdminUser>("/auth/me");
      setAdmin(data);
    } catch (err) {
      if (err instanceof ApiClientError && err.status === 401) {
        setAdmin(null);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = useCallback(async (email: string, password: string) => {
    const data = await api.post<AdminUser>("/auth/login", { email, password });
    setAdmin(data);
  }, []);

  const logout = useCallback(async () => {
    await api.post("/auth/logout");
    setAdmin(null);
  }, []);

  return <AuthContext.Provider value={{ admin, loading, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
