const defaultTheme = require("tailwindcss/defaultTheme");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.125rem',
      xl: '1.25rem',
      '2xl': '2rem',
      '3xl': '1.953rem',
      '4xl': '3rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      sans: ["Exo", ...defaultTheme.fontFamily.sans],
    },
    extend: {

    },
  },
  plugins: [],
}


