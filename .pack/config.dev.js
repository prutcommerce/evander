module.exports = require('webpack-merge').merge(require('./config.base'), {
  mode: 'development',
  devtool: 'source-map',
  stats: 'errors-only',
  watch: true,
})
