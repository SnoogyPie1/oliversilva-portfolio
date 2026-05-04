/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        ink: '#F2EFE7',
        muted: '#8A8780',
        line: '#1F1E1B',
        accent: '#E8552B',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // fluid display sizes
        'd-1': ['clamp(3.5rem, 12vw, 11rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'd-2': ['clamp(2.5rem, 7vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'd-3': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
  plugins: [],
}

