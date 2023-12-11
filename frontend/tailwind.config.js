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
      lightGray: "#F8F8F8",
      black: "#000000",
      gray: "#848482",
      gray2: "#D9D9D9",
      red: "#D30000",
      yellow : "#FDCC0D",
      
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      default: "4px",
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
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
      17: "17",
      18: "18",
      19: "19",
      20: "20",
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
