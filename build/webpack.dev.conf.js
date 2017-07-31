const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
    //  entry: {
    //     app: [
    //          'webpack-hot-middleware/client?reload=true',
    //         './src/main.js'
    //     ],
    //     common: [
    //         "react",
    //         'react-dom',
    //         'react-router',
    //         'redux',
    //         'react-redux',
    //         'redux-thunk',
    //     ]
    // },
    plugins: [
        /**
         * 提取公共模块
         */
          new webpack.optimize.CommonsChunkPlugin({
                /**
                 *  指定公共 bundle 的名字。
                 */
                // name: 'vendor' 


                /**
                 *  每次改变应用代码，vendor.js也会跟着相应变化
                 * 未解决此问题加一个mainfest，这样每次变得应用代码vendor不再变化
                 * 变化的只是main.[***].js与mainfest.[***].js
                 */
                names: ['common', 'manifest'],
                // 随着 入口chunk 越来越多，这个配置保证没其它的模块会打包进 公共chunk
                minChunks: Infinity,


            }),

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