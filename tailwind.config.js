/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#11111942',
        'cream': '#FFE4A7'
      }
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
