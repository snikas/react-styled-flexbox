const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/demo/index',
  output: {
    filename: 'demo.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: './index.html'
    }),
  ],
  module : {
    loaders : [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src/demo/')
      },
    ]
  }
};