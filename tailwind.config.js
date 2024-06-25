/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class" /** @type Apply dark:classes */,
  content: [
    "./index.html" /* Default */,
    "./src/**/*.{vue,js,ts,jsx,tsx}" /* Default */,
    "./node_modules/flowbite/**/*.js" /* Flowbite Library */,
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0095f6" /** @type Official Instagram Button Color */,
        primaryHover: "#1C64F2" /** @type Official Tailwind Blue-600 Color */,
        igo: "#FBBF00" /** @type Official Instagram Story-Ring Gradient-Orange-Color */,
        igp: "#d62976" /** @type Official Instagram Story-Ring Gradient-Pink-Color */,
        imageHover: "#0000004d" /** @author shahbazahmad0987654321@gmail.com */,
      },
    },
  },
  plugins: [require("flowbite/plugin")] /* Flowbite Library */,
};
