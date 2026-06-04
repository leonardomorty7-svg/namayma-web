/**
 * NAMAYMA — Minimal GSAP Setup (0.xyz inspired)
 * Strictly stable, crisp fades and minimal translation. No blurs.
 */

export type GSAPContext = any;

let gsapLoaded = false;

export async function loadGSAP() {
  if (typeof window === 'undefined') return null;
  if (gsapLoaded) return (window as any).gsap;

  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');

  gsap.registerPlugin(ScrollTrigger);

  // Sacred ease for elegant slow finishes — CustomEase as a function
  gsap.registerEase('sacred', function(progress: number) {
    // cubic-bezier(0.19, 1, 0.22, 1) approximation
    const t = progress;
    return 1 - Math.pow(1 - t, 4) * (1 - 3.04 * t);
  });

  gsap.defaults({
    ease: 'sacred',
    duration: 1.2, // Clean duration
  });

  ScrollTrigger.defaults({
    start: 'top 85%',
  });

  (window as any).gsap = gsap;
  gsapLoaded = true;
  return gsap;
}

/**
 * Clean, perfectly crisp fade reveal.
 * No blurs, no GPU-heavy filters. Just pure opacity and smooth Y translation.
 */
export function fadeReveal(
  targets: string | Element | Element[] | NodeList,
  options: {
    delay?: number;
    stagger?: number;
    y?: number;
    duration?: number;
    scrollTrigger?: object;
  } = {}
) {
  const { delay = 0, stagger = 0.15, y = 30, duration = 1.4, scrollTrigger } = options;

  return (window as any).gsap?.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'sacred',
      clearProps: 'transform', // Do not clear opacity, otherwise it reverts to opacity-0 class!
      ...(scrollTrigger ? { scrollTrigger } : {}),
    }
  );
}

/**
 * Premium cinematic reveal with subtle blur.
 * Very light blur to avoid performance hits on mobile.
 */
export function blurReveal(
  targets: string | Element | Element[] | NodeList,
  options: {
    delay?: number;
    stagger?: number;
    y?: number;
    blur?: number;
    duration?: number;
    scrollTrigger?: object;
  } = {}
) {
  const { delay = 0, stagger = 0.2, y = 20, blur = 4, duration = 1.6, scrollTrigger } = options;

  return (window as any).gsap?.fromTo(
    targets,
    { opacity: 0, y, filter: `blur(${blur}px)` },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration,
      delay,
      stagger,
      ease: 'sacred',
      clearProps: 'transform,filter', // Do not clear opacity!
      ...(scrollTrigger ? { scrollTrigger } : {}),
    }
  );
}
