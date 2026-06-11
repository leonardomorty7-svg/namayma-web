# NAMAYMA WEB
Project Status: Client Review Version

Current Production URL:
https://namayma-web.vercel.app

Date:
11 June 2026

--------------------------------------------------
CURRENT STATUS
--------------------------------------------------

PROJECT READY FOR CLIENT REVIEW

Implemented:

- Landing page complete
- Ritual sequence corrected
- Rapé added as requested
- Crystal bowls removed
- Holotropic breathing removed
- Event information section created
- Semantic icons implemented
- WhatsApp floating button added
- Sticky bottom reservation bar added
- Sticky CTA scrolls to reservation form
- Demo reservation flow implemented
- Reservation button redirects directly to:
  https://www.namayma.com/confirmar-aporte/

--------------------------------------------------
IMPORTANT TEMPORARY CONFIGURATION
--------------------------------------------------

Current reservation flow is DEMO MODE.

Form validation temporarily disabled.

Reason:
Client review and approval phase.

Current behavior:

RESERVAR MI LUGAR
→ redirects directly to:
https://www.namayma.com/confirmar-aporte/

When client approves:

1. Re-enable validation
2. Re-enable Formspree integration
3. Configure production form endpoint
4. Remove demo redirect behavior

--------------------------------------------------
FILES MOST RECENTLY MODIFIED
--------------------------------------------------

- `src/components/sections/SensoryRitual.astro` (Ritual array updated)
- `src/components/sections/EventInfo.astro` (New section added, icons updated)
- `src/pages/index.astro` (Injected EventInfo, WhatsApp, Sticky CTA)
- `src/components/ui/FloatingWhatsApp.astro` (New component created)
- `src/components/ui/StickyReservationBar.astro` (New component created, updated target ID)
- `src/components/ui/ReservaForm.astro` (Form submission temporarily mocked, validation removed)

--------------------------------------------------
KNOWN PENDING ITEMS
--------------------------------------------------

Client still needs to provide:

- Final location
- Final schedule
- Final food information
- Final pricing
- Final reservation workflow approval
