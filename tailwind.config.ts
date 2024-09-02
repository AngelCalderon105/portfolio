import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px', // Adding a 1px border width utility
        // Add other custom border widths here if needed
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
      },
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
