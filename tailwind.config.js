/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{html,js}", // Update this based on your file locations
  ],
  theme: {
    extend: {
      colors: {
        bikerPrimary: "#f09d51", // Replace with your color code
      },
    },
  },
  plugins: [],
};
