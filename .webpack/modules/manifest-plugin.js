/*  ========================================================================
    # Webpack - Modules - Manifest Plugin
    ========================================================================  */

const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = () => {
  const common = () => ({
    plugins: [
      new WebpackManifestPlugin({
        fileName: 'manifest.json',
        filter: file => {
          return !file.name.match(/^.*sprite\.js|.*images(?!\/svg\/).*|.*\.woff2?$/);
        },
        map: file => {
          file.name = file.name.replace(/^.*sprite\.svg$/, 'sprite.svg');
          return file;
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
