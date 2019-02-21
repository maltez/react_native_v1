var path = require('path');

module.exports = {
    entry: {
        home: path.join(__dirname, './src/home.js'),
        order: path.join(__dirname, './src/order.js')
    },

    output:{
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
    },
    mode: 'none',
    devtool: 'source-map'
};