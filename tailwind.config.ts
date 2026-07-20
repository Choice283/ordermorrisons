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
        charcoal: "#FBF8F3",   // was pure white — now a soft warm off-white
        surface: "#F6F1E9",    // slightly deeper off-white for header/cards
        surface2: "#EDE5D6",   // a bit more depth for contrast blocks
        oxblood: "#7A2233",
        oxblood2: "#9A2E42",
        morrisonred: "#D1001F",
        brass: "#B8863B",      // darkened from the original gold so it reads on white
        brass2: "#A6762E",     // darkened further — this is used for text/prices, needed real contrast
        cream: "#1B1512",      // was light text-on-dark — now the main dark text color
        cream2: "#4A3B30",     // was secondary light text — now secondary dark text
        sage: "#6F7A5A",
        ink: "#1B1512",        // fixed dark, for intentional dark accents (e.g. the ticket stub)
        paper: "#F4EDE1",      // fixed light cream, for text sitting on "ink"
        gold: "#E3B75C",       // fixed light gold, for text sitting on "ink"
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
