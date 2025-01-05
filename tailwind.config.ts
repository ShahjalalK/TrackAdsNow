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
        secoundary : "#F5467E",
        titleColor : "#141D38",
        bgColor : "#F8F9FB"
      },
      boxShadow: {
        '3xl': '0px 8px 29px 0px #A3C6FF',
        "shadowSk": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }
    },
    fontFamily : {
      Barlow : ["Barlow", "serif"],
      Mulish : ["Mulish", "serif"]
    },
    container : {
      center : true,
      padding : {
        DEFAULT : "12px",
        md : "32px"
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
} satisfies Config;
