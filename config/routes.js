/*
 * @Name: 路由配置
 * @Description: 路由配置
 * @Author: biubiu
 * @Date: 2023-10-12
*/

export default [
  {
    path: '/',
    layout: false,// 取消默认布局
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
    ]
  },
]