/*
 * @Name: 矩形树图集静态数据
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-18
*/

import treemap1Img from "@/assets/image/chartExample/treemap/treemap1.png";

export const TreemapChartData = [
  {
    id: "treemap1",
    name: "部门人数分布占比",
    type: "treemap",
    date: "2023.12.25",
    exampleImg: treemap1Img,
    remark: "基础矩形树图",
    renderer: "svg",
    code: "/* 数据 */\n// 矩形树图\nconst bmName = ['消防指挥', '信息技术', '会计学', '外国语言与外国历史']; // 部门名称\nconst bmValue = [100, 50, 80, 60]; // 部门人数\n\n/* 整合 */\n// 颜色系列\nconst colorList = [\n  'rgba(115, 160, 251, 1)',\n  'rgba(249, 202, 65, 1)',\n  'rgba(115, 222, 180, 1)',\n  'rgba(249, 137, 115, 1)'\n];\n// 矩形树图\nlet treeMapData = [];\nbmName.map((item, index) => {\n  treeMapData.push({\n    name: item,\n    value: bmValue[index],\n    itemStyle: {\n      color: colorList[index]\n    }\n  });\n});\n\noption = {\n  tooltip: {},\n  series: [\n    {\n      name: 'treemap',\n      id: 'treemap',\n      type: 'treemap',\n      data: treeMapData,\n      roam: false, //拖拽漫游（移动和缩放）\n      nodeClick: false, // 节点点击\n      breadcrumb: false, // 面包屑\n      left: '16',\n      right: 16,\n      top: 30,\n      bottom: 35,\n      label: {\n        show: true,\n        position: [6, 6],\n        formatter: function (params) {\n          return `{name|${params.name}}\\n{value|${params.value}人}`;\n        },\n        rich: {\n          name: {\n            fontSize: 12,\n            fontFamily: 'Source Han Sans CN-Regular',\n            color: '#fff'\n          },\n          value: {\n            fontSize: 24,\n            fontFamily: 'HarmonyOS Sans-Medium',\n            color: '#fff',\n            padding: [10, 0, 0, 0]\n          }\n        }\n      },\n      selectedMode: 'single',\n      itemStyle: {\n        borderWidth: 2,\n        boderColor: '#fff'\n      },\n      tooltip: {\n        trigger: 'item',\n        axisPointer: {\n          type: 'none'\n        },\n        confine: true,\n        formatter: (params) => {\n          return `\n\t\t\t\t   <div style=\"font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:8px;\">${params.name}</div>\n               <div style=\"font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;\">专业人数：${params.value}人</div>\n\t\t\t    `;\n        },\n        extraCssText:\n          'opacity: 0.8;background-color:#050F1B;padding:12px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'\n      }\n    }\n  ]\n};"
  },
]