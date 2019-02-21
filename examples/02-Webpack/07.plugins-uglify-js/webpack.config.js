var path = require('path');
var {optimize: { UglifyJsPlugin }} = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src/init.js'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
    },
    plugins: [new UglifyJsPlugin()],
};