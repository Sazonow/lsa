---
name: final-qa-release
description: Use for final project QA before preview/deploy. Checks all routes, build, security blockers, responsive layout, translation keys, and contact flow.
---

# Final QA Release

## Scope
Check all routes:
- `/`
- `/about`
- `/practices`
- `/experience`
- `/process`
- `/contacts`
- `/thank-you`

## Checks
- `npm run build`
- lint/typecheck if scripts exist
- no raw translation keys visible
- no `VITE_TELEGRAM_BOT_TOKEN` in `src`
- no direct `api.telegram.org` in `src`
- no horizontal overflow
- desktop 1440
- tablet 1024
- mobile 390
- header navigation
- language switch
- contact form validation/mock-submit
- thank-you flow

## Rules
- Do not redesign.
- Do not add features.
- Do not add dependencies.
- Do not deploy production.
- Only fix critical bugs if safe and small.
- Otherwise report blockers.

## Output
Return only:
- QA result
- build result
- critical blockers
- safe fixes applied
- remaining risks
- deploy checklist
