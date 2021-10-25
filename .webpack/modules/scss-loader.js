/*  ========================================================================
    # Webpack - Modules - SCSS Loader
    ========================================================================  */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const common = (loader, postcssPlugins) => ({
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                import: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    ['tailwindcss', {}],
                    ...postcssPlugins
                  ]
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  });

  const configs = () => ({
    development: {
      ...common(
        // Loader
        { loader: 'style-loader' },
        // PostCSS Plugins
        []
      )
    },
    production: {
      ...common(
        // Loader
        { loader: MiniCssExtractPlugin.loader },
        // PostCSS Plugins
        [
          ['autoprefixer', {}]
        ]
      ),
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'css/[name].min.[contenthash].css'
        })
      ]
    }
  });

  return configs()[process.env.NODE_ENV];
}
