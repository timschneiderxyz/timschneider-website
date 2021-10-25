/*  ========================================================================
    # Webpack - Modules - Image Loader
    ========================================================================  */

module.exports = () => {
  const common = () => ({
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|webp)$/,
          exclude: /node_modules/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]'
          }
        }
      ]
    }
  });

  const configs = () => ({
    development: {
      ...common()
    },
    production: {
      ...common()
    }
  });

  return configs()[process.env.NODE_ENV];
}
