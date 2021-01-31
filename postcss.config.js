/** 
 * Postcss kills Snowpack's performance.  Since it's only being used for
 * minification, we can disable it for dev builds.
 * 
 * @SEE https://stackoverflow.com/questions/53776957/webpack-4-conditionally-enabling-postcss-plugins
 */

const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = ({ env }) => ({
  plugins: [
    // env === 'production' ? require('cssnano')({preset: 'default'}) : false,
    cssnano(),
    // env === 'production' ? require('postcss-preset-env')() : false
    postcssPresetEnv()
  ],
});