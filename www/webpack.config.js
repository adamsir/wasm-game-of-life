const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "**/*.js", to: "[path][name].[contenthash].js"},
        { from: "**/*.html", to: "[name].html"},
      ]
    })
  ],
  experiments: {
    asyncWebAssembly: true
  }
};
