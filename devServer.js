'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.dev');

const {PORT} = process.env;

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true
  }
});
const devServer = new WebpackDevServer(compiler, devServerOptions);

devServer.listen(3000, '127.0.0.1', () => {
  console.log('Starting devServer on http://localhost:' + PORT);
});

