/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        leaf: '#222C27',
        gry: '#2C2C2C',
      }
    },
  },
  plugins: [],
}

