import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Star, Eye, EyeOff } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { api } from "@/lib/api";
import { SERVICE_LABELS, formatDate } from "@/lib/utils";
import { ReviewModal, type ReviewFormValues } from "@/components/admin/ReviewModal";
import type { Review } from "@/types";

export default function Reviews() {
  usePageMeta("Reviews");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Review | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.get<Review[]>("/reviews/all");
      setReviews(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (review: Review) => {
    setEditing(review);
    setModalOpen(true);
  };

  const handleSave = async (values: ReviewFormValues) => {
    const payload = {
      clientName: values.clientName,
      companyName: values.companyName || undefined,
      rating: values.rating,
      quote: values.quote,
      serviceUsed: values.serviceUsed || undefined,
      isPublished: values.isPublished,
    };

    if (editing) {
      await api.put(`/reviews/${editing._id}`, payload);
    } else {
      await api.post("/reviews", payload);
    }
    setModalOpen(false);
    await load();
  };

  const togglePublish = async (id: string) => {
    await api.patch(`/reviews/${id}/publish`);
    await load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this review? This cannot be undone.")) return;
    await api.delete(`/reviews/${id}`);
    await load();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-orange-dark"
        >
          <Plus size={16} /> Add Review
        </button>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
        {loading ? (
          <div className="p-10 text-center text-slate-400">Loading reviews…</div>
        ) : reviews.length === 0 ? (
          <div className="p-10 text-center text-slate-400">No reviews yet.</div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase text-slate-400">
              <tr>
                <th className="px-6 py-3">Client</th>
                <th className="px-6 py-3">Quote</th>
                <th className="px-6 py-3">Rating</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Added</th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id} className="border-t border-slate-50 align-top hover:bg-slate-50">
                  <td className="px-6 py-3">
                    <p className="font-medium text-slate-800">{review.clientName}</p>
                    <p className="text-xs text-slate-400">
                      {review.companyName}
                      {review.serviceUsed ? ` · ${SERVICE_LABELS[review.serviceUsed]}` : ""}
                    </p>
                  </td>
                  <td className="max-w-xs px-6 py-3 text-slate-600">{review.quote}</td>
                  <td className="px-6 py-3">
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star size={14} fill="currentColor" /> {review.rating}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => togglePublish(review._id)}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        review.isPublished ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {review.isPublished ? <Eye size={12} /> : <EyeOff size={12} />}
                      {review.isPublished ? "Published" : "Hidden"}
                    </button>
                  </td>
                  <td className="px-6 py-3 text-slate-500">{formatDate(review.createdAt)}</td>
                  <td className="px-6 py-3">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openEdit(review)} className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                        <Pencil size={15} />
                      </button>
                      <button onClick={() => remove(review._id)} className="rounded-full p-2 text-slate-400 hover:bg-red-50 hover:text-red-600">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {modalOpen && (
        <ReviewModal review={editing} onClose={() => setModalOpen(false)} onSave={handleSave} />
      )}
    </div>
  );
}
