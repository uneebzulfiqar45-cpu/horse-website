# Requirements — Horse Veterinary Practice Website

## Milestone 1: Full Platform MVP

### Core Value
Horse owners can find the clinic, trust them instantly, and manage their horse's health digitally in one place.

---

## Phase 1 — Foundation & Design System + Public Core Pages

**Goal:** Establish Next.js project, design system, and all core public pages.

### Must Have
- [ ] Next.js 14 (App Router) initialized with Tailwind CSS
- [ ] Design system: CSS variables (dark bg + gold palette), typography (Playfair Display + Inter)
- [ ] Reusable Header component: logo, nav, emergency button, language switcher, login CTA
- [ ] Reusable Footer: contact info, quick links, legal links, social icons, copyright
- [ ] Sticky/mobile-responsive navigation with hamburger menu
- [ ] Cookie consent banner (GDPR)
- [ ] Homepage — all sections: hero, services snapshot, why us, about teaser, testimonials, tools preview, charity preview, map/contact preview
- [ ] Emergency page — large call/WhatsApp buttons, what counts as emergency, coverage
- [ ] Contact page — form, map embed, hours, phone links
- [ ] 404 page

### Should Have
- [ ] Page transition animations (subtle fade-in)
- [ ] Scroll-triggered animations (fade up on sections)
- [ ] Google Fonts integration
- [ ] Responsive images with next/image

---

## Phase 2 — About, Services & Content Pages

**Goal:** All public informational pages with rich content.

### Must Have
- [ ] About page: vet bio, image gallery, philosophy, qualifications, facilities
- [ ] Services overview page (8 service cards with links)
- [ ] 8 individual service detail pages (dynamic routing `/services/[slug]`)
  - General Practice, Sports Medicine, Lameness Evaluation, Diagnostic Imaging, Dentistry, Preventive Care, Emergency & Ambulatory Care, Pharmacy
- [ ] Clients page: new client info, appointment process, policies, downloadable forms
- [ ] Service Area page: ambulatory regions, map embed, travel policy
- [ ] Legal pages: /legal/impressum, /legal/privacy, /legal/terms, /legal/cookies
- [ ] Medical disclaimer component (shared across tool pages + service pages)

### Should Have
- [ ] Service page SEO metadata (title, description, schema)
- [ ] FAQ accordion component (reusable)
- [ ] Gallery/image grid component

---

## Phase 3 — Education Hub & Content Sections

**Goal:** Blog/resource center, testimonials, charity, social media pages.

### Must Have
- [ ] Horse Owners Hub page (article listing, category filter, search)
- [ ] Individual article/blog detail page
- [ ] Testimonials/Case Results page (cards/grid)
- [ ] Charity Initiatives page (mission, projects, stories, gallery)
- [ ] Social & Media page (social links, media mentions)
- [ ] Seed content: 3-5 sample blog articles, 4-6 testimonials, charity content

### Should Have
- [ ] Article search/filter
- [ ] Related articles section
- [ ] Before/after case cards (testimonials)

---

## Phase 4 — Smart Tools

**Goal:** Interactive veterinary tools with disclaimers.

### Must Have
- [ ] Tools overview page (/tools)
- [ ] Horse Weight Estimation Tool (girth + length → kg formula)
- [ ] Drug Dosage Calculator (weight + drug → dosage with disclaimer)
- [ ] Nutrition Planner (type/age/workload/weight → feeding guidance)
- [ ] Lameness Tracking Log (form: date, leg, severity, notes; trend chart)
- [ ] Medical disclaimer + "When to call the vet" trigger on each tool
- [ ] Appointment request form (owner name, horse, issue, date, contact)
- [ ] Form validation (client-side)

### Should Have
- [ ] Explainer text + video embed per tool
- [ ] Lameness log chart (Chart.js or Recharts)
- [ ] Print/export lameness log

---

## Phase 5 — Authentication & Database

**Goal:** User auth system + all database schemas.

### Must Have
- [ ] MongoDB connected (Mongoose)
- [ ] NextAuth.js with credentials provider (email + password)
- [ ] Role-based access: `client` and `admin`
- [ ] User model (name, email, password hash, role, phone)
- [ ] Horse model (name, breed, age, sex, color, ownerId)
- [ ] Medical Record model (horseId, type, title, fileUrl, uploadedAt)
- [ ] Invoice model (clientId, amount, status, dueDate, fileUrl)
- [ ] Appointment model (clientId, horseId, service, preferredDate, status, notes)
- [ ] Reminder model (clientId, horseId, type, dueDate, sent)
- [ ] LamenessLog model (horseId, date, leg, severity, notes)
- [ ] Login page (email/password, GDPR checkbox)
- [ ] Protected route middleware for portal + admin
- [ ] Forgot password flow

### Should Have
- [ ] Password reset email (Nodemailer)
- [ ] Session persistence

---

## Phase 6 — Client Portal

**Goal:** Full client-facing authenticated portal.

### Must Have
- [ ] Client dashboard: welcome, total horses, upcoming reminders, unpaid invoices, recent records
- [ ] Horse profiles list page
- [ ] Add/edit horse profile form
- [ ] Individual horse profile page (history, docs, vaccinations, deworming)
- [ ] Medical records list (filter by horse), download link
- [ ] Invoice list (paid/unpaid/due), download PDF
- [ ] Reminders page (upcoming vaccination, deworming, payment reminders)
- [ ] Lameness tracking log (client enters, views trend chart)
- [ ] Quick actions widget (book appointment, call vet, download record)

### Should Have
- [ ] Notification alerts for upcoming reminders
- [ ] Horse profile photo upload

---

## Phase 7 — Admin Dashboard

**Goal:** Full admin backend for clinic staff.

### Must Have
- [ ] Admin dashboard overview (stats: clients, horses, pending invoices, upcoming reminders)
- [ ] Client management: list, add, edit, deactivate
- [ ] Horse management: list, add, edit, assign to client
- [ ] Medical records: upload (Cloudinary), assign to horse, publish to portal
- [ ] Invoice management: upload PDF, set amount/due date, mark paid/unpaid
- [ ] Appointment management: list requests, approve/reject/schedule
- [ ] Reminder management: create/edit/delete reminders per horse
- [ ] Content management: blog posts (create/edit/delete), testimonials, FAQs, charity updates
- [ ] Emergency info management (phone numbers, hours)
- [ ] GDPR consent records viewer

### Should Have
- [ ] Bulk reminder scheduling
- [ ] Appointment calendar view

---

## Phase 8 — SEO, i18n & Final Polish

**Goal:** Production-ready SEO, multilingual, and performance.

### Must Have
- [ ] next-intl setup (EN/DE routing: /en/, /de/)
- [ ] German translations for all static content
- [ ] Language switcher in header
- [ ] Metadata API for all pages (title, description, OG tags)
- [ ] Schema.org markup: LocalBusiness, VeterinaryCare, Article, FAQPage
- [ ] sitemap.xml + robots.txt
- [ ] Page speed optimizations (next/image, font optimization, lazy loading)
- [ ] Accessibility pass (aria labels, color contrast, keyboard navigation)
- [ ] Final responsive QA (mobile, tablet, desktop)

### Should Have
- [ ] Google Analytics integration
- [ ] Google Maps embed optimization
- [ ] WhatsApp floating button (mobile)

---

## Out of Scope (this milestone)
- Payment gateway / online billing
- Native mobile app
- AI chatbot
- Course / LMS
- SMS reminders
- Stripe integration
- Advanced analytics
