module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        accent: '#10b981',
        neutral: '#f3f4f6',
        card: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
