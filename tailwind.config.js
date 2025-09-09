/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",       // all pages
    "./components/**/*.{js,ts,jsx,tsx}",  // your components folder
    "./widgets/**/*.{js,ts,jsx,tsx}",     // add other folders if needed
    "./app/**/*.{js,ts,jsx,tsx}",         // if you use /app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
