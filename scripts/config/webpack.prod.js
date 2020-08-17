/*
 * @Author: your name
 * @Date: 2020-08-17 11:29:02
 * @LastEditTime: 2020-08-17 17:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-tamplate/scripts/config/webpack.prod.js
 */
const { resolve } = require('path')
const webpack = require('webpack')
const glob = require('glob')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.common.js')
const { PROJECT_PATH } = require('../constants')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // 开一个本地服务查看报告
      analyzerHost: '127.0.0.1', // host 设置
      analyzerPort: 8888, // 端口号设置
    }),
    new CleanWebpackPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
    }),
    new webpack.BannerPlugin({
      raw: true,
      banner: '/** @preserve Powered by react-ts-template*/',
    }),
  ],
})
