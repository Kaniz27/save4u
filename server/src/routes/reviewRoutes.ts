import { Router } from "express";
import {
  listPublishedReviews,
  listAllReviews,
  createReview,
  updateReview,
  deleteReview,
  togglePublish,
} from "../controllers/reviewController.js";
import { requireAdmin } from "../middleware/auth.js";

const router = Router();

router.get("/", listPublishedReviews);
router.get("/all", requireAdmin, listAllReviews);
router.post("/", requireAdmin, createReview);
router.put("/:id", requireAdmin, updateReview);
router.delete("/:id", requireAdmin, deleteReview);
router.patch("/:id/publish", requireAdmin, togglePublish);

export default router;
