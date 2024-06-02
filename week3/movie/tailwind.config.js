/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        md: "910px",
      },
      colors: {
        logo: "#de0913",
      },
      keyframes: {
        fadeOut: {
          "0%": {
            backgroundColor: "rgba(0,0,0,1)",
          },
          "10%": {
            backgroundColor: "rgba(0,0,0,0)",
          },
          "90%": {
            backgroundColor: "rgba(0,0,0,0)",
          },
          "100%": {
            backgroundColor: "rgba(0,0,0,1)",
          },
        },
      },
      animation: {
        fadeOut: "fadeOut 30s linear infinite",
      },
    },
  },
  plugins: [],
};
