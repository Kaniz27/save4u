import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#E1E8F0",
          blue: "#4DA3FF",
          "blue-light": "#67B7FF",
          "blue-dark": "#2E7FD9",
          orange: "#FF7A1A",
          "orange-dark": "#E0650A",
          navy: "#102A43",
          text: "#486581",
          border: "#D3DEE9",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(255, 122, 26, 0.35)",
        "glow-blue": "0 0 32px rgba(77, 163, 255, 0.35)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4DA3FF 0%, #2E7FD9 100%)",
        "cta-gradient": "linear-gradient(135deg, #4DA3FF 0%, #67B7FF 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
