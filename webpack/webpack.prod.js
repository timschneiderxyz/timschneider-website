/*  ========================================================================
    # Webpack - Production
    ========================================================================  */

// Environment
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Config
const cfg = require('../webpack.config');

// Dependencies
const { merge } = require('webpack-merge');
const { getWebpackModules } = require('./get-webpack-modules');
const base = require('./webpack.base');

// Plugins
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(
  base,
  {
    output: {
      publicPath: cfg.urls.prod + cfg.urls.publicPath,
    },
    devtool: 'source-map',
    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          extractComments: false,
          terserOptions: {
            keep_fnames: false,
            keep_classnames: true,
            format: {
              comments: false
            }
          }
        }),
        new CssMinimizerPlugin({})
      ]
    }
  },
  getWebpackModules(
    'babel-loader',
    'scss-loader',
    'image-loader',
    'svg-loader',
    'font-loader',
    'clean-plugin',
    'copy-plugin',
    'html-plugin',
    'manifest-plugin'
  )
);
