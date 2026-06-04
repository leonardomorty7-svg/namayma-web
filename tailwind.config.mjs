/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // NAMAYMA Design System - Elevated Cinematic
        'n-black':   '#050403',   // Ultra-deep warm black (Aman style)
        'n-deep':    '#0A0806',   // Very rich dark
        'n-earth':   '#16130D',   // Elevated dark surface
        'n-stone':   '#221E16',   // Subtle card surface
        'n-gold':    '#CFA668',   // Warmer, softer gold
        'n-gold-lt': '#E8CAA2',   // Lighter gold for hover
        'n-gold-dk': '#947241',   // Deeper gold
        'n-cream':   '#F2EFE9',   // Softer warm beige for primary text
        'n-mist':    '#BEB7A9',   // Muted secondary text
        'n-fog':     '#756C5C',   // Dim tertiary text
        'n-line':    '#211D16',   // Ultra-subtle hairline borders
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 10vw, 9.5rem)',  { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(3rem, 7vw, 7rem)',     { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.25rem, 5vw, 4.8rem)',{ lineHeight: '1.05',  letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.75rem, 3.5vw, 3.2rem)',{ lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'body-xl':    ['clamp(1.125rem, 2vw, 1.35rem)', { lineHeight: '1.8', letterSpacing: '0.01em' }],
        'body-lg':    ['clamp(1rem, 1.5vw, 1.2rem)',    { lineHeight: '1.8', letterSpacing: '0.01em' }],
        'body-md':    ['1rem',                            { lineHeight: '1.7', letterSpacing: '0.01em' }],
        'body-sm':    ['0.875rem',                        { lineHeight: '1.6', letterSpacing: '0.02em' }],
        'label':      ['0.65rem',                         { lineHeight: '1.5', letterSpacing: '0.25em' }],
      },
      spacing: {
        'section': '10rem',
        'section-sm': '6rem',
      },
      transitionTimingFunction: {
        'sacred': 'cubic-bezier(0.19, 1, 0.22, 1)', // Even slower, more cinematic ease-out
        'breath': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'slow':   'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400':  '400ms',
        '600':  '600ms',
        '800':  '800ms',
        '1000': '1000ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      animation: {
        'breathe':       'breathe 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'float-slow':    'float 15s ease-in-out infinite',
        'float-slower':  'float 25s ease-in-out infinite reverse',
        'drift':         'drift 30s linear infinite',
        'pulse-glow':    'pulseGlow 6s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.95)' },
          '50%':      { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%':      { transform: 'translateY(-20px) translateX(10px)' },
          '66%':      { transform: 'translateY(15px) translateX(-15px)' },
        },
        drift: {
          '0%':   { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(5%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%':      { opacity: '0.7', filter: 'blur(60px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
