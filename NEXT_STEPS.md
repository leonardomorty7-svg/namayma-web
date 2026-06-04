# NAMAYMA — Next Steps

**Prepared:** June 3, 2026
**For:** Next session resume

---

## Pending Tasks (Prioritized)

### Priority 1 — Visual QA & Browser Testing
**Estimated time:** 1–2 hours
**Risk:** Medium

- [ ] Open localhost:4321 in browser and scroll through entire experience
- [ ] Verify each chapter transition feels distinct and intentional
- [ ] Test SensoryRitual 4-scene sequence — confirm all scenes reveal and exit correctly
- [ ] Test Benefits/Transformaciones 6-moment sequence — confirm progress bar and counter
- [ ] Test CTA forest return — confirm image brightness ramp and parallax
- [ ] Test FAQ accordion — confirm gold accent bar appears on open
- [ ] Verify chapter dividers animate in at the right scroll position
- [ ] Check Hero background scoping — confirm forest does NOT bleed into Manifesto
- [ ] Test on smaller viewport widths (768px, 375px) for mobile responsiveness
- [ ] Verify no layout shifts or jumps during scroll-pinned sections

### Priority 2 — Mobile Responsiveness Polish
**Estimated time:** 2–3 hours
**Risk:** Medium-High

- [ ] SensoryRitual scenes — test Scene 3 right-alignment on mobile
- [ ] Benefits spatial layout — test number/accent sidebar on mobile
- [ ] CTA forest layers — verify performance on mobile devices
- [ ] FAQ gold accent bar — verify it doesn't cause layout issues on small screens
- [ ] Verify all `clamp()` typography scales correctly
- [ ] Test touch/scroll behavior with Lenis on iOS Safari

### Priority 3 — Performance Optimization
**Estimated time:** 1–2 hours
**Risk:** Low

- [ ] Audit `will-change` usage — remove from elements not actively animating
- [ ] Consider lazy-loading ritual-bg.jpg more aggressively
- [ ] Review number of simultaneous GSAP ScrollTrigger instances
- [ ] Test scroll smoothness on mid-range devices
- [ ] Verify `clip-path: inset(0)` doesn't cause GPU compositing issues on Safari
- [ ] Consider `manifesto-bg.jpg` — it exists in `/public/images/` but is NOT used anywhere. Remove or integrate.

### Priority 4 — Content & Copy Review
**Estimated time:** 30 min
**Risk:** Low

- [ ] Review CTA emotional copy: "Lo que buscas ya sabe tu nombre" — confirm client approval
- [ ] Review SensoryRitual Scene 4 copy: "No vienes a aprender. Vienes a recordar." — confirm client approval
- [ ] Review Benefits accent words (Seguridad, Lucidez, Presencia, etc.) — confirm alignment with brand voice

### Priority 5 — SEO & Accessibility
**Estimated time:** 1 hour
**Risk:** Low

- [ ] Verify heading hierarchy (single h1 in Hero, h2 per section)
- [ ] Test keyboard navigation through FAQ accordion
- [ ] Verify all `aria-label` and `aria-controls` attributes are correct
- [ ] Run Lighthouse audit for performance and accessibility scores
- [ ] Verify `og:image` exists at `/images/og-image.jpg` (currently missing from public/)

### Priority 6 — Production Deployment Preparation
**Estimated time:** 1 hour
**Risk:** Low

- [ ] Configure custom domain
- [ ] Set up proper OG image
- [ ] Final `npm run build` + deploy to hosting platform
- [ ] Test production build on staging URL
- [ ] Verify Lenis + GSAP work correctly in production mode

---

## Recommended Execution Order

```
Day 1 (Tomorrow):
  1. Visual QA & Browser Testing (Priority 1)
  2. Mobile Responsiveness Polish (Priority 2)
  3. Content Review with client (Priority 4)

Day 2:
  4. Performance Optimization (Priority 3)
  5. SEO & Accessibility (Priority 5)
  6. Production Deployment (Priority 6)
```

---

## Risks & Dependencies

| Risk | Severity | Mitigation |
|------|----------|------------|
| Mobile scroll-pinning performance | Medium | Test on real devices, reduce GSAP complexity if needed |
| Safari `clip-path` compositing | Low | Test on Safari, fallback to `overflow: hidden` if issues |
| Lenis + GSAP ScrollTrigger conflict on iOS | Medium | Test on iOS Safari, adjust `wheelMultiplier` if needed |
| Unused `manifesto-bg.jpg` (841KB) | Low | Remove from `/public/images/` to reduce build size |
| Missing `og-image.jpg` referenced in BaseLayout | Medium | Create or add before deployment |
| Client copy approval needed | Medium | Share CTA and SensoryRitual new copy for sign-off |
