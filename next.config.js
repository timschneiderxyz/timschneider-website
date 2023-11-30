/*  ========================================================================
    # Next.js - Config
    ========================================================================  */

/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,
  webpack(config) {
    // Modify the next image loader to ignore *.svg files.
    const nextImageLoader = config.module.rules.find(rule => rule.test?.test?.('.svg'));
    nextImageLoader.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [
        {
          loader: '@svgr/webpack'
        }
      ]
    });

    return config;
  }
};
