/*  ========================================================================
    # Webpack - Config
    ========================================================================  */

require('dotenv').config();
const path = require('path');

module.exports = {
  urls: {
    dev: process.env.URL_DEV || 'http://localhost:8080/',
    prod: process.env.URL_PROD || '/',
    publicPath: ''
  },
  devServer: {
    host: process.env.DEVSERVER_HOST || 'localhost',
    port: parseInt(process.env.DEVSERVER_PORT, 10) || 8080,
    https: !!process.env.DEVSERVER_HTTPS || false,
    poll: !!process.env.DEVSERVER_POLL || false,
    content: path.resolve(__dirname, process.env.DEVSERVER_CONTENT || 'src')
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@utils': path.resolve(__dirname, 'src/utils')
  },
  entries: {
    app: ['@/index.tsx', '@assets/css/main.scss']
  },
  copy: [
    // Redirects
    {
      from: './src/_redirects',
      to: './',
      noErrorOnMissing: true
    },
    // robots.txt
    {
      from: './src/robots.txt',
      to: './',
      noErrorOnMissing: true
    },
    // humans.txt
    {
      from: './src/humans.txt',
      to: './',
      noErrorOnMissing: true
    },
    // Favicons
    {
      from: './src/assets/images/favicons',
      to: './images/favicons',
      noErrorOnMissing: true
    }
  ]
};
