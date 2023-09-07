/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('../client/src/assets/login/user (2).png')",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
