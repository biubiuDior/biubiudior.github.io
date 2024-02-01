/*
 * @Name: 路由配置
 * @Description: 路由配置
 * @Author: biubiu
 * @Date: 2023-10-12
*/

/**
 * 路由配置约定
 * 1. 新增 模块 && base替换 需要放在一级目录
 * 2. 新增定制模块需要添加 module 识别
 * module  模块对应id，.env中添加开启
 */
export default [
  {
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/',
        redirect: `/home`,
      },
      {
        name: '首页',
        path: '/home',
        component: `./${process.env.PROJECT}/Home`,
      },
      {
        name: 'cs1',
        path: '/cs1',
        module: "xx/Home",
        component: `./xx/Home`,
      },
    ]
  },
  {
    name: 'cs2',
    path: '/cs2',
    module: "xy/Home",
    component: '../layouts',
    routes: [
      {
        path: '/cs2',
        redirect: `/cs2/home`,
      },
      {
        name: '测试首页',
        path: '/cs2/home',
        component: `./xx/Home`,
      },
      {
        name: '测试1',
        path: '/cs2/home2',
        component: `./xx/Home`,
      },
    ]
  },
  {
    name: 'cs3',
    path: '/home/cs',
    module: "xx/Home2",
    component: `./xx/Home2`,
  },
]