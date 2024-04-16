/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // plugins: [require("daisyui", "tailgrids/plugin")],
  plugins: [
    require('daisyui'),
    require('tailgrids/plugin'), // Import the tailgrids/plugin here
    // Add other Tailwind CSS plugins here if needed
  ],

}

 