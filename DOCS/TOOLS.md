# Mavvi — Tools Review (MVP Local)

> App and DB run locally for now. No cloud DB, auth service, or file storage required for development.

## Decisions

- **Framework:** Next.js (TypeScript, App Router) + Tailwind CSS
  - Why: One repo for customer UI + admin UI + API routes (`/api/*`). Runs locally with `npm run dev` on `http://localhost:3000`.
- **Database:** SQLite (local file) via Prisma ORM
  - Local file: `prisma/dev.db` (gitignored, never commit)
  - Why: Zero install on Windows — no Postgres/Docker needed. Prisma schema migrates cleanly to Postgres later for prod.
  - Run locally: `npx prisma migrate dev`, `npx prisma studio`
- **Authentication:** Auth.js (NextAuth v5) — Credentials provider + bcrypt
  - Why: Works fully offline/local, supports `customer` / `admin` roles via session, ready to add email verification + password reset. No Supabase/Auth0 needed locally.
  - Sessions stored in DB via Prisma adapter.
- **File storage:** Local filesystem
  - Dir: `public/uploads/` (gitignored), accessed via `lib/storage.ts` abstraction
  - Why: No S3 setup for MVP (MVP has no image uploads required). Swap `lib/storage.ts` to S3/Supabase Storage in V2 when image generation lands.

## Local Run Contract

- App: `npm run dev` → `http://localhost:3000`
- DB: local SQLite file `prisma/dev.db`
- Auth: local, no external provider
- Storage: local disk `public/uploads/`
- Secrets: `.env.local` (gitignored), template in `.env.example` (`DATABASE_URL="file:./dev.db"`, `AUTH_SECRET`, `AI_API_KEY`)

## What This Defers

- Postgres (Neon/Supabase), hosted auth emails, S3 storage, Stripe → staging/prod or V2. Code must not hardcode SQLite/local paths outside `lib/db.ts` / `lib/storage.ts`.
