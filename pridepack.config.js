const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, _) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        extract: true,
        extract: 'lion-skin.min.css',
      })
    );
    return config;
  },
  jest: {
    testEnvironment: 'jsdom'
  },
  target: 'es2017'
};
