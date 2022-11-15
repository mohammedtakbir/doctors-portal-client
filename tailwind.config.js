/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorTheme: {
          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          "accent": "#3A4256",
          "neutral": "#331E33",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  /* daisyui: {
    themes: [
      {'dark': {
        "primary": "#ddd",
        "secondary": "#888",
        "accent": "#fff",
      }},
      {'light': {
        "primary": "#0FCFEC",
        "secondary": "#19D3AE",
        "accent": "#3A4256",
      }}

    ]
  }, */
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}