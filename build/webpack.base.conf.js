const path = require('path')
const webpack = require('webpack')

// 解析目录地址
const DEV = path.resolve(__dirname, '../dev'); // dev目录
const OUTPUT = path.resolve(__dirname, '../output'); // output目录
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
        ]
    },
    output: {
        path: OUTPUT,
        filename: '[name].[hash].js',
        // publicPath: './',
        chunkFilename:'[name].js'
    },
    module: {
        rules: [{
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env", "react", "es2015"]//加入react才能使用reac相关api
                    }
                }
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 8192,
            //             name: path.resolve(__dirname, 'img/[name].[ext]')
            //         }
            //     }
            // }
        ]
    }
}

module.exports = config