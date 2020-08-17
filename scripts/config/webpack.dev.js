/*
 * @Author: your name
 * @Date: 2020-08-17 11:28:00
 * @LastEditTime: 2020-08-17 15:46:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-tamplate/scripts/config/webpack.dev.js
 */
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const { SERVER_HOST, SERVER_PORT } = require('../constants')
const proxySetting = require('../../src/setProxy.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    stats: 'errors-only',
    clientLogLevel: 'silent',
    compress: true,
    open: true,
    hot: true,
    proxy: { ...proxySetting },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
