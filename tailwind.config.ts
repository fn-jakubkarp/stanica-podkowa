/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans"],
        open: ["Open Sans"],
      },
      colors: {
        secondary: {
          DEFAULT: "#eae6e0",
        },
        text: {
          DARK: "#64554F",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".masked2": {
          "-webkit-mask-image": 'url("../assets/masks/2.png")',
          "-webkit-mask-size": "cover",
          "-webkit-mask-repeat": "no-repeat",
          "mask-image": 'url("../assets/masks/2.png")',
          "mask-size": "cover",
          "mask-repeat": "no-repeat",
        },
        ".clearmask": {
          "-webkit-mask-image": "none",
          "mask-image": "none",
        },
      };

      // Add utilities without specifying variants
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
