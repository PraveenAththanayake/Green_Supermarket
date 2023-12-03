/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    colors: {
      customGreen: "#53B176",
      darkerGreen: "#09965D",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#848482",
      red: "#D30000",
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "4px",
      md: "8px",
      lg: "10px",
      large: "12px",
      full: "9999px",
    },
    extend: {
      fontSize: {
        xxs: "12px",
        xs: "13px",
        sm: "14px",
        base: "15px",
        lg: "16px",
        xl: "17px",
        "2xl": "18px",
        "3xl": "19px",
        "4xl": "20px",
        "5xl": "24px",
        "6xl": "32px",
        "7xl": "40px",
        "8xl": "48px",
      },
    },
  },
  plugins: [],
};
