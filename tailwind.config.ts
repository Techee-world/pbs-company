import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "button-gradient":
          " linear-gradient(240deg, rgba(161,169,255,1) 0%, rgba(93,94,245,1) 100%)", 
          "banner-gradient":
          " linear-gradient(325deg, rgba(255,255,255,1) 9%, rgba(222,222,250,1) 100%)", 
      },
    },
  },
  plugins: [],
};
export default config;
