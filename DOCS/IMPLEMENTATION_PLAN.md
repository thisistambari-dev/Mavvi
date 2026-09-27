# Mavvi — Implementation Plan (MVP 1.0)

Source: `DOCS/MAVVI PRD.md`
Goal: Sarah signs up → creates brand profile → generates 7-day plan → edits 2 → saves 7 → adds to calendar → leaves with a week planned.

Stack decision is open. Recommended default if you want to move fast:
Frontend + Backend: Next.js (TypeScript, App Router) + Tailwind
DB + Auth: Supabase (Postgres + Auth + Storage) or Neon + NextAuth
AI: OpenAI or Anthropic API via server-side route with prompt templates
Hosting: Vercel. Payments (when needed): Stripe.

## Phase 0 — Foundation
**Goal:** Runnable skeleton + agreed data model.
Tasks:
1. Choose stack, create `app/`, `.env.example`, lint/format, README run instructions
2. Define data model (see below), create migrations
3. Auth plumbing, role `customer` / `admin`, protected routes `/dashboard`, `/admin`
4. CI: `lint + typecheck + test`, preview deploy

Concrete outputs:
- `GET /` landing, `GET /login`, `GET /dashboard` (empty state) behind auth
- Migrations for: `users, brand_profiles, generations, content_items, calendar_items, support_requests, plans, subscriptions, ai_templates, ai_usage_logs`
- `.env.example` with `DATABASE_URL, AUTH_SECRET, AI_API_KEY`

Exit: `npm run dev` works, user can sign up/login/logout, empty dashboard loads on desktop + mobile.

Core tables (MVP, 1 brand per user for now):
- `users(id, name, email, password_hash, email_verified, status, role, created_at)`
- `brand_profiles(id, user_id, brand_name, industry, description, products_services, audience, platforms[], voice, goals, content_types[], created_at)`
- `generations(id, user_id, brand_id, platform, content_type, topic, objective, tone, count, cta, prompt_version, output_json, created_at)`
- `content_items(id, user_id, brand_id, generation_id, platform, content_type, caption, status[Idea|Draft|Ready|Scheduled|Published], notes, created_at)`
- `calendar_items(id, user_id, content_item_id, date, platform, status, notes)`
- `support_requests(id, user_id, category, message, status, created_at)`
- `ai_templates(id, key, content_type, prompt_text, version, active)`
- `ai_usage_logs(id, user_id, tokens_in, tokens_out, latency_ms, created_at)`
- `plans(id, name, price, generation_limit, brand_limit)` + `subscriptions(user_id, plan_id, status)`

## Phase 1 — Auth + Brand Profile + Dashboard Shell
**Goal:** PRD §7, §8, §13 (basic).
Tasks:
- Sign up (name/email/password), login/logout, password reset, email verification, account settings
- Brand create/edit, 1 per user in MVP, validation for all 9 PRD fields
- Dashboard shell: `Welcome [Name]`, `Your brand: [Brand]`, quick actions (Generate, Plan, Calendar, Library), counts (generated, saved, upcoming, drafts), prominent "Create with Mavvi" button

Concrete outputs:
- Pages: `/signup`, `/login`, `/forgot-password`, `/settings`, `/brand`, `/dashboard`
- Empty states + loading states + form errors
- Test: new user creates brand `Velour Confectioneries` and sees it on dashboard

Exit: Sarah flow steps 1-5 work: sign up → brand → dashboard.

## Phase 2 — AI Content Generator (core differentiator)
**Goal:** PRD §9 + §10, brand-aware generation.
Tasks:
1. Generator form: platform, content_type (ideas, captions, reel ideas, reel scripts, carousel ideas, promo/educational/engagement), topic, objective, tone, count (1-7), CTA flag
2. Server action: fetch brand_profile → build system prompt → call AI → parse into list → save to `generations` + `ai_usage_logs` → return
3. Result view: list outputs with Edit, Regenerate, Shorten, Expand, Change tone, Improve hook, Add CTA, Copy, Save, Delete
4. Enforce limits: max count, max chars, rate limit per user/day, clear loading/progress UI, error + retry
5. Seed `ai_templates` for 4 MVP types: ideas, captions, reel scripts, carousel ideas

Concrete outputs:
- Page `/generate` + component `<GenerationResult>`
- API: `POST /api/generate`, `POST /api/generate/:id/refine {action}`
- Example passes: "Create 5 Instagram posts promoting my birthday cakes" returns 5 brand-voiced captions using Velour profile
- Usage logged per generation

Exit: Sarah generates 7-day plan, edits 2, regenerates 1 without losing brand voice.

Out of scope: image gen, hashtags, multi-brand, campaign planner (V2).

## Phase 3 — Library + Calendar
**Goal:** PRD §11 + §12.
Tasks:
- Library `/library`: list saved `content_items`, search, filters (platform, type, status, date, brand), view/edit/delete/copy
- Save flow: `Save` from generator → creates `content_item(status=Idea|Draft)`
- Calendar `/calendar`: monthly + weekly views, create/move items (date, platform, type, caption, status, notes), status transitions Idea→Draft→Ready→Scheduled→Published
- Dashboard wiring: upcoming posts (next 7 days), drafts count pull from real data

Concrete outputs:
- Pages `/library`, `/calendar` responsive
- API: `CRUD /api/content`, `CRUD /api/calendar`
- Test: save 7 items → appear in library → drag 7 onto calendar → show in dashboard upcoming

Exit: Sarah flow complete end-to-end. **This is MVP customer done.**

## Phase 4 — Admin MVP
**Goal:** PRD §14-§18 (basic) + §19 admin side.
Tasks:
- `admin` role, `/admin` guard, admin login (same login, role check)
- Dashboard metrics: total/new/active customers, total generations, AI usage, active subs, revenue (placeholder if no Stripe yet), pending support
- Customers: list/search, profile view, activate/deactivate/suspend/delete
- AI mgmt: list/edit `ai_templates`, set generation limits, view `ai_usage_logs` + activity feed, toggle content types
- Analytics basic: registrations, active users, generations, popular types (simple charts/tables)
- Support inbox: view/respond/status/resolve

Concrete outputs:
- Pages `/admin`, `/admin/customers`, `/admin/ai`, `/admin/analytics`, `/admin/support`
- API: `GET /api/admin/metrics`, `CRUD /api/admin/*` with admin-only auth
- Seed 1 admin user via script

Exit: Admin can suspend a test user, edit a prompt template, see new generation reflected in metrics.

## Phase 5 — Support + Notifications + Hardening + Release
**Goal:** PRD §19-§21, MVP §22 checklist.
Tasks:
- Customer support: `/support` submit (category + description) + status view
- Notifications (email MVP): welcome, verify, reset, sub change, limit warning. In-app/calendar reminders can be simple banner or email
- Subscriptions basic: `plans(Free/Pro/Agency)` table + stub limits (Free: e.g. 20 gen/mo, 1 brand; Pro/Agency: higher). Full Stripe billing can slip to V2, but admin CRUD for plans required
- Hardening: input validation (zod), authz checks (users only see own brand/content), secure secrets, responsive QA (desktop/tablet/mobile), AI latency + error states, empty states, rate limits, backups
- Success metrics logging: signups, active, generations, saves, calendars (events table or queries)

Concrete outputs:
- Pages `/support`, `/admin/plans`
- Email sends working in staging + prod
- Test checklist passes: auth, brand, generate×7, edit, save, library filter, calendar month/week, admin suspend + template edit, support ticket round-trip
- Deployed prod URL + seeded demo brand (Velour)

Exit (MVP release criteria):
1. New user completes Sarah scenario unaided in <10 min
2. No cross-user data leaks, AI p95 <30s with progress UI
3. Admin metrics update within 1 min of activity

## Phase 6 — Post-MVP (do not build now)
V2: multi-brand, advanced calendar, campaign planner, repurpose, hashtags, image gen, better analytics
V3: IG/FB/LinkedIn integration, scheduling, auto-publish, performance analytics
V4: teams, client approval, agency workspaces, AI recommendations, auto strategy

## Build Order Summary
0 Foundation → 1 Auth/Brand/Dashboard → 2 Generator → 3 Library/Calendar → 4 Admin → 5 Support/Notify/Harden/Release

Each phase is demoable. Do not start Phase N+1 until Phase N exit criteria pass.
