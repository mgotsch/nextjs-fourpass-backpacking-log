/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        highlight: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      screens: {
        narrow: { raw: '(max-aspect-ratio: 3 / 2)' },
        wide: { raw: '(min-aspect-ratio: 3 / 2)' },
        'taller-than-854': { raw: '(min-height: 854px)' },
      },
      backgroundImage: {
        'home': "url('/images/landingImg.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest"],
  },
}
