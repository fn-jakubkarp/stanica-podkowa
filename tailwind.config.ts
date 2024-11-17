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
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 3s ease infinite",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f5f9f1",
          100: "#e8f0e3",
          300: "#86af69",
          500: "#4d7c3f", // Main brand color
          700: "#2c4b24",
        },
        earth: {
          100: "#f4efe8",
          300: "#d4bc94",
          500: "#a67c52", // Wood/earth tone
        },
        accent: {
          300: "#ffd07f",
          500: "#e6a43b", // Warm accent
        },
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
