/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        fox: {
          bg: "#0A0A0F",
          surface: "#12121A",
          card: "#1A1A26",
          border: "#24243A",
          primary: "#FF6B1A",
          accent: "#FFB800",
          gold: "#FFD15C",
          text: "#F5F5F7",
          muted: "#8B8B9E",
        },
      },
      boxShadow: {
        "glow-sm": "0 0 12px rgba(255, 107, 26, 0.35)",
        "glow": "0 0 30px rgba(255, 107, 26, 0.45)",
        "glow-lg": "0 0 60px rgba(255, 107, 26, 0.55)",
        "inner-glow": "inset 0 0 24px rgba(255, 107, 26, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "aurora":
          "radial-gradient(60% 60% at 20% 20%, rgba(255,107,26,0.35) 0%, transparent 60%), radial-gradient(55% 55% at 80% 30%, rgba(255,184,0,0.28) 0%, transparent 60%), radial-gradient(50% 50% at 50% 90%, rgba(255,209,92,0.22) 0%, transparent 60%)",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        shine: "shine 3s linear infinite",
        "shine-slow": "shine 6s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-in-r": "slide-in-r 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        tilt: "tilt 10s infinite linear",
        "spin-slow": "spin 14s linear infinite",
        shimmer: "shimmer 2.2s linear infinite",
        "bg-pan": "bg-pan 12s ease infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255, 107, 26, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(255, 107, 26, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)", opacity: "0.85" },
          "50%": { transform: "translate3d(3%, -4%, 0) rotate(8deg)", opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-r": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "80%": { transform: "scale(1.8)", opacity: "0" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(0.8deg)" },
          "75%": { transform: "rotate(-0.8deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
        "bg-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
