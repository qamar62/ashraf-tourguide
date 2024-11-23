/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'adventure-green': {
          50: '#e6f3e6',
          100: '#c2e0c2',
          200: '#9acc9a',
          300: '#71b871',
          400: '#4da64d',
          500: '#2b932b',
          600: '#268326',
          700: '#1f721f',
          800: '#196219',
          900: '#125212'
        },
        'adventure-amber': {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff9800',
          600: '#fb8c00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100'
        }
      }
    },
  },
  plugins: [],
}
