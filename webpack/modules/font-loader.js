/*  ========================================================================
    # Webpack - Modules - Font Loader
    ========================================================================  */

module.exports = () => {
  const common = () => ({
    module: {
      rules: [
        {
          test: /\.(woff2?|eot|ttf)$/,
          exclude: /node_modules/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
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

