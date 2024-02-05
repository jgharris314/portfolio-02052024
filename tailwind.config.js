/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mothPurple: {
          0: "#7338ab",
        },
        mothGreen: {
          0: "#2cfc04",
        },
        mothGrey: {
          0: "#dddae0",
        },
        mothOrange: {
          0: "#f2a508",
        },
        mothBlack: {
          0: "#13051f",
        },
      },
    },
  },
  plugins: [],
}
