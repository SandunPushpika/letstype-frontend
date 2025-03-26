/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace']
      },
      keyframes: {
        typing: {
          "0%": { width: "0",  visibility: "hidden" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": {borderColor: "white"}
        },
      }
    },
  },
  plugins: [],
}

