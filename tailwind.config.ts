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
      colors: {
        primary: {
          DEFAULT: "#301c15",
        },
        background: {
          DEFAULT: "#efe0c9",
        },
        secondary: {
          DEFAULT: "#de643b",
        },
        accent: {
          DEFAULT: "#BC9968",
        },
        text: {
          DEFAULT: "#0f0800",
        },
      },
    },
  },
  plugins: [],
};

export default config;
