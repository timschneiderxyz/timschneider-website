/*  ========================================================================
    # Webpack - Modules - HTML Plugin
    ========================================================================  */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const common = () => ({
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          preserveLineBreaks: true,
          minifyCSS: false,
          minifyJS: false
        }
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
