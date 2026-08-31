# Save4u — Website + Admin CRM

Full-stack MERN (TypeScript) build: a public marketing site plus a protected
admin CRM, for Save4u's Payment Solution, Business Energy, Merchant Cash
Advance, and Digital Marketing services.

## Stack

- **Client**: React 18 + Vite + TypeScript + Tailwind CSS + GSAP + lucide-react + Recharts
- **Server**: Node.js + Express + TypeScript + Mongoose (MongoDB)
- **Auth**: JWT in an httpOnly cookie, admin-only (no public accounts)
- **Uploads**: local disk via multer (see trade-off note below)

Monorepo: `/client` and `/server` as npm workspaces, run together with
`npm run dev` from the repo root.

## Setup

1. **Install dependencies** (from the repo root): `npm install`
2. **Get MongoDB running.** If you don't already have one, `winget install -e --id MongoDB.Server`
   is the standard route but pops a Windows admin (UAC) prompt for its installer.
   If you'd rather skip that, the portable no-install zip works too: download
   `https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-<version>.zip`,
   extract it anywhere, and run `bin\mongod.exe --dbpath <a-folder-you-made> --port 27017`
   — no admin rights needed. (This is exactly how the app was verified end-to-end
   while building it — see the note at the bottom of this file.)
3. **Configure environment variables**:
   - Copy `server/.env.example` to `server/.env` and fill in `MONGODB_URI`
     (a local MongoDB instance, or a free MongoDB Atlas cluster connection
     string), a real `JWT_SECRET`, and the seed admin credentials.
   - Copy `client/.env.example` to `client/.env` (the default `VITE_API_URL=/api`
     works out of the box with the Vite dev proxy to `http://localhost:5000`).
4. **Seed the database** (creates the 4 service pages, sample reviews, and the
   first admin account): `npm run seed`
5. **Run both apps in dev mode**: `npm run dev`
   - Client: http://localhost:5173
   - Server: http://localhost:5000
   - Admin login: http://localhost:5173/admin/login (credentials printed to
     the console by the seed script, from `SEED_ADMIN_EMAIL`/`SEED_ADMIN_PASSWORD`)

## Verifying the build

- `npm run build` (root) — typechecks and builds both workspaces (verified clean).
- With the server running and a DB connected: `curl http://localhost:5000/api/health`
  should return `{"success":true,...}`.
- End-to-end smoke test once a DB is connected: submit the Contact Us form →
  confirm it appears in `/admin/leads` → change its status and add a note →
  confirm the status timeline updates. Toggle a review's publish state in
  `/admin/reviews` → confirm it appears/disappears on the homepage. Edit a
  service's copy in `/admin/services` → confirm it updates on the public
  service page.

## Architecture notes & trade-offs

- **File uploads (local disk vs Cloudinary)**: uploads are saved to
  `server/uploads` and served statically, behind a small abstraction
  (`server/src/services/uploadService.ts`) with two functions: `saveFile`
  (via multer's disk storage) and `deleteFile`. This needs zero external
  accounts to run today, but local disk won't survive redeploys on ephemeral
  hosts (Vercel/Render free tier) and has no CDN/image optimization. To move
  to Cloudinary later, swap the multer storage engine for `CloudinaryStorage`
  and point `deleteFile` at `cloudinary.uploader.destroy` — nothing calling
  those two functions needs to change.
- **Icons (`DynamicIcon`)**: service features/steps store an icon as a
  Lucide icon name string (e.g. `"CreditCard"`) so admins can pick icons
  without a developer. `client/src/components/ui/DynamicIcon.tsx` maps a
  curated set of icon names to components (rather than importing the entire
  `lucide-react` library, which would balloon the bundle). If an admin sets
  an icon name that isn't in that map, it falls back to a generic icon —
  add new entries to the map in that file as needed.
- **Admin panel code-splitting**: all `/admin/*` routes (including the
  Recharts-powered dashboard) are lazy-loaded, so a visitor to the public
  site never downloads the admin bundle.

## Placeholder content to swap before launch

- **Logo**: `client/src/components/layout/Logo.tsx` renders a styled text
  wordmark ("Save" in blue, "4u" in orange) as a placeholder until the real
  Save4u logo file is supplied.
- **Images**: hero and about-page imagery throughout the site (hero
  carousel, About page, service hero backgrounds) are Unsplash stock photos,
  flagged in code comments where used — replace with real Save4u photography.
- **Service copy**: the 4 service pages' descriptions, features, how-it-works
  steps, and FAQs (seeded in `server/src/seed/seed.ts`) are realistic
  placeholder copy for a UK business-services company, not verified Save4u
  copy — edit via `/admin/services` or the seed file.
- **Sample reviews**: 4 seeded testimonials are placeholder client quotes.
- **Sitemap domain**: `client/public/sitemap.xml` and `robots.txt` reference
  `https://www.save4u.co.uk` as a placeholder production domain.
- **Trust bar stats**: the homepage's "500+ Businesses Helped" style stats
  (`client/src/components/home/TrustBar.tsx`) are placeholder figures.
- **Contact Us business hours**: "Mon – Fri: 9:00am – 5:30pm" is a placeholder
  — the footer address/phone/email themselves are the real values from the
  brief.
- **Social links**: footer social icons link to `#` until real profile URLs
  are added via `/admin/settings`.

## What has and hasn't been verified

- ✅ TypeScript compiles cleanly for both `client` and `server`.
- ✅ Production builds succeed for both (`npm run build`), with the admin
  panel confirmed to code-split into separate chunks from the public bundle.
- ✅ Full live-database round trip verified against a real running MongoDB
  instance: seeding (4 services, 4 reviews, settings, admin account),
  `POST /api/leads` (public submission), `POST /api/auth/login` +
  cookie-based `GET /api/auth/me` + a 401 on `/api/leads` without the cookie,
  `GET /api/dashboard/stats` aggregation, `PATCH /api/leads/:id` (status
  change + note, confirmed appended to `statusHistory`), review publish
  toggle, and service content editing — all exercised via curl end-to-end,
  and the Vite dev server confirmed to correctly proxy `/api/*` to the
  Express backend. MongoDB itself was run via the portable no-install zip
  (see the Setup section above) since a package-manager install hit a
  Windows admin-elevation prompt that couldn't be approved from an
  automated session. Both the seeded data and the test lead created during
  verification are still sitting in that local database.
- ⚠️ Not verified in a real browser: animations, responsive breakpoints,
  dropdown/mobile-menu interaction, carousel behaviour, and the admin UI's
  visual rendering — no browser was available in the build environment, only
  curl against the API and the Vite/Express dev servers. Please click through
  these manually once running locally.
