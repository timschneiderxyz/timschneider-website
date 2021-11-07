/*  ========================================================================
    # Webpack - Config
    ========================================================================  */

require('dotenv').config();
const path = require('path');

module.exports = {
  urls: {
    dev: process.env.URL_DEV || 'http://localhost:8080/',
    prod: process.env.URL_PROD || 'https://timschneider.xyz/',
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
    app: ['@/index.jsx', '@assets/css/main.scss']
  },

  copy: [
    // Favicons
    {
      from: './src/assets/images/favicons',
      to: './images/favicons',
      noErrorOnMissing: true
    }
  ]
};
