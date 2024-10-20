/** @type {import('tailwindcss').Config} */

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
  plugins: [],
};

export default config;
