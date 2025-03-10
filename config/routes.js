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
        redirect: `/chartExample`,
      },
      {
        name: 'Chart图例',
        path: '/chartExample',
        component: '../layouts/Side',
        routes: [
          {
            path: '/chartExample',
            redirect: `/chartExample/all`,
          },
          {
            name: '全部',
            path: '/chartExample/all',
            icon: 'menuIcon',
            component: './chartExample',
          },
          {
            name: '柱状图',
            path: '/chartExample/bar',
            icon: 'barIcon',
            component: './chartExample',
          },
          {
            name: '折线图',
            path: '/chartExample/line',
            icon: 'lineIcon',
            component: './chartExample',
          },
          {
            name: '饼图',
            path: '/chartExample/pie',
            icon: 'pieIcon',
            component: './chartExample',
          },
          {
            name: '地图',
            path: '/chartExample/map',
            icon: 'mapIcon',
            component: './chartExample',
          },
          {
            name: '雷达图',
            path: '/chartExample/radar',
            icon: 'radarIcon',
            component: './chartExample',
          },
          {
            name: '关系图',
            path: '/chartExample/graph',
            icon: 'graphIcon',
            component: './chartExample',
          },
          {
            name: '散点图',
            path: '/chartExample/scatter',
            icon: 'scatterIcon',
            component: './chartExample',
          },
          {
            name: '树图',
            path: '/chartExample/tree',
            icon: 'treeIcon',
            component: './chartExample',
          },
          {
            name: '矩形树图',
            path: '/chartExample/treemap',
            icon: 'treemapIcon',
            component: './chartExample',
          },
          {
            name: '平行坐标图',
            path: '/chartExample/parallel',
            icon: 'parallelIcon',
            component: './chartExample',
          },
          {
            name: '盒须图',
            path: '/chartExample/boxplot',
            icon: 'boxplotIcon',
            component: './chartExample',
          },
          {
            name: '桑葚图',
            path: '/chartExample/sankey',
            icon: 'sankeyIcon',
            component: './chartExample',
          },
          {
            name: '热力图',
            path: '/chartExample/heatmap',
            icon: 'heatmapIcon',
            component: './chartExample',
          },
          {
            name: '旭日图',
            path: '/chartExample/sunburst',
            icon: 'sunburstIcon',
            component: './chartExample',
          },
          {
            name: '仪表盘',
            path: '/chartExample/gauge',
            icon: 'gaugeIcon',
            component: './chartExample',
          },
          {
            name: '组合图',
            path: '/chartExample/assembly',
            icon: 'linkageIcon',
            component: './chartExample',
          },
        ],
      },
      {
        name: 'CSS样式库',
        path: '/cssLibrary',
        component: './cssLibrary',
      },
      {
        name: '问题·方法',
        path: '/problem',
        component: './problem',
      },
      {
        name: '低代码开发',
        path: '/lowCode',
        routes: [
          {
            path: '/lowCode',
            redirect: `/lowCode/edit`,
          },
          {
            name: '编辑',
            path: '/lowCode/edit',
            component: './lowCode',
          },
        ]
      }
    ]
  },
  {
    name: '预览',
    layout: false,
    path: '/preview',
    component: './lowCode/preview',
  },
]