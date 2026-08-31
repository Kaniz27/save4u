import { Star, Quote } from "lucide-react";
import { useReviews } from "@/hooks/useReviews";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SERVICE_LABELS } from "@/lib/utils";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-brand-orange">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill={i < rating ? "currentColor" : "none"} strokeWidth={1.5} />
      ))}
    </div>
  );
}

export function ReviewsCarousel() {
  const { reviews, loading } = useReviews();
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".review-card" });

  if (!loading && reviews.length === 0) return null;

  return (
    <section className="bg-slate-50 py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-orange">Testimonials</span>
          <h2 className="mt-3 h2-section text-slate-900">What our clients say</h2>
        </div>

        <div ref={ref} className="mt-14 flex flex-wrap gap-6">
          {reviews.slice(0, 4).map((review) => (
            <div key={review._id} className="review-card glass-card min-w-[260px] flex-1 basis-64 p-6">
              <Quote className="text-brand-blue/30" size={28} />
              <p className="mt-3 text-sm leading-relaxed text-slate-700">"{review.quote}"</p>
              <StarRow rating={review.rating} />
              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="font-heading text-sm font-bold text-slate-900">{review.clientName}</p>
                <p className="text-xs text-slate-500">
                  {review.companyName}
                  {review.serviceUsed ? ` · ${SERVICE_LABELS[review.serviceUsed]}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
