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
        redirect: '/home',
      },
      {
        name: '首页',
        path: '/home',
        component: './Home',
      },
      {
        name: 'Echarts',
        path: '/echarts',
        component: '../layouts/Sider',
        routes: [
          {
            path: '/echarts',
            redirect: '/echarts/atlas',
          },
          {
            name: '图集',
            path: '/echarts/atlas',
            component: './Echarts/atlas',
          },
          {
            name: '编辑',
            path: '/echarts/edit',
            component: './Echarts/edit',
          },
        ]
      },
    ]
  },
]