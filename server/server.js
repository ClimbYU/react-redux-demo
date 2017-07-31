const webpack = require('webpack')
const express = require('express')
const debug = require('debug')('app:server')
const webpackDevMiddle = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')


const webpackConfig = require("../build/webpack.dev.conf.js");
const config = require('../config')
    // 编译
const compiler = webpack(webpackConfig);
const app = express();

app.use(webpackDevMiddle(compiler, {
    publicPath: '/',
    noInfo: true,
    hot: true,
    stats: {
        colors: true,
        chunks: false
    }
}))

//实现无刷新的替换
app.use(hotMiddleware(compiler));

app.listen('8000', function(err) {
    // if (err) {
    //     console.log(err)
    //     return
    // }
    // var uri = 'http://localhost:' + port
    // console.log('Listening at ' + uri + '\n')

    // // when env is testing, don't need open it
    // if (process.env.NODE_ENV !== 'testing') {
    //     opn(uri)
    // }
})

// module.exports = app