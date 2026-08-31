import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#4FB1E5",
          "blue-dark": "#2E8FC2",
          orange: "#FE6B04",
          "orange-dark": "#E05A00",
          navy: "#0B1A2A",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(254, 107, 4, 0.35)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4FB1E5 0%, #2E8FC2 100%)",
        "cta-gradient": "linear-gradient(135deg, #4FB1E5 0%, #FE6B04 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
