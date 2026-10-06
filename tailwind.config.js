/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#9B1B1B',
        'brand-red-light': '#C41E1E',
        'brand-black': '#080808',
        'brand-gray': '#1A1A1A',
        'brand-gray-mid': '#2E2E2E',
        'brand-gray-text': '#888888',
      },
      fontFamily: {
        'display': ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        'body': ['"Barlow"', 'sans-serif'],
        'mono': ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
