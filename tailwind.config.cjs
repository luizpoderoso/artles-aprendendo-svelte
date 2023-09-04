const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      'girl_lova': ['Girl lova', 'sans-serif']
    },
  },

  plugins: [forms, typography],
};

module.exports = config;
