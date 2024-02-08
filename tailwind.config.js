/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#0b0f18",
        white: "#fff",
        darkgray: "#8fa8b1",
        darkturquoise: "#22c6c6",
        aquamarine: "#50f6d8",
        turquoise: "#29d2b4",
        paleturquoise: "#7ee5ee",
      },
      spacing: {},
      fontFamily: {
        impact: "Impact",
        montserrat: "Montserrat",
        nunito: "Nunito",
        quantico: "Quantico",
        gudea: "Gudea",
        oswald: "Oswald",
        khula: "Khula",
        audiowide: "Audiowide",
        "wendy-one": "'Wendy One'",
      },
      borderRadius: {
        xl: "20px",
        "10xl": "29px",
      },
    },
    fontSize: {
      "82xl": "101px",
      "13xl": "32px",
      "21xl": "40px",
      "11xl": "30px",
      "19xl": "38px",
      base: "16px",
      lg: "18px",
      "7xl": "26px",
      "54xl": "73px",
      "100xl": "119px",
      "7xl-5": "26.5px",
      "3xl": "22px",
      "57xl": "76px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
