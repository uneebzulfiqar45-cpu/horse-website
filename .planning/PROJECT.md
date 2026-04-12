# Horse Veterinary Practice Website

## Overview

A **premium mobile-first veterinary website + web application platform** for a horse veterinary practice based in Germany. This is not a simple static website — it combines a public-facing marketing site, a secure client portal for horse owners, an admin dashboard for clinic staff, interactive smart tools, and an educational hub.

**Design inspiration:** RideUp Demo 2 (modified) — Forest green and teal premium aesthetic, clean typography, trust-focused layout.

## Core Value

The ONE thing that makes this succeed: **horse owners can find the vet, trust them instantly, and manage their horse's health digitally in one place.**

## What We're Building

### Part 1: Public Website (marketing + SEO)
- Home, About, Services, Emergency, Clients, Horse Owners Hub, Testimonials, Service Area, Contact, Online Tools, Social & Media, Charity, Legal pages

### Part 2: Client Portal (authenticated)
- Dashboard, multiple horse profiles, medical records, vaccination/deworming reminders, invoice viewing, lameness tracking log

### Part 3: Admin Dashboard (clinic staff backend)
- Client management, horse management, medical file uploads, invoice uploads, reminder scheduling, content management, appointment management, GDPR records

### Part 4: Smart Tools
- Weight estimation calculator
- Drug dosage calculator
- Nutrition planner
- Lameness tracking log with trend visualization

### Part 5: Education Hub (CMS-driven)
- Blog/articles, preventive care guides, FAQs, media library, future course integration

## Target Users

| Role | Access | Key Actions |
|------|--------|-------------|
| **Public Visitor** | No login | Browse, contact, read blog, use tools |
| **Horse Owner / Client** | Login required | Manage horses, view records, invoices, reminders |
| **Clinic Admin / Staff** | Admin login | Upload files, manage clients, content, appointments |

## Tech Stack (Decided)

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend framework | Next.js 14 (App Router) | SSR for SEO, route-based code splitting, API routes |
| Styling | Tailwind CSS + custom CSS variables | Utility-first with design tokens for premium feel |
| UI Components | shadcn/ui + custom components | Accessible, composable |
| Authentication | NextAuth.js (JWT + sessions) | Role-based auth for client/admin |
| Backend/API | Next.js API Routes (Node.js) | Monorepo, no separate backend server needed |
| Database | MongoDB + Mongoose | Flexible schema for horse/medical data |
| File Storage | Cloudinary | Medical records, images, PDFs |
| Email | Nodemailer / Resend | Reminders, notifications |
| i18n | next-intl | English + German multilingual |
| Deployment-ready | Vercel or self-hosted | Production ready |

## Design System

### Color Palette (Forest Green & Teal)
```
--color-bg-dark:        #091413   (primary background)
--color-bg-secondary:   #0D1C1B   (card/section background)
--color-bg-tertiary:    #122422   (subtle variation)
--color-brand-primary:   #408A71   (primary accent teal)
--color-brand-light:     #B0E4CC   (highlight mint)
--color-brand-dark:      #285A48   (pressed state forest green)
--color-text-primary:   #FFFFFF   (headings)
--color-text-secondary: #C8C0B0   (body text)
--color-text-muted:     #8A8070   (labels, captions)
--color-border:         #1B312E   (subtle borders)
--color-emergency:      #C0392B   (emergency red)
```

### Typography
- Headings: Playfair Display (elegant serif — equestrian feel)
- Body: Inter (clean, medical-readable sans-serif)
- Accents: Outfit (modern, premium)

### Button System
- Primary: Gold bg + dark text → hover: transparent + gold border + gold text
- Secondary: Transparent + white border → hover: gold fill + dark text
- Emergency: Red bg → hover: darker red + glow
- All transitions: 0.3s ease

## Website Structure (All Pages)

### Public Pages
1. `/` — Home (hero, services, about snippet, trust, tools preview, blog preview, charity preview, contact/map)
2. `/about` — Vet profile, philosophy, facilities, gallery
3. `/services` — Services overview page
4. `/services/[slug]` — Individual service detail pages (8 services)
5. `/emergency` — Emergency contact, click-to-call, WhatsApp, what counts as emergency
6. `/clients` — New client info, onboarding, policies, downloadable forms
7. `/horse-owners-hub` — Blog/article listing, guides, FAQs
8. `/horse-owners-hub/[slug]` — Individual article pages
9. `/testimonials` — Reviews, success stories, case results
10. `/service-area` — Map, regions, ambulatory coverage
11. `/contact` — Form, map, phone, WhatsApp, hours
12. `/tools` — All smart tools (weight, dosage, nutrition, lameness)
13. `/social-media` — Social links, media, collaborations
14. `/charity` — Welfare initiatives, mission, stories, updates
15. `/legal/impressum` — German legal imprint
16. `/legal/privacy` — Privacy policy (GDPR)
17. `/legal/terms` — Terms & conditions
18. `/legal/cookies` — Cookie policy

### Auth Pages
19. `/login` — Client login
20. `/register` — New client registration (or admin-invite only)

### Client Portal (protected)
21. `/portal` — Client dashboard
22. `/portal/horses` — All horse profiles
23. `/portal/horses/[id]` — Individual horse profile
24. `/portal/records` — Medical records listing
25. `/portal/invoices` — Invoice list
26. `/portal/reminders` — Upcoming reminders
27. `/portal/tools/lameness-log` — Lameness tracking log

### Admin Dashboard (protected, admin role)
28. `/admin` — Admin overview dashboard
29. `/admin/clients` — Client management
30. `/admin/horses` — Horse management
31. `/admin/records` — Upload/manage medical records
32. `/admin/invoices` — Upload/manage invoices
33. `/admin/appointments` — Appointment management
34. `/admin/reminders` — Reminder management
35. `/admin/content` — Blog/articles/testimonials/FAQs
36. `/admin/charity` — Charity updates
37. `/admin/legal` — GDPR/consent records

## Key Features

### SEO
- Next.js metadata API for all pages
- Schema.org markup (LocalBusiness, VeterinaryCare, Article)
- Sitemap + robots.txt
- Multilingual URL structure (/de/...)
- Service-based landing pages

### GDPR / Legal (Germany)
- Cookie consent banner (first visit)
- GDPR consent on all forms
- Impressum page (required in Germany)
- Secure data handling
- Medical disclaimer on all tools

### Smart Tools (client-side calculations)
1. **Weight Estimator**: girth + body length → estimated kg
2. **Dosage Calculator**: weight + medication → dosage (with vet disclaimer)
3. **Nutrition Planner**: type/age/workload/weight → feeding guidance
4. **Lameness Tracker**: log symptoms/date/severity → trend chart

### Client Portal
- Multiple horses per client
- Admin uploads records, client views/downloads
- Invoice status (paid/unpaid/due)
- Automated reminder scheduling (vaccination, deworming, payment)
- Lameness log with visual trend

### Admin Dashboard
- Full CRUD for clients, horses, records, invoices
- File upload to Cloudinary
- Set/manage reminders
- Manage all website content (blog, FAQs, testimonials, charity)
- Monitor appointments

## Requirements

### Validated
(None yet — ship to validate)

### Active

#### Phase 1 — Core Public Website
- [ ] Premium homepage with all sections (hero → footer)
- [ ] Navigation with emergency button, language switcher, client login
- [ ] About page with vet profile
- [ ] Services overview + 8 individual service pages
- [ ] Emergency page with immediate contact options
- [ ] Clients page (new client onboarding info)
- [ ] Contact page with form submission
- [ ] Service area page with map
- [ ] Legal pages (Impressum, Privacy, Terms, Cookies)
- [ ] Responsive, mobile-first design
- [ ] Design system (colors, typography, animations)
- [ ] Header/footer components on all pages
- [ ] Cookie consent banner

#### Phase 2 — Education Hub & Content
- [ ] Horse Owners Hub (blog listing + detail pages)
- [ ] Testimonials/case results page
- [ ] Charity initiatives page
- [ ] Social & media page
- [ ] FAQ section (accordion)
- [ ] CMS-ready content structure (MDX or DB-backed)

#### Phase 3 — Smart Tools
- [ ] Horse weight estimation tool
- [ ] Drug dosage calculator with disclaimer
- [ ] Nutrition planner
- [ ] Booking/appointment request form
- [ ] Tools landing page with video guides + vet triggers
- [ ] i18n (English + German) for tools

#### Phase 4 — Authentication & Database
- [ ] NextAuth.js with role-based access (client/admin)
- [ ] MongoDB connection + Mongoose schemas
- [ ] User model (client, admin)
- [ ] Horse model
- [ ] Medical record model
- [ ] Invoice model
- [ ] Appointment model
- [ ] Reminder model
- [ ] Registration/login pages with GDPR consent

#### Phase 5 — Client Portal
- [ ] Client dashboard (welcome, stats, alerts)
- [ ] Multiple horse profiles per client
- [ ] Horse profile page (full history, docs)
- [ ] Medical records list + download
- [ ] Invoice list + PDF download
- [ ] Reminders page (upcoming vaccinations, deworming, payments)
- [ ] Lameness tracking log with trend chart

#### Phase 6 — Admin Dashboard
- [ ] Admin overview (summary stats)
- [ ] Client management (add/edit/deactivate)
- [ ] Horse management (add/edit/assign)
- [ ] Medical records upload (Cloudinary) + assign to horse
- [ ] Invoice upload + status management
- [ ] Appointment management
- [ ] Reminder scheduling
- [ ] Content management (blog, testimonials, FAQs, charity)
- [ ] GDPR consent records view

#### Phase 7 — SEO, i18n & Polish
- [ ] Full metadata for all pages
- [ ] Schema.org markup
- [ ] Sitemap + robots.txt
- [ ] next-intl language switcher (EN/DE)
- [ ] German translations for all content
- [ ] Performance optimization (images, fonts, lazy loading)
- [ ] Accessibility audit

### Out of Scope (Phase 1 milestone)
- Payment gateway (only invoice display, no online payment yet)
- Native mobile app
- Live chat/AI chatbot
- Course/LMS integration
- SMS reminders (email only initially)
- Advanced analytics dashboard

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js over React+Express | SSR for SEO, monorepo simplicity, API routes built-in | Decided |
| MongoDB over PostgreSQL | Flexible schema, medical records vary in structure | Decided |
| Cloudinary for files | Medical PDFs + images, easy CDN delivery | Decided |
| Mobile-first design | Most horse owners access on phone in field | Decided |
| Forest Green & Teal theme | Premium, trust-building, medical/equestrian feel | Decided |
| Phase-based delivery (7 phases) | Complex project, ship incrementally | Decided |

## Project Context

- **Location**: Germany (GDPR + Impressum mandatory)
- **Languages**: English (primary) + German
- **Target device**: Mobile-first (horse owners in field)
- **Design feel**: Premium, dark, trust-oriented, Forest Green & Teal accents
- **No existing codebase** — greenfield project
- **Folder**: `c:/Users/uneeb/OneDrive/Desktop/horse/`

---
*Last updated: 2026-04-09 after initialization*
