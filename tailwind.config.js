module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'brand': "#19857b",
        'brand-deep': "#037c70",
      },
      height: {
        'video': "34rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
