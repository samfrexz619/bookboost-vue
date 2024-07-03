/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '13': '52px',
        '21': '88px',
        '70px': '70px',
        '88%': '88%',
      },
      colors: {
        'grey1': '#F9FAFB',
        'grey9': '#6B7280',
        'pry': '#3758F9',
        'blue1': '#2D68F8',
        'black1': '#111928',
        'black2': '#1F2A37',
      },
      fontSize: {
        '16': '16px',
        '40': '40px',
        '48': '48px',
      },
      borderRadius: {
        '20': '20px',
      }
    },
  },
  plugins: [],
}

