import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primeColor: "#c3b9b7",
        lightText: "#47294c",
      },
    },
  },
  plugins: [],
};
export default config;
