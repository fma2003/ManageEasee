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
        skyblue: "#1098f7"
      },
      spacing: {},
      fontFamily: {
        k2d: "K2D",
      },
      borderRadius: {
        xl: "20px",
        "70xl": "89px",
        mini: "15px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "2xl": "20px",
      lg: "18px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
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
    },
  },
  corePlugins: {
    preflight: false,
  },
};
