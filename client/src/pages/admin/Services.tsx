import { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useServices } from "@/hooks/useServices";
import { api } from "@/lib/api";
import { classNames } from "@/lib/utils";
import { ServiceEditorForm } from "@/components/admin/ServiceEditorForm";
import type { Service } from "@/types";

export default function Services() {
  usePageMeta("Edit Services");
  const { services, loading } = useServices();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [localServices, setLocalServices] = useState<Service[] | null>(null);

  const list = localServices ?? services;
  const active = list.find((s) => s.slug === (activeSlug ?? list[0]?.slug));

  if (loading) return <div className="text-slate-400">Loading services…</div>;

  const handleSave = async (patch: Partial<Service>) => {
    if (!active) return;
    const updated = await api.put<Service>(`/services/${active.slug}`, patch);
    const next = list.map((s) => (s.slug === updated.slug ? updated : s));
    setLocalServices(next);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      <div className="space-y-1">
        {list.map((s) => (
          <button
            key={s.slug}
            onClick={() => setActiveSlug(s.slug)}
            className={classNames(
              "block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
              (activeSlug ?? list[0]?.slug) === s.slug
                ? "bg-brand-blue/10 text-brand-blue-dark"
                : "text-slate-600 hover:bg-slate-100",
            )}
          >
            {s.name}
          </button>
        ))}
      </div>

      {active && <ServiceEditorForm key={active.slug} service={active} onSave={handleSave} />}
    </div>
  );
}
