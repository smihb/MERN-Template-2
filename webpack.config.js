const htmlWebPlug = require('html-webpack-plugin');

const webConfig = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new htmlWebPlug({
            template: './src/statics/index.html'
        })
    ]
}

module.exports = webConfig;