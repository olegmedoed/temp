const webpack = require("webpack");
const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  name: "client",
  mode: "development",
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",

    path.join(__dirname, "src/index.tsx")
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
    publicPath: "/"
  },
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    // respond to 404s with index.html
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader", options: { transpileOnly: true } }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),

    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      watch: ["./src"] // optional but improves performance (fewer stat calls)
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
