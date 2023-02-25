/*  ========================================================================
    # Webpack - Modules - SVG Loader
    ========================================================================  */

module.exports = () => {
  const common = () => ({
    module: {
      rules: [
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: [
            {
              loader: '@svgr/webpack'
            }
          ]
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
