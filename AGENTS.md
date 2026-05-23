# AGENTS.md

## Working Mode
- No Figma is available.
- The project already exists and must be finished against `references/mockup.jpg`.
- Preserve the current concept, structure, and design direction.
- Work on one page, section, or component at a time.
- Do not do a full redesign without explicit permission.
- Do not rewrite unrelated files.
- Do not add dependencies without permission.
- Do not touch env files, secrets, tokens, billing, production deploy, or production settings.

## Reporting
- Keep explanations short.
- Final replies should include only changed files, checks, risks, and next step.
- Update `TASK_STATE.md` after every completed step.

## Tools
- Use Browser/preview for visual checks when available.
- Use Playwright for responsive checks when available.
- If Serena is available, use it for targeted search and precise edits.
- If Repomix is available, use it only when a compact project overview is needed.
- If Context7 is available, use it only for a concrete library documentation issue.

## Local skills
Use these repo-local skills from `.agents/skills`:
- `$economy-direct-patch` for direct low-token patches.
- `$screenshot-home-polish` for Home visual work.
- `$conversion-flow-polish` for Contacts + Thank-you.
- `$content-pages-polish` for About / Practices / Experience / Process.
- `$visual-diff-fix` for short user-provided visual corrections.
- `$final-qa-release` for final QA.

Prefer explicit skill invocation with `$skill-name`.
Do not use Figma skills because there is no Figma source.

## UI Rules
- Use shadcn only for forms, buttons, cards, modals, tables, and inputs.
- For premium visual sections, use custom CSS/Tailwind-style project styling or the existing design system.
- Do not copy obvious graphical defects from the mockup.
