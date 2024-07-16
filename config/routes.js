/*
 * @Name: 路由配置
 * @Description: 路由配置
 * @Author: biubiu
 * @Date: 2023-10-12
*/

export default [
  {
    path: '/',
    layout: false, // 取消默认布局
    component: '../layouts',
    routes: [
      {
        path: '/',
        redirect: `/atlas`,
      },
      {
        name: 'Chart集',
        path: '/atlas',
        component: '../layouts/Side',
        routes: [
          {
            path: '/atlas',
            redirect: `/atlas/all`,
          },
          {
            name: '全部',
            path: '/atlas/all',
            component: './atlas',
          },
          {
            name: '柱状图',
            path: '/atlas/bar',
            component: './atlas',
          },
          {
            name: '折线图',
            path: '/atlas/line',
            component: './atlas',
          },
          {
            name: '饼图',
            path: '/atlas/pie',
            component: './atlas',
          },
        ],
      },
    ]
  },
]