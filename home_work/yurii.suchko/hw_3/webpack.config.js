const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = {
    entry: {
        index: path.join(__dirname, "src/index.js")
    },

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build")
    },

    resolve: {
        extensions: [".js"]
    },
    mode: "development",
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
            hash: true
        })
    ],
    optimization: {
        minimizer: [
          new UglifyJsPlugin({ sourceMap: true })
        ]
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        hot: true,
    },
};
