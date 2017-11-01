const path = require('path')
const webpack = require('webpack')
const babelpolyfill = require("babel-polyfill");
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

// 解析目录地址
const DEV = path.resolve(__dirname, '../dev'); // dev目录
const OUTPUT = path.resolve(__dirname, '../output'); // output目录
var ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH,'src')
// const pathDeal = (configPath) => path.resolve(__dirname,configPath);

const config = {
    entry: {
        /**
         * 常规配置
         */
        // app: './src/index.js'

        /**
         * 热重载配置
         */
        app: [
            // 'webpack-hot-middleware/client',
            'webpack-hot-middleware/client?reload=true',
            './src/main.js'
        ],
        common: [
            "react",
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            // 'redux-thunk',
            'redux-saga',
        ]
    },
    output: {
        path: OUTPUT,
        filename: '[name].[hash].js',
        // publicPath: './',
        chunkFilename:'[name].[hash]js',
        publicPath:'/' //未配置此参数时样式中的图片加载会报错
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env", "react", "es2015"]//加入react才能使用reac相关api
                    }
                }
            },
             {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: /^node_modules$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                      limit: 10000
                    }
                }]
              },
              {
                test: /\.(scss|css)$/,
                exclude: /^node_modules$/,
                use: ExtractTextPlugin.extract({
                  use:[
                    {
                      loader: 'css-loader',
                      options:{
                        modules:true,
                        importLoaders:1,
                        localIdentName:'[local]',
                        // localIdentName:'[local]_[hash:base64:5]',
                        sourceMap: true,
                      },
                    },
                    {
                      loader:'sass-loader',
                      options:{
                          sourceMap: true,
                      },
                    },
                  ],
                  fallback: 'style-loader',
                }),
              }
        ]
    }
}

module.exports = config