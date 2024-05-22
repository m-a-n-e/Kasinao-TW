/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'krona': ['"Krona One"', 'sans-serif']
      },
      boxShadow: {
        'inner-xl': 'inset 0 2.2px 6.4px 0 rgba(0, 0, 0, 0.175), inset 0 2.2px 16px 0 rgba(0, 0, 0, 0.28)',
        'inner-2xl': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.25), inset 0 4px 20px 0 rgba(0, 0, 0, 0.4)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      }
    },
  },
  plugins: [require('tw-neumorphism'),
  require('tailwindcss-animate')],
}

