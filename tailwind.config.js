/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(180px, 1fr))',
        'auto-fit-sm': 'repeat(auto-fit, minmax(150px, 1fr))',
        'auto-fit-card': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fit-stats': 'repeat(auto-fit, minmax(360px, 1fr))',
      },
    },
  },
  plugins: [],
};
