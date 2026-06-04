/**
 * NAMAYMA — Lenis Smooth Scroll
 * Initializes a silky, slow-paced cinematic scroll experience
 */

let lenisInstance: any = null;

export function initLenis() {
  if (typeof window === 'undefined') return null;
  if (lenisInstance) return lenisInstance;

  // Dynamic import to avoid SSR issues
  import('lenis').then(({ default: Lenis }) => {
    lenisInstance = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 1.0,
    });

    // Sync with GSAP ticker if available
    if (typeof (window as any).gsap !== 'undefined') {
      (window as any).gsap.ticker.add((time: number) => {
        lenisInstance?.raf(time * 1000);
      });
      (window as any).gsap.ticker.lagSmoothing(0);
    } else {
      // Fallback RAF loop
      function raf(time: number) {
        lenisInstance?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  });

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
