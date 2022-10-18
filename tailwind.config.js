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
        primary: "#FFF507",
        yellow: {
          100: "rgba(255, 245, 7, 0.1)",
          200: "rgba(255, 245, 7, 0.2)",
          300: "rgba(255, 245, 7, 0.3)",
          400: "rgba(255, 245, 7, 0.4)",
          500: "rgba(255, 245, 7, 0.5)",
          600: "rgba(255, 245, 7, 0.6)",
          700: "rgba(255, 245, 7, 0.7)",
          800: "rgba(255, 245, 7, 0.8)",
          900: "rgba(255, 245, 7, 0.9)"
        },
        // primary: "#00F0FF",
        // yellow: {
        //   100: "rgba(0, 240, 255, 0.1)",
        //   200: "rgba(0, 240, 255, 0.2)",
        //   300: "rgba(0, 240, 255, 0.3)",
        //   400: "rgba(0, 240, 255, 0.4)",
        //   500: "rgba(0, 240, 255, 0.5)",
        //   600: "rgba(0, 240, 255, 0.6)",
        //   700: "rgba(0, 240, 255, 0.7)",
        //   800: "rgba(0, 240, 255, 0.8)",
        //   900: "rgba(0, 240, 255, 0.9)"
        // },

        "custom-black": "#333333"
      }
    },
  },
  plugins: [],
}
