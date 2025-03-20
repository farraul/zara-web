import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#4D4E5F',
        secondary: '#62605F;',
        third: '#CCCCCC',
        fourth: '#F0E1B9',
        fifth: '#ffffff',
      },
      colors: {
        primary: '#4D4E5F',
        secondary: '#62605F;',
        third: '#CCCCCC',
        fourth: '#F0E1B9',
        fifth: '#ffffff',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
