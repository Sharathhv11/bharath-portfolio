import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        panel: "#f8f8f8",
        panelSoft: "#f1f1f1",
        stroke: "rgba(0, 0, 0, 0.12)",
        glow: "#000000",
        steel: "#333333",
        accent: "#000000",
        accentWarm: "#4b5563"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"]
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.08)",
        glow: "0 0 60px rgba(0, 0, 0, 0.12)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        streak: {
          "0%": { transform: "translateX(-20%)", opacity: "0" },
          "15%": { opacity: "0.25" },
          "100%": { transform: "translateX(120%)", opacity: "0" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" }
        }
      },
      animation: {
        drift: "drift 10s ease-in-out infinite",
        streak: "streak 14s linear infinite",
        pulseLine: "pulseLine 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

