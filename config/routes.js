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
        redirect: `/example`,
      },
      {
        name: 'Chart示例',
        path: '/example',
        component: '../layouts/Side',
        routes: [
          {
            path: '/example',
            redirect: `/example/all`,
          },
          {
            name: '全部',
            path: '/example/all',
            icon: 'menuIcon',
            component: './example',
          },
          {
            name: '柱状图',
            path: '/example/bar',
            icon: 'barIcon',
            component: './example',
          },
          {
            name: '折线图',
            path: '/example/line',
            icon: 'lineIcon',
            component: './example',
          },
          {
            name: '饼图',
            path: '/example/pie',
            icon: 'pieIcon',
            component: './example',
          },
          {
            name: '地图',
            path: '/example/map',
            icon: 'mapIcon',
            component: './example',
          },
          {
            name: '雷达图',
            path: '/example/radar',
            icon: 'radarIcon',
            component: './example',
          },
          {
            name: '关系图',
            path: '/example/graph',
            icon: 'graphIcon',
            component: './example',
          },
          {
            name: '散点图',
            path: '/example/scatter',
            icon: 'scatterIcon',
            component: './example',
          },
          {
            name: '树图',
            path: '/example/tree',
            icon: 'treeIcon',
            component: './example',
          },
          {
            name: '矩形树图',
            path: '/example/treemap',
            icon: 'treemapIcon',
            component: './example',
          },
          {
            name: '平行坐标图',
            path: '/example/parallel',
            icon: 'parallelIcon',
            component: './example',
          },
          {
            name: '盒须图',
            path: '/example/boxplot',
            icon: 'boxplotIcon',
            component: './example',
          },
          {
            name: '桑葚图',
            path: '/example/sankey',
            icon: 'sankeyIcon',
            component: './example',
          },
          {
            name: '热力图',
            path: '/example/heatmap',
            icon: 'heatmapIcon',
            component: './example',
          },
          {
            name: '旭日图',
            path: '/example/sunburst',
            icon: 'sunburstIcon',
            component: './example',
          },
          {
            name: '仪表盘',
            path: '/example/gauge',
            icon: 'gaugeIcon',
            component: './example',
          },
          {
            name: '组合图',
            path: '/example/assembly',
            icon: 'linkageIcon',
            component: './example',
          },
        ],
      },
      {
        name: '问题·方法',
        path: '/problem',
        component: './problem',
      }
    ]
  },
]