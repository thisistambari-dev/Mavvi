# Mavvi

**Mavvi** is an AI-powered social media content assistant that helps businesses, social media managers, freelancers, creators, and personal brands go from **"What should I post?" → "My content is planned."**

Mavvi combines **AI content generation, brand personalization, content organization, and planning** in one web workspace.

> Version: MVP 1.0
> Platform: Web
> Users: Customer, Admin
> Category: AI / Social Media Management

See full spec in `DOCS/MAVVI PRD.md`.

## Problem

Creating consistent social media content is time-consuming. Users struggle with:

- Coming up with fresh ideas / knowing what to post
- Writing engaging captions
- Maintaining consistent brand voice
- Planning ahead and staying organized
- Adapting content for different platforms

Existing AI tools generate text but don't retain enough brand context. **Mavvi solves this with a brand profile that the AI uses for every generation.**

## Product Goal

Make social media planning and creation **faster, easier, and more personalized**.

## Target Customers

- Social media managers
- Small business owners
- Freelancers
- Content creators
- Marketing agencies
- Personal brands (coaches, consultants, entrepreneurs)

These are customer types, not separate system roles. System roles are `Customer` and `Admin`.

## Customer Journey

Discover → Visit site → Explore features → Sign up → Create brand profile → Dashboard → Choose task → Provide instructions → AI generates → Review/edit → Save → Add to calendar → Return

Example success scenario:
> Sarah signs up, creates a brand profile, selects "Grow my Instagram presence", generates a 7-day content plan, edits 2 captions, saves all 7 posts, adds them to her calendar. She leaves with a week's worth of content planned.

## Features

### Customer (MVP)

- **Auth:** sign up / login / logout, password reset, email verification, account management
  - Required: full name, email, password
- **Brand Profile:** brand/business name, industry, business description, products/services, target audience, social platforms, brand voice, content goals, preferred content types
- **AI Content Generator:**
  - Types: content ideas, captions, reel ideas, reel scripts, carousel ideas, promotional / educational / engagement posts
  - Inputs: platform, content type, topic, objective, tone, count, CTA preference
- **AI Content Actions:** edit, regenerate, shorten, expand, change tone, improve hook, add CTA, copy, save, delete
- **Content Library:** view / search / filter (platform, type, status, date, brand) / edit / delete / copy / organize
- **Content Calendar:** monthly + weekly views; fields: date, platform, content type, caption, status (`Idea, Draft, Ready, Scheduled, Published`), notes. No auto-publishing in MVP.
- **Dashboard:** welcome, brand summary, quick actions (Generate, Create Plan, View Calendar, Library), overview (generated count, saved, upcoming, drafts), prominent "Create with Mavvi" button
- **Account Settings + Support:** submit support request, view status; notifications (welcome, verification, password reset, subscription, usage limits, reminders)

### Admin (MVP)

- Admin login + dashboard (total/new/active customers, total generations, AI usage, active subscriptions, revenue, pending support)
- Customer management: view/search, view profile, activate/deactivate/suspend/delete
- AI management: content categories, prompts/templates, generation limits, usage monitoring, activity log, supported types
- Subscription management: plans (Free / Pro / Agency example), pricing, limits, payment status, cancellations
- Analytics: registrations, active users, generations, feature usage, popular types, subscription growth, revenue
- Support: view/respond/change status/resolve
- Notifications: new registration, support requests, payment issues, system alerts

## Non-Functional Requirements

- Secure, responsive (desktop/tablet/mobile), fast with clear AI loading states, scalable, usable by non-technical users

## MVP Scope

In scope:
- Customer: registration/login, dashboard, brand profile, AI generator, editing, save, library, basic calendar, settings
- Admin: login, dashboard, customer mgmt, AI usage monitoring, basic template mgmt, basic analytics, support
- AI: ideas, captions, reel scripts, carousel ideas, brand-aware generation

Explicitly out for MVP: auto-publishing/scheduling to Instagram/Facebook/LinkedIn, multi-brand, team collaboration, image generation, advanced analytics.

## Roadmap

- **V2:** multiple brands, advanced calendar, AI campaign planner, repurposing, hashtags, image generation, better analytics
- **V3:** Instagram/Facebook/LinkedIn integration, scheduling, auto-publishing, performance analytics
- **V4:** team collaboration, client approval, agency workspaces, AI recommendations, automated strategy

## Project Structure

```text
Mavvi/
  README.md
  DOCS/
    MAVVI PRD.md
```

No application code yet — this is v0.1 docs + vision baseline.

## Status

- [x] PRD defined
- [x] README baseline
- [ ] Choose stack (frontend / backend / DB / AI provider / auth / hosting)
- [ ] Data model + API design
- [ ] Implement MVP customer flow
- [ ] Implement MVP admin flow

## Next Steps

1. Decide tech stack
2. Define data model for User, BrandProfile, GeneratedContent, CalendarItem, SupportRequest, Subscription
3. Scaffold app and implement auth → brand profile → generate → library → calendar
