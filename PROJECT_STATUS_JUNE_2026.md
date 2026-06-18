# NAMAYMA WEB
Project Status: Client Review Round
Date: 11 June 2026

--------------------------------------------------
CURRENT STATE
--------------------------------------------------

- Local build status: PASS (0 errors)
- Production deployment status: LIVE
- Current Vercel URL: https://namayma-web.vercel.app
- Latest commit hash: c9fae8b (feat: client review updates, real event information and image refresh)
- Current branch: main

--------------------------------------------------
IMPLEMENTED CHANGES
--------------------------------------------------

- Hero image replaced (hero-bg.jpg optimized and mapped)
- Closing section image replaced (cierre-bg.png applied)
- Experience text updates requested by client:
  - "Danza libre y presencia"
  - "Regula el sistema nervioso central"
  - "Conciencia de la humanidad"
- Event details section updated with real data:
  - Anolaima, Cundinamarca
  - Finca Los Robles
  - 9:00 a.m. – 5:00 p.m.
  - Almuerzo vegetariano incluido
  - $200.000 por persona
  - $370.000 por pareja
- Sticky CTA behavior fixed (scrolls exactly to the #namayma-form container)
- Reservation flow status: DEMO MODE
- Demo/production redirect status: Button instantly redirects to https://www.namayma.com/confirmar-aporte/ (Formspree disabled for demo).

--------------------------------------------------
FILES MODIFIED
--------------------------------------------------

- `src/components/sections/Experiences.astro`: Updated text for Danza Consciente, Sanación Sonora, and Sabiduría Ancestral.
- `src/components/sections/EventInfo.astro`: Applied real event data (Location, Time, Food, Price) and added `whitespace-pre-line` to handle multiline rendering without breaking design.
- `src/components/ui/ReservaForm.astro`: Temporarily converted to Demo Mode (no validation, direct redirect).
- `src/components/ui/StickyReservationBar.astro`: Corrected scroll target to point directly to `#namayma-form`.
- `public/images/hero-bg.jpg`: New Hero image asset.
- `public/images/cierre_bg.png`: New Closing section asset.

--------------------------------------------------
KNOWN CLIENT FEEDBACK APPLIED
--------------------------------------------------

- Replace placeholder Event Details with the confirmed venue, schedule, food, and investment data.
- Refine narrative copy in "Ocho dimensiones" to be more precise ("Danza libre y presencia", "Regula el sistema nervioso central").
- Fix sticky CTA UX so it doesn't leave the user floating above the form.
- Bypass form validation during the review phase so the client can experience the redirect to the payment/confirmation page immediately.

--------------------------------------------------
PENDING ITEMS
--------------------------------------------------

No pending technical issues.
Awaiting next client review round.

--------------------------------------------------
RECOMMENDED NEXT STEP
--------------------------------------------------

Wait for client approval or additional corrections before further development.
