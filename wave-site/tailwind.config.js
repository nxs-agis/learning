/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {},
  extend: {
    backgroundImage: {
      "home-image": "url('./assets/home-images.png')",
    },
    colors: {
      "text-dark": "#031716",
      "text-light": "#0B7175",
    },
  },
  plugins: [require("flowbite/plugin")],
};
