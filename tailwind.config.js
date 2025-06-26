/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
        colors: {
            primary: '#1a1a2e',
            secondary: '#0d0d1a',
            accent: '#00a8ff',
            'accent-dark': '#0077b6',
            text: '#ffffff',
            'card-bg': 'rgba(13, 13, 26, 0.8)',
        },
        animation: {
            float: 'float 6s ease-in-out infinite',
            pulse: 'pulse 2s infinite',
            rotate: 'rotate 20s linear infinite',
            fadeInUp: 'fadeInUp 1s ease-out',
            slideDown: 'slideDown 0.5s ease-out',
        },
        keyframes: {
            float: {
                '0%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' },
                '100%': { transform: 'translateY(0px)' },
            },
            pulse: {
                '0%': { opacity: '0.6' },
                '50%': { opacity: '1' },
                '100%': { opacity: '0.6' },
            },
            rotate: {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
            },
            fadeInUp: {
                from: { opacity: '0', transform: 'translateY(50px)' },
                to: { opacity: '1', transform: 'translateY(0)' },
            },
            slideDown: {
                from: { transform: 'translateY(-100%)' },
                to: { transform: 'translateY(0)' },
            }
        }
    },
  },
  plugins: [],
}