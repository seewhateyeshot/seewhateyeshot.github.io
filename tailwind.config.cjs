/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /dark:/,
      variants: ['hover', 'focus', 'responsive'],

    },
    'text-blue-600',
    'hover:text-blue-800',
    'dark:text-blue-300',
    'dark:hover:text-blue-400',
  ],
};