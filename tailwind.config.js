// const { ms } = require('date-fns/locale');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#232323',
      white: '#fff',
      platinum: '#ebeae9',
      rose: '#b19691',
      onyx: '#45424b',
      jet: '#38353b',
      yellow: 'yellow',
    },
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      transitionDuration: {
        DEFAULT: '500ms',
      },
    },
  },
  plugins: [],
};
