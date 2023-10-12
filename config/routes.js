/*
 * @Name: 路由配置
 * @Description: 路由配置
 * @Author: biubiu
 * @Date: 2023-10-12
*/
export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页11',
    path: '/home',
    component: './index',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  {
    name: 'Echarts',
    path: '/echarts',
    component: './Echarts',
  },
]