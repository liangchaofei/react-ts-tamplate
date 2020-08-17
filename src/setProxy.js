/*
 * @Author: your name
 * @Date: 2020-08-17 15:42:16
 * @LastEditTime: 2020-08-17 15:44:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-tamplate/src/setProxy.js
 */
const proxySettings = {
  // 接口代理1
  '/api/': {
    target: 'http://198.168.111.111:3001',
    changeOrigin: true,
  },
  // 接口代理2
  '/api-2/': {
    target: 'http://198.168.111.111:3002',
    changeOrigin: true,
    pathRewrite: {
      '^/api-2': '',
    },
  },
  // .....
}

module.exports = proxySettings
