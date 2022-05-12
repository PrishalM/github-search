const path = require("path");
const config = require("./webpack.config.js");

config.devServer = {
  historyApiFallback: true,
  contentBase: path.resolve("src"),
  port: 8080,
  hot: true,
  open: true,
  watchContentBase: true,
};

config.devtool = "inline-source-map";

module.exports = config;
