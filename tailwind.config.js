/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', "sans-serif"],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        primary: "rgba(250, 208, 44, 1)",
        yellow: {
          100: "rgba(250, 208, 44, 0.1)",
          200: "rgba(250, 208, 44, 0.2)",
          300: "rgba(250, 208, 44, 0.3)",
          400: "rgba(250, 208, 44, 0.4)",
          500: "rgba(250, 208, 44, 0.5)",
          600: "rgba(250, 208, 44, 0.6)",
          700: "rgba(250, 208, 44, 0.7)",
          800: "rgba(250, 208, 44, 0.8)",
          900: "rgba(250, 208, 44, 0.9)"
        },
        "custom-black": "#333333"
      }
    },
  },
  plugins: [],
}
