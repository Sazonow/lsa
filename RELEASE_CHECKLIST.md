# RELEASE_CHECKLIST.md

## Local Pre-Deploy Gate

Run before every preview/deploy handoff:

```sh
npm run release:check
```

This verifies:
- production build
- serverless contact endpoint behavior
- translation key coverage
- client/security blockers
- runtime asset references and production payload exclusions
- reference files required for final visual acceptance

If the local environment can bind a preview port, also run:

```sh
npm run verify:routes
```

This checks direct-route responses from a local production preview.

## Hosting Environment

Configure these server-only environment variables on the hosting provider:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Do not create `VITE_` versions of these secrets.

## Deployed Preview Checks

After deploy, verify:

- `/`
- `/about`
- `/practices`
- `/experience`
- `/process`
- `/contacts`
- `/thank-you`

Each direct URL should load with `200 OK` and render the app, not a host 404 page.

You can run the deployed route check with:

```sh
npm run verify:deployed-routes -- https://your-preview-url
```

You can also smoke-test the deployed contact endpoint without sending a Telegram message:

```sh
npm run verify:deployed-contact -- https://your-preview-url
```

Or run both deployed route and safe contact endpoint checks together:

```sh
npm run verify:deployed -- https://your-preview-url
```

## Contact Form Live Test

On the deployed preview:

1. Open `/contacts`.
2. Submit the form with a test name and phone.
3. Confirm the user is sent to `/thank-you`.
4. Confirm the Telegram message arrives.
5. If it fails, inspect serverless logs for:
   - `telegram_not_configured`
   - `telegram_unreachable`
   - `telegram_failed`

You can also run the deployed live submit smoke test:

```sh
npm run verify:deployed-contact-live -- https://your-preview-url
```

This sends a clearly labeled QA request to the deployed `/api/contact` endpoint and should be used only after `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are configured.

## Final Visual Acceptance

Before client handoff, manually compare the deployed preview against:

- `references/mockup.jpg`
- `references/pages/*.png`

Check desktop and mobile for:

- premium legal visual direction
- Home motion quality
- no horizontal overflow
- readable header/navigation
- clean contact form and thank-you flow

Recommended visual widths:

- desktop `1440px`
- tablet `1024px`
- mobile `390px`
