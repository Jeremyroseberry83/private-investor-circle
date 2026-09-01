# PrivateInvestorCircle.com

Marketing site for **Private Investor Circle** — the private gatherings practice
of capital market strategists Jeremy Roseberry and Ran Gimeno. Private dinners,
capital forums, galas and founder retreats.

Built from the in-house `site-template-framework`: Next.js (Pages Router) +
Tailwind + inline styles, deployed on Netlify.

## Stack & structure

Single Next.js route (`pages/index.jsx`) holding `currentPage` state and
swapping page components — fast transitions, one shared nav/footer/modal state.
There are no per-URL routes; if `/about` needs to be a real URL for SEO or
shareable links, that's a structural change, not a config tweak.

| What | Where |
|---|---|
| Colors, company name, nav labels, email | `site.config.js` |
| Nav, footer, legal disclaimer, SEO tags | `pages/index.jsx` |
| Shared design-system components | `components/ui.jsx` |
| Pages | `components/HomePage.jsx`, `GatheringsPage.jsx`, `CompaniesPage.jsx`, `AboutPage.jsx` |
| Invitation form (Netlify Forms) | `components/ContactForm.jsx` + `public/__forms.html` |
| Language switcher | `components/Translate.jsx` |
| Global CSS, animations, Translate widget fix | `styles/globals.css` |

## Palette

| Role | Color | Hex |
|---|---|---|
| `INK` — dark section grounds | Noir Black | `#111111` |
| `SLATE` — headings/body on light | Charcoal | `#2E2E2E` |
| `PRIMARY` — buttons, links, active states | Midnight Navy | `#102542` |
| `SECONDARY` — accents, rules, on-dark type | Antique Gold | `#C9A84C` |
| `SECONDARY_LIGHT` — card/badge grounds | Champagne tint | `#F6EFDF` |
| `BG` — page ground | Ivory | `#FAF8F5` |

Navy carries the text weight and gold carries the accent weight **on purpose**:
gold on white fails contrast at body sizes. Don't swap those roles without
re-checking contrast. Gold-filled buttons use `INK` (not white) as their label
color for the same reason.

## Before launch

1. **Bios** — `components/AboutPage.jsx` has two `[bracketed]` lines, one per
   principal. Replace with verified background; everything outside the brackets
   is written and safe to keep.
2. **Photography** — every image in `public/images/` is a noir/gold SVG
   placeholder that says so on its face. Replace with real photographs
   (`hero`, `band-gatherings`, `band-companies`, `band-about`, `dinner`,
   `forum`, `gala`, `retreat`, `origin`, `team/jeremy`, `team/ran`). Update the
   `src` extensions in the components when you swap `.svg` for `.jpg`.
3. **OG image** — `pages/index.jsx` points at `/images/og-cover.jpg`
   (1200×630). That file does not exist yet; social previews stay blank until
   it does. Must be a raster file — SVG doesn't render on most platforms.
4. **Email** — `site.config.js` uses `jeremy@roseberrycapital.net`. Swap for a
   branded inbox once it exists; it's defined in exactly one place.
5. **LinkedIn URLs** — `AboutPage.jsx` has placeholder `https://www.linkedin.com/`
   links on both principals.
6. **Legal** — the footer disclaimer in `pages/index.jsx` states that the site
   isn't an offer of securities and that PIC isn't a broker-dealer or adviser.
   Have counsel review the exact wording, and confirm the "we do not take a cut
   of a deal" claim in `AboutPage.jsx` matches how the business actually
   charges.

## Local development

```bash
npm install
npm run dev
```

## Deploying to Netlify

Netlify builds from the GitHub repo — connect once and every push to `main`
deploys.

1. Push this repo to GitHub.
2. Netlify → **Add new site → Import an existing project → GitHub** → pick this
   repo.
3. Build settings are already in `netlify.toml` (`npm run build`, publish
   `.next`, Node 20, `@netlify/plugin-nextjs`) — accept the detected values.
4. **Domains → Add a domain** → `privateinvestorcircle.com`, then point the
   registrar's nameservers (or an ALIAS/CNAME) at Netlify. HTTPS is automatic.
5. **Forms** — submissions land under the site's *Forms* tab as `invitation`.
   Add a notification email there or nobody sees them. Netlify only registers
   the form if `public/__forms.html` is present at build time; if you change
   fields in `ContactForm.jsx`, change them there too or submissions silently
   fail.
