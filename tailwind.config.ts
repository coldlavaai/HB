import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2332',
          light: '#2D3748',
          dark: '#0F1419',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C766',
          dark: '#B8941F',
        },
        teal: {
          DEFAULT: '#2C7A7B',
          light: '#319795',
          dark: '#285E61',
        },
        cream: {
          DEFAULT: '#F7F3E9',
          light: '#FDFBF7',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-commodity': 'linear-gradient(135deg, #1A2332 0%, #2C7A7B 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
