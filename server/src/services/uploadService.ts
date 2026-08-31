import fs from "node:fs/promises";
import path from "node:path";
import multer from "multer";

// Local-disk implementation. To move to Cloudinary later, swap the multer
// storage engine below for CloudinaryStorage and replace deleteFile's
// fs.unlink with cloudinary.uploader.destroy — callers of both functions
// never need to change.
const uploadsDir = path.resolve("uploads");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, name);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (/^image\/(jpeg|png|webp|gif|svg\+xml)$/.test(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only image uploads are allowed"));
    }
  },
});

export function publicUrlFor(filename: string): string {
  return `/uploads/${filename}`;
}

export async function deleteFile(filename: string): Promise<void> {
  try {
    await fs.unlink(path.join(uploadsDir, filename));
  } catch {
    // file already gone — not fatal
  }
}
