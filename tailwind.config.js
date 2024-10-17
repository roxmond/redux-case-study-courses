/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phones': '640px',
      'tablets': '768px',
      'monitors': '1024px',
    },
    extend: {},
  },
  plugins: [],
};

