const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map',
    target: 'node',
    entry: {
        filename: './app.js'
    },
    output: {
        filename: '_build/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js&/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                presets: ['es2015', {'modules': false}]
            }
        }]
    },
    plugins: [
        // uglify js
        new UglifyJSPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true,
            mangle: false
        }),
        //env plugin
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
        })
    ]
};
