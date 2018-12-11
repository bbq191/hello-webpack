var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./main.js",
    vendor: ["jquery"]
  },
  output: {
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /(jquery)/,
          name: "vendor"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
