/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(25, 97%, 53%)",
        },
        body: {
          400: "hsl(217, 12%, 63%)",
          700: "hsl(213, 19%, 18%)",
          900: "hsl(216, 12%, 8%)",
        },
      },
      fontFamily: {
        sans: ['"Overpass"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
