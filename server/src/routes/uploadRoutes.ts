import { Router } from "express";
import { handleUpload } from "../controllers/uploadController.js";
import { requireAdmin } from "../middleware/auth.js";
import { upload } from "../services/uploadService.js";

const router = Router();

router.post("/", requireAdmin, upload.single("file"), handleUpload);

export default router;
