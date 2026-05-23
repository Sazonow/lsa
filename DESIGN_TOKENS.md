# DESIGN_TOKENS.md

## Visual Concept
- v2 is the primary art direction for "КОРТ РАЙДЕР".
- The site should feel like strategic legal case leadership, not a generic legal landing page.
- Style: premium legal, editorial, cinematic, restrained.
- Warm paper background, dark legal imagery, graphite text, muted gold accents, restrained serif typography.
- Compact framed pages on desktop with polished cards, soft shadows, and deliberate editorial rhythm.

## Strategic Line System
- The thin gold strategic line is the main visual motif.
- Meaning: position -> strategy -> action -> result.
- It starts in Hero, guides the eye into Values, later connects Practices, Process, Experience, and Contact.
- The line must stay quiet, thin, muted, and legal/editorial; it must not look neon, thick, playful, or decorative without meaning.
- Current implementation stage: static foundation only. Motion, parallax, route drawing, and scroll effects come later.

## Preserve
- Existing brand direction, logo marks, legal tone, UA/RU content, and seven-page structure.
- Dark hero with Lady Justice visual and gold CTAs.
- Cream paper surfaces, charcoal panels, gold iconography, serif headings.
- Existing React/Vite structure, manual routing, and multilingual content.

## Improve
- Match `references/mockup.jpg` more closely while avoiding its graphical artifacts.
- Tighten spacing, image crops, typographic rhythm, card density, and mobile behavior.
- Replace non-mockup UI where needed in small focused steps.
- Build Home v2 incrementally: B-1 Hero + Values static foundation, B-2 Practices as Case Files, B-3 Strategy Route static, B-4 motion only after static layout is stable.

## Colors
- Background: `--bg #f9f7f4`
- Paper: `--paper #ffffff`
- Soft paper: `--paper-soft #f2ede5`
- Cream: `--cream #eee7dd`
- Ink: `--ink #1a1a1a`
- Soft ink: `--ink-soft #4a4a4a`
- Muted: `--muted #6f6960`
- Lines: `--line #e5ded2`
- Dark: `--dark #080b0b`, `--dark-2 #111313`
- Gold: `--gold #c99350`, `--gold-2 #efbf78`, `--gold-3 #a8773d`, `--gold-deep #7d552d`

## Typography
- Headings: `--serif`, currently `"Cormorant Garamond", Georgia, serif`.
- Body/UI: `--sans`, currently `"Inter", Arial, sans-serif`.
- Use large serif headings only for page titles and hero titles.
- Keep UI labels compact and readable.

## Spacing And Containers
- Desktop shell padding: about 20px.
- Desktop page frame: `min(879px, 100%)`.
- Inner page horizontal padding: 56px desktop, 38px tablet, compact mobile padding.
- Work section-by-section; keep the framed page concept.

## Radii And Shadows
- Large radius: `--radius-lg 18px`.
- Medium radius: `--radius-md 12px`.
- Main shadow: `--shadow 0 12px 30px rgba(0, 0, 0, 0.08)`.
- Cards and framed tools should stay polished but not overly rounded.

## Buttons
- Primary CTA: gold gradient, compact height, readable contrast.
- Secondary CTA: dark/light outline depending on background.
- Header CTA: smaller, refined, gold/paper styling.

## Cards
- Practice cards use real imagery with dark overlays and gold action icon.
- Dark panels use charcoal backgrounds, subtle gold lines, and restrained decorative marks.
- Avoid nested decorative cards unless the component already uses that pattern.

## Breakpoints
- Mobile: `max-width: 760px`.
- Tablet/narrow desktop: `max-width: 1180px`.
- Desktop: above 1180px with framed 879px page layout.
