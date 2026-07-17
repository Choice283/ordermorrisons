import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1B1512",
        surface: "#241B16",
        surface2: "#2E221B",
        oxblood: "#7A2233",
        oxblood2: "#9A2E42",
        morrisonred: "#D1001F",
        brass: "#CC9A3F",
        brass2: "#E3B75C",
        cream: "#F4EDE1",
        cream2: "#D9CBB5",
        sage: "#6F7A5A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
