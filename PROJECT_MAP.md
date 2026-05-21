# PROJECT_MAP.md

## Stack
- Vite 7, React 19, TypeScript.
- Custom CSS via `src/styles.css` imports.
- Icons: `lucide-react`.
- Map: `leaflet` on the contacts page.
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
- `src/components/Map.tsx` renders the Leaflet map on contacts.
- `src/components/Timeline.tsx` renders experience/case timeline content.
- `src/components/ProcessSteps.tsx` renders the process steps.

## Styling System
- `src/styles/variables.css`: colors, radii, fonts, shadows.
- `src/styles/global.css`: base document styles, typography, reveal animations, view transitions.
- `src/styles/layout.css`: frame, header, navigation, footer, responsive layout.
- `src/styles/components.css`: buttons, brand SVGs, cards, form, map, smaller UI pieces.
- `src/styles/pages.css`: page-specific layout and responsive rules.

## Assets
- `references/mockup.jpg`: main visual mockup.
- `public/reference/*.png`: per-page reference images.
- `public/assets/original/*`: original raster assets.
- `public/assets/optimized/*`: optimized webp assets.
- `public/assets/cards/*`: practice card images.
- `public/assets/reference-derived/*`: assets derived from references.

## Already Implemented
- Seven-page legal website matching the mockup structure.
- UA/RU language context and translations.
- Header, footer, hero, practice cards, values, stats, process, experience timeline, contacts, thank-you page.
- Responsive CSS for mobile and tablet breakpoints.
- Contact form with safe mock submit after P0 stabilization.

## Not Finished
- Visual alignment with `references/mockup.jpg` still needs page-by-page polish.
- Contacts page uses an interactive map while the mockup shows a premium static visual/photo composition.
- Some spacing, hierarchy, image crops, and responsive details need browser QA.
- Backend contact delivery is not implemented yet.

## Do Not Touch Without Permission
- `.env`, `.env.*`, secrets, tokens, billing, production deploy settings.
- Dependency files and lock files unless dependency work is explicitly approved.
- Unrelated source files outside the current page/section/component.
