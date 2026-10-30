/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f8f4',
          100: '#e0efe6',
          200: '#bfdfcb',
          300: '#8fc7a6',
          400: '#55a37c',
          500: '#2f8560',
          600: '#22694b',
          700: '#1c5440',
          800: '#16412f',
          900: '#0f3024',
          950: '#0a2119',
        },
        mint: {
          50: '#f6fbf8',
          100: '#e9f7ef',
          200: '#d3efdf',
          300: '#b2e4c8',
          400: '#8ad4ad',
          500: '#63c292',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'scale-in': 'scale-in 0.25s ease-out both',
      },
    },
  },
  plugins: [],
};
