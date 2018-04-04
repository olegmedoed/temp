const path = require("path");

module.exports = {
  name: "client",
  mode: "development",
  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
