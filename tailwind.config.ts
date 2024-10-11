import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor: {
        'custom-blue': 'radial-gradient(circle, rgba(79,130,227,1) 0%, rgba(177,212,255,1) 100%)',   
        'custom-green': 'radial-gradient(circle, rgba(73,174,92,1) 0%, rgba(184,216,190,1) 100%)',   
        'custom-pink': 'radial-gradient(circle, rgba(208,83,96,1) 0%, rgba(242,189,189,1) 100%)', 
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config