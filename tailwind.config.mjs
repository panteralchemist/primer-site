/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Pulled from the navy used on your CV section headings
        ink: {
          50:  '#f5f7fa',
          100: '#e7ecf2',
          200: '#c8d2df',
          300: '#9eaec1',
          500: '#4a6585',
          700: '#2a4060',
          800: '#1e3a5f', // primary navy
          900: '#13243d',
        },
        paper: '#fafaf7', // warm off-white background
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
