/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xl: '40pt',
      lg: '18pt',
      md: '16pt',
    },
    extend: {
      colors: {
        'lemon-green': '#495E57',
        'lemon-yellow': '#F4CE14',
        'lemon-salmon': '#EE9972',
        'lemon-peach': '#FBDABB',
        'lemon-light-green': '#7d8a86'
      }
    },
    fontFamily: {
      'serif': ['Markazi Text', 'serif'],
      'sans': ['Karla', 'sans-serif'],
    },
  },
  plugins: [],
};
