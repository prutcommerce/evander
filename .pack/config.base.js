module.exports = {
  target: 'node16',
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /\(.yarn\)/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              target: 'es2021',
            }
          }
        }
      },
      {
        test: /\.(graphql)$/,
        exclude: /\(.yarn\)/,
        use: {
          loader: 'raw-loader',
        }
      },
      {
        test: /\.(sql)$/,
        exclude: /\(.yarn\)/,
        use: {
          loader: 'raw-loader',
        }
      },
    ]
  },
  resolve: {
    extensions: [
      '*',
      '.js',
    ],
    alias: {
      src: require('path').resolve(__dirname, '..', 'src'),
      env: require('path').resolve(__dirname, '..', 'env'),
    },
    fallback: {}
  },
  plugins: [
    new (require('copy-webpack-plugin'))({
      patterns: [
        {
          from: 'env',
          to: 'env',
          filter: path => path.endsWith('.json')
        },
      ]
    }),
  ],
  externals: {
    'pg-hstore': 'pg-hstore',
  },
  output: {
    path: require('path').resolve(__dirname, '..', '.dist'),
    filename: '[name].js',
    clean: true,
  },
  stats: {
    warnings: false
  }
}
