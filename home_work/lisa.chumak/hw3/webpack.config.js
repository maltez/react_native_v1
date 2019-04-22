const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js"
    },
    resolve: {
        extensions: [".js"]
    },
    devtool: "source-map",
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, "src/index.html"),
            hash: true
        })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({ sourceMap: true })]
    }
};
