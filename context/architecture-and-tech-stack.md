# System Architecture & Technical Specification: Zack Njogu MCA Website

## 1. Core Technology Stack

| Layer | Technology | Purpose & Justification |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router, TypeScript) | Hybrid SSG/ISR rendering for sub-millisecond edge delivery; strict typing and server components. |
| **Styling** | Tailwind CSS + shadcn/ui | Utility-first CSS with modular, accessible UI primitives; ultra-small CSS bundle size. |
| **Animation** | Framer Motion (Selective) | Subtle micro-interactions and smooth accordion/modal transitions without performance penalties. |
| **Backend & API** | Next.js Server Actions & Route Handlers | Secure, zero-boilerplate server communication; input validation with Zod. |
| **Database** | Supabase (PostgreSQL) | Managed relational database for contacts, volunteers, news, events, and ward issue reports. |
| **Authentication** | Supabase Auth | Secure, role-based admin authentication (strictly restricted to campaign staff). |
| **File Storage** | Supabase Storage | High-speed CDN-backed media asset storage for campaign press releases, images, and documents. |
| **Hosting & Edge** | Vercel Edge Network | Global CDN deployment with automated CI/CD and edge caching. |
| **DNS & Security** | Cloudflare Enterprise DNS & Turnstile | WAF protection, DDoS mitigation, DNS resolution, anti-bot protection. |
| **Transactional Email**| Resend | High-deliverability transactional emails for volunteer confirmation and campaign alerts. |
| **Maps & Geo** | Google Maps Embed API | Accessible ward boundary and project location visualization. |
| **Analytics** | Cloudflare Web Analytics / Umami | Privacy-first, cookie-less, lightweight (<1KB) traffic analytics. |

---

## 2. Directory & Application Structure (Next.js App Router)

```
zack-njogu-mca/
├── app/
│   ├── (public)/
│   │   ├── page.tsx                  # Home Page (Hero, Vision, Manifesto Highlights, Latest News, CTA)
│   │   ├── about/page.tsx            # Candidate Biography & Leadership Journey
│   │   ├── manifesto/page.tsx        # Detailed Manifesto & Policy Commitments
│   │   ├── community/page.tsx        # Track Record & Community Projects
│   │   ├── news/
│   │   │   ├── page.tsx              # Campaign News & Press Releases List
│   │   │   └── [slug]/page.tsx       # News Article Detail Page (ISR)
│   │   ├── gallery/page.tsx          # Photo & Video Media Bank
│   │   ├── volunteer/page.tsx        # Volunteer & Supporter Registration Form
│   │   ├── contact/page.tsx          # Campaign Contact & Ward Office Info
│   │   └── report-issue/page.tsx     # Ward Issue Reporting Tool (Civic Engagement)
│   ├── (admin)/
│   │   ├── admin/login/page.tsx      # Secure Admin Login
│   │   └── admin/dashboard/
│   │       ├── page.tsx              # Overview Analytics & Recent Contacts
│   │       ├── volunteers/page.tsx   # Volunteer Submissions Management
│   │       ├── news/page.tsx         # News CMS (Create/Edit Articles)
│   │       └── issues/page.tsx       # Ward Issue Reports Tracker
│   ├── api/
│   │   ├── revalidate/route.ts       # On-demand ISR Revalidation Webhook
│   │   └── contact/route.ts          # Contact Form Submission Handler
│   ├── layout.tsx                    # Root Layout (Fonts, Metadata, Analytics)
│   ├── globals.css                   # Tailwind Import & Custom Utility Tokens
│   ├── sitemap.ts                    # Dynamic XML Sitemap Generator
│   └── robots.ts                     # Robots.txt Configuration
├── components/
│   ├── ui/                           # shadcn UI components (Button, Input, Card, Modal)
│   ├── layout/                       # Header, MobileNav, Footer, SectionContainer
│   ├── home/                         # HeroSection, VisionPillars, TrackRecordCounter, NewsPreview
│   ├── manifesto/                    # ManifestoAccordion, PolicyCard, PDFDownloadButton
│   ├── volunteer/                    # VolunteerForm, SkillCategorySelector
│   ├── contact/                      # ContactForm, OfficeMap, SocialLinks
│   └── shared/                       # SEOHead, SectionHeading, TurnstileWidget, ImageGallery
├── lib/
│   ├── supabase/                     # Client & Admin Supabase SDK initialization
│   ├── actions/                      # Next.js Server Actions (submitVolunteer, submitContact, submitIssue)
│   ├── validations/                  # Zod validation schemas
│   └── utils.ts                      # Helper functions (cn, formatDate, truncate)
├── public/
│   ├── images/                       # Optimized webp/avif static images
│   ├── icons/                        # Custom SVG icons
│   └── favicon/                      # Manifest and app icons
├── types/                            # TypeScript interfaces (Volunteer, Article, IssueReport)
└── tailwind.config.ts                # Extended design system tokens
```

---

## 3. Database Schema (Supabase PostgreSQL)

```sql
-- 1. Volunteers Table
CREATE TABLE public.volunteers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    email TEXT,
    sub_location TEXT NOT NULL, -- e.g., Maai Mahiu Town, Munyu, Kamere, etc.
    skills TEXT[] DEFAULT '{}', -- e.g., Mobilization, Media, Event Support
    preferred_role TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'active'))
);

-- 2. Contact Inquiries Table
CREATE TABLE public.contact_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    contact_info TEXT NOT NULL, -- Phone or Email
    category TEXT NOT NULL, -- General, Media, Ward Issue, Schedule Meeting
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    is_read BOOLEAN DEFAULT FALSE
);

-- 3. Ward Issue Reports Table (Civic Transparency)
CREATE TABLE public.ward_issues (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reporter_name TEXT,
    reporter_contact TEXT NOT NULL,
    location TEXT NOT NULL,
    issue_category TEXT NOT NULL, -- Roads, Water, Bursary, Sanitation, Youth Facilities
    description TEXT NOT NULL,
    status TEXT DEFAULT 'received' CHECK (status IN ('received', 'under_review', 'action_planned', 'resolved')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Campaign News & Press Releases Table
CREATE TABLE public.news_articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    featured_image_url TEXT,
    published_at TIMESTAMPTZ DEFAULT NOW(),
    is_published BOOLEAN DEFAULT TRUE,
    author TEXT DEFAULT 'Zack Njogu Campaign Team'
);

-- Row Level Security (RLS) Rules:
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ward_issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_articles ENABLE ROW LEVEL SECURITY;

-- Public Insert Access (Forms)
CREATE POLICY "Allow public insert for volunteers" ON public.volunteers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert for contact_inquiries" ON public.contact_inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert for ward_issues" ON public.ward_issues FOR INSERT WITH CHECK (true);

-- Public Read Access for Published News
CREATE POLICY "Allow public read for news_articles" ON public.news_articles FOR SELECT USING (is_published = true);

-- Admin Full Access (Authenticated Service Role / Admin Auth)
CREATE POLICY "Allow admin full access volunteers" ON public.volunteers FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow admin full access news" ON public.news_articles FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow admin full access issues" ON public.ward_issues FOR ALL TO authenticated USING (true);
```

---

## 4. Performance & Edge Strategy
- **Static Generation (SSG) with Revalidation**: All core pages (Home, About, Manifesto, Community, Gallery, Contact) are pre-rendered at build time for sub-100ms first byte time (TTFB).
- **Incremental Static Regeneration (ISR)**: News articles and press releases revalidate on demand or every 60 seconds (`revalidate = 60`).
- **Image Optimization Pipeline**: `next/image` with WebP/AVIF output, explicit width/height to prevent CLS, and aggressive caching (`Cache-Control: public, max-age=31536000, immutable`).
- **Minimal JavaScript Delivery**: Client components restricted strictly to interactive elements (forms, mobile menu drawer, manifesto accordion).
- **Core Web Vitals Benchmarks**:
  - Largest Contentful Paint (LCP): `< 1.2s`
  - First Input Delay / INP: `< 50ms`
  - Cumulative Layout Shift (CLS): `< 0.005`
  - Total Performance Score: `> 95+` on Mobile and Desktop.
