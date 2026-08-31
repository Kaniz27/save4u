import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { DashboardStats } from "@/types";

export function useDashboardStats() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<DashboardStats>("/dashboard/stats")
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  return { stats, loading };
}
