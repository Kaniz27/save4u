import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { Service } from "@/types";
import { FALLBACK_SERVICES, findFallbackService } from "@/data/fallbackServices";

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    api
      .get<Service[]>("/services")
      .then((data) => !cancelled && setServices(data.length > 0 ? data : FALLBACK_SERVICES))
      .catch((err) => {
        if (cancelled) return;
        setServices(FALLBACK_SERVICES);
        setError(err.message);
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  return { services, loading, error };
}

export function useService(slug: string | undefined) {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setLoading(true);
    api
      .get<Service>(`/services/${slug}`)
      .then((data) => !cancelled && setService(data))
      .catch((err) => {
        if (cancelled) return;
        const fallback = findFallbackService(slug);
        if (fallback) {
          setService(fallback);
        } else {
          setError(err.message);
        }
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { service, loading, error };
}
