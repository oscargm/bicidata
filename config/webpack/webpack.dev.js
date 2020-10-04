/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const commonConfiguration = require('./webpack.common');
const webpackConstants = require('./webpack.constants');

const devEnv = {
  environment: 'development',
  devtool: 'source-map',
  cache: true,
  output: {
    path: webpackConstants.buildPath,
    filename: '[name].js',
  },
  devServer: {
    contentBase: webpackConstants.buildPath,
    inline: true,
    https: false,
    host: 'localhost',
    port: 4300,
    stats: 'minimal',
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: 'dev.env',
    }),
  ],
};

module.exports = commonConfiguration(devEnv);
