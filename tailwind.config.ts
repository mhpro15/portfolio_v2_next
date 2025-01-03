import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "header-white": "#fefefee0",
        "text-white": "#d3d3d3b6",
        dark: "#000000",
        "glass-box":
          "linear-gradient(0deg,rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.8))",
        darkgray: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
