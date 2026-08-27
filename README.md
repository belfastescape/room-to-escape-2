# Cipher & Key — demonstration escape room site

A Next.js (App Router) escape room website built as a **portfolio example**.

> **This is not a real business.** Cipher & Key, its address, phone number, email,
> games and reviews are all invented for demonstration purposes. Any resemblance to
> a real venue is unintentional.

## Structure

- `app/` — one route folder per URL (e.g. `app/the-vanishing-hour.html/page.js`
  serves `/the-vanishing-hour.html`). The `.html` suffixes are deliberate: the
  build demonstrates a rebuild that preserves an existing site's URL structure.
  `app/layout.js` renders the shared `Header`/`Footer`/`MobileCta`/`ScrollEffects`
  around every page and loads the fonts via `next/font/google`.
- `app/globals.css` — the full "After Hours" design system.
- `components/` — `Header` (demo banner, nav, mobile toggle, dropdowns, active-link
  highlighting via `usePathname`), `Footer`, `MobileCta`, `RoomSubbar` (the 5
  room pages), `ScrollEffects` (scroll-reveal, room sub-bar show/hide),
  `NotFoundContent` (shared by `/404.html` and the built-in not-found page),
  `ContactForm` and `EventEnquiryForm` (client-side demo thank-you, no backend).
- `public/images/` — WebP photography.
- `public/robots.txt` — allows crawl so bots can see the global noindex / `X-Robots-Tag`.
  There is no sitemap.

## The five rooms

| Room | URL | Players | Difficulty |
|---|---|---|---|
| The Vanishing Hour | `/the-vanishing-hour.html` | up to 8 | Low |
| Blackout Cabin | `/blackout-cabin.html` | up to 6 | High |
| Dinner at Eight | `/dinner-at-eight.html` | up to 8 | Medium |
| The Gallery Job | `/the-gallery-job.html` | up to 6 | Low |
| Last Stand | `/last-stand.html` | up to 6 | Game master controlled |

## Why `/404.html` isn't `app/404.html/page.js`

Next.js reserves the literal build output path `404.html` for its own generated
not-found page, so a real route folder with that exact name collides with it at
build time. The actual page lives at `app/error-404/`, and `next.config.mjs`
rewrites the public URL `/404.html` to it — so the external URL is unaffected.

## Develop

```
npm install
npm run dev
```

## Build / run production

```
npm run build
npm start
```

## Placeholders in this build

- The booking calendar is a static placeholder panel — no booking system is connected.
- The contact and event enquiry forms show a demo thank-you and do not send anywhere.
- Review content is illustrative.
- Vercel Analytics is installed for the site owner; the public site is noindex.
