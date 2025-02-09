import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#112240',
        primary: '#64FFDA',
        secondary: '#FFFFFF',
        blue: {
          100: '#CCD6F6',
          200: '#8892C0',
          300: '#7C8CC4',
          400: '#5965A3',
          500: '#334155',
          600: '#1E293B',
          700: '#0F172A',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
