/*
 * @Name: 模块名称
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-13
*/

import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

/**
 * memo，当前 webpack-chain对象
 * env，当前环境，development、production 或 test 等
 * webpack，webpack 实例，用于获取其内部插件
 * createCSSRule，用于扩展其他 CSS 实现，比如 sass, stylus
 * @param {*} memo
 * @param {*} { env, webpack, createCSSRule }
 */
const webpackConfig = (memo, { env, webpack, createCSSRule }) => {
  // 代码编辑器高亮显示
  memo.plugin('monaco-editor').use(MonacoWebpackPlugin, [
    {
      languages: ['javascript', 'typescript', 'json'], // 支持高亮显示的代码语言
      features: ["coreCommands", "find", "format", "folding", 'smartSelect', 'snippets', 'suggest', 'hover']
    }
  ])
}
export default webpackConfig;