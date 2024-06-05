/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueviolet: "#9747ff",
        black: "#000",
        gainsboro: "#d9d9d9",
        white: "#fff",
        darkblue: "#1c37c5",
      },
      spacing: {},
      fontFamily: {
        k2d: "K2D",
      },
      borderRadius: {
        mini: "15px",
        "70xl": "89px",
        xl: "20px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lg: "18px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      xlg: {
        max: "4000px",
      },
      llg: {
        max: "2000px",
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
      ssm: {
        max: "365px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
