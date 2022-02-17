/*  ========================================================================
    # Webpack - Development
    ========================================================================  */

// Environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Config
const cfg = require('../webpack.config');

// Dependencies
const { merge } = require('webpack-merge');
const { getWebpackModules } = require('./get-webpack-modules');
const base = require('./webpack.base');

module.exports = merge(
  base,
  {
    output: {
      publicPath: cfg.urls.dev,
    },
    devtool: 'eval-source-map',
    devServer: {
      allowedHosts: 'all',
      host: cfg.devServer.host,
      port: cfg.devServer.port,
      https: cfg.devServer.https,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      static: {
        directory: cfg.devServer.content,
        publicPath: '/',
        watch: {
          poll: cfg.devServer.poll,
          ignored: /node_modules/
        }
      },
      hot: true,
      open: false
    }
  },
  getWebpackModules(
    'babel-loader',
    'scss-loader',
    'image-loader',
    'svg-loader',
    'font-loader',
    'copy-plugin',
    'html-plugin',
    'manifest-plugin'
  )
);
