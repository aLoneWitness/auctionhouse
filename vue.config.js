const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {

  configureWebpack: {

    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
      }),
    ]
  }
};