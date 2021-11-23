/*  ========================================================================
    # Webpack - Base
    ========================================================================  */

// Configs
const pkg = require('../package.json');
const cfg = require('../webpack.config');

// Node
const path = require('path');

module.exports = {
  name: pkg.name,
  mode: process.env.NODE_ENV,
  entry: cfg.entries,
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'js/[name].min.[contenthash].js'
  },
  resolve: {
    alias: cfg.alias,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  stats: {
    all: false,
    colors: true,
    warnings: true,
    errors: true,
    assets: true,
    groupAssetsByPath: true,
    builtAt: true,
    timings: true
  }
}
