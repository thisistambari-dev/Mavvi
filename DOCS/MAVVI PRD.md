# **Product Requirements Document**

## **Mavvi**

**Product:** Mavvi  
**Product type:** AI-powered web application  
**Version:** MVP 1.0  
**Primary users:** Customers and Admin  
**Platform:** Web  
**Product category:** AI / Social Media Management

## **1\. Product Overview**

**Mavvi** is an AI-powered social media content assistant designed to help businesses, social media managers, freelancers, creators, and other professionals plan and create social media content more efficiently.

Mavvi helps customers move from having no idea what to post to having a structured content plan, AI-generated content, and an organized content calendar.

The platform combines **AI content generation, brand personalization, content organization, and planning** in one workspace.

# **2\. Problem Statement**

Creating social media content consistently can be time-consuming.

Customers often struggle with:

* Coming up with fresh content ideas  
* Knowing what to post  
* Writing engaging captions  
* Maintaining a consistent brand voice  
* Planning content ahead of time  
* Organizing content  
* Creating different types of content for different platforms

Existing AI tools can generate content, but they may not retain enough information about a specific brand to consistently produce personalized content.

**Mavvi aims to solve this by allowing customers to create a brand profile that the AI can use when generating content.**

# **3\. Product Goal**

The primary goal of Mavvi is to make social media content planning and creation **faster, easier, and more personalized**.

### **MVP goals**

Mavvi should allow a customer to:

1. Create an account.  
2. Create a brand profile.  
3. Tell Mavvi about their business and audience.  
4. Generate social media content using AI.  
5. Edit and regenerate content.  
6. Save generated content.  
7. Organize content in a content library.  
8. Create and manage a content calendar.

The admin should be able to:

1. Manage customers.  
2. Monitor platform activity.  
3. Manage AI content settings.  
4. Manage subscriptions.  
5. View analytics.  
6. Handle customer support.  
7. Manage platform settings.

# **4\. Target Customers**

Mavvi's customers can include:

### **Social Media Managers**

Professionals managing social media for one or multiple brands.

### **Small Business Owners**

Business owners who manage their own social media.

### **Freelancers**

Freelancers providing social media or content services.

### **Content Creators**

Creators managing their personal brands.

### **Marketing Agencies**

Teams managing social media for multiple clients.

### **Personal Brands**

Coaches, consultants, professionals, and entrepreneurs building an online presence.

These are **customer types**, not separate system roles.

# **5\. User Roles**

Mavvi will have two primary system users.

### **Customer**

Uses Mavvi's AI-powered content tools.

### **Admin**

Manages Mavvi and its customers.

# **6\. Customer Journey**

The basic customer journey is:

**Discover Mavvi**

↓

**Visit website**

↓

**Explore features**

↓

**Sign up**

↓

**Create brand profile**

↓

**Enter dashboard**

↓

**Choose content task**

↓

**Provide instructions**

↓

**AI generates content**

↓

**Review and edit**

↓

**Save content**

↓

**Add content to calendar**

↓

**Return to Mavvi for future content**

# **7\. Customer Features**

## **7.1 Registration and Authentication**

Customers should be able to:

* Create an account  
* Log in  
* Log out  
* Reset forgotten passwords  
* Verify email address  
* Manage account information

### **Required fields**

* Full name  
* Email  
* Password

# **8\. Brand Profile**

This is one of Mavvi's most important features.

Customers should be able to create and manage their brand information.

### **Brand information**

* Brand/business name  
* Industry  
* Business description  
* Products/services  
* Target audience  
* Social media platforms  
* Brand voice  
* Content goals  
* Preferred content types

### **Example**

**Brand:** Velour Confectioneries

**Industry:** Bakery & Confectionery

**Audience:** People looking for cakes for birthdays and celebrations

**Tone:** Elegant, warm and playful

**Goal:** Increase cake orders

Mavvi uses this information when generating content.

# **9\. AI Content Generator**

The customer can request content from Mavvi.

### **Content types**

MVP should support:

* Content ideas  
* Social media captions  
* Reel ideas  
* Reel scripts  
* Carousel ideas  
* Promotional posts  
* Educational posts  
* Engagement posts

### **User inputs**

The customer can specify:

* Platform  
* Content type  
* Topic  
* Objective  
* Tone  
* Number of ideas/posts  
* Call-to-action preference

### **Example request**

> "Create 5 Instagram posts promoting my birthday cakes."

Mavvi generates five pieces of content based on the customer's brand profile.

# **10\. AI Content Actions**

After content is generated, customers should be able to:

* Edit  
* Regenerate  
* Shorten  
* Expand  
* Change tone  
* Improve the hook  
* Add a CTA  
* Copy content  
* Save content  
* Delete content

This makes the AI a collaborative tool rather than a one-click generator.

# **11\. Content Library**

Customers should have a central location for their saved content.

### **Features**

* View saved content  
* Search content  
* Filter content  
* Edit content  
* Delete content  
* Copy content  
* Organize content

### **Possible filters**

* Platform  
* Content type  
* Status  
* Date  
* Brand

# **12\. Content Calendar**

Customers can organize their content into a calendar.

### **Calendar views**

* Monthly  
* Weekly

### **Calendar information**

Each content item can include:

* Date  
* Platform  
* Content type  
* Caption  
* Status  
* Notes

### **Content statuses**

* Idea  
* Draft  
* Ready  
* Scheduled  
* Published

For the MVP, **actual automatic publishing to social media platforms does not need to be included**.

# **13\. Dashboard**

The customer dashboard should give users a quick overview of their workspace.

### **Dashboard could display**

**Welcome back, \[Name\]**

**Your brand:** \[Brand Name\]

**Quick actions**

* Generate Content  
* Create Content Plan  
* View Calendar  
* Content Library

### **Overview**

* Content generated  
* Saved content  
* Upcoming posts  
* Drafts

The dashboard should also have a prominent **"Create with Mavvi"** button.

# **14\. Admin Features**

## **14.1 Admin Dashboard**

The admin dashboard provides an overview of Mavvi.

### **Metrics**

* Total customers  
* New customers  
* Active customers  
* Total content generated  
* AI usage  
* Active subscriptions  
* Revenue  
* Pending support requests

# **15\. Customer Management**

Admin should be able to:

* View customers  
* Search customers  
* View customer profiles  
* View account status  
* Activate accounts  
* Deactivate accounts  
* Suspend accounts  
* Delete accounts where appropriate

# **16\. AI Management**

Admin should be able to manage the AI system.

### **Features**

* Manage content categories  
* Manage prompts/templates  
* Configure generation limits  
* Monitor AI usage  
* View generation activity  
* Manage supported content types

# **17\. Subscription Management**

If Mavvi uses a subscription model, admin should be able to:

* Create plans  
* Edit plans  
* Set pricing  
* Set AI usage limits  
* View subscriptions  
* View payment status  
* Manage cancelled subscriptions

Example:

### **Free**

* Limited AI generations  
* 1 brand  
* Basic content generation

### **Pro**

* More AI generations  
* Multiple brands  
* Advanced content tools  
* Content calendar

### **Agency**

* Multiple brands  
* Higher usage limits  
* Team/client features

These plans are examples for the product structure and can be finalized after testing the MVP.

# **18\. Analytics**

Admin should be able to view platform-level analytics.

### **Analytics could include**

* Customer registrations  
* Active users  
* AI generations  
* Most-used features  
* Popular content types  
* Subscription growth  
* Revenue  
* Customer activity

# **19\. Customer Support**

Customers should have a way to report issues or contact Mavvi.

### **Customer**

Can:

* Submit a support request  
* Select issue category  
* Describe the problem  
* View support request status

### **Admin**

Can:

* View support requests  
* Respond  
* Change status  
* Resolve requests

# **20\. Notifications**

Mavvi should be able to send notifications for important events.

### **Customer notifications**

* Welcome message  
* Email verification  
* Password reset  
* Subscription changes  
* Usage limit notifications  
* Content/calendar reminders

### **Admin notifications**

* New customer registration  
* Support requests  
* Payment issues  
* System alerts

# **21\. Non-Functional Requirements**

Mavvi should be:

### **Secure**

Customer information and account data must be protected.

### **Responsive**

The website should work properly on:

* Desktop  
* Tablet  
* Mobile

### **Fast**

Pages should load quickly and AI requests should provide clear loading/progress feedback.

### **Scalable**

The architecture should allow additional AI features and users to be added later.

### **Usable**

The interface should be simple enough for someone who isn't technically skilled.

# **22\. MVP Scope**

To keep your first project realistic, I would **not** build everything above immediately.

Your MVP should contain:

### **Customer**

* Registration/login  
* Dashboard  
* Brand profile  
* AI content generator  
* Content editing  
* Save content  
* Content library  
* Basic content calendar  
* Account settings

### **Admin**

* Admin login  
* Admin dashboard  
* Customer management  
* AI usage monitoring  
* Basic content/template management  
* Basic analytics  
* Support requests

### **AI**

* Content ideas  
* Captions  
* Reel scripts  
* Carousel ideas  
* Brand-aware generation

# **23\. Features for Later Versions**

Once the MVP works, Mavvi could eventually add:

**V2**

* Multiple brand profiles  
* Advanced content calendars  
* AI campaign planner  
* Content repurposing  
* Hashtag suggestions  
* Image generation  
* Better analytics

**V3**

* Instagram integration  
* Facebook integration  
* LinkedIn integration  
* Social media scheduling  
* Automatic publishing  
* Performance analytics

**V4**

* Team collaboration  
* Client approval  
* Agency workspaces  
* AI performance recommendations  
* Automated content strategy

# **24\. Success Metrics**

Mavvi's success can be measured through:

* Number of registered customers  
* Number of active customers  
* Number of AI generations  
* Number of saved content pieces  
* Number of content calendars created  
* Customer retention  
* Free-to-paid conversion  
* Customer satisfaction  
* Average time spent using Mavvi

# **25\. Core User Stories**

### **Customer**

**As a customer,** I want to create a brand profile so that Mavvi understands my business.

**As a customer,** I want to generate content ideas so that I don't have to constantly think about what to post.

**As a customer,** I want Mavvi to generate captions based on my brand voice so that my content feels consistent.

**As a customer,** I want to edit AI-generated content so that I can make it sound exactly how I want.

**As a customer,** I want to save content so that I can access it later.

**As a customer,** I want to organize content in a calendar so that I can plan my posts.

### **Admin**

**As an admin,** I want to manage customers so that I can maintain the platform.

**As an admin,** I want to monitor AI usage so that I can manage platform resources.

**As an admin,** I want to manage content templates so that customers receive useful outputs.

**As an admin,** I want to view analytics so that I can understand how Mavvi is being used.

# **26\. MVP Success Scenario**

A successful first-time customer experience should look like this:

> **Sarah signs up for Mavvi.**

She enters her business information and creates a brand profile.

Mavvi asks what she wants to accomplish.

She selects **"Grow my Instagram presence."**

She chooses **"Generate a 7-day content plan."**

Mavvi produces seven content ideas based on her business, audience and preferred tone.

Sarah reviews the suggestions, edits two captions, saves all seven posts and adds them to her calendar.

She leaves Mavvi with an actual week's worth of content planned.

**That's the core value proposition.**

Mavvi shouldn't just generate AI text. It should help the customer go from **"What should I post?" → "My content is planned."**

That should be the heart of the product.

# **27. Implementation Notes (Decided 2026-09-27)**

## **Tools decided**

* **Framework:** Next.js (TypeScript, App Router) + Tailwind CSS — one repo for customer UI, admin UI, and API routes. See `DOCS/TOOLS.md`.
* **Database:** SQLite (local file via Prisma) — zero-install local dev, migrates to Postgres later.
* **Authentication:** Auth.js (NextAuth v5) Credentials + bcrypt with `customer` / `admin` roles — no external provider locally.
* **File storage:** Local filesystem (`public/uploads/` via `lib/storage.ts`) — swap to S3/Supabase Storage in V2.

## **Why**

* Keep MVP local-first: app runs on `http://localhost:3000`, DB is a local SQLite file. No cloud DB, auth service, or storage needed for development.
* One framework (Next.js) covers UI + API to avoid a separate backend for MVP.
* Prisma + SQLite removes Windows Postgres/Docker setup friction; Tailwind removes custom CSS overhead and gives responsive (`md:`, `lg:`) dashboard/calendar layouts quickly.
* `lib/db.ts` and `lib/storage.ts` isolate DB/storage so prod (Postgres/S3) is a swap, not a rewrite.

Full plan: `DOCS/IMPLEMENTATION_PLAN.md`. Tools detail: `DOCS/TOOLS.md`.

# **28. Design Preview Note (Decided 2026-09-27)**

## **Change requested**

* Generate visual preview `design.html` showing colors, typography, styled button, and sample input.
* Switch typography to a fun font.

## **What was done**

* Created `design.html` at repo root with: color palette (Primary #6D28D9, Light #F3E8FF, Ink #1E1B2E, Muted #8B87A3, BG #FDFAF6), typography samples, `Create with Mavvi` primary/secondary/disabled buttons, topic input + brand voice select.
* Typography changed from Inter to fun pairing: **Fredoka (headings, `font-display`) + Nunito (body/UI, `font-sans`)** via Google Fonts + Tailwind config in `design.html`.

## **Why**

* Fun rounded fonts match Mavvi's warm/playful brand voice (e.g. Velour Confectioneries) and keep dashboard/generator friendly for non-technical users, while staying readable.

