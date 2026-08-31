import { useState, type FormEvent, type ReactNode } from "react";
import { Plus, Trash2, Save, Loader2 } from "lucide-react";
import type { Service, ServiceFaq, ServiceFeature, ServiceHighlight, ServiceStep, SubService } from "@/types";

export function ServiceEditorForm({
  service,
  onSave,
}: {
  service: Service;
  onSave: (patch: Partial<Service>) => Promise<void>;
}) {
  const [name, setName] = useState(service.name);
  const [tagline, setTagline] = useState(service.tagline);
  const [icon, setIcon] = useState(service.icon);
  const [heroImage, setHeroImage] = useState(service.heroImage);
  const [ctaImage, setCtaImage] = useState(service.ctaImage);
  const [description, setDescription] = useState(service.description);
  const [features, setFeatures] = useState<ServiceFeature[]>(service.features);
  const [steps, setSteps] = useState<ServiceStep[]>(service.howItWorks);
  const [faqs, setFaqs] = useState<ServiceFaq[]>(service.faqs);
  const [subServices, setSubServices] = useState<SubService[]>(service.subServices);
  const [highlights, setHighlights] = useState<ServiceHighlight[]>(service.highlights);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      await onSave({
        name,
        tagline,
        icon,
        heroImage,
        ctaImage,
        description,
        features,
        howItWorks: steps,
        faqs,
        subServices,
        highlights,
      });
      setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="font-heading text-base font-bold text-slate-900">Basics</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Service Name</label>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Lucide Icon Name</label>
            <input className="input" value={icon} onChange={(e) => setIcon(e.target.value)} required />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Tagline</label>
            <input className="input" value={tagline} onChange={(e) => setTagline(e.target.value)} required />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Hero Image URL</label>
            <input className="input" value={heroImage} onChange={(e) => setHeroImage(e.target.value)} required />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Bottom CTA Background Image URL <span className="font-normal text-slate-400">(optional — falls back to the brand gradient)</span>
            </label>
            <input className="input" value={ctaImage} onChange={(e) => setCtaImage(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Description</label>
            <textarea
              className="input resize-none"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <RepeatableSection
        title="Features / Benefits"
        items={features}
        onChange={setFeatures}
        createItem={() => ({ icon: "Check", title: "", description: "" })}
        renderFields={(item, update) => (
          <>
            <input className="input" placeholder="Icon" value={item.icon} onChange={(e) => update({ ...item, icon: e.target.value })} />
            <input className="input" placeholder="Title" value={item.title} onChange={(e) => update({ ...item, title: e.target.value })} />
            <textarea
              className="input col-span-2 resize-none"
              rows={2}
              placeholder="Description"
              value={item.description}
              onChange={(e) => update({ ...item, description: e.target.value })}
            />
          </>
        )}
      />

      <RepeatableSection
        title="How It Works"
        items={steps}
        onChange={setSteps}
        createItem={() => ({ step: steps.length + 1, title: "", description: "" })}
        renderFields={(item, update) => (
          <>
            <input
              className="input"
              type="number"
              placeholder="Step #"
              value={item.step}
              onChange={(e) => update({ ...item, step: Number(e.target.value) })}
            />
            <input className="input" placeholder="Title" value={item.title} onChange={(e) => update({ ...item, title: e.target.value })} />
            <textarea
              className="input col-span-2 resize-none"
              rows={2}
              placeholder="Description"
              value={item.description}
              onChange={(e) => update({ ...item, description: e.target.value })}
            />
          </>
        )}
      />

      <RepeatableSection
        title="Sub-Services (e.g. Card Machines, Online Payments)"
        items={subServices}
        onChange={setSubServices}
        createItem={() => ({ icon: "Check", title: "", image: "", description: "", detail: "" })}
        renderFields={(item, update) => (
          <>
            <input className="input" placeholder="Icon" value={item.icon} onChange={(e) => update({ ...item, icon: e.target.value })} />
            <input className="input" placeholder="Title" value={item.title} onChange={(e) => update({ ...item, title: e.target.value })} />
            <input
              className="input col-span-2"
              placeholder="Image URL (optional)"
              value={item.image}
              onChange={(e) => update({ ...item, image: e.target.value })}
            />
            <textarea
              className="input col-span-2 resize-none"
              rows={2}
              placeholder="Short card description"
              value={item.description}
              onChange={(e) => update({ ...item, description: e.target.value })}
            />
            <textarea
              className="input col-span-2 resize-none"
              rows={2}
              placeholder="Longer detail shown on 'Find out more' (optional)"
              value={item.detail}
              onChange={(e) => update({ ...item, detail: e.target.value })}
            />
          </>
        )}
      />

      <RepeatableSection
        title="Highlights (long-form image/text sections)"
        items={highlights}
        onChange={setHighlights}
        createItem={() => ({ icon: "Check", title: "", description: "" })}
        renderFields={(item, update) => (
          <>
            <input className="input" placeholder="Icon" value={item.icon} onChange={(e) => update({ ...item, icon: e.target.value })} />
            <input className="input" placeholder="Title" value={item.title} onChange={(e) => update({ ...item, title: e.target.value })} />
            <textarea
              className="input col-span-2 resize-none"
              rows={2}
              placeholder="Description"
              value={item.description}
              onChange={(e) => update({ ...item, description: e.target.value })}
            />
          </>
        )}
      />

      <RepeatableSection
        title="FAQs"
        items={faqs}
        onChange={setFaqs}
        createItem={() => ({ question: "", answer: "" })}
        renderFields={(item, update) => (
          <>
            <input
              className="input col-span-2"
              placeholder="Question"
              value={item.question}
              onChange={(e) => update({ ...item, question: e.target.value })}
            />
            <textarea
              className="input col-span-2 resize-none"
              rows={2}
              placeholder="Answer"
              value={item.answer}
              onChange={(e) => update({ ...item, answer: e.target.value })}
            />
          </>
        )}
      />

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          {saving ? "Saving…" : "Save Changes"}
        </button>
        {saved && <span className="text-sm font-medium text-emerald-600">Saved</span>}
      </div>
    </form>
  );
}

function RepeatableSection<T>({
  title,
  items,
  onChange,
  createItem,
  renderFields,
}: {
  title: string;
  items: T[];
  onChange: (items: T[]) => void;
  createItem: () => T;
  renderFields: (item: T, update: (item: T) => void) => ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-base font-bold text-slate-900">{title}</h3>
        <button
          type="button"
          onClick={() => onChange([...items, createItem()])}
          className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
        >
          <Plus size={14} /> Add
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {items.length === 0 && <p className="text-sm text-slate-400">No items yet.</p>}
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-3 rounded-xl border border-slate-100 p-4">
            {renderFields(item, (next) => {
              const copy = [...items];
              copy[i] = next;
              onChange(copy);
            })}
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => onChange(items.filter((_, idx) => idx !== i))}
                className="flex items-center gap-1 text-xs font-semibold text-red-500 hover:text-red-700"
              >
                <Trash2 size={13} /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
