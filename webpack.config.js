const path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const dotenv = require('dotenv').config({path: __dirname + '/.env'});

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },

    devServer: {
        port: 3000,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource',
            },
        ]
    },

    plugins: [
        new webpack.EnvironmentPlugin(dotenv.parsed),
        new NodePolyfillPlugin(),
    ],
    
    resolve: {
        fallback: {
            "fs": false
        },
    }
};