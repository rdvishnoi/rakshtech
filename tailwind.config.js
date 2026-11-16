/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f4fb',
          100: '#e2e8f4',
          200: '#c3cde3',
          300: '#94a3c4',
          400: '#5f7399',
          500: '#3d5278',
          600: '#2b3b5e',
          700: '#1d2a47',
          800: '#131c33',
          900: '#0d1426',
          950: '#0B1020',
        },
        secondary: {
          50: '#eff4ff',
          100: '#dbe6ff',
          200: '#bfd2ff',
          300: '#93b3ff',
          400: '#5e8bff',
          500: '#315EFB',
          600: '#2449e0',
          700: '#1d3bb8',
          800: '#1f3594',
          900: '#1f3175',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22D3EE',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        highlight: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8B5CF6',
          600: '#7c3aed',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 4.75rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.875rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'aurora-drift': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(40px, -30px, 0) scale(1.08)' },
        },
        'ping-soft': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'type-line': {
          '0%': { opacity: '0', transform: 'translateX(-6px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bar-grow': {
          '0%': { transform: 'scaleY(0.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'aurora-drift': 'aurora-drift 18s ease-in-out infinite',
        'ping-soft': 'ping-soft 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'type-line': 'type-line 0.5s ease-out both',
        'bar-grow': 'bar-grow 1.2s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        sweep: 'sweep 3.5s ease-in-out infinite',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 16, 32, 0.04), 0 8px 24px -12px rgba(11, 16, 32, 0.12)',
        'card-hover': '0 2px 4px rgba(11, 16, 32, 0.05), 0 24px 48px -16px rgba(49, 94, 251, 0.25)',
        glow: '0 0 0 1px rgba(34, 211, 238, 0.25), 0 20px 60px -20px rgba(34, 211, 238, 0.45)',
      },
    },
  },
  plugins: [],
};
