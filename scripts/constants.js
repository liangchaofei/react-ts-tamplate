/*
 * @Author: your name
 * @Date: 2020-08-17 11:26:39
 * @LastEditTime: 2020-08-17 11:38:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-tamplate/scripts/constants.js
 */
const path = require('path')
const isDev = process.env.NODE_ENV !== 'production'

const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = 9000

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
  SERVER_HOST,
  SERVER_PORT,
}
