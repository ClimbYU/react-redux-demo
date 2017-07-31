const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
    plugins: [

        // new webpack.optimize.OccurenceOrderPlugin(), //适用于webpack1.0
        /**
         * 热更新  只有在js改变时才会进行更新
         */
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new webpack.NoEmitOnErrorsPlugin(),
        /**
         * 自动生成html
         */
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        // 自动打开浏览器
        new OpenBrowserPlugin({ url: 'http://localhost:8000' }),
    ]
})