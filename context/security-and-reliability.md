# Security, Reliability & Infrastructure Strategy: Zack Njogu MCA Website

## 1. Threat Model & Risk Assessment
Political campaign websites operate under unique security threat profiles, particularly during campaign rallies, debate periods, and election week:

| Threat Vector | Potential Impact | Defense Mechanism |
| :--- | :--- | :--- |
| **DDoS Attacks (HTTP flood / SYN flood)** | Site downtime, unresponsiveness during critical news drops. | Cloudflare Enterprise Edge WAF, static HTML caching (SSG), Vercel Multi-Region Edge. |
| **Form Spam & Bot Abuse (Volunteers/Contact)** | Database pollution, resource exhaustion, email quota depletion. | Cloudflare Turnstile (privacy-first bot protection), server-side Zod validation, rate limiting. |
| **SQL Injection / XSS / CSRF** | Compromise of site data, malicious script injection. | Parameterized queries via Supabase SDK (PostgreSQL), React auto-escaping, Next.js CSRF token protection. |
| **Admin Portal Credential Compromise** | Defacement of news, unauthorized access to supporter contact lists. | Supabase MFA / Role-Based Access Control (RBAC), strict IP/Route restrictions, zero public registration. |
| **Data Leakage of Supporter Information** | Violation of data protection standards (Kenya Data Protection Act 2019). | Strict Row Level Security (RLS) in PostgreSQL, encrypted connections (TLS 1.3), hashed admin sessions. |

---

## 2. Web Application Firewall (WAF) & Content Security Policy (CSP)

### HTTP Security Headers Configuration (`next.config.ts`)
```typescript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://maps.googleapis.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: blob: https://*.supabase.co https://maps.gstatic.com https://images.unsplash.com;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://*.supabase.co https://challenges.cloudflare.com;
      frame-src https://challenges.cloudflare.com https://www.google.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s{2,}/g, ' ').trim()
  }
];
```

---

## 3. Bot Protection & Rate Limiting System

- **Form Rate Limiting**: Next.js Server Actions enforce IP-based rate limiting on forms:
  - Contact Form: Max **3 submissions per 10 minutes** per IP.
  - Volunteer Registration: Max **3 submissions per 15 minutes** per IP.
  - Ward Issue Report: Max **5 submissions per 30 minutes** per IP.
- **Cloudflare Turnstile Widget**: Captcha-free bot protection embedded into form submissions before invocation of Server Actions.
- **Anti-Spam Honey-pot**: Invisible dummy input fields embedded into forms. Submissions with filled honeypots are silently dropped without writing to Supabase.

---

## 4. Resilience & Traffic Spike Mitigation
- **Static First Architecture**: Over **95%** of user traffic is served directly from Vercel Edge / Cloudflare CDN caches as static HTML & WebP assets.
- **Database Load Isolation**: Server Actions write asynchronously to Supabase PostgreSQL without blocking page delivery. Read requests for core content (manifesto, biography, news) do not touch PostgreSQL at runtime; they read from edge-built static JSON/HTML.
- **Failure Degraded Mode**: If database connectivity degrades, core public pages remain **100% operational** for visitors. Only interactive form submissions display a friendly offline retry message.

---

## 5. Data Privacy & Compliance (Kenya Data Protection Act 2019)
- Supporter phone numbers and email addresses collected via Volunteer / Contact forms are strictly used for campaign updates.
- Form submissions contain an explicit opt-in checkbox acknowledging data privacy consent.
- Supporter data is never shared with third parties, and admin access is logged with timestamp and user ID.
