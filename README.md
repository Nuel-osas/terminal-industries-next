# Terminal Industries — Next.js rebuild

A native Next.js App Router reconstruction of [terminal-industries.com](https://terminal-industries.com), with 270 public routes, editable React sections, locally stored imagery and fonts, and the desktop/mobile truck animation.

## Run locally

Requires Node.js 22 or later and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4183. For a production preview:

```sh
npm run build
npm start
```

## Included

- Native Next.js routes, metadata, shared sections, and client-side navigation.
- Local desktop (410 frames) and mobile (409 frames) truck sequences, rendered on a canvas as you scroll.
- Responsive desktop dropdowns and mobile navigation.
- Yard efficiency calculator using the public source's formulas and defaults.
- Fifteen-question yard security grader, score breakdown, and downloadable local text report.
- Searchable, paginated resource categories; article, product, market, and company pages.
- FAQ tabs, disclosures, feature navigation, and local demo form submissions.

Forms and the demo chat work locally. No submissions go to Salesforce, marketing systems, or a real assistant. Third-party video players load only when played. External articles and product-exploration links retain their destinations.

## Project structure

- `app/`: native page routes and metadata.
- `components/sections/`: editable presentation sections.
- `components/`: React implementations of navigation, animation, calculator, grader, resource library, and FAQ.
- `lib/`: local content and scoped interaction lifecycle.
- `public/`: local media and fonts.
- `styles/`: source presentation styles plus native component styles.
- `docs/`: route, media, and validation inventories.
- `scripts/`: checks and one-time migration utilities. Migration scripts reference ignored capture inputs; they are not needed to run or build the site.

## Verify

```sh
npm run build
npm run typecheck
npm test
```

Browser checks need installed Chrome/Chromium. Set `CHROME_PATH` if detection fails. `npm test` launches a temporary production server, checks all 270 routes over HTTP, then tests 21 representative pages at desktop and mobile sizes and 16 interactions. Additional checks cover platform-card expansion, animated canvas backgrounds, and legacy redirects. Reports and screenshots are written to ignored `.qa/`.

Reconstructed from public content on 14 October 2026. D-j-View's Terminal capture encountered a Storyblok filename collision; a separate collector in this project completed the public sitemap and media collection. Original Vue/Nuxt runtimes are not used. Native animation timing, menus, resource loading, and local report behavior have been recreated; pixel-perfect equivalence across every state has not been established. This repository contains a frontend recreation, not the original private application or backend.
