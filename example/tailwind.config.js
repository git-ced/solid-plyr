/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable global-require */
const colors = require('tailwindcss/colors');

// This is for intellisense purposes.
module.exports = {
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  purge: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      gridTemplateRows: {
        layout: 'auto 1fr',
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  variants: {
    animation: ['motion-safe', 'motion-reduce'],
    aspectRatio: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
