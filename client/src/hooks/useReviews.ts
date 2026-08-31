import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { Review } from "@/types";
import { FALLBACK_REVIEWS } from "@/data/fallbackReviews";

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    api
      .get<Review[]>("/reviews")
      .then((data) => !cancelled && setReviews(data.length > 0 ? data : FALLBACK_REVIEWS))
      .catch(() => !cancelled && setReviews(FALLBACK_REVIEWS))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  return { reviews, loading };
}
