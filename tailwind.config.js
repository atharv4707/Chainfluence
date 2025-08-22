/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#ff00ff",
          blue: "#00e5ff",
          purple: "#7a5cff"
        }
      },
      boxShadow: {
        glow: "0 0 20px rgba(122,92,255,0.6), 0 0 40px rgba(0,229,255,0.3)"
      }
    },
  },
  plugins: [],
}

