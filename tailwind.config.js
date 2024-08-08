/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, Arial, sans-serif',
      },
      colors: {
        primary: {
          900: '#5D5FEF',
          800: '#4079ED',
          300: '#F1F8FD',
          200: '#7B91B0',
          'dark-shade': '#05004E',
        },
        secondary: {
          900: '#FC7D4C',
          800: '#FF966C',
          700: '#FFF3EF',
        },
        blueGray: {
          100: '#FFFFFF',
          200: '#FCFDFF',
          300: '#F9FAFB',
          400: '#E8E8ED',
          500: '#D0D2DA',
          600: '#A1A5B6',
          700: '#737791',
          800: '#444A6D',
          900: '#151D48',
        },
        support: {
          green: '#3CD856',
          'green-shade': '#E2FFF3',
          yellow: '#FFA412',
          'yellow-shade': '#FEF6E6',
          violet: '#A700FF',
          'violet-shade': '#FBF1FF',
          pink: '#FF74C4',
          'pink-shade': '#FFF1FE',
        },
        state: {
          info: '#2F80ED',
          success: '#27AE60',
          warning: '#EFBE27',
          error: '#EB5757',
        },
      },
      dropShadow: {
        sideBar: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
