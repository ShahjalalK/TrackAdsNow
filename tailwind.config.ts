import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
      sm : "340px",
      md : "540px",
      lg : "768px",
      xl : "1180px"
    },
    extend: {
    },
    fontFamily : {
      Jost : ["Jost", "serif"],
      Lobster : ["Lobster", "serif"]
    },
    container : {
      center : true,
      padding : {
        DEFAULT : "12px",
        md : "32px"
      }
    }
  },
  plugins: [],
} satisfies Config;
