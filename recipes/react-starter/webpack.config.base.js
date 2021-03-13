const { merge } = require('webpack-merge');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        main: ['./src/index.tsx'],
    },
    output: {
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new webpack.DefinePlugin({}),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CaseSensitivePathsPlugin({}),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: './src/tsconfig.json',
            },
        }),
        new ForkTsCheckerNotifierWebpackPlugin({ excludeWarnings: true }),
    ],
    resolve: { extensions: ['.tsx', '.ts', '.scss', '.js'] },
    // target: ['web'],
};
