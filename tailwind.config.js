export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C4152',
        secondary: '#4A5568',
        accent: '#D53F8C',
        neutral: '#F7FAFC',
        dark: '#1A202C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}