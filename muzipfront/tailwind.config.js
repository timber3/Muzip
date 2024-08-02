/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        btCr: '#909090',
        titleCr: '#4471F2',
        nameCr: '#42424',
      },
      borderWidth: {
        1: '1px',
      },
      fontSize: {
        title: '28px',
        btn: '16px',
      },
      height: {
        18: '72px',
        3000: '750px',
      },
      width: {
        1.5: '37%',
      },
    },
  },
  plugins: [],
};
