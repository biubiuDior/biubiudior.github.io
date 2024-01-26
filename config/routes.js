/*
 * @Name: 路由配置
 * @Description: 路由配置
 * @Author: biubiu
 * @Date: 2023-10-12
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
    component: `./xy/Home`,
  },
  {
    name: 'cs3',
    path: '/home/cs',
    module: "xx/Home2",
    component: `./xx/Home2`,
  },
]