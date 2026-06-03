---
name: conversion-flow-polish
description: Use to finish Contacts and Thank-you pages as one conversion flow. Keeps form safe, premium, responsive, and avoids exposing Telegram tokens.
---

# Conversion Flow Polish

## Context
- Telegram token must never be exposed in client code.
- Contact submit posts to `/api/contact`; local Vite development may use a safe mock fallback.
- `api/contact.js` contains the serverless Telegram delivery implementation.
- `BACKEND_TODO.md` contains the remaining production env/deploy checklist.
- No `VITE_TELEGRAM_BOT_TOKEN` in client.
- No direct `api.telegram.org` calls from browser code.

## Scope
Allowed routes:
- `/contacts`
- `/thank-you`

## Preferred files
- `src/pages/ContactsPage.tsx`
- `src/pages/ThankYouPage.tsx`
- `src/components/ContactForm.tsx`
- `src/styles/pages.css`
- `src/styles/components.css`
- `src/styles/layout.css`
- `TASK_STATE.md`
- `BACKEND_TODO.md` only if backend plan needs clarification

## Visual target
- Premium legal contact page.
- Form is primary.
- Contacts use a premium static Lady Justice visual; do not reintroduce Leaflet or a map-first composition.
- Thank-you page should be centered, clean, premium, with gold accent.
- Mobile must be clean.

## Rules
- No secrets.
- No production deploy.
- No new dependencies.
- No full redesign.
- Preserve current concept.
- Small diff.
- Run `npm run build` once.
- Update `TASK_STATE.md`.

## Output
Return only:
- changed files
- what changed, max 6 bullets
- build result
- remaining risks
- next page
