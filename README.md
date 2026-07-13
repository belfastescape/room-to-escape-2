# Room to Escape — Next.js rebuild

React/Next.js (App Router) port of the static `redesign/` site. Same 16 pages,
same URLs (including the `.html` suffixes, to protect the site's existing SEO —
see `../REDESIGN-AND-CONVERSION-PLAN.md` §0), same design system.

## Structure

- `app/` — one route folder per live URL (e.g. `app/the-disappearing-act.html/page.js`
  serves `/the-disappearing-act.html`). `app/layout.js` renders the shared
  `Header`/`Footer`/`MobileCta`/`ScrollEffects` around every page and loads the
  Anton/Archivo fonts via `next/font/google`.
- `app/globals.css` — the full House Red design system (copied from
  `redesign/css/style.css`), unchanged except the two font tokens now point at
  the CSS variables `next/font` generates.
- `components/` — `Header` (nav, mobile toggle, dropdowns, active-link
  highlighting via `usePathname`), `Footer`, `MobileCta`, `RoomSubbar` (the 5
  room pages), `ScrollEffects` (client component porting the old `site.js`:
  scroll-reveal, the room sub-bar show/hide, the booking-iframe skeleton
  dismiss), `NotFoundContent` (shared by `/404.html` and the framework's
  built-in not-found page).
- `public/images/` — same WebP photography as the static build.
- `public/robots.txt`, `public/sitemap.xml` — served as-is.

## Why `/404.html` isn't `app/404.html/page.js`

Next.js reserves the literal build output path `404.html` for its own
generated not-found page, so a real route folder with that exact name
collides with it at build time. The actual page lives at `app/error-404/`,
and `next.config.mjs` rewrites the public URL `/404.html` to it — so the
external URL is unaffected.

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

## Deploy

Push this repo to GitHub, then import it in Vercel (framework preset:
Next.js, no special build settings needed).

## Known gaps (same as the static build — see `../PROJECT-STATUS.md`)

TripAdvisor rating placeholders, contact/parties form endpoints, Resova
per-room deep links, GTM container ID, and real photography are all still
pending owner input — nothing here is blocked on code.
