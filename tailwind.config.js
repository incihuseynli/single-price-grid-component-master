/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ['"Karla"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-cyan": "#2ab2af",
        "primary-yellow": "#c0df34",
        "secondary-gray": "#e5eff5",
        "secondary-blue": "#98a6bd",
      },
    },
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
