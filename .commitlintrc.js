/*
 * @Author: your name
 * @Date: 2020-08-17 11:06:17
 * @LastEditTime: 2020-08-17 11:06:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-tamplate/.commitlintrc.js
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'anno'],
    ],
  },
}
