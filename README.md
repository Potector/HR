# PulseSight HR Consulting — Website

Bilingual (ES/EN) Next.js marketing site for [PulseSight HR Consulting](mailto:pulsesighthrconsulting@gmail.com).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide React** (icons)
- **Playfair Display** + **Geist** (Google Fonts via `next/font`)

No backend, no environment variables required for v1.

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
app/
  globals.css        Brand tokens + gradient utilities
  layout.tsx         Fonts, LanguageProvider, metadata
  page.tsx           Composes all sections

lib/
  site-content.ts    All ES + EN copy (edit here to update text)
  language-context.tsx  Language state + useLanguage() hook

components/
  site-header.tsx    Header with nav, ES/EN toggle, mobile menu
  hero.tsx           Hero section
  vision-section.tsx Nuestra Mirada
  why-us-section.tsx ¿Por qué elegirnos? (4 cards)
  services-section.tsx ¿Qué ofrecemos? (4 columns)
  team-section.tsx   Julieta & Oriana
  contact-section.tsx Closing CTA + mailto
  site-footer.tsx    Footer
  pulsesight-logo.tsx Logo lockup (serif + sans + four-dot icon)
```

---

## Updating content

All copy (Spanish and English) lives in `lib/site-content.ts`. Edit strings there — no need to touch component files.

---

## Adding team photos

Team photos are placeholder initials for now. When photos are available:

1. Add B&W JPG/PNG images to `public/team/julieta.jpg` and `public/team/oriana.jpg`
2. In `components/team-section.tsx`, replace the initials `<div>` with:

```tsx
<Image
  src={`/team/${name.toLowerCase().split(" ")[0]}.jpg`}
  alt={member.name}
  fill
  className="object-cover grayscale rounded-full"
/>
```

---

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repo — Vercel auto-detects Next.js
4. Click **Deploy** — no environment variables needed

Custom domain: add in Vercel → Project → Settings → Domains.

---

## Phase 2: Working contact form

When ready to add email submissions via Resend:

1. `npm install resend react-hook-form @hookform/resolvers zod`
2. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` to Vercel env vars
3. Create `app/api/contact/route.ts` (same pattern as BrandKeycaps `app/api/request-quote/route.ts`)
4. Replace the static mailto CTA in `contact-section.tsx` with a controlled form
