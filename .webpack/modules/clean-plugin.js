/*  ========================================================================
    # Webpack - Modules - Clean Plugin
    ========================================================================  */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
  const common = () => ({
    plugins: [
      new CleanWebpackPlugin({
        verbose: false,
        dry: false
      })
    ]
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
