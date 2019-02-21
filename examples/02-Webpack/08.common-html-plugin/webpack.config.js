var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src/init.js'),
        home: path.join(__dirname, 'src/home.js')
    },

    output:{
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Hello Test',
            hash: true
        })
    ]

};