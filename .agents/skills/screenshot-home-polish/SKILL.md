---
name: screenshot-home-polish
description: Use to finish the Home page visually from screenshot references without Figma. Covers header, hero, feature strip, practice cards, quote band, and Home responsive spacing.
---

# Screenshot Home Polish

## Context
- No Figma.
- Reference is `references/pages/01_home.png` and/or `references/mockup.jpg`.
- Project is already partially implemented.
- Preserve current premium legal concept.
- The mockup is art direction, not pixel-perfect truth.
- Do not copy graphical mistakes from the mockup.

## Scope
Allowed areas:
- Header
- Hero
- Feature strip
- Practice cards
- Quote band
- Home responsive spacing

## Preferred files
- `src/pages/HomePage.tsx`
- `src/styles/pages.css`
- `src/styles/components.css`
- `src/styles/layout.css`
- `TASK_STATE.md`

## Rules
- Use Economy Direct Patch rules.
- Do not touch Contacts, About, Practices, Experience, Process, or Thank-you.
- Do not touch backend/contact service.
- Do not add dependencies.
- Do not rewrite all CSS.
- Keep black/gold premium legal style.
- Make UI compact, elegant, readable, and consistent.
- Run `npm run build` once.
- Update `TASK_STATE.md`.

## Output
Return only:
- changed files
- visual changes, max 6 bullets
- build result
- remaining risks
- next page
