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
        redirect: '/fragment',
      },
      {
        name: '碎片',
        path: '/fragment',
        component: './Fragment',
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
            name: '文档',
            path: '/echarts/document',
            component: './Echarts/document',
          },
        ]
      },
    ]
  },
]