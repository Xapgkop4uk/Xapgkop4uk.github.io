const webpack = require('webpack')

module.exports = {
  entry:  './src/index.jsx',
  output: {
    path:       `${__dirname}/public`,
    publicPath: '/',
    filename:   'bundle.js'
  },
  module: {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:     ['babel-loader']
      },
      {
        test: /\.scss$/,
        use:  [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:    /\.svg$/,
        loader:  require.resolve('url-loader'),
        options: {
          limit: 10000
        }
      }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot:         true
  }
}
