import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: "#f8f8f8",
        foreground: "#111111",
        muted: "#555555",
        accent: "#2c2c2c",
        divider: "#e5e5e5",
      },
      fontFamily: {
        sans: ['"Avenir Next"', '"Helvetica Neue"', '"Segoe UI"', 'sans-serif'],
        display: ['"Avenir Next"', '"Helvetica Neue"', 'sans-serif'],
        serif: ['"Iowan Old Style"', '"Palatino Linotype"', 'Georgia', 'serif'],
      },
      boxShadow: {
        panel: "0 28px 90px rgba(17,17,17,0.08)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
