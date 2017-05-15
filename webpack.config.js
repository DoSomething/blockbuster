require('dotenv').config();
const isProd = process.env.NODE_ENV === 'production';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devtool = !isProd ? 'source-map' : '';

const buildModule = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: 'babel-loader',
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      }),
    },
  ],
};

const plugins = [
  new ExtractTextPlugin({
    filename: 'public/main.css',
    allChunks: true,
  })
];

module.exports = {
  entry: ['whatwg-fetch', './client/index.js'],
  output: {
    filename: './public/main.min.js',
  },
  devtool,
  module: buildModule,
  plugins
};
