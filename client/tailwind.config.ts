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
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.75)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "float-in": "floatIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
