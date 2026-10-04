import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mavvi: { 50: "#faf5ff", 100: "#f3e8ff", 500: "#7c3aed", 600: "#6d28d9", 700: "#5b21b6" },
        ink: { 900: "#1e1b2e", 600: "#4b4763", 400: "#8b87a3" },
        cream: "#fdfaf6"
      },
      fontFamily: {
        display: ["Fredoka", "system-ui", "sans-serif"],
        sans: ["Nunito", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;
