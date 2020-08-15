const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        publicPath: "/contact-book.github.io/"
    },
    mode: 'development',
    module: {
        rules : [
            {
                test: /\.m?.js$/,
                exclude: /(node_modules|browser_components)/,
                use:{
                    loader: 'babel-loader', 
                    options:{
                        presets: ['@babel-preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
}