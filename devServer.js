"use strict";

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.dev");

const { PORT = 3000 } = process.env;

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true
  }
});
const devServer = new WebpackDevServer(compiler, devServerOptions);

devServer.listen(PORT, () => {
  console.log("Starting devServer on http://localhost:" + PORT);
});
