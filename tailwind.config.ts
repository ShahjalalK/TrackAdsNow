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
      colors : {
        primary : "#684DF4",
        titleColor : "#141D38"
      },
      boxShadow: {
        '3xl': '0px 8px 29px 0px #A3C6FF',
      }
    },
    fontFamily : {
      Barlow : ["Barlow", "serif"],
      Roboto : ["Roboto", "serif"]
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
