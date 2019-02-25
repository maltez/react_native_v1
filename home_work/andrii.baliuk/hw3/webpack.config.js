const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const WebpackAutoInject = require("webpack-auto-inject-version");

module.exports = {
  entry: {
    index: path.join(__dirname, "src/index.js")
  },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "build")
  },

  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },

  mode: "none",
  devtool: "source-map",
  watch: true,

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      title: "Homework 3 - andrii.baliuk",
      hash: true
    }),
    new UglifyJsPlugin(),
    new WebpackAutoInject({
      components: {
        AutoIncreaseVersion: true
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.join(__dirname, "node_modules"),
          path.join(__dirname, "build")
        ],
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.css$/,
        exclude: [
          path.join(__dirname, "node_modules"),
          path.join(__dirname, "build")
        ],
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3301,
    hot: true
  }
};
