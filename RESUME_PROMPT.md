# RE-ENTRY BRIEFING: NAMAYMA WEB

## Project Architecture
- **Framework**: Astro v4.16.19
- **Styling**: Tailwind CSS, custom design tokens in `src/styles/global.css`
- **Animations**: GSAP (via `src/lib/gsap.js`) and IntersectionObserver (CSS-only toggles for high-performance sections like Transformacion).
- **Deployment**: Automatic Vercel deployment triggered by pushes to the `main` branch.

## Main Sections
The landing page (`src/pages/index.astro`) is composed of sequential storytelling modules:
1. **Hero**: Cinematic parallax.
2. **Manifesto**: Philosophical core.
3. **Experiences**: 8 dimensions of the event (cards).
4. **SensoryRitual**: List of frequencies/rituals (e.g. Rapé).
5. **Transformacion**: 4 sticky panels tracking user scroll.
6. **FAQ**: Accordion implementation.
7. **EventInfo**: Minimalist grid with placeholders for event specifics.
8. **CTA & ReservaForm**: Conversion zone.

## Current Status (June 11, 2026)
The project is structurally, visually, and functionally complete for **CLIENT REVIEW**. All visual feedback has been successfully implemented including semantic SVGs, new sections, and floating UI elements for conversion (WhatsApp + Sticky Bottom Bar).

## Recent Changes
- Removed "Baños de sonido..." and "Respiración holotrópica..." and added "Rapé" to the top of `SensoryRitual.astro`.
- Created `EventInfo.astro` section with placeholders for Lugar, Horario, Alimentación, and Inversión.
- Integrated minimalist SVG icons across the UI matching the Namayma design language.
- Built and injected `FloatingWhatsApp.astro` and `StickyReservationBar.astro`.
- Fixed the sticky bar CTA scroll target to point precisely to `#namayma-form`.
- **CRITICAL DEMO CHANGE**: Temporarily disabled HTML5 validation and Formspree submission in `ReservaForm.astro`. The "RESERVAR MI LUGAR" button acts as a direct link, instantly redirecting to `https://www.namayma.com/confirmar-aporte/`.

## Pending Client Approvals & Information
- The final event details to replace the placeholders in `EventInfo.astro` (Lugar, Horario, Alimentación, Inversión).
- Approval of the overall landing page layout and copy.
- Confirmation on how the final reservation form should actually process data (Formspree).

## Exact Next Recommended Actions
When the client returns with feedback/approval:
1. **Restore Formspree**: Re-enable `required` tags, the `<form>` POST action/method, and inject the actual `REEMPLAZAR_CON_ID` in `src/components/ui/ReservaForm.astro`.
2. **Populate Details**: Replace the placeholder strings in `src/components/sections/EventInfo.astro` with real data.
3. **Apply Visual Feedback**: Make any design tweaks requested.
4. **Run Validation**: `npm run build` and test all paths, particularly the form's success/redirect behavior, before finalizing handoff.
