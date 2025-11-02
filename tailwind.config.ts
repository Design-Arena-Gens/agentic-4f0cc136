import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f7ff",
          100: "#e6effe",
          200: "#c5d9fd",
          300: "#9dbcfb",
          400: "#6f9bf8",
          500: "#3b75f5",
          600: "#275be8",
          700: "#1d47c7",
          800: "#1c3ea3",
          900: "#1a347e"
        }
      },
      boxShadow: {
        glow: "0 20px 45px rgba(59, 117, 245, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
