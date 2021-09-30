const postcss = require('@deanc/esbuild-plugin-postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcss({
      plugins: [autoprefixer],
    })
  ],
  jest: {
    testEnvironment: 'jsdom'
  },
  target: 'es2017'
};
