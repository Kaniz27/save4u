import { Router } from "express";
import { listServices, getServiceBySlug, updateServiceBySlug } from "../controllers/serviceController.js";
import { requireAdmin } from "../middleware/auth.js";

const router = Router();

router.get("/", listServices);
router.get("/:slug", getServiceBySlug);
router.put("/:slug", requireAdmin, updateServiceBySlug);

export default router;
