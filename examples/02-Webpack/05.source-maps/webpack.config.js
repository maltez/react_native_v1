var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './init.js',

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
    },
    //devtool: 'eval'
    devtool: 'source-map'

};