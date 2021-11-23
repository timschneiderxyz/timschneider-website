/*  ========================================================================
    # Webpack - Modules - Copy Plugin
    ========================================================================  */

const cfg = require('../../webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
  const common = () => ({
    plugins: [
      new CopyWebpackPlugin({
        patterns: cfg.copy
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
