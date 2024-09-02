import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: 
    {
      letterSpacing: {
        tightest: '-0.04em',  
      },
      borderWidth: {
        '1': '1px', 
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
        satoshi_medium: 'Satoshi-Medium',
        satoshi_italic: 'Satoshi-BoldItalic',
        instrument_italic: 'var(--font-instrument-serif)',
      },
    },
  },
  plugins: [],
};
export default config;
