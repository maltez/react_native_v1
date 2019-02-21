var path = require('path');

module.exports = {
    entry:{
        init: path.join(__dirname, 'src/init.js'),
        home: path.join(__dirname, 'src/home.css')
    },

    output:{
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js', '.css']
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [
                { loader: 'style-loader' },
                { loader: 'css-loader'}
            ]
            }
        ]
    }
};