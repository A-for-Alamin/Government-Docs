/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D2FF",
        secondary: "#2D2D2D",
        accent: "#666666"
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(180deg, #00d2ff 0%, #059dbe 100%)",
        "gradient-secondary": "linear-gradient(161.45deg, #00d2ff 5.54%, #9aedff 59.11%)",
      },
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"' , "sans-serif"],
        "nunito-sans": ['"Nunito Sans"', "sans-serif"],
      },
      boxShadow: {
        card: "0px 10px 30px 0px #02b6dc26",
      },
    },
  },
  plugins: [],
}

