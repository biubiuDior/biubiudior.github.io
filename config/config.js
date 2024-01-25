import { defineConfig } from '@umijs/max';
import webpackConfig from './webpack.config';
import px2vw from 'postcss-px-to-viewport-8-plugin';
import defaultSetting from './defaultSetting'; // 默认配置
import routers from './routes'; // 路由菜单

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva: {},
  layout: {
    layout: defaultSetting['layout'],
  },
  // 标签标题
  title: defaultSetting['title'],
  // 路由
  routes: routers,
  // 环境变量
  define: {
    'process.env': process.env
  },
  // 路由前缀
  // base: process.env.PROJECT,
  // 打包分析
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    // parsed是我们关注的层级，其余两个运行后也可查看
    defaultSizes: 'parsed', // stat  // gzip
  },
  npmClient: 'npm',
  jsMinifier: 'none',
  // webpack配置
  chainWebpack: webpackConfig,
  // 配置额外的 postcss 插件
  extraPostCSSPlugins: [
    px2vw({
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 1920, // UI设计稿的宽度
      //viewportHeight: 810, // UI设计稿的高度
      unitPrecision: 7, // 转换后的精度，即小数点位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false, // 是否处理横屏情况
    }),
  ],
  // 转发代理
  proxy: {
    '/api': {
      'target': 'http://localhost:1118/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});
