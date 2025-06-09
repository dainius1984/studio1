/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'checkmark-draw': {
          '0%': { 
            strokeDashoffset: '100',
            opacity: '0'
          },
          '100%': { 
            strokeDashoffset: '0',
            opacity: '1'
          }
        },
        'success-circle': {
          '0%': { 
            transform: 'scale(0)',
            opacity: '0'
          },
          '50%': { 
            transform: 'scale(1.2)',
            opacity: '0.5'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-up-delayed': 'slide-up 0.3s ease-out 0.1s',
        'checkmark-draw': 'checkmark-draw 0.5s ease-out forwards',
        'success-circle': 'success-circle 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

