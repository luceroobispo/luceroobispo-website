/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
    colors: {
      pink_dark: '#EF558B',
      pink_dark2: '#F16497',
      pink_light: '#F37AA5',
      purple_medium: '#E3D7EA',
      purple_light: '#F5E8F3',
      yellow_light: '#FBFFAF', 
      transparent: 'transparent',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};