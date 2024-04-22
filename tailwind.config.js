const defaultTheme = require("tailwindcss/defaultTheme");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '1rem',
      base: '1.125rem',
      xl: '1.25rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      sans: ["Exo", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        bgColor: "#147B65",
        primaryColor: "#147B65",
        secondaryColor: "#555",
        thirdColor: "#000",
        whiteColor: "#fff",
        subColor: "#555",
        borderButtonColor: "#9D9D9D",
        bgLigthGrey: "#EAEAEA",
        bgGray: "#F5F5F5",
        borderGray:"#555555"
      },
      padding: {
        elementPadding : "5.62rem"
      }
    },
  },
  plugins: [],
}

