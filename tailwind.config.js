/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: { 
    colors: {
      'almost-white': 'hsl(0, 0%, 98%)',
      'medium-gray': 'hsl(0, 0%, 41%)',
      'almost-black': 'hsl(0, 0%, 8%)',
    },
    fontFamily: {
      epilogue: ['\'Epilogue\'', 'sans-serif'],
    },
    extend: {
      screens: {
        md: '800px'
      },
    },
  },
  plugins: [],
}

