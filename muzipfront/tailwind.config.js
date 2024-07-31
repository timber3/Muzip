/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        btCr: '#909090',
        title: '#4471F2',
      },
      borderWidth: {
        1: '1px',
      },
      fontSize: {
        title: '28px',
      },
      height: {
        18: '72px',
      },
    },
  },
  plugins: [],
};
