

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        motviolt: {
          50: '#3E00FF',
          100: '#3B00F2',
          200: '#3800E6',
          300: '#3500D9',
          400: '#3200CC',
          500: '#2F00BF',
          600: '#2B00B3',
          700: '#2800A6',

        },
        motteal: {
          50: '#D6FFEA',
          100: '#D3FFE8',
          200: '#CFFFE6',
          300: '#CBFFE4',
          400: '#C8FFE3',
          500: '#C4FFE1',
          600: '#C0FFDF',
          700: '#BCFFDD',
          800: '#B9FFDB',
          900: '#B5FFD9',
        },

        motdark: {
          700: '#170055',
      },

      backgroundImage: {
        
      },
    },
  },
  plugins: [],
  }
}
