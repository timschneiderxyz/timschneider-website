/*  ========================================================================
    # Webpack - Modules - Babel Loader
    ========================================================================  */

module.exports = () => {
  const common = () => ({
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    corejs: {
                      version: 3,
                      proposals: true
                    },
                    useBuiltIns: 'usage'
                  }
                ],
                '@babel/react'
              ],
              plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime']
            }
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
