# NAMAYMA WEB - RE-ENTRY PROMPT

**Project Path**: `/Users/andres/Documents/Namayma-Web`
**Current Status**: Awaiting Client Review Round 2
**Current Deployment URL**: https://namayma-web.vercel.app

## Project Architecture
- **Framework**: Astro v4.16.19
- **Styling**: Tailwind CSS + Custom Tokens (`src/styles/global.css`)
- **Structure**: Modular sections (`src/components/sections/`) composed in `src/pages/index.astro`.
- **Interactions**: GSAP and minimal vanilla JS for sticky behaviors.

## Current Deployment State
The `main` branch is fully deployed to Vercel and is completely stable. It contains the exact client-approved visual state, typography, and images.

## Latest Client Feedback Applied
- Injected actual event specifics (Anolaima, $200.000, etc.) into `EventInfo.astro`.
- Refined micro-copy in `Experiences.astro`.
- Perfected the sticky CTA scroll target to point to `#namayma-form`.
- Set up a **DEMO MODE** reservation flow (`ReservaForm.astro`) where clicking "RESERVAR MI LUGAR" instantly redirects to the external checkout page without Formspree submission or HTML5 validation.

## Files Modified in Last Cycle
- `src/components/sections/Experiences.astro`
- `src/components/sections/EventInfo.astro`
- `src/components/ui/ReservaForm.astro`
- `src/components/ui/StickyReservationBar.astro`
- `PROJECT_STATUS_JUNE_2026.md`
- `RESUME_PROMPT.md`

## Remaining Pending Decisions
- Final client approval of the entire visual flow and layout.
- The Formspree backend configuration (the actual client endpoint ID).

## Exact Next Recommended Actions
When you are invoked to resume work:
1. Do **NOT** touch the design, layout, or animations unless explicitly instructed.
2. If the client approves the flow: Reverse the "Demo Mode" in `ReservaForm.astro`. You must restore `<form method="POST" action="...">`, re-add the `required` attributes to inputs, and configure the actual Formspree endpoint so real data capture begins.
3. Apply any minor copy tweaks the client requests in this review round.
4. Run `npm run build` and push to `main`.
