/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#181b21",
        light: "#ffffff",
        primary: "#e09900",
        primaryHover: "#b37a00",
        shadow: "rgba(18,18,23,0.1)",
        grayText: "#f7f7f8",
        blackText: "#121217"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['"Big Shoulders Display"', 'cursive']
      },
      boxShadow: {
        soft: "0 1px 3px rgba(18,18,23,0.1)"
      },
      backdropBlur: {
        sm: '4px'
      },
      zIndex: {
        'modal': '999',
        'nav': '100'
      },
      keyframes: {
        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translateY(90px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        fadeInBottom: 'fadeInBottom 0.7s ease-out forwards',
        scaleHover: 'scaleIn 0.3s ease-in-out forwards'
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
