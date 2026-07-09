/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#08090d",
        obsidian: "#0b0d12",
        charcoal: "#11141b",
        graphite: "#1b1f29",
        smoke: "#9aa4b2",
        ash: "#d9d3c8",
        ivory: "#f5efe4",
        parchment: "#eee7dc",
        gold: "#c7a45b",
        champagne: "#e2c980",
        wine: "#4a1118",
        blood: "#7d1d24",
        navy: "#0a1220",
      },
      boxShadow: {
        premium: "0 30px 100px rgba(0,0,0,.42)",
        soft: "0 24px 70px rgba(0,0,0,.18)",
        gold: "0 0 70px rgba(199,164,91,.18)",
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        slowSpin: "slowSpin 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".28" },
          "50%": { opacity: ".72" },
        },
        slowSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
