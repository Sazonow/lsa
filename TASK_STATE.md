Single HTML E-1: Self-contained project export branch has been implemented.

- Added `scripts/build-single-html.mjs` to build the existing Vite app and inline the generated CSS, JS, and runtime assets into one HTML document.
- Added `npm run build:single-html` as the repeatable export command.
- Output path is `single-html/kort-rider-single.html`; the generated artifact is committed on this export branch so it can be downloaded directly.
- Preserved the existing React structure, routes, Home GSAP animations, public assets, backend code, dependencies, and visual implementation.

Home B-4.9: Practices pinned entry polish has been implemented.

- Fixed the desktop Home practices pinned scene so the first practice card is already fully readable when the section pins, instead of leaving an almost empty screen with only the heading.
- Kept the sequential scroll behavior for cards 2 -> 3 -> 4, preserving the intended screen-by-screen reading rhythm.
- Preserved the existing practice card visual system, Home structure, routes, contact/backend logic, dependencies, and sections after quote.
- `npm run build` passes on 2026-06-05.
- Headless Chrome smoke passed: desktop `1440x1200` shows card 1 visible at practices pin start and all 4 cards visible at the end, no horizontal overflow; mobile `390x1000` remains normal-scroll with no pin-spacer and no horizontal overflow.

Home B-4.8: Hero first-screen QA polish has been implemented.

- Corrected the desktop Home hero to fill the full first viewport instead of ending early and leaving an empty cream band under the hero on tall screens.
- Kept the values pinned screen as the next section after hero and slightly rebalanced its desktop vertical spacing for a more deliberate screen-by-screen flow.
- Preserved the approved Home structure, content, routes, backend/contact logic, dependencies, and all sections after quote.
- `npm run build` passes on 2026-06-05.
- Headless Chrome smoke passed: desktop `1440x1200` hero is exactly one viewport tall, values starts at the next viewport, values/practices pins remain present, no horizontal overflow; mobile `390x1000` remains unpinned with no horizontal overflow.

Home B-4.7: Values pinned screen fix has been implemented.

- Reworked the Home values + strategy route area into one light pinned desktop screen after the hero, matching the selected mockup direction more closely.
- Removed the old duplicated values line/circle layer from the rendered DOM and kept one premium icon-frame system for the four value icons.
- Replaced the inappropriate dark carbon strategy strip with a light legal-docket route panel and delayed the panel reveal until its route phase so it no longer appears empty.
- Preserved the full Home landing flow after the quote: About, Experience, Process, Contacts, and footer remain present.
- `npm run build` passes on 2026-06-05.
- Headless Chrome smoke passed: desktop `1440x1200` has values + practices pin, no horizontal overflow, no `.values-strategic-line` DOM node, and all value/route items are visible at the end of the pinned scene; mobile `390x1000` has no pin-spacers, no horizontal overflow, and values/route reveal through normal scroll.

Home B-4.6: Full landing flow restore has been implemented.

- Restored the missing Home landing sections after the verdict quote: About, values, stats, mission, Experience, Process, Contacts, and footer now render on `/`.
- Kept the standalone `/about`, `/experience`, `/process`, and `/contacts` pages unchanged.
- Added Home anchors for `#about`, `#practices`, `#experience`, `#process`, and `#contacts`.
- Added Home-only reveal safety so embedded Timeline/ProcessSteps content is not hidden without the old IntersectionObserver.
- `npm run build` passes on 2026-06-05.
- Browser desktop smoke confirmed Home scroll height ~10442px, overflow `0`, sections present and visible after practices: About, values, Experience, Process, Contacts, footer.

Home B-4.5: Premium pinned sequential motion finish has been implemented.

- Reworked Home GSAP into scoped `useLayoutEffect` + `gsap.matchMedia` timelines with explicit desktop, mobile, and reduced-motion branches.
- Removed Home `.reveal` conflicts from GSAP-controlled hero, feature, route, practices, and verdict elements.
- Converted the Home practice area into the single desktop pinned viewport scene: cards reveal sequentially 1 -> 2 -> 3 -> 4 with completed states before the next step.
- Kept feature and strategy route scroll-bound but unpinned to avoid small-section scroll drag and improve premium flow.
- Restored visible case-file metadata, icon, title, description, action, dark overlay, and refined card depth/readability across desktop and mobile.
- `npm run build` passes on 2026-06-05; live Browser smoke confirmed desktop overflow `0`, one `home-practices` pin, mobile no pin-spacers, hero/CTA visible, and Home `.reveal` count `0`.

Home B-4.4: Premium scroll-bound GSAP motion polish has been implemented.

- Added a restrained legal kicker reveal in the Home hero and refined the hero title entrance with a softer premium blur/settle.
- Upgraded the existing Home GSAP layer with scroll-scrubbed hero depth, overlay darkening, route-line progress, feature reveal, case-card reveal, card-image parallax, and quote mask reveal.
- Preserved the current Home structure, legal visual direction, routing, translations, contact logic, dependency set, env files, and all non-Home pages.
- Adjusted mobile Home hero height/spacing so both hero CTAs remain visible below the new kicker.
- Removed stray `.DS_Store` build payload files from `public`/`dist`.
- `npm run build`, `npm run verify:translations`, `npm run verify:security`, and `npm run verify:assets` pass on 2026-06-05.
- Headless Chrome screenshots were captured for Home at desktop `1440x1900` and mobile `390x1600`; mobile CTA clipping was fixed after the first pass.

Home B-4.3: Landing Premium Polish has been implemented on branch `codex/court-rider-landing`.

- Tightened the Home hero height on desktop and mobile so the first viewport shows a clear continuation into the values section.
- Changed the primary Home CTA into a restrained muted-gold button matching the mockup direction more closely.
- Restored the strategic route strip on desktop as a compact premium motion section between values and practices.
- Refined Home practice card spacing, borders, and title scaling for a less template-like legal case-file feel.
- Returned the Home quote band to a centered rounded editorial panel instead of a flat full-width strip.
- Verified local dev route and responsive screenshots at 1440x1000 and 390x900 with headless Chrome; Chrome required manual process cleanup after writing screenshots.
- `npm run build`, `npm run verify:translations`, and `npm run verify:assets` pass.

Fullscreen Desktop F-1: Page-frame removal and full-width layout pass has been implemented.

- Converted the app shell and page frame from a centered 1120px window into full-width page surfaces.
- Reworked desktop header/footer sizing so navigation sits in centered full-width bands instead of inside a framed card.
- Expanded Home, content, conversion, and thank-you desktop sections to full-width page rhythm with constrained readable inner content.
- Restyled the approved CR logo asset to blend into light headers/footers and invert cleanly on the dark Home hero.
- Preserved routes, translations, contact backend, dependencies, env files, and production settings.

Fullscreen Desktop F-1 QA has been completed.

- `npm run build`, `npm run verify:translations`, `npm run verify:security`, and `npm run verify:assets` pass.
- Local production preview was checked at 1440px for `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you`.
- Verified `.page-frame` is full viewport width with no radius/shadow on every route.
- Verified no horizontal overflow at desktop 1440px and mobile smoke width 390px.
- Verified no hidden desktop reveal sections remained in the captured route screenshots.

Asset/block correction F-2 has been implemented.

- Rechecked local PC assets in `Downloads`, `references`, and `public/assets`; kept production-safe project assets for runtime.
- Removed the extra standalone Home route block from the desktop Home flow so block order matches the approved browser mockup more closely.
- Restored Home practice cards as dark image-backed legal service cards with icon, title, description, and arrow.
- Rebuilt the footer from a thin utility row into a dark multi-column legal footer block.
- Preserved routes, contact backend, dependencies, env files, and production settings.

## Current Direction

The client selected `references/mockup.jpg` as the primary visual base. The project must preserve the mockup concept: framed premium legal pages, cream paper surfaces, charcoal panels, muted gold accents, serif editorial typography, Lady Justice imagery, and restrained legal luxury.

The goal is not to replace the mockup with a different AI/SaaS style. The goal is to elevate the selected mockup into a more premium, cinematic, interactive legal website.

## Visual Strategy

Core concept:
Legal Strategy Case Command.

Main motif:
A thin muted-gold strategic line representing position -> strategy -> action -> result.

Motion rules:
- Motion must be controlled, slow, premium, and meaningful.
- Prefer transform/opacity/clip-path CSS motion.
- No playful bounce, neon, glitch, splatter, burn text, or random decorative effects.
- GSAP is approved only for the existing controlled Home motion layer; do not add Three.js, jQuery, WebGL, or unrelated animation libraries.

## Current Priority

P0:
- Home B-2: Practices as Case Files.
- Contacts premium static visual replacing the current Leaflet-first composition.

P1:
- Global motion system: title reveal, line draw, case-card hover, timeline reveal, stats counter.

P2:
- About, Practices, Experience, Process page-by-page premium polish.

P3:
- Thank-you polish, copy QA, backend contact delivery, dependency cleanup.

## Rejected As Final

The previous Home polish pass is not accepted as completed B-2. It only adjusted spacing, heights, radii, shadows, quote band sizing, and mobile spacing. It did not rebuild Home practices as case-file cards and did not use card text/icon data.

## Current Completed Slice

Home B-2: Practices as Case Files has been implemented as a controlled Home-only patch.

- `HomePracticeCard` now uses `card.icon` and `card.text`.
- Home practice cards now render `PRACTICE FILE`, `CASE 01-04`, icon marker, title, description, localized action label, and arrow.
- Home card click behavior still uses `/contacts?service=<encoded title>`.
- Home hero subtitle now uses `t("home.hero.lead")` instead of hardcoded Ukrainian text.
- Action labels are local to Home: RU `Обсудить стратегию`, UA `Обговорити стратегію`.
- No GSAP, jQuery, Framer Motion, Three.js, Velocity, or new package was added.

Home B-3: Strategic Route + Cinematic Home Finalization has been implemented as a controlled Home-only patch.

- Added a Home strategy route strip between Values and Practices: position -> strategy -> action -> result.
- Added stable Home-only motion hooks for the later B-4 GSAP Motion Engine Pass.
- Improved hero cinematic depth with CSS-only reduced-motion-safe animation hooks.
- Upgraded the feature strip into connected strategic nodes.
- Refined B-2 case-file card readability, dossier panel depth, and hover behavior without removing `card.icon`, `card.text`, `PRACTICE FILE`, or `CASE 01-04`.
- Upgraded the quote band into a verdict/editorial block with gold-rule treatment.
- GSAP and dependencies were not added in B-3.

Home B-3.1: Manual Browser Visual Refinement has been implemented as a Home-only screenshot-based refinement pass.

- Strengthened the Home strategy route so it reads as a premium legal route rail, not a weak divider.
- Reduced visual fragmentation between Values, route strip, and Practices by smoothing spacing/background transitions.
- Improved case-file card density, lower panel spacing, metadata clarity, and action-row hierarchy while preserving all B-2 content markers.
- Refined the quote band as a signed verdict/editorial responsibility block.
- No GSAP, new dependency, package change, or non-Home page change was made.

Home B-4: GSAP Motion Engine Pass has been implemented for Home only.

- Added `gsap` as the only new dependency.
- Registered `ScrollTrigger` inside `HomePage.tsx` and scoped all Home motion with `gsap.context`.
- Added controlled Home motion for hero line/depth, feature nodes, strategy route line/steps, practice case-file cards, and quote verdict block.
- Reduced motion is respected with `window.matchMedia("(prefers-reduced-motion: reduce)")`; GSAP animations do not run in reduced-motion mode.
- Existing B-2/B-3/B-3.1 Home structure and content markers remain in place.
- No Framer Motion, Three.js, jQuery, Velocity, video, WebGL, or paid GSAP plugin was added.

Home B-4.1: Brand/Header/Base UI Rescue has been implemented.

- Replaced the weak BrandMark with a premium seal-inspired CR mark while keeping the BrandLogo/BrandMark API compatible.
- Refined Header layout, brand scale, navigation weight, active/hover states, CTA alignment, and language switcher styling.
- Unified header CTA and Home hero button styling into a calmer premium gold control system.
- Improved mobile header safety by keeping CTA/language inside the header control group instead of an absolute overlay.
- Refined Home-facing visual cohesion through shared gold/button/header treatment without changing B-2/B-3/B-4 Home structure.
- GSAP was preserved and no new dependencies were added in B-4.1.

Home B-4.1B: Browser-verified Header / Logo / Nav / Button Polish has been implemented as a focused base-UI refinement pass.

- Adjusted the Home header grid so brand, navigation, and controls have calmer desktop proportions.
- Tightened Home header CTA width/gap to avoid cramped right controls while keeping the button compact.
- Matched Home hero button radius more closely to the header CTA system.
- Improved mobile header safety by preventing the CTA from behaving like an absolute overlay.
- No Home section structure, contact/backend logic, routing, package file, or dependency change was made in B-4.1B.
- Local dev server responded at `http://127.0.0.1:5173/`, but browser automation was not exposed in this environment, so manual browser width checks were not performed by Codex.

Home B-4.2A: Logo Mark Final Refinement has been implemented based on user screenshot feedback.

- Reduced the app-icon feeling by replacing the rounded-square mark with a thin circular legal seal frame.
- Made the CR monogram the primary visual object with a larger serif letterform.
- Kept the brand lockup compact by slightly reducing Home mark size and brand gap.
- Preserved Header, Home sections, GSAP, routing, package files, and all non-logo behavior.
- Browser visual pass was not performed by Codex because browser automation is not exposed in this environment.

Contacts C-1: Premium Static Contact Visual has been implemented as a focused conversion-page slice.

- Replaced the Leaflet-first visual area on `/contacts` with an existing Lady Justice image composition.
- Kept `ContactForm`, mock submit behavior, routing, backend/contact logic, package files, and Leaflet dependency unchanged.
- Added restrained gold arc/line accents so the contact visual matches the premium legal mockup direction.
- Added mobile-safe positioning for the contact visual accents.
- Leaflet cleanup remains a later dependency cleanup task because this slice intentionally avoids package changes.

Contacts C-2: Leaflet cleanup has been implemented after the contact visual replacement.

- Removed the unused `Map` component.
- Removed unused Leaflet/map CSS and marker popup styles.
- Removed `leaflet` and `@types/leaflet` from project dependencies.
- Contacts keep the premium static Lady Justice visual and existing mock form flow.

Backend D-1: Safe contact delivery endpoint has been implemented.

- Added `api/contact.js` as a Vercel-compatible serverless endpoint for `POST /api/contact`.
- Client contact submit now posts to `/api/contact` instead of being mock-only.
- Telegram delivery uses server-only `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` inside the serverless function.
- Client code still does not reference `VITE_TELEGRAM_BOT_TOKEN` or call `api.telegram.org` directly.
- Local Vite development keeps a safe mock fallback when `/api/contact` is not available.
- `BACKEND_TODO.md` now records the implemented endpoint and the remaining Vercel env setup checklist.

Backend D-2: Contact endpoint behavior verification has been completed.

- Verified unsupported methods return `405 method_not_allowed`.
- Verified invalid payloads return `400 invalid_payload`.
- Verified missing Telegram env returns `500 telegram_not_configured`.
- Verified mocked Telegram success returns `200 {"ok":true}` and formats the Telegram message with name, phone, email, service, and message fields.
- No app UI, dependencies, env files, secrets, production settings, or deploy settings were changed in D-2.

Release Audit R-1: Production-readiness inspection has been completed.

- Inspected route metadata, base `index.html`, public assets, optimized image usage, and deployment-config presence.
- Verified Home, Contacts, and Practices use optimized WebP sources with original-image fallbacks where needed.
- Verified social/SEO metadata is generated per route in `src/App.tsx`.
- Did not add hosting rewrites or deploy config because deploy settings require explicit approval.
- Noted that SPA fallback behavior must be confirmed on the target host, especially for direct visits to `/about`, `/contacts`, and other client routes.

Preview QA R-2: Local production preview direct-route check has been completed.

- Started `npm run preview -- --port 4173` against the built `dist` output.
- Direct HTTP requests to `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you` returned `200`.
- In-browser preview checks confirmed each direct route hydrates, renders the React root, applies the correct route title, and shows no raw translation keys.
- Preview server was stopped after checks.

Production Payload R-3: Public asset cleanup has been completed.

- Moved per-page reference screenshots from `public/reference/` to `references/pages/` so they remain available for work but are not copied into production `dist`.
- Moved unused source/reference raster assets from `public/assets/` to `references/assets-source/`.
- Removed generated `public/.DS_Store` so it is not shipped.
- Updated `PROJECT_MAP.md`, local Home/content skills, and `.repomixignore` to use the new reference paths.
- Verified all referenced `/assets/...` files still exist in `public`.
- Production `dist` no longer contains `dist/reference/*` or `.DS_Store`; current `dist` size is about `7.8M`.

Runtime Assets R-4: Heavy fallback asset optimization has been completed.

- Switched Practices CTA and mission background from the large PNG document image to the existing optimized WebP.
- Switched the Home quote panel CSS to use the existing optimized WebP only.
- Moved unused heavy PNG fallbacks `document-pen-original.png` and `dark-quote-panel.png` from `public` to `references/assets-source/original/`.
- Verified all referenced `/assets/...` files still exist.
- Production `dist` is now about `3.7M`, down from about `7.8M` after R-3.
- Preview QA for `/` and `/practices` found no broken images, no horizontal overflow, and no raw translation keys.

Copy QA-1: Ukrainian copy typo cleanup has been implemented.

- Fixed `/contacts` SEO/meta description typo: `юридичную` -> `юридичну`.
- Fixed UA Practices CTA typo: `ситуацию` -> `ситуацію`.
- No routing, visual layout, backend/contact logic, package files, or dependencies were changed in this copy QA slice.

Practices P-1: Practice rows dossier polish has been implemented.

- Added compact `PRACTICE / CASE 01-08` metadata to Practices page rows.
- Replaced English `Discuss:` aria labels with localized CTA labels.
- Added restrained case-file hover depth for practice rows and icons.
- Kept existing Practices content, routing to `/contacts?service=...`, dependencies, and page structure.

About A-1: Trust/evidence visual polish has been implemented.

- Added restrained photo depth and grayscale-to-warm hover treatment for the team visual.
- Added premium hover states for About value icons without changing content.
- Refined stat emphasis and mission gold-rule treatment.
- Kept About page structure, copy, routes, dependencies, and assets unchanged.

Experience E-1: Evidence timeline polish has been implemented.

- Added compact `EVIDENCE FILE / CASE 01-05` metadata to timeline cards.
- Added localized role/value micro-labels while preserving existing case text.
- Strengthened the timeline rail with restrained gold nodes and legal-document card depth.
- Improved desktop hover and mobile timeline spacing without changing routes, facts, or dependencies.

Process PR-1: Strategic route dossier polish has been implemented.

- Added compact `STRATEGY ROUTE / STEP 01-04` metadata to process step cards.
- Strengthened the four-step route with legal-document panels, restrained gold connector line, and premium hover states.
- Refined the dark process key block with editorial gold rule and inner document frame.
- Preserved existing process text, icons, route structure, dependencies, and page routing.

Thank-you TY-1: Premium request-confirmation polish has been implemented.

- Added a compact request status capsule with localized accepted-state text.
- Replaced the background CR mark with a restrained legal seal mark.
- Refined the success panel into a premium paper/legal-document confirmation surface.
- Unified the thank-you action button radius and gold treatment with the broader button system.
- Preserved routing, translated title/lead/button copy, dependencies, and submit flow.

Final QA-1: Route/build/security smoke pass has been completed.

- Production build passes.
- Temporary Vite dev server was started on `http://127.0.0.1:5175/` because 5173 and 5174 were occupied.
- HTTP smoke check returned `200` for `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you`.
- Translation key coverage check found 76 `t("...")` usages and 0 missing keys.
- No client-side Telegram token/API, Leaflet, or forbidden animation library usage was found in `src`/`package.json`.
- Browser visual automation still was not available; route smoke was HTTP-only, not screenshot-based.

Home QA-2: Headless Chrome screenshot acceptance fixes have been implemented.

- Captured Home desktop screenshot at 1440px and mobile screenshot at 390px through local headless Chrome.
- Fixed Home practice cards and quote block appearing hidden in long desktop capture by removing duplicate reveal hiding from GSAP-targeted elements.
- Fixed mobile header overflow by disabling the duplicate header CTA on mobile; the primary hero CTA remains visible.
- Fixed mobile Values/Strategy sections to stack cleanly instead of clipping horizontally.
- Rechecked Home desktop screenshot: all four case-file cards and verdict quote block are visible.
- Rechecked Home mobile screenshot: header no longer clips, Values stack vertically, and no obvious horizontal overflow is visible in the captured viewport.

Contacts QA-2: Headless Chrome screenshot acceptance fixes have been implemented.

- Captured Contacts desktop screenshot at 1440px and mobile screenshot at 390px through local headless Chrome.
- Desktop Contacts composition is acceptable: contact info remains left, premium Lady Justice/form visual remains right.
- Fixed mobile Contacts header clipping by hiding the compact/light header CTA at small widths.
- Fixed mobile office address overflow by wrapping the office address across two lines and allowing contact-line text to break safely.
- Fixed mobile footer CTA overflow by hiding the footer CTA at small widths.
- Rechecked Contacts mobile screenshot: header, office address, form card, and footer no longer show obvious horizontal clipping.

Final QA-2: Browser responsive route QA has been completed.

- Checked `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you` at desktop 1440px, tablet 1024px, and mobile 390px in the in-app browser.
- Verified no horizontal overflow and no visible raw translation keys across checked routes and widths.
- Verified header navigation to `/contacts` and UA/RU language switch behavior.
- Verified contact form validation error appears on empty submit.
- Verified mock contact submit navigates to `/thank-you` after required fields and consent are filled.
- Applied safe mobile QA fixes for Experience, Process, and Thank-you decorative/layout overflow candidates.

Visual QA-3: Final screenshot review polish has been completed.

- Captured current screenshots for all routes at desktop 1440px and mobile 390px.
- Reviewed Home and Contacts desktop compositions plus mobile About, Practices, Experience, and Process flows.
- Fixed compact inner-page header spacing where active `/contacts` navigation visually collided with the language switcher.
- Verified the fixed Contacts desktop header: active Contacts nav, language switcher, and CTA no longer overlap.
- Kept the existing concept, content, routing, GSAP motion layer, and dependency set unchanged.

Motion QA-4: Scroll reveal acceptance has been completed.

- Checked all routes on mobile 390px with real page scrolling from top to bottom.
- Verified `.reveal` elements are not left hidden after scroll on `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you`.
- Verified no horizontal overflow and no raw translation keys during the scroll acceptance pass.
- Verified each checked route still reaches a footer/bottom state cleanly.
- No code changes were required for Motion QA-4.

Contact Submit Guard D-3: Static preview false-success protection has been implemented.

- Hardened `sendContactForm` so submit success requires an HTTP OK response with `application/json` and payload `{ "ok": true }`.
- Kept local Vite development mock fallback only for dev-mode fetch failures or `/api/contact` 404.
- Verified local production preview `/api/contact` returns `404`, so static preview HTML/404 responses are not treated as successful contact delivery.
- `npm run build` passed after this guard change.
- No env files, secrets, production settings, package files, or dependencies were changed.

Backend D-4: Telegram network failure guard has been implemented.

- Wrapped the server-side Telegram `fetch` call in `api/contact.js` so network failures return controlled JSON.
- Verified a mocked Telegram network failure returns `502 {"ok":false,"error":"telegram_unreachable"}`.
- Existing non-OK Telegram responses still return `502 {"ok":false,"error":"telegram_failed"}`.
- `node --check api/contact.js` passed.
- `npm run build` passed after this endpoint guard.
- No client code, env files, secrets, production settings, package files, or dependencies were changed.

Preview QA R-5: Post-guard production preview smoke has been completed.

- Started `npm run preview -- --port 4173` against the current built `dist`.
- Verified `200 OK` for `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you` with `curl -I`.
- Stopped the local preview server after the route smoke.

Docs QA-1: Project map and local skill state have been synchronized.

- Updated `PROJECT_MAP.md` to remove stale Leaflet/`Map.tsx` references.
- Updated the repo-local `conversion-flow-polish` skill so future Contacts work does not reintroduce a map-first composition.
- Verified `PROJECT_MAP.md`, `.agents/skills`, and `BACKEND_TODO.md` no longer contain stale map-first Contacts guidance.
- `npm run build` passed after this documentation cleanup.

Release QA-6: Runtime asset and form quality audit has been completed.

- Verified every `/assets/...` runtime reference found in `src` and `index.html` exists under `public/`.
- Cleaned up a minor formatting issue in `ContactForm.tsx` around the exported service options.
- `npm run build` passed after this audit.

Release QA-7: Header accessibility and dev console cleanup has been completed.

- Localized Header brand/nav/language-switcher aria labels instead of keeping hardcoded mixed-language labels.
- Removed the dev mock contact-form `console.info` so form payload details are not printed to the browser console.
- Verified no `console.*`, `debugger`, or `alert(...)` usage remains in `src` or `api`.
- `npm run build` passed after this cleanup.

Release QA-8: Localized route metadata has been implemented.

- Route `<title>`, meta description, OpenGraph title/description, and Twitter title/description now use UA or RU copy based on the active language.
- `document.documentElement.lang` now switches between `uk` and `ru` with the language state.
- Removed the remaining Ukrainian-only route metadata limitation from `src/App.tsx`.
- `npm run build` passed after this metadata update.
- Runtime DOM verification through Playwright was not performed because Playwright is not installed in this project and no dependency was added.

Release QA-9: Language storage hardening has been implemented.

- Added validation for the saved `court_rider_lang` value before using it as app language state.
- Wrapped language `localStorage` read/write in safe fallbacks so language switching does not crash if storage is unavailable.
- Invalid or unavailable saved language state now falls back to `UA`.
- `npm run build` passed after this hardening.

Backend D-5: Contact endpoint body parsing hardening has been implemented.

- Added a safe request-body parser in `api/contact.js` so serverless runtimes that pass JSON body as a string are supported.
- Verified valid JSON string body returns `200 {"ok":true}` with mocked Telegram success.
- Verified invalid JSON string body returns `400 {"ok":false,"error":"invalid_payload"}`.
- `node --check api/contact.js` passed.
- `npm run build` passed after this endpoint hardening.
- No client code, env files, secrets, production settings, package files, or dependencies were changed in this backend slice.

Final QA-3: Fresh release smoke after Backend D-5 has been completed.

- `npm run build` passed after the contact endpoint body parser hardening.
- `node --check api/contact.js` passed.
- Client/security grep over `src` and `package.json` found no `VITE_TELEGRAM_BOT_TOKEN`, direct `api.telegram.org`, Leaflet, forbidden animation libraries, `console.*`, `debugger`, or `alert(...)` usage.
- Translation key coverage script found 77 `t("...")` usages, 85 known keys, and 0 missing keys.
- Production preview route smoke returned `200 OK` for `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you`.
- Preview server was stopped after the smoke check.
- No env files, secrets, production settings, package files, dependencies, `dist`, or `node_modules` were changed in this QA slice.

Backend QA-6: Contact endpoint verification script has been added.

- Added `scripts/verify-contact-endpoint.mjs` as a no-dependency repeatable endpoint smoke test.
- The script verifies non-POST, invalid payload, invalid JSON string payload, missing Telegram env, Telegram network failure, Telegram non-OK failure, valid JSON string payload, and Telegram message formatting.
- `node scripts/verify-contact-endpoint.mjs` passed.
- `npm run build` passed after adding the QA script.
- `PROJECT_MAP.md` now documents the QA utility.
- No app UI, env files, secrets, production settings, package files, dependencies, `dist`, or `node_modules` were changed in this QA slice.

Release QA-7: Package release check scripts have been added.

- Added `npm run verify:contact` as a shortcut for the contact endpoint behavior checks.
- Added `npm run release:check` to run the production build and contact endpoint behavior checks together.
- `npm run release:check` passed.
- `PROJECT_MAP.md` now documents both QA commands.
- No dependencies, env files, secrets, production settings, `dist`, or `node_modules` were changed in this QA slice.

Release QA-8: Translation and security release checks have been added.

- Added `scripts/verify-translations.mjs` and `npm run verify:translations` for static translation-key coverage.
- Added `scripts/verify-security.mjs` and `npm run verify:security` for client-side Telegram token/API checks, removed Leaflet usage, forbidden animation libraries, and debug output.
- Expanded `npm run release:check` to run build, contact endpoint checks, translation checks, and security/static blocker checks.
- `npm run release:check` passed with all checks enabled.
- `PROJECT_MAP.md` now documents the expanded release QA utility set.
- No dependencies, env files, secrets, production settings, `dist`, or `node_modules` were changed in this QA slice.

Release QA-9: Runtime asset and production payload release checks have been added.

- Added `scripts/verify-assets.mjs` and `npm run verify:assets` for runtime `/assets/...` reference checks and production payload exclusion checks.
- Expanded `npm run release:check` to include the asset/payload verification after build, contact, translation, and security checks.
- `npm run release:check` passed with 17 runtime asset references verified.
- Production payload exclusions passed for `dist/reference`, `dist/.DS_Store`, `dist/assets/original/document-pen-original.png`, and `dist/assets/original/dark-quote-panel.png`.
- `PROJECT_MAP.md` now documents the asset/payload QA command.
- No dependencies, env files, secrets, production settings, or `node_modules` were changed in this QA slice.

Release Handoff-1: Deploy checklist has been documented.

- Added `RELEASE_CHECKLIST.md` with the local pre-deploy gate, required server-only Telegram env vars, deployed route fallback checks, live contact-form test, and final visual acceptance steps.
- `PROJECT_MAP.md` now points to the release checklist.
- No env files, secrets, production settings, dependencies, `dist`, or `node_modules` were changed in this handoff documentation slice.

Release QA-10: Optional production preview route check has been added.

- Added `scripts/verify-preview-routes.mjs` and `npm run verify:routes` for environments that can bind a local preview port.
- The route check starts Vite preview and verifies `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you` return `200`.
- `npm run verify:routes` is not included in `npm run release:check` because this sandbox returned `listen EPERM` when a Node child process tried to bind `127.0.0.1:4173`.
- `RELEASE_CHECKLIST.md` documents `npm run verify:routes` as an optional local preview check before deployed route checks.
- `npm run release:check` remains the stable no-port-binding pre-deploy gate.

Release QA-11: Deployed route fallback checker has been added.

- Added `scripts/verify-deployed-routes.mjs` and `npm run verify:deployed-routes -- https://preview-url`.
- The deployed checker verifies `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you` return successful HTML with the app root.
- `RELEASE_CHECKLIST.md` now documents the deployed route command.
- `node --check scripts/verify-deployed-routes.mjs` passed.
- `npm run release:check` passed after adding the deployed route checker.
- No env files, secrets, production settings, dependencies, `dist`, or `node_modules` were changed in this QA slice.

Release QA-12: Deployed contact endpoint guard checker has been added.

- Added `scripts/verify-deployed-contact.mjs` and `npm run verify:deployed-contact -- https://preview-url`.
- The deployed contact checker verifies `/api/contact` returns JSON `405 method_not_allowed` for GET and JSON `400 invalid_payload` for an empty POST.
- The deployed contact checker does not send Telegram messages and does not require env vars.
- `RELEASE_CHECKLIST.md` now documents the deployed contact endpoint guard command before the live Telegram submit test.
- `node --check scripts/verify-deployed-contact.mjs` passed.
- `npm run release:check` passed after adding the deployed contact checker.
- No env files, secrets, production settings, dependencies, `dist`, or `node_modules` were changed in this QA slice.

Release QA-13: Deployed live contact submit checker has been added.

- Added `scripts/verify-deployed-contact-live.mjs` and `npm run verify:deployed-contact-live -- https://preview-url`.
- The live checker sends a clearly labeled QA request to deployed `/api/contact` and expects JSON `{ "ok": true }`.
- The live checker is intentionally not part of `npm run release:check` because it sends a Telegram message and requires configured production env vars.
- `RELEASE_CHECKLIST.md` now documents the live submit command after the manual contact-form test steps.
- `node --check scripts/verify-deployed-contact-live.mjs` passed.
- `npm run release:check` passed after adding the live submit checker.
- No env files, secrets, production settings, dependencies, `dist`, or `node_modules` were changed in this QA slice.

Release QA-14: Combined deployed preview checker has been added.

- Added `scripts/verify-deployed-preview.mjs` and `npm run verify:deployed -- https://preview-url`.
- The combined checker verifies deployed direct routes and safe `/api/contact` method/payload guards without sending Telegram messages.
- `RELEASE_CHECKLIST.md` now documents the combined deployed preview command.
- `node --check scripts/verify-deployed-preview.mjs` passed.
- `npm run release:check` passed after adding the combined deployed preview checker.
- No env files, secrets, production settings, dependencies, `dist`, or `node_modules` were changed in this QA slice.

Release QA-15: Reference-file release check has been added.

- Added `scripts/verify-references.mjs` and `npm run verify:references`.
- Expanded `npm run release:check` to verify `references/mockup.jpg` and all page reference screenshots needed for final visual acceptance.
- `npm run release:check` passed with 8 reference files verified.
- `RELEASE_CHECKLIST.md` now names recommended visual acceptance widths: desktop `1440px`, tablet `1024px`, and mobile `390px`.
- No env files, secrets, production settings, dependencies, `dist`, or `node_modules` were changed in this QA slice.

## Latest Checks

- Home Command Polish-1: Refero-informed Home polish has been implemented as a controlled Home-only pass.
  - Strengthened the Home hero as the single command-center wow moment with darker dossier staging, subtle grid linework, calmer gold/steel ambient glow, and slower existing GSAP hero depth.
  - Refined Home feature strip, strategy route, practices, and quote band so the section sequence reads as one legal strategy flow.
  - Converted the Home strategy route into a restrained charcoal command rail while preserving the position -> strategy -> action -> result content.
  - Tightened Home CTA and practice-card surface treatment without changing routing, translations, contact logic, or assets.
  - No dependencies, backend files, env files, production settings, or non-Home page components were changed.
- Home Command Polish-1 QA: `npm run build` and `npm run release:check` passed on 2026-06-01.
  - Production preview ran at `http://127.0.0.1:4174/` because `4173` was already occupied.
  - Headless Chrome screenshots were captured for Home at desktop `1440px`, tablet `1024px`, and mobile `390px`.
  - Browser DOM checks found no horizontal overflow at `1440px`, `1024px`, or `390px`.
  - Hero, feature strip, strategy route, practices, and quote band were visible in the browser DOM checks.
  - Home CTA still links to `/contacts`; the first practice card still links to `/contacts?service=...`.

- `npm run release:check`: passed on 2026-05-28 after adding reference-file checks.
- `npm run verify:references`: passed on 2026-05-28 as part of `npm run release:check`; 8 reference files verified.
- `node --check scripts/verify-deployed-preview.mjs`: passed.
- `node --check scripts/verify-deployed-contact-live.mjs`: passed.
- `node --check scripts/verify-deployed-contact.mjs`: passed.
- `node --check scripts/verify-deployed-routes.mjs`: passed.
- `npm run build`: passed on 2026-05-28 as part of `npm run release:check`.
- `npm run verify:contact`: passed on 2026-05-28 as part of `npm run release:check`.
- `npm run verify:translations`: passed on 2026-05-28 as part of `npm run release:check`; 77 used keys, 85 known keys, 0 missing.
- `npm run verify:security`: passed on 2026-05-28 as part of `npm run release:check`.
- `npm run verify:assets`: passed on 2026-05-28 as part of `npm run release:check`; 17 runtime asset references verified and production payload exclusions passed.
- `node scripts/verify-contact-endpoint.mjs`: passed.
- `node --check api/contact.js`: passed.
- Fresh production preview route smoke returned `200 OK` for `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you`.
- Fresh client/security grep over `src` and `package.json`: no client-side Telegram token/API usage, no Leaflet, no forbidden animation libraries, no `console.*`, no `debugger`, and no `alert(...)`.
- Fresh translation key coverage script: 77 `t("...")` usages, 85 known keys, 0 missing keys.
- Contact endpoint JSON string-body test returned `200 {"ok":true}` with mocked Telegram success.
- Contact endpoint invalid JSON string-body test returned `400 {"ok":false,"error":"invalid_payload"}`.
- Mocked Telegram network failure test returned `502 {"ok":false,"error":"telegram_unreachable"}`.
- Post-guard production preview route smoke returned `200 OK` for `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you`.
- Local serverless handler simulation without env returned `500 {"ok":false,"error":"telegram_not_configured"}` as expected.
- Serverless handler behavior tests: `405` for non-POST, `400` for invalid payload, `500` for missing env, and `200` with mocked Telegram success.
- Route HTTP smoke via temporary dev server: `200` for `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you`.
- Browser responsive route QA: `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you` checked at 1440px, 1024px, and 390px.
- Horizontal overflow QA: no `scrollWidth > clientWidth` on all checked routes and widths after fixes.
- Visual screenshot QA: all routes captured at desktop 1440px and mobile 390px; Contacts desktop header overlap fixed and rechecked.
- Motion scroll QA: all routes checked at mobile 390px with full top-to-bottom scrolling; no hidden `.reveal` elements remained after scroll.
- Header navigation QA: header Contacts link navigates to `/contacts`.
- Language switch QA: RU switch changes Home copy to Russian; browser was restored to UA after the check.
- Contact form QA: empty submit shows validation; valid mock submit navigates to `/thank-you`.
- Headless Chrome Home screenshot QA: desktop `1440x1800` and mobile `390x1600` captured after fixes.
- Headless Chrome Contacts screenshot QA: desktop `1440x1800` and mobile `390x1600` captured after fixes.
- Translation key coverage script: 76 `t("...")` usages, 85 known keys, 0 missing keys.
- `rg "Право\\. Стратегія\\. Результат\\." src/pages/HomePage.tsx`: no matches.
- `rg "Discuss strategy" src`: no matches.
- `rg "card\\.text|card\\.icon|PRACTICE FILE|CASE" src/pages/HomePage.tsx`: matches found for all required Home B-2 markers.
- `rg "home-strategy-route|strategy-route-step|strategy-route-label" src/pages/HomePage.tsx src/styles/pages.css`: matches found.
- `rg "\"gsap\"" package.json`: `gsap` dependency exists.
- `rg "ScrollTrigger|gsap\\.context|gsap\\.fromTo|prefers-reduced-motion|matchMedia" src/pages/HomePage.tsx`: matches found.
- `rg "BrandMark|brand-mark|brand-mark-main|brand-mark-accent" src/components/BrandLogo.tsx src/styles/components.css`: matches found.
- `rg "<img|base64|Attorney partnership" src/components/BrandLogo.tsx`: no matches.
- `rg "юридичную" src/App.tsx src/context/LanguageContext.tsx`: no matches.
- UA `contacts.office.address` now uses an intentional line break on mobile-safe office address text.
- `rg "leaflet|Leaflet|contacts-map-wrapper|leaflet-map-element|custom-map-marker|marker-pulse" src package.json package-lock.json`: no matches.
- `rg "Discuss:" src/pages/PracticesPage.tsx`: no matches.
- `rg "practice-row-meta|CASE" src/pages/PracticesPage.tsx src/styles/pages.css`: matches found.
- `rg "team-photo-wrap:hover|mission::before|value:hover" src/styles/pages.css`: matches found.
- `rg "timeline-card-meta|timeline-card-grid|EVIDENCE FILE|CASE" src/components/Timeline.tsx src/styles/components.css`: matches found.
- `rg "process-step-meta|STRATEGY ROUTE|STEP" src/components/ProcessSteps.tsx src/styles/components.css`: matches found.
- `rg "thank-status|SealMark|LEGAL REQUEST|Запит прийнято|Запрос принят" src/pages/ThankYouPage.tsx src/styles/pages.css`: matches found.
- `rg "framer-motion|three|jquery|velocity" package.json src`: no forbidden animation library/import usage found.
- `rg "VITE_TELEGRAM_BOT_TOKEN|api\\.telegram\\.org|leaflet|Leaflet|framer-motion|three|jquery|velocity" src package.json`: no matches.
- `rg "Map\\.tsx|Leaflet map|interactive map|Backend contact delivery is not implemented|safe mock submit only|leaflet on the contacts|components/Map|Map must not dominate" PROJECT_MAP.md .agents/skills BACKEND_TODO.md`: no matches.
- Runtime asset existence check over `/assets/...` references in `src` and `index.html`: no missing files.
- `rg "console\\.|debugger|alert\\(" src api`: no matches.
- Header hardcoded mixed-language aria-label checks: no matches.
- `rg "routeMeta\\[language\\]|document\\.documentElement\\.lang|applyRouteMeta\\(location\\.route, language\\)|useLanguage\\(\\)" src/App.tsx`: matches found for localized metadata wiring.
- `rg "as Language|LANGUAGE_STORAGE_KEY|isLanguage|getInitialLanguage|localStorage" src/context/LanguageContext.tsx`: no unsafe language cast remains; storage guard wiring is present.
- `rg "TELEGRAM_BOT_TOKEN|TELEGRAM_CHAT_ID|api\\.telegram\\.org|/api/contact|mock submit" api src BACKEND_TODO.md`: server-only Telegram env/API usage is present only in `api/contact.js` and documentation; client only posts to `/api/contact`.
- Local production preview `/api/contact` POST without a serverless runtime returned `404`; the client now requires JSON `{ "ok": true }`, so this cannot produce a false successful submit outside dev mock mode.
- Release asset/metadata audit: optimized WebP assets are used for primary Home/Contacts/Practices visuals; route metadata is generated in `src/App.tsx`.
- Local production preview direct-route QA: `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you` returned `200`; browser hydration applied correct route titles and no raw translation keys.
- Production payload cleanup: `dist/reference/*`, `dist/.DS_Store`, `dist/assets/original/document-pen-original.png`, and `dist/assets/original/dark-quote-panel.png` are absent; all referenced `/assets/...` files still exist in `public`; `dist` is about `3.7M`.
- Runtime asset preview QA: `/` and `/practices` checked in local production preview with no broken images, no horizontal overflow, and no raw translation keys.
- Active-goal continuation QA: `npm run release:check` passed again on 2026-05-28; build, contact endpoint behavior, translation coverage, security checks, runtime asset checks, and reference file checks all passed.
- Visual rescue pass after user rejection on 2026-05-28: widened the desktop framed layout, strengthened Home hero scale/depth, gave values/strategy/practice sections more premium spacing, enlarged case-file cards and verdict quote block, and corrected GSAP reveal opacity so motion reads as an actual cinematic layer.
- Visual rescue build: `npm run build` passed on 2026-05-28; fresh preview started at `http://127.0.0.1:4174/` because `4173` was unavailable.
- Visual rescue route spot-check: `/`, `/about`, and `/contacts` returned `200 OK` on the fresh preview.
- Visual rescue follow-up: fixed ScrollTrigger immediate render hiding for route steps, case cards, and verdict elements so below-fold content stays visible before scroll-trigger animation starts.
- Visual rescue follow-up: tightened Home vertical rhythm after the widened frame so the verdict block appears in the desktop 1440x1800 composition.
- Visual rescue screenshot QA: captured Home desktop `1440x1800` and mobile `390x1600` from `http://127.0.0.1:4175/`; desktop now shows hero, values, strategy route, case cards, and verdict block in one coherent premium flow, and mobile no longer shows a blank strategy route strip.
- Visual rescue follow-up build: `npm run build` passed on 2026-05-28.
- Home card visual-diff fix after user feedback on 2026-05-28: Home practice cards now use clean photo assets with controlled HTML title/arrow overlay instead of precomposed WebP card images with embedded text, removing crooked/clipped card content.
- Home card responsive fix: mobile practice cards now use constrained grid columns and clean overlay content, preventing the previous right-edge clipping of titles/arrows.
- Home card screenshot QA: captured desktop `1440x1900` and mobile `390x3600` from fresh preview `http://127.0.0.1:4184/`; cards render as a uniform four-card row on desktop and stacked non-clipped cards on mobile.
- Home card build: `npm run build` passed on 2026-05-28 after the card content fix.
- Preview visibility fix: restarted production preview on `http://127.0.0.1:4173/` after freeing the stale listener so the already-open in-app browser URL shows the fresh Home card build.
- Preview visibility check: `curl -I http://127.0.0.1:4173/` returned `200 OK`; desktop `1440x1900` screenshot from `4173` confirms the fixed Home cards are visible on the current browser port.
- Home card crop correction after user feedback: restored the vertical precomposed WebP practice-card assets and removed the clean-landscape JPG card rendering that cropped images inside narrow card containers.
- Home card crop QA: rebuilt and restarted preview on `http://127.0.0.1:4173/`; desktop `1440x2100` and mobile `390x4200` screenshots confirm the card images are no longer CSS-cropped and mobile cards fit within the viewport with visible embedded arrows.
- Home card crop build: `npm run build` passed on 2026-05-28 after the uncropped-card fix.
- Post-card-fix release QA: `npm run release:check` passed on 2026-05-28 after the latest Home card source/aspect-ratio correction.
- Post-card-fix route smoke: current `http://127.0.0.1:4173/` preview returned `200` for `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you`.
- Deploy config audit: no `vercel.json`, `netlify.toml`, `_redirects`, or `wrangler.toml` is currently present. This was not changed because deploy/production settings require explicit approval.
- Deploy readiness audit: `api/contact.js` is present for Vercel-style serverless contact delivery, but production still requires server-only `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` plus deployed direct-route checks.
- Handoff audit: `package.json` contains deployed preview verification scripts for routes, safe contact endpoint guards, combined deployed QA, and live Telegram contact submit; current local `dist` contains the built Vite entry assets and `index.html`.
- Browser DOM QA after final Home card crop fix: checked `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you` at desktop `1440`, tablet `1024`, and mobile `390` through local Chrome DevTools against `http://127.0.0.1:4173/`; no horizontal overflow and no visible raw translation keys were found.
- Contact form production-preview QA: checked `/contacts` through local Chrome DevTools against `http://127.0.0.1:4173/`; empty submit stays on `/contacts` and shows validation, valid submit without serverless `/api/contact` stays on `/contacts`, does not navigate to `/thank-you`, and shows an error state.
- Browser image QA: checked all routes at desktop `1440` and mobile `390` through local Chrome DevTools against `http://127.0.0.1:4173/`; all visible `<img>` elements completed with non-zero natural dimensions and no tiny/broken visible images were found.
- Browser runtime QA: checked `/`, `/about`, `/practices`, `/experience`, `/process`, `/contacts`, and `/thank-you` in mobile Chrome DevTools against `http://127.0.0.1:4173/`; all routes rendered text content and no app console/runtime errors were captured.
- Production artifact audit: current `dist` is about `3.5M` and contains built JS/CSS plus required runtime assets under `dist/assets/cards`, `dist/assets/optimized`, `dist/assets/original/home-hero-bg.png`, and `dist/assets/reference-derived/about-team-reference.jpg`; reference source folders are not part of the production payload.
- `git diff -- package.json package-lock.json`: only existing B-4 `gsap` dependency changes; B-4.2A added no package changes.
- `git diff -- dist node_modules`: no diff.
- Temporary dev server for Final QA-2 used `http://127.0.0.1:5173/`.
- Browser visual/DOM pass: available and completed through the in-app browser for responsive route QA.
- Original logo patch on 2026-05-31: replaced the generated SVG header/footer brand mark with the supplied original CR Attorney partnership logo asset at `public/assets/brand/cr-logo-original.png`.
- Original logo responsive QA: `npm run build` passed; current `http://127.0.0.1:4173/` in-app browser was reloaded and showed the original logo in the Home header with no nav overlap at the visible tablet-width preview.
- Original logo check limitation: standalone Playwright script could not run because `playwright` is not installed in this project; browser verification used the in-app browser instead.
- Home practice asset correction on 2026-06-02: removed the precomposed WebP practice-card sources from the Home cards and kept the blank local legal JPG backgrounds from `public/assets/cards`, so live page text/buttons no longer sit on top of baked-in card text/buttons.
- Home practice asset QA: `npm run build`, `npm run verify:translations`, `npm run verify:security`, and `npm run verify:assets` passed; preview restarted at `http://127.0.0.1:4173/`; desktop `1440` and mobile `390` checks found no horizontal overflow and all four practice cards load from `/assets/cards/*`.
- Home fullscreen desktop finish on 2026-06-02: connected Stitch MCP for reference lookup, used the Stitch Home desktop screen as visual direction, replaced the pasted black logo thumbnail with a transparent gold CR lockup, removed the remaining duplicate practice-card overlay path, and tuned Home desktop hero/features/practice/quote proportions into full-width sections.
- Home fullscreen QA on 2026-06-02: `npm run build`, `npm run verify:translations`, `npm run verify:security`, and `npm run verify:assets` passed; production preview is running at `http://127.0.0.1:4173/`; headless desktop `1440x1900` and mobile safety `390x1600` checks found no horizontal overflow, no console errors, no raw translation keys, and zero `.mockup-card-title` elements in Home practice cards.
- Stitch MCP config refresh on 2026-06-02: refreshed the local Stitch MCP block in Codex config, verified `codex mcp list` shows `stitch` enabled, and confirmed the current session can list project screens from Stitch.
- Home economical QA on 2026-06-02: checked `http://localhost:4173/` against the Stitch `Главная страница (Desktop Full)` reference; headless checks at `1440x1900`, `1366x1600`, and `390x1400` found no horizontal overflow, no console errors, no failed requests, no broken visible images, no raw translation keys, and no duplicate baked overlay DOM nodes on practice cards.
- Home typography/button premium pass on 2026-06-02: refined global text rendering, removed negative hero heading tracking, strengthened hero/body readability, upgraded gold/header CTAs, dark secondary CTA, footer CTA, and language switcher into a more restrained premium legal control system; `npm run build`, `npm run verify:translations`, `npm run verify:security`, and `npm run verify:assets` passed; desktop `1440`, desktop `1366`, and mobile `390` checks found no horizontal overflow, no raw translation keys, and no console errors.
- Home button visual-diff fix on 2026-06-02: reduced the over-glossy/degraded CTA styling by removing shine overlays and strong multi-stop gradients, replacing them with restrained two-tone gold controls and quieter dark secondary buttons; `npm run build` and `npm run verify:assets` passed; desktop `1440` check found no horizontal overflow, no raw translation keys, and no console errors.
- Premium Legal Button System slice on 2026-06-02: normalized the site CTA system toward restrained legal ghost controls with muted-gold borders, slow left-to-right CSS fill, focus-visible styling, route-line inline links, quieter card-arrow route motion, and contact submit disabled handling; no dependencies, routing, contact logic, or page rewrites were changed; `npm run build`, `npm run verify:assets`, `npm run verify:translations`, and `npm run verify:security` passed; desktop `1440` and mobile `390` checks found no horizontal overflow, no raw translation keys, no duplicate baked overlays, and no console errors.
- Home feature-strip transition fix on 2026-06-03: removed the highlighted card-like background/border/shadow from the block immediately after the hero transition and made `.feature-strip` full viewport width; `npm run build`, `npm run verify:assets`, and `npm run verify:translations` passed; desktop `1440` check confirmed `.feature-strip` is `x=0`, `w=1440`, border `0`, shadow `none`, no horizontal overflow, no raw translation keys, and no console errors.

## Remaining Risks

- Home has headless Chrome screenshot coverage at desktop 1440 and mobile 390, but still needs human acceptance against the customer reference.
- Contacts now has headless Chrome screenshot coverage at desktop 1440 and mobile 390, but still needs human acceptance against the customer reference.
- Leaflet has been removed after the Contacts visual replacement.
- Final QA-2 covered all routes at desktop 1440, tablet 1024, and mobile 390 for overflow and raw translation keys, but customer-reference visual acceptance is still manual.
- Contact form delivery endpoint exists, but production still requires Vercel env variables `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` plus a deployed preview test.
- Local Vite preview handles direct-route fallback correctly, but the selected hosting provider must still be checked after deploy; adding hosting rewrite config was intentionally not done without deploy-setting approval.

## Acceptance Rules

Every visual patch must include:
- changed files
- what changed
- `npm run build` result
- browser visual pass at desktop and mobile widths
- hover checks where relevant
- no horizontal overflow check
- remaining risks
