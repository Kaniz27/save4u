import { useCallback, useEffect, useState } from "react";
import { api, fetchWithMeta } from "@/lib/api";
import type { ApiResponse, Lead } from "@/types";

export interface LeadFilters {
  status?: string;
  serviceInterest?: string;
  q?: string;
  from?: string;
  to?: string;
  page?: number;
}

export function useLeads(filters: LeadFilters) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [meta, setMeta] = useState<ApiResponse<Lead[]>["meta"]>();
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filters.status) params.set("status", filters.status);
    if (filters.serviceInterest) params.set("serviceInterest", filters.serviceInterest);
    if (filters.q) params.set("q", filters.q);
    if (filters.from) params.set("from", filters.from);
    if (filters.to) params.set("to", filters.to);
    params.set("page", String(filters.page ?? 1));

    try {
      const { data, meta: m } = await fetchWithMeta<Lead[]>(`/leads?${params.toString()}`);
      setLeads(data);
      setMeta(m);
    } finally {
      setLoading(false);
    }
  }, [filters.status, filters.serviceInterest, filters.q, filters.from, filters.to, filters.page]);

  useEffect(() => {
    load();
  }, [load]);

  return { leads, meta, loading, refetch: load };
}

export function useLead(id: string | undefined) {
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      const data = await api.get<Lead>(`/leads/${id}`);
      setLead(data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  return { lead, loading, refetch: load };
}
