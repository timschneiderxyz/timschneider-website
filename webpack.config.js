/*  ========================================================================
    # Webpack - Config
    ========================================================================  */

require('dotenv').config();
const path = require('path');

module.exports = {
  urls: {
    dev: process.env.URL_DEV || '/',
    prod: process.env.URL_PROD || '/',
    publicPath: ''
  },
  devServer: {
    host: process.env.DEVSERVER_HOST || '0.0.0.0',
    port: parseInt(process.env.DEVSERVER_PORT, 10) || 8000,
    https: !!process.env.DEVSERVER_HTTPS || false,
    poll: !!process.env.DEVSERVER_POLL || false,
    content: path.resolve(__dirname, process.env.DEVSERVER_CONTENT || 'src')
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@svgs': path.resolve(__dirname, 'src/svgs'),
    '@interfaces': path.resolve(__dirname, 'src/interfaces'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@pages': path.resolve(__dirname, 'src/pages')
  },
  entries: {
    app: ['@/index.tsx', '@/styles/main.scss']
  },
  copy: [
    {
      from: './static',
      to: './',
      noErrorOnMissing: true
    }
  ]
};
