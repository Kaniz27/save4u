import { Router } from "express";
import { createLead, listLeads, getLead, updateLead } from "../controllers/leadController.js";
import { requireAdmin } from "../middleware/auth.js";

const router = Router();

router.post("/", createLead);
router.get("/", requireAdmin, listLeads);
router.get("/:id", requireAdmin, getLead);
router.patch("/:id", requireAdmin, updateLead);

export default router;
