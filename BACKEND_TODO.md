# BACKEND_TODO.md

## Goal
Send contact form submissions to Telegram without exposing the bot token in browser JavaScript.

## Current Safe State
- `src/utils/contactService.ts` uses a mock submit only.
- No `VITE_TELEGRAM_BOT_TOKEN` is read by client code.
- No browser request is sent directly to `api.telegram.org`.

## Secure Backend Flow
1. Browser submits contact data to a backend/serverless endpoint, for example `POST /api/contact`.
2. The backend validates and normalizes `name`, `phone`, optional `email`, optional `service`, and optional `message`.
3. The backend reads secrets from server-only environment variables:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
4. The backend sends the Telegram request server-side.
5. The backend returns a minimal JSON response such as `{ "ok": true }`.
6. The browser never receives or references the Telegram bot token.

## Vercel Option
- Add `api/contact.ts` or `api/contact.js`.
- Configure Vercel environment variables without the `VITE_` prefix:
  - `TELEGRAM_BOT_TOKEN`
  - `TELEGRAM_CHAT_ID`
- Endpoint behavior:
  - Accept only `POST`.
  - Reject invalid payloads with `400`.
  - Send Telegram request with `fetch("https://api.telegram.org/bot.../sendMessage")` only inside the serverless function.
  - Return `200` on success and `502` if Telegram fails.

## Client Integration Later
- Replace mock submit in `src/utils/contactService.ts` with `fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })`.
- Keep token names server-only and never use `VITE_TELEGRAM_BOT_TOKEN`.
