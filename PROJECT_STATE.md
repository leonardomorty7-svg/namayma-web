# NAMAYMA — Project State

**Snapshot date:** June 3, 2026, 18:30 CST
**Build status:** ✅ Clean (0 errors, 0 warnings)

---

## Current Sections (in page order)

| # | Section | Component | ID | Background | Pin/Scroll |
|---|---------|-----------|-----|------------|------------|
| — | Navigation | `Nav.astro` | `#nav` | Transparent → glass-nav on scroll | Fixed |
| 01 | Hero | `Hero.astro` | `#hero` | `hero-bg.jpg` (fixed, clip-path scoped) | Parallax zoom |
| 02 | Manifesto | `Manifesto.astro` | `#manifesto` | Solid `bg-n-bg` + warm top gradient | Fade reveals |
| — | Divider | Chapter divider | — | Gold gradient line | Fade in |
| 03 | Ocho Dimensiones | `Experiences.astro` | `#experiencias` | `bg-n-black` + architectural grid + gold pillar | Stagger reveal |
| — | Divider | Chapter divider | — | Gold gradient line | Fade in |
| 04 | Sensory Ritual | `SensoryRitual.astro` | `#rituales` | `ritual-bg.jpg` + 5 layers | **Pinned** (600vh) |
| — | Divider | Chapter divider | — | Gold gradient line | Fade in |
| 05 | Transformaciones | `Benefits.astro` | `#beneficios` | `bg-n-bg` + journal lines | **Pinned** (1080vh) |
| — | Divider | Chapter divider | — | Gold gradient line | Fade in |
| 06 | FAQ | `FAQ.astro` | `#faq` | `bg-n-bg` (clean, no decoration) | Fade reveals |
| — | Divider | Chapter divider | — | Gold gradient line | Fade in |
| 07 | Final CTA | `CTA.astro` | `#reservar` | `hero-bg.jpg` (fixed, clip-path scoped) | Parallax + fade |
| — | Footer | `Footer.astro` | — | `bg-n-bg` | Static |

---

## GSAP Implementations

### Hero (`Hero.astro`)
- `blurReveal` — headline entrance with blur
- `fadeReveal` — staggered content entrance
- Breathing light loop (`#hero-light`, yoyo, infinite)
- Atmosphere drift loop (`#hero-atmosphere`, yoyo, infinite)
- ScrollTrigger: background zoom scrub (`#hero-bg-wrapper`, scale 1→1.2)
- ScrollTrigger: atmosphere parallax scrub (`#hero-atmosphere`, yPercent -15)
- ScrollTrigger: content fade-out scrub (`.hero-element`, y -100)

### Manifesto (`Manifesto.astro`)
- `fadeReveal` — `.manifesto-element` (stagger 0.2, y 40)
- `fadeReveal` — `.manifesto-fade` (stagger 0.2, y 20)

### Experiences (`Experiences.astro`)
- `fadeReveal` — chapter divider
- `fadeReveal` — `.exp-header`
- `fadeReveal` — `.exp-card` (stagger 0.12, y 40)
- Breathing loop: `#exp-pillar` (opacity pulse, yoyo, infinite)

### SensoryRitual (`SensoryRitual.astro`)
- Chapter divider reveal
- **ScrollTrigger pin** — trigger `#rituales`, end `+=600%`, scrub 1.2
- Background parallax zoom (`#ritual-bg-wrapper`, scale 1.15→1.35)
- Fog layer drift (`#ritual-fog`, opacity 0→0.5, x/y drift)
- Center light fade in (`#ritual-center-light`, opacity 0→1)
- Image brightness ramp (opacity 0.5→0.75)
- 4 scene transitions: autoAlpha in (y 60→0) → hold → autoAlpha out (y→-40)

### Benefits (`Benefits.astro`)
- Chapter divider reveal
- **ScrollTrigger pin** — trigger `#beneficios`, end `+=1080%`, scrub 1.8
- Chapter label + counter fade in/out
- 6 moment transitions: autoAlpha in (y 80→0, scale 0.96→1) → gold line expand → hold → autoAlpha out
- `onUpdate` callback: counter text + progress bar height

### FAQ (`FAQ.astro`)
- Chapter divider reveal
- `fadeReveal` — `.faq-header`
- `fadeReveal` — `.faq-list`
- JS accordion: `aria-expanded` toggle, `maxHeight` animation, `+` icon line toggle

### CTA (`CTA.astro`)
- Chapter divider reveal
- Breathing center glow loop (`#cta-center-glow`, yoyo, infinite)
- Fog drift loop (`#cta-fog`, yoyo, infinite)
- ScrollTrigger: background parallax zoom (`#cta-bg-wrapper`, scrub)
- ScrollTrigger: image brightness ramp (opacity 0.3→0.55, scrub)
- `fadeReveal` — `.cta-el` (stagger 0.2, y 30, duration 2)

### Nav (`Nav.astro`)
- `fadeReveal` — `.nav-item`
- IntersectionObserver: glass-nav toggle + padding change

---

## ScrollTrigger Summary

| Section | Type | Trigger | Start | End | Scrub |
|---------|------|---------|-------|-----|-------|
| Hero BG zoom | Scrub | `#hero` | top top | bottom top | true |
| Hero atmosphere | Scrub | `#hero` | top top | bottom top | true |
| Hero content fadeout | Scrub | `#hero` | top top | bottom top | true |
| SensoryRitual | **Pin** | `#rituales` | top top | +=600% | 1.2 |
| SensoryRitual BG | Scrub (within pin) | — | — | — | — |
| Benefits | **Pin** | `#beneficios` | top top | +=1080% | 1.8 |
| CTA BG zoom | Scrub | `#reservar` | top bottom | bottom top | true |
| CTA brightness | Scrub | `#reservar` | top bottom | top 30% | true |

---

## Components Modified in This Session

| Component | Status | Changes |
|-----------|--------|---------|
| `Hero.astro` | Modified | Added `clip-path: inset(0)` to scope fixed background |
| `Manifesto.astro` | Modified | Solid background, warm gradient, fixed `gold-line-v` |
| `Experiences.astro` | **Rebuilt** | Architectural identity, solid cards, gold pillar, chapter divider |
| `SensoryRitual.astro` | **Rebuilt** | 5-layer cinematic chapter, 4 editorial scenes, fog/light system |
| `Benefits.astro` | **Rebuilt** | Editorial storytelling, spatial layout, progress bar, counter |
| `FAQ.astro` | **Rebuilt** | Removed contour-lines, improved contrast, gold accent bar, divider |
| `CTA.astro` | **Rebuilt** | Forest return, new emotional copy, multi-layer atmosphere, divider |
| `Footer.astro` | Modified | Removed contour-lines, explicit `bg-n-bg` |
| `global.css` | Modified | Added 6 utility classes |
| `Nav.astro` | Unchanged | — |
| `BaseLayout.astro` | Unchanged | — |
| `index.astro` | Unchanged | — |
| `gsap.ts` | Unchanged | — |
| `lenis.ts` | Unchanged | — |
| `tailwind.config.mjs` | Unchanged | — |

---

## Assets Currently In Use

| Asset | Location | Used By | Size |
|-------|----------|---------|------|
| `hero-bg.jpg` | `/public/images/` | Hero, CTA | 874 KB |
| `ritual-bg.jpg` | `/public/images/` | SensoryRitual | 812 KB |
| `manifesto-bg.jpg` | `/public/images/` | **UNUSED** | 841 KB |
| `favicon.svg` | `/public/` | BaseLayout | 0.4 KB |
| `favicon.ico` | `/public/` | Fallback | 0.7 KB |

> ⚠️ `manifesto-bg.jpg` is not referenced by any component. It can be removed to reduce build size.

---

## Design System Status

### Typography
- **Serif:** Cormorant Garamond (300–600, italic)
- **Sans:** DM Sans (300–500, italic)
- **Scale:** display-xl → display-lg → display-md → display-sm → body-xl → body-lg → body-md → body-sm → label

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `n-black` / `--color-bg` | `#050403` | Page background |
| `n-deep` | `#0A0806` | Card surfaces |
| `n-earth` | `#16130D` | Elevated surfaces |
| `n-stone` | `#221E16` | Subtle surfaces |
| `n-gold` | `#CFA668` | Primary accent |
| `n-gold-lt` | `#E8CAA2` | Hover gold |
| `n-gold-dk` | `#947241` | Deep gold |
| `n-cream` | `#F2EFE9` | Primary text |
| `n-mist` | `#BEB7A9` | Secondary text |
| `n-fog` | `#756C5C` | Tertiary text |
| `n-line` | `#211D16` | Hairline borders |

### Custom Utilities (global.css)
- `.text-gold-gradient` — gradient text fill
- `.glass-nav` — frosted glass navigation
- `.section-padding` — responsive section spacing
- `.container-ritual` — max-width container
- `.scroll-indicator` — bouncing scroll arrow
- `.chapter-divider` — gold line between sections
- `.bg-architectural` — sacred geometry grid
- `.gold-line-v` — vertical gold line
- `.bg-journal-lines` — ruled journal lines
- `.gold-pillar` — narrow vertical glow

### Components (global.css)
- `.btn-ritual` — outline button
- `.btn-gold` — filled gold button
- `.label-sacred` — uppercase micro label
- `.divider-gold` — horizontal gold line

### Easing Functions
- `sacred`: `cubic-bezier(0.19, 1, 0.22, 1)` — cinematic ease-out
- `breath`: `cubic-bezier(0.4, 0, 0.2, 1)` — standard ease
- `slow`: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — gentle ease

### Dependencies
- Astro 4.16.18
- GSAP 3.12.5 + ScrollTrigger
- Lenis 1.1.14
- Tailwind CSS 3.4.17
- React 18.3.1 (installed but not actively used in current sections)
