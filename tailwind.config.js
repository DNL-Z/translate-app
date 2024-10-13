/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        title: '#000000',
        text: '#787878',
        card: '#e2e2e2',
      },
      screens: {},
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(1rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        rotation: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(359deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        rotate: 'rotation 5s linear infinite',
      },
    },
  },
  plugins: [],
}
