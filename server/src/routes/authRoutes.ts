import { Router } from "express";
import { login, logout, me, bootstrapAdmin } from "../controllers/authController.js";
import { requireAdmin } from "../middleware/auth.js";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/me", requireAdmin, me);
router.post("/bootstrap-admin", bootstrapAdmin);

export default router;
