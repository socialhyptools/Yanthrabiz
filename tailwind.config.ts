import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a2a7c",
          foreground: "#ffffff",
          50: "#f1f3fc",
          100: "#dee3f7",
          200: "#b8c2ef",
          300: "#8a9ae3",
          400: "#5e74d4",
          500: "#3e54c1",
          600: "#2e3fa3",
          700: "#253289",
          800: "#1f2a73",
          900: "#1a2a7c",
          950: "#0f1747",
        },
        accent: {
          DEFAULT: "#da1f26",
          foreground: "#ffffff",
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#da1f26",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        background: "#ffffff",
        foreground: "#0f172a",
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        border: "#e2e8f0",
        ring: "#1a2a7c",
      },
      fontFamily: {
        sans: [
          "var(--font-jakarta)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-jakarta)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.625rem",
        lg: "0.875rem",
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(15 23 42 / 0.04), 0 4px 12px rgb(15 23 42 / 0.06)",
        card: "0 2px 4px rgb(15 23 42 / 0.04), 0 12px 32px rgb(15 23 42 / 0.08)",
        glow: "0 0 0 1px rgb(26 42 124 / 0.08), 0 16px 48px rgb(26 42 124 / 0.16)",
      },
      spacing: {
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
