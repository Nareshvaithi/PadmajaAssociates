/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-x': 'bounceX 0.6s ease-in-out infinite',
        scroll:'scroll 20s linear infinite',
        beat: 'beat 1s infinite',
      },
      keyframes: {
        scroll:{
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-500%)' },
        },
        bounceX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(8px)' },
        },
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      colors:{
        "darkblue":"#0a2b6d",
        "gold":"#d9a53c",
        "litegold":"#fbf6eb"
      },
      fontFamily:{
        "headfont":["Cormorant Garamond", "serif"],
        "contentfont":["Raleway", "sans-serif"],
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "4rem"
      },
    },
  },
  plugins: [],
}

