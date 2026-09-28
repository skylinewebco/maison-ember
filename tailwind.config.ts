import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e0d0c",
        panel: "#1a1918",
        ember: "#c9612b",
        "ember-light": "#e08a52",
        cream: "#f4ede4",
        mute: "#8f8b85",
        line: "rgba(244,237,228,0.12)",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-body)", "Jost", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
