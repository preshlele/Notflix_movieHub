/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(3,37,65)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
