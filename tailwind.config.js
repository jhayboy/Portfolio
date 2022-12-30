/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,tsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      }
    },
  },
  plugins: [],
};
