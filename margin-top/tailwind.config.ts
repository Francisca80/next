import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        bounceIn: {
          '0%': { 
            transform: 'translateY(50px)',
            opacity: '0'
          },
          '60%': { 
            transform: 'translateY(-10px)',
            opacity: '0.8'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
