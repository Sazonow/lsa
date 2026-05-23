---
name: economy-direct-patch
description: Use when the user wants a small, safe, token-efficient direct patch without long analysis. Best for finishing one page, section, component, CSS pass, bugfix, or visual correction.
---

# Economy Direct Patch

## Rules
- Apply changes directly.
- Do not ask for confirmation.
- Do not produce long analysis.
- Work on one route, page group, section group, or component group at a time.
- Touch maximum 3-6 files unless absolutely necessary.
- Do not scan the full repo unless required.
- Use existing `PROJECT_MAP.md`, `DESIGN_TOKENS.md`, and `TASK_STATE.md`.
- Preserve the current concept.
- Do not add dependencies.
- Do not touch env, secrets, tokens, billing, or production deploy.
- Do not rewrite unrelated files.
- Run `npm run build` once at the end if code/styles changed.
- Update `TASK_STATE.md`.

## Output
Return only:
- changed files
- what changed, max 6 bullets
- build result
- remaining risks
- next step
