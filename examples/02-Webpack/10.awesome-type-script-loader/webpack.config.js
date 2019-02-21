var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/init.ts'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    mode: 'none',

    module:{
        rules:[
            {
                test: /\.ts$/,
                use: [
                { 
                    loader: 'awesome-typescript-loader', 
                    options :{
                        useCache: false
                    } 
                }]
            }
        ]
    },
    watch: true
};