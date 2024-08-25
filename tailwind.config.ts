import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        heading: '#F5F5F8',
        text:'#ABABAB',
        ui:'#0D0D0D',
        border: '#FFFFFF',
        accent: '#292929'        
      },
      fontFamily: {
       
        medium: 'Satoshi-Medium',
      },
    },
  },
  plugins: [],
};
export default config;
