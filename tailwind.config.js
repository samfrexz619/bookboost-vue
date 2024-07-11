const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      // screens: {
      //   "2xl": "1400px",
      // },
    },
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
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
}