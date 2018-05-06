const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src')
}

const environment = process.env.NODE_ENV || 'production'
console.log('Webpack environment :: ', environment)

module.exports = {
  mode: environment,

  entry: path.join(paths.SRC, 'index.js'),

  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${environment}"`
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
}
