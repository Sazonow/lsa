# PROJECT_MAP.md

## Stack
- Vite 7, React 19, TypeScript.
- Custom CSS via `src/styles.css` imports.
- Icons: `lucide-react`.
- Motion: `gsap` is used for the controlled Home motion layer.
- No React Router; routing is handled manually in `src/App.tsx` with `history.pushState`.

## Routes And Pages
- `/` -> `src/pages/HomePage.tsx`
- `/about` -> `src/pages/AboutPage.tsx`
- `/practices` -> `src/pages/PracticesPage.tsx`
- `/experience` -> `src/pages/ExperiencePage.tsx`
- `/process` -> `src/pages/ProcessPage.tsx`
- `/contacts` -> `src/pages/ContactsPage.tsx`
- `/thank-you` -> `src/pages/ThankYouPage.tsx`

## Layout Components
- `src/components/Header.tsx` handles brand, navigation, language switcher, and consultation CTA.
- `src/components/Footer.tsx` handles footer links and legal/disclaimer text.
- `src/components/LinkButton.tsx` wraps internal navigation.
- `src/components/BrandLogo.tsx` contains brand SVG marks and decorative signature/seal/key marks.

## UI Components
- `src/components/ContactForm.tsx` handles contact form state and submission.
- `src/components/Timeline.tsx` renders experience/case timeline content.
- `src/components/ProcessSteps.tsx` renders the process steps.

## QA Utilities
- `scripts/verify-contact-endpoint.mjs` runs no-dependency serverless contact endpoint behavior checks.
- `scripts/verify-translations.mjs` checks that all static `t("...")` translation keys used in TS/TSX files exist.
- `scripts/verify-security.mjs` checks for client-side Telegram token/API usage, removed Leaflet usage, forbidden animation libraries, and debug output.
- `scripts/verify-assets.mjs` checks runtime `/assets/...` references and production payload exclusions.
- `scripts/verify-references.mjs` checks that the client mockup and page reference screenshots are present for final visual acceptance.
- `scripts/verify-preview-routes.mjs` checks production preview direct-route responses when the environment can bind a local preview port.
- `scripts/verify-deployed-routes.mjs` checks deployed preview direct-route responses for a provided URL.
- `scripts/verify-deployed-contact.mjs` checks deployed `/api/contact` method and payload guards for a provided URL without sending Telegram messages.
- `scripts/verify-deployed-preview.mjs` combines deployed direct-route checks and safe `/api/contact` guard checks for a provided URL.
- `scripts/verify-deployed-contact-live.mjs` sends a clearly labeled QA request to deployed `/api/contact` after production env vars are configured.
- `npm run verify:contact` runs the contact endpoint behavior checks.
- `npm run verify:translations` runs translation key coverage checks.
- `npm run verify:security` runs security/static blocker checks.
- `npm run verify:assets` runs runtime asset and production payload checks.
- `npm run verify:references` runs reference-file presence checks.
- `npm run verify:routes` runs optional local production preview route checks.
- `npm run verify:deployed-routes -- https://preview-url` runs deployed route fallback checks.
- `npm run verify:deployed-contact -- https://preview-url` runs deployed contact endpoint guard checks.
- `npm run verify:deployed -- https://preview-url` runs combined deployed route and safe contact guard checks.
- `npm run verify:deployed-contact-live -- https://preview-url` runs deployed live contact delivery checks.
- `npm run release:check` runs the production build, contact endpoint checks, translation checks, security/static blocker checks, asset/payload checks, and reference-file checks.

## Styling System
- `src/styles/variables.css`: colors, radii, fonts, shadows.
- `src/styles/global.css`: base document styles, typography, reveal animations, view transitions.
- `src/styles/layout.css`: frame, header, navigation, footer, responsive layout.
- `src/styles/components.css`: buttons, brand SVGs, cards, form, smaller UI pieces.
- `src/styles/pages.css`: page-specific layout and responsive rules.

## Assets
- `references/mockup.jpg`: main visual mockup.
- `references/pages/*.png`: per-page reference images kept out of production `public/`.
- `references/assets-source/*`: retained source/reference raster assets kept out of production `public/`.
- `public/assets/original/*`: runtime original raster fallback assets.
- `public/assets/optimized/*`: optimized webp assets.
- `public/assets/cards/*`: practice card images.
- `public/assets/reference-derived/*`: runtime assets derived from references.
- `RELEASE_CHECKLIST.md`: local pre-deploy, hosting env, live form, route fallback, and visual acceptance checklist.

## Already Implemented
- Seven-page legal website matching the mockup structure.
- UA/RU language context and translations.
- Header, footer, hero, practice cards, values, stats, process, experience timeline, contacts, thank-you page.
- Responsive CSS for mobile and tablet breakpoints.
- Home controlled GSAP motion layer.
- Contacts premium static Lady Justice visual; Leaflet has been removed.
- Contact form posts to `/api/contact` with a local dev mock fallback.
- `api/contact.js` serverless endpoint sends contact requests to Telegram using server-only env vars.
- Serverless contact endpoint behavior is covered by `node scripts/verify-contact-endpoint.mjs`.

## Not Finished
- Customer visual acceptance against `references/mockup.jpg` is still manual.
- Production contact delivery still requires hosting env vars `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`.
- Deployed preview needs a live contact-form delivery test.
- Target hosting direct-route fallback should be checked after deploy.

## Do Not Touch Without Permission
- `.env`, `.env.*`, secrets, tokens, billing, production deploy settings.
- Dependency files and lock files unless dependency work is explicitly approved.
- Unrelated source files outside the current page/section/component.
