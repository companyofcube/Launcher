/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{ts,tsx}", "index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ffffea",
          100: "#fffcc5",
          200: "#fffa85",
          300: "#fff046",
          400: "#ffe21b",
          500: "#ffc300",
          600: "#e29700",
          700: "#bb6b02",
          800: "#985308",
          900: "#7c430b",
          950: "#482300",
        },
        secondary: {
          50: "#fbf4ff",
          100: "#f5e5ff",
          200: "#ecd0ff",
          300: "#deaaff",
          400: "#c974ff",
          500: "#b640ff",
          600: "#a31bff",
          700: "#920ceb",
          800: "#780fba",
          900: "#630e95",
          950: "#430070",
        },
        brown: "#22130F",
        taupe: "#8E694F",
        grayBrown: "#504137",
        customSilver: "#cacaca",
      },
      fontFamily: {
        heading: ["Eczar"],
      },
      spacing: {
        84: "22.5rem",
        128: "32rem",
      },
      translate: {
        "full-no-glitch": "110%",
      },
      screens: {
        uw: "1921px",
      },
      boxShadow: {
        yellow: "0 0 15px 5px rgba(255, 223, 0, 0.6)",
      },
    },
  },
}
