/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { min: "320px", max: "744px" },
      tablet: { min: "745px", max: "1023px" },
      desktop: "1024px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
