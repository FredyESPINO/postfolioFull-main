/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo Black", "sans-serif"],
        saira: ["Saira Extra Condensed", "sans-serif"]
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(0)"
          },
          "100%": {
            transform: "translateX(-100%)"
          }
        }
      },
      animation: {
        slider: "slide 10s linear infinite"
      }
    },
    screens: {
      sm: "320px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px"
    }
  },
  plugins: [require("tailwind-scrollbar")]
};
