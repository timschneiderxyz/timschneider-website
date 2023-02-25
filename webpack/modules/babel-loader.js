/*  ========================================================================
    # Webpack - Modules - Babel Loader
    ========================================================================  */

module.exports = () => {
  const common = () => ({
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
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
                [
                  '@babel/preset-typescript',
                  {
                    allExtensions: true,
                    isTSX: true
                  }
                ],
                '@babel/preset-react'
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
