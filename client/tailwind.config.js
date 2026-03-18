/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        smirnoff: {
          red: '#D32F2F',
          'red-dark': '#B71C1C',
        },
        ice: {
          platinum: '#F5F5F5',
          frosted: '#E8F4FD',
        },
      },
      fontFamily: {
        primary: ['Outfit', 'Inter', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'slide-down': 'slideDown 0.8s ease forwards',
        'scale-in': 'scaleIn 1s ease 0.4s forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(1.875rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-1.875rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.9375rem)' },
        },
      },
    },
  },
  plugins: [],
}
