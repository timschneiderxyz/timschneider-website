/*  ========================================================================
    # Get Webpack Modules
    ========================================================================  */

// Dependencies
const path = require('path');
const { merge } = require('webpack-merge');

/**
 * Looks for webpack modules by the given names, merges them together and
 * returns a webpack configuration object.
 *
 * @param {string} names
 * @returns {{}}
 */
exports.getWebpackModules = (...names) => {
  const pathModules = path.resolve(process.cwd(), '.webpack/modules');
  let config = {};

  names.forEach((name) => {
    config = merge(config, require(path.join(pathModules, name))());
  });

  return config;
};
