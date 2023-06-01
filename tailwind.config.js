/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'gup-green': '#CDFF00',
      'gup-dark': '#13171A',
      white: '#ffffff'
    }
  },
  daisyui: {
    themes: false
  },
  plugins: [require('daisyui')]
}
