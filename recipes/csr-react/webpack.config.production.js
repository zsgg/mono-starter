const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { red } = require('chalk');
const base = require('./webpack.config.base');

const config = merge(base, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                exclude: /node_modules/,
                test: /\.(js|ts|tsx)$/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
    },
    optimization: {
        minimize: false,
        splitChunks: {
            // 30000 30kb
            cacheGroups: {
                default: {
                    minChunks: 2,
                    name: 'default',
                    priority: 3,
                },
                reactBundle: {
                    name: 'react.bundle',
                    priority: 20,
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                },
                vendors: {
                    name: 'vendors',
                    priority: 10,
                    test: /[\\/]node_modules[\\/]/,
                },
            },
            chunks: 'all',
            minSize: 10,
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css',
            linkType: 'text/css',
        }),
        new CleanWebpackPlugin(),
    ],
});
console.log(`< ${__filename} > \n`, red(JSON.stringify(config, null, 4)), '\n');

module.exports = config;
