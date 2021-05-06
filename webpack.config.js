const htmlWebPlug = require('html-webpack-plugin');

const webConfig = {
    mode: 'development',
    entry: './src/appfrontend/index.js',
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
            },
            {
                use: ['style-loader','css-loader'],
                test: /\.css/
            },
            {
                type: 'asset',
                test: /\.(png|jpg)/
            }
        ]
    },
    plugins: [
        new htmlWebPlug({
            template: './src/backend/statics/index.html'
        })
    ]
}

module.exports = webConfig;