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
        '93%': '93%',
        '350': '350px',
      },
      colors: {
        'grey1': '#F9FAFB',
        'grey2': '#8899A8',
        'grey3': '#4B5563',
        'grey4': '#9CA3AF',
        'grey9': '#6B7280',
        'pry': '#3758F9',
        'blue1': '#2D68F8',
        'black1': '#111928',
        'black2': '#1F2A37',
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '40': '40px',
        '48': '48px',
      },
      borderRadius: {
        '10': '10px',
        '20': '20px',
      }
    },
  },
  plugins: [],
}

