---
name: visual-diff-fix
description: Use when the user gives a short list of visual problems after checking the local preview. Fix only listed issues with a minimal CSS/component diff.
---

# Visual Diff Fix

## Rules
- Fix only the listed visual issues.
- Do not re-analyze the entire page.
- Do not redesign.
- Do not touch unrelated files.
- Do not add dependencies.
- Prefer CSS-only fixes.
- Keep diff small.
- If the requested change conflicts with current concept, preserve current concept and mention the risk briefly.

## Checks
- Check local preview if available.
- Check desktop/tablet/mobile if available.
- Run `npm run build` once if code/style changed.
- Update `TASK_STATE.md`.

## Output
Return only:
- changed files
- fixed issues
- build result
- remaining risks
