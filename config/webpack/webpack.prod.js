/* eslint-disable @typescript-eslint/no-var-requires */
const commonConfiguration = require('./webpack.common');
const webpackConstants = require('./webpack.constants');
const prodEnv = {
  environment: 'production',
  devtool: 'none',
  output: {
    path: webpackConstants.distPath,
    filename: '[name].[hash].js',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'async',
      maxSize: 200000,
    },
  },
  rules: [
    // Images assets
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
        },
      ],
    },
  ],
};

module.exports = commonConfiguration(prodEnv);
