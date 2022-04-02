module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#F9F2E9',
        'btn-primary': '#00AEFF',
        'btn-border-primary': '#448EF6',
        'red': "#bfdbfe"
      },
    },
    screens: {
      'md': '640px',
      'lg': '1024px'
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      logo: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}