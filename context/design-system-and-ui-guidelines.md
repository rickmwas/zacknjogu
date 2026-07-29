# Design System & UI Guidelines: Zack Njogu MCA Website

## 1. Brand Identity & Visual Philosophy

### The Candidate as the Product
The design philosophy balances modern civic dignity, editorial clarity, and subtle political heritage:
- **Primary Vibe**: Calm, authoritative, editorial, trustworthy, modern, human.
- **Key References**: Apple (clarity and tactile spatial layout), Stripe (crisp typography and structured micro-spacing), Linear (precision, subtle dark accents), Notion (editorial readability), Vercel (clean typography scale and performance).
- **Anti-AI Directives**: Zero generic stock illustration style, no hyper-saturated glowing glassmorphism, no meaningless floating 3D shapes, no cliché political slogan banners.

---

## 2. Color Palette & Token System

The color palette grounds the candidate's personal identity in sophisticated neutral tones while incorporating Jubilee Party colors (Red `#DC2626`, Gold `#D97706`, Green `#059669`) as accent highlights for badges, buttons, and policy tags.

### Color Tokens (Tailwind HSL Schema)

| Token Name | Light Mode Hex / HSL | Dark Mode Hex / HSL | Application Purpose |
| :--- | :--- | :--- | :--- |
| `--background` | `#FAF9F6` (hsl 40, 20%, 97%) | `#090A0C` (hsl 220, 15%, 4%) | Off-white warm canvas / Deep charcoal night canvas |
| `--foreground` | `#111827` (hsl 220, 39%, 10%) | `#F9FAFB` (hsl 210, 40%, 98%) | Primary crisp typography |
| `--muted-foreground`| `#4B5563` (hsl 215, 16%, 35%) | `#9CA3AF` (hsl 215, 14%, 65%) | Secondary body copy and subtitles |
| `--primary` | `#0F172A` (hsl 222, 47%, 11%) | `#F8FAFC` (hsl 210, 40%, 98%) | Primary action buttons and headers |
| `--brand-red` | `#DC2626` (hsl 0, 72%, 51%) | `#EF4444` (hsl 0, 84%, 60%) | Jubilee Red accent (Badges, Key Callouts, Focus) |
| `--brand-gold` | `#D97706` (hsl 38, 92%, 50%) | `#F59E0B` (hsl 38, 92%, 50%) | Jubilee Gold accent (Milestone Highlights, Icons) |
| `--brand-green` | `#059669` (hsl 160, 84%, 39%)| `#10B981` (hsl 160, 84%, 39%)| Community track record & success states |
| `--card` | `#FFFFFF` (hsl 0, 0%, 100%) | `#12151B` (hsl 220, 20%, 9%) | Clean surface panels |
| `--border` | `#E5E7EB` (hsl 220, 13%, 91%) | `#1F2937` (hsl 220, 13%, 18%) | Subtle 1px structural dividers |

---

## 3. Typography Scale & Fonts

- **Primary Heading Font**: `Outfit` or `Plus Jakarta Sans` (Bold, Semibold, Tracked -0.02em for headings).
- **Body & Subtitle Font**: `Inter` (Regular, Medium, 1.6 line height for effortless long-form readability).

### Typographic Hierarchy Scale

| Level | Size (Mobile) | Size (Desktop) | Weight | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `2.25rem` (36px) | `3.75rem` (60px) | 700 (Bold) | 1.1 |
| **H2 Section Title** | `1.75rem` (28px) | `2.5rem` (40px) | 600 (Semibold) | 1.2 |
| **H3 Feature Title** | `1.25rem` (20px) | `1.5rem` (24px) | 600 (Semibold) | 1.3 |
| **Body Large** | `1.125rem` (18px) | `1.25rem` (20px) | 400 (Regular) | 1.6 |
| **Body Normal** | `1.0rem` (16px) | `1.0rem` (16px) | 400 (Regular) | 1.6 |
| **Caption / Badge** | `0.75rem` (12px) | `0.875rem` (14px) | 500 (Medium) | 1.4 |

---

## 4. UI Components & Layout Guidelines

### Mobile First Grid & Spacing
- Container Max Width: `1280px` (`max-w-7xl`).
- Horizontal Padding: `px-4` on mobile (`16px`), `px-6` on tablet (`24px`), `px-8` on desktop (`32px`).
- Section Vertical Spacing: `py-12` on mobile (`48px`), `py-20` on desktop (`80px`).

### Mobile Navigation (Thumb-Optimized)
- Bottom-docked sticky action bar on smartphones (Quick WhatsApp Call / Volunteer Button).
- Slide-out side drawer with clear touch targets (`min-height: 48px`).

### Interactive Element States
- **Buttons**: Focus ring (`focus-visible:ring-2 focus-visible:ring-brand-red`), subtle transform press (`active:scale-[0.98] transition-transform duration-150`).
- **Cards**: Border highlight on hover (`hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-200`). No dramatic 3D shadow lifts.

---

## 5. Accessibility Standards (WCAG 2.1 AA / AAA Compliance)
- **Contrast Ratios**: Body text achieves minimum `7.1:1` contrast ratio against backgrounds.
- **Keyboard Navigation**: All interactive elements (Accordions, Modals, Forms, Navigation links) are fully traversable using `Tab` and `Enter` / `Space`.
- **Screen Reader Semantics**: `aria-expanded`, `aria-controls`, `aria-label`, and landmark regions (`<header>`, `<main>`, `<nav>`, `<footer>`) are strictly implemented.
- **Focus Indicators**: High-visibility focus indicators guaranteed across light and dark themes.
