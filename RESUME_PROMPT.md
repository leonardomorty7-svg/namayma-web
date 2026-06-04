# NAMAYMA — Resume Prompt

Use this prompt at the start of the next session to restore full context.

---

## Project Context

NAMAYMA is a luxury wellness experience website built with Astro 4, Tailwind CSS 3, GSAP 3 (with ScrollTrigger), and Lenis smooth scroll. It is a single-page cinematic editorial experience in Spanish for a premium immersive wellness event combining meditation, conscious dance, sound healing, breathwork, and ancestral rituals.

**Location:** `/Users/andres/Documents/Namayma-Web`
**Dev server:** `npm run dev` → `localhost:4321`
**Build:** `npm run build` → static output to `/dist`

---

## Current Artistic Direction

The website is structured as 7 chapters, each with a distinct visual identity:

1. **Hero** — Full-screen cinematic forest with parallax. "Regresa a ti." Gold atmosphere, breathing light, multi-layer parallax. The background is `position: fixed` scoped via `clip-path: inset(0)`.

2. **Manifesto** — Pure darkness. Solid black background with a warm gradient at the top that fades from the Hero's earth tones. Two-column editorial body text. "No es un retiro. Es un umbral."

3. **Ocho Dimensiones** — Sacred architectural atmosphere. Deep black with a CSS architectural grid pattern (thin gold lines), a gold pillar of light at center, and 8 solid dark cards with gold borders. No forest, no imagery.

4. **Sensory Ritual** — Cinematic full-screen pinned chapter (600vh scroll). 5 independent visual layers: base image (`ritual-bg.jpg`), atmospheric fog, cinematic overlays, breathing gold center light. 4 editorial scenes that alternate spatial position (center → left → right → center). "El sonido sana lo que las palabras no pueden tocar."

5. **Transformaciones** — Editorial storytelling sequence. Pinned (1080vh scroll). Each of 6 transformations is a full-screen moment with massive typography, number/accent-word sidebar, expanding gold line, vertical progress bar, and live counter. Journal-ruled-line background.

6. **FAQ** — Maximum clarity. Pure black, no decoration, no imagery. Clean accordion with gold accent bar on open items. Improved text contrast.

7. **Final CTA** — Forest returns (reuses `hero-bg.jpg`). Multi-layer atmosphere mirroring the Hero. Distinct emotional message: "Lo que buscas ya sabe tu nombre." Visual symmetry with the opening. Journey closure.

---

## Current Technical State

- **Framework:** Astro 4.16.18 (static output)
- **Styling:** Tailwind CSS 3.4.17 + custom global.css utilities
- **Animation:** GSAP 3.12.5 + ScrollTrigger (2 pinned sections, 5 scrub instances)
- **Smooth scroll:** Lenis 1.1.14
- **Typography:** Cormorant Garamond (serif) + DM Sans (sans)
- **Color palette:** Warm blacks (#050403), golds (#CFA668), cream (#F2EFE9)
- **Build:** Clean — 0 errors, 0 warnings, 2.16s build time
- **Source:** 15 files, 2,093 total lines

---

## What Has Been Completed

### Phase 1 (Pre-session)
- Full website structure and all 7 sections
- Hero with cinematic parallax
- Lenis smooth scroll integration
- GSAP + ScrollTrigger setup
- Typography and color system
- Responsive layout foundation

### Phase 2A (This session)
- Art direction audit completed
- Hero background bleed fixed (clip-path scoping)
- Manifesto decoupled from Hero
- Ocho Dimensiones given architectural identity
- Chapter dividers between sections
- 6 new CSS utilities added to global.css
- FAQ readability improved (contrast fix)
- Footer cleaned (contour-lines removed)

### Phase 2B (This session)
- SensoryRitual → cinematic 5-layer chapter with 4 scenes
- Benefits → editorial storytelling with progress tracking
- CTA → forest return with emotional closure
- FAQ → gold accent bar on open answers

---

## What Must Be Done Next

### Immediate (Tomorrow)
1. **Visual QA** — Open localhost, scroll through entire experience, verify all chapter transitions, scene sequences, and animations work correctly
2. **Mobile responsiveness** — Test SensoryRitual right-aligned scene, Benefits spatial layout, and CTA forest layers on mobile viewports
3. **Content review** — Get client approval on new CTA copy and SensoryRitual closing line

### Short-term
4. **Performance audit** — Review ScrollTrigger instance count, `will-change` usage, test on mid-range devices
5. **SEO/A11y** — Run Lighthouse, verify heading hierarchy, test FAQ keyboard nav
6. **Cleanup** — Remove unused `manifesto-bg.jpg` (841KB), create missing `og-image.jpg`

### Deployment
7. **Production build** — Final `npm run build`, deploy to hosting, test on staging URL

---

## Important Notes for Next Session

- The dev server runs on `localhost:4321` via `npm run dev`
- Two sections are scroll-pinned: SensoryRitual (600vh) and Benefits (1080vh) — they create long scroll regions
- Hero and CTA both use `clip-path: inset(0)` to scope their `position: fixed` backgrounds
- `manifesto-bg.jpg` exists in `/public/images/` but is NOT used by any component
- `og-image.jpg` is referenced in `BaseLayout.astro` but does NOT exist in `/public/images/`
- React is installed as a dependency but not used in any current component
- All GSAP animations use the custom `sacred` ease: `cubic-bezier(0.19, 1, 0.22, 1)`

---

## How to Resume

```bash
cd /Users/andres/Documents/Namayma-Web
npm run dev
# Open http://localhost:4321
```

Read these files for full context:
- `SESSION_SUMMARY.md` — What was done
- `NEXT_STEPS.md` — What to do next
- `PROJECT_STATE.md` — Exact current state of every component
- `RESUME_PROMPT.md` — This file
