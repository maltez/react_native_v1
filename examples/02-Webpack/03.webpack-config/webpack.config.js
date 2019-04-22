var path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/init.js'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
    },
    mode: "none",
    watch: true

};