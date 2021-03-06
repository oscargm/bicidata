/* eslint-disable @typescript-eslint/no-var-requires */
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const consts = require('./webpack.constants');

const commonRules = [
  {
    test: /\.(tsx?)|(js)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: 'css-loader',
      },
    ],
  },
  {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: { name: '[path][name].[ext]' },
      },
    ],
  },
  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      mimetype: 'application/font-woff',
    },
  },
];

const commonPlugins = (env) => {
  return [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
      favicon: consts.assetsPath + '/favicon.ico',
    }),
    new webpack.DefinePlugin({
      ...consts.endpoints,
      'process.env.NODE_ENV': JSON.stringify(env.environment),
    }),
  ];
};

module.exports = (env = {}) => {
  const config = {
    plugins: env.plugins
      ? commonPlugins(env).concat(env.plugins)
      : commonPlugins(env),
    mode: env.environment,
    cache: env.cache,
    context: consts.srcPath,
    devtool: env.devtool,
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        app: consts.srcPath,
        pods: consts.podsPath,
        assets: consts.assetsPath,
        scenes: consts.scenesPath,
      },
    },
    entry: {
      app: [consts.srcPath + '/index.tsx'],
    },
    module: {
      rules: commonRules,
    },
    output: {
      ...env.output,
    },
  };
  if (env.devServer) {
    config.devServer = env.devServer;
  }
  return config;
};
