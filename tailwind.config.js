/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/pages/components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors:{
      'black': '#000000',
      'white': '#FFFFFF',
    }
  },
  plugins: [],
}
