/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#FFF',
      'dark_green': '#005816',
      'green': '#00FF00',
      'light_green': '#ACFF99',
      'purple': '#4C0788',
      'dark_purple': '#20033A',
      'gray': '#EAF6FF',
      'dark_gray':'#222222',
      'yellow': '#FFA400',
      'hover': '#707070',
      'red':'#FF0000'
    }
  },
  plugins: [],
}