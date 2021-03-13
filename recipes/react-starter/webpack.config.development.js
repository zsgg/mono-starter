const { red } = require('chalk');

const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

const config = merge(base, {
    devServer: {
        compress: true,
        historyApiFallback: true,
        host: 'localhost',
        hot: true,
        https: false,
        open: false,
        overlay: true,
        port: 3000,
    },
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.(js|ts|tsx)$/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
});

console.log(`< ${__filename} > \n`, red(JSON.stringify(config, null, 4)), '\n');

module.exports = config;
