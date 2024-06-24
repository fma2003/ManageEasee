/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gainsboro: "#d9d9d9",
        white: "#fff",
        darkblue: "#1c37c5",
        blueviolet: "#9747ff",
        skyblue: "#1098f7",
        gray: {
          "100": "#282424",
          "200": "#121216",
          "400": "#050506",
        },
        dodgerblue: "#0496f7",
        darkgreen: "#04550c",
        maroon: "#550404",
      },
      spacing: {},
      fontFamily: {
        k2d: "K2D",
        "kdam-thmor": "'Kdam Thmor'",
      },
      borderRadius: {
        xl: "20px",
        "70xl": "89px",
        "8xs": "5px",
        mini: "15px",
        "3xs": "10px",
        "6xl": "25px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "5xl": "24px",
      "2xl": "20px",
      lg: "18px",
      xl: "20px",
      "29xl": "48px",
      "21xl": "40px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      xlg: {
        max: "2400px",
      },
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      xs: {
        max: "375px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
