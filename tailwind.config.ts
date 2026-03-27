import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0071e3",
        "primary-hover": "#0077ED",
        "primary-light": "#E8F0FE",
        background: "#f5f5f7",
        "background-dark": "#f5f5f7",
        card: "#ffffff",
        text: {
          primary: "#1d1d1f",
          secondary: "#86868b",
          tertiary: "#5e5e63"
        },
        border: "#d2d2d7"
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "card": "1.25rem",
        "button": "0.75rem",
        "sidebar": "1rem"
      },
      boxShadow: {
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        "card-hover": "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "sidebar": "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-in-up": "fadeInUp 0.3s ease-out",
        "slide-in-left": "slideInLeft 0.3s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "expand": "expand 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
        "collapse": "collapse 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
        "float": "float 6s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        expand: {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "var(--expanded-height)", opacity: "1" }
        },
        collapse: {
          "0%": { height: "var(--expanded-height)", opacity: "1" },
          "100%": { height: "0", opacity: "0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
