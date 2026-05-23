---
name: content-pages-polish
description: Use to polish non-conversion content pages from screenshot references without Figma. Covers About, Practices, Experience, and Process pages in economical grouped passes.
---

# Content Pages Polish

## Scope
Allowed routes:
- `/about`
- `/practices`
- `/experience`
- `/process`

## Reference files
Use:
- `public/reference/02_about.png`
- `public/reference/03_practices.png`
- `public/reference/04_cases.png`
- `public/reference/05_process.png`
- fallback: `references/mockup.jpg`

## Target
- Preserve existing premium legal-office concept.
- Improve visual consistency with Home.
- Improve spacing, typography, cards, section rhythm, timeline/process layouts.
- Do not blindly copy blurry or broken mockup details.
- Keep pages production-ready and responsive.

## Preferred files
- corresponding `src/pages/*Page.tsx`
- `src/components/Timeline.tsx`
- `src/components/ProcessSteps.tsx`
- `src/styles/pages.css`
- `src/styles/components.css`
- `src/styles/layout.css`
- `TASK_STATE.md`

## Rules
- Use Economy Direct Patch rules.
- Polish pages in one grouped pass if safe.
- Do not touch Contacts/Thank-you unless explicitly requested.
- No dependencies.
- No content rewrite unless needed for obvious UX/translation issues.
- Run `npm run build` once.
- Update `TASK_STATE.md`.

## Output
Return only:
- changed files
- what changed, max 6 bullets
- build result
- remaining risks
- next step
