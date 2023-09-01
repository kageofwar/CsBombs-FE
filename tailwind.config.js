/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'krona': ['krona one']
    }
  },
  plugins: [
    require("daisyui")
  ],
}

