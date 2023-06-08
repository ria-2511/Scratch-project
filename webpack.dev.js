const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge([
  common,
  {
    mode: "development",
    performance: {
      hints: false,
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },
  },
]);
