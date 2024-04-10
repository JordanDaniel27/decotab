/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {},
      fontSize: {
        text12: "12px",
        text16: "16px",
      },
      backgroundColor: {
        colorBackgroundHeader: "#21201E",
        colorBackgroundMainTop: "#21201E",
        colorBackgroundProducts: "#F8F6F2",
        colorBackgroundNewProduct: "#38CB89",
      },
      textColor: {
        colorTextBlack: "#151515",
      },
      borderColor: {
        colorBorder: "#151515",
      },
      backgroundImage: {
        "close-menu": "url(../images/prueba/icon-close.svg)",
        "open-menu": "url(../images/prueba/icon-hamburger.svg)",
      },
    },
    screens: {
      xs: "320px",
      "2xs": "370px",
      sm: "640px",
      md: "768px",
      "2md": "980px",
      lg: "1024px",
      "2lg": "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
