---
name: conversion-flow-polish
description: Use to finish Contacts and Thank-you pages as one conversion flow. Keeps form safe, premium, responsive, and avoids exposing Telegram tokens.
---

# Conversion Flow Polish

## Context
- Telegram token must never be exposed in client code.
- Real submit may remain mock until backend/serverless endpoint is implemented.
- `BACKEND_TODO.md` contains backend plan.
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
- `src/components/Map.tsx` only if needed
- `src/styles/pages.css`
- `src/styles/components.css`
- `src/styles/layout.css`
- `TASK_STATE.md`
- `BACKEND_TODO.md` only if backend plan needs clarification

## Visual target
- Premium legal contact page.
- Form is primary.
- Map must not dominate if it conflicts with screenshot.
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
