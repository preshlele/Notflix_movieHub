/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        presh: "rgb(3,37,65)",
      },
      screens: {
        phone: "375px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
