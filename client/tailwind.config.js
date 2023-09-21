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
      colors: {
        swift: '[#00756a',
        second: {
          100: '#E2E8F0',
          200: '#CBD5E0',
          300: '#A0AEC0',
          // Define more shades as needed
        },
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
