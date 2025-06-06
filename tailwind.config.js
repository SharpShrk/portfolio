/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./projects/**/*.{html,vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-gradient-start': '#6d9eeb',
        'primary-gradient-end': '#3b82f6'
      }
    }
  },
  plugins: []
}