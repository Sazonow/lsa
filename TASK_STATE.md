# TASK_STATE.md

## Current Mode
SCREENSHOT PROJECT FINISH MODE

## Current Mockup
- `references/mockup.jpg`

## Completed In This Step
- Root working rules documented in `AGENTS.md`.
- Project map documented in `PROJECT_MAP.md`.
- Visual tokens documented in `DESIGN_TOKENS.md`.
- Repomix exclusions documented in `.repomixignore`.
- Home page raw translation keys replaced with existing translation keys.
- Client-side Telegram Bot API call removed from `src/utils/contactService.ts`.
- Safe mock contact submit kept.
- Backend contact delivery plan documented in `BACKEND_TODO.md`.

## Pages And Sections
- Home: hero, feature strip, practice cards, quote band, footer.
- About: intro/team image, values, stats, mission.
- Practices: practice list, CTA band.
- Experience: timeline/case cards, quote panel.
- Process: process steps, dark key band.
- Contacts: contact info, Leaflet map, contact form.
- Thank-you: success page.

## Visual Differences
- Contacts page uses a Leaflet map, while the mockup shows a premium static visual/contact composition.
- Later it is better to replace the map with a premium static visual/contact block.
- This is not P0 now because build passes and Leaflet is already installed.
- Other visual polish should proceed page by page against the mockup.

## Logic And UX Issues
- Backend delivery for the contact form is not implemented after removing browser Telegram delivery.
- Contact form currently uses a mock submit and navigates to `/thank-you`.
- Responsive and visual QA still need Browser/Playwright checks.

## Checks
- `npm run build`: passed on 2026-05-21.
- `rg "home\\.hero\\.(desc|btn1|btn2)" src`: no matches.
- `rg "VITE_TELEGRAM_BOT_TOKEN|api.telegram.org" src`: no matches.

## Risks
- No real contact message delivery until backend/serverless endpoint is added.
- Leaflet increases JS/CSS weight and does not match the contacts mockup.
- Visual work can drift if multiple pages are changed at once.

## Next Step
- Start visual finishing with the Home page `/`, then move page by page through the mockup.
