/*
 * @Name: 雷达图集静态数据
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-18
*/

import radar1Img from "@/assets/image/example/radar/radar1.png";
import radar2Img from "@/assets/image/example/radar/radar2.png";

export const RadarChartData = [
  {
    id: "radar2",
    name: "行为预警情况",
    type: "radar",
    date: "2024.07.19",
    exampleImg: radar2Img,
    remark: "多类型圆角雷达分布图",
    renderer: "svg",
    code: "const nameList = [\n  '学业预警',\n  '毕业预警',\n  '疑似失联预警',\n  '作息预警',\n  '消费预警'\n];\nconst valueList = [\n  [65, 50, 20, 15, 45],\n  [85, 80, 60, 76, 85],\n  [80, 80, 80, 80, 80]\n]; // 数值\nconst percentList = [\n  [65, 50, 20, 15, 45],\n  [85, 80, 60, 76, 85],\n  [80, 80, 80, 80, 80]\n]; // 占比\nconst typeList = ['个人', '心理正常学生均值', '心理异常学生均值']; // 类别\nconst unitList = ['%', '%', '%', '%', '%']; // 单位\n\n/* 样式 */\nconst itemColorList = [\n  'rgba(14, 127, 242, 1)',\n  'rgba(72, 213, 157, 1)',\n  'rgba(251, 114, 147, 1)'\n];\nconst areaColorList = [\n  'rgba(14, 127, 242, 0.3)',\n  'rgba(72, 213, 157, 0.3)',\n  'rgba(251, 114, 147, 0.3)'\n];\n\n/* 数据处理 */\nlet seriesData = [];\nlet legendData = [];\ntypeList.map((item, index) => {\n  seriesData.push({\n    name: '雷达图',\n    type: 'radar',\n    z: typeList.length - index,\n    symbolSize: 5,\n    label: {\n      show: false\n    },\n    areaStyle: {\n      color: areaColorList[index]\n    },\n    itemStyle: {\n      color: '#FFFFFF',\n      borderColor: itemColorList[index],\n      borderWidth: 2\n    },\n    lineStyle: {\n      color: itemColorList[index]\n    },\n    data: [\n      {\n        value: percentList[index],\n        name: item\n      }\n    ]\n  });\n\n  legendData.push({\n    name: item,\n    itemStyle: {\n      color: itemColorList[index]\n    }\n  });\n});\n\nlet indicatorList = [];\nnameList.map((item, index) => {\n  indicatorList.push({\n    name: item,\n    max: 100\n  });\n});\n\noption = {\n  tooltip: {\n    trigger: 'item',\n    axisPointer: {\n      type: 'none'\n    },\n    confine: true,\n    formatter: (params) => {\n      const { name, seriesIndex } = params;\n      let childDiv = `<div style=\"display: flex;flex-direction: column;gap: 2px 0;\">`;\n      nameList.map((childItem, childIndex) => {\n        childDiv += `<div style=\"display: flex;align-items: center;gap: 0 12px;\">\n            <div style=\"font-family: Source Han Sans CN-Regular;font-weight: 400;font-size: 12px;color: rgba(0,0,0,0.45);\">${childItem}</div>\n            <div style=\"margin-left: 2px;font-family: Source Han Sans CN-Regular;font-weight: 400;font-size: 12px;color: rgba(0,0,0,0.65);\">${valueList[seriesIndex][childIndex]}${unitList[childIndex]}</div>\n          </div>`;\n      });\n      childDiv += `</div>`;\n      return `\n        <div style=\"font-size: 12px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: rgba(0,0,0,0.65);margin-bottom:4px;\">${name}</div>\n        ${childDiv}\n      `;\n    },\n    extraCssText:\n      'background-color:#F6F9FD;padding:4px 8px;box-shadow: 0px 0px 4px 0px rgba(99,149,250,0.4);border-radius: 4px;border-color: transparent;'\n  },\n  legend: {\n    icon: 'circle',\n    orient: 'vertical',\n    top: 'center',\n    right: '15%',\n    data: legendData,\n    itemWidth: 10,\n    itemHeight: 10,\n    itemGap: 20,\n    textStyle: {\n      fontSize: 12,\n      fontFamily: 'Source Han Sans CN-Regular',\n      fontWeight: 400,\n      color: 'rgba(0,0,0,0.65)'\n    }\n  },\n  radar: {\n    indicator: indicatorList,\n    shape: 'circle',\n    center: ['35%', '50%'],\n    radius: '50%',\n    axisName: {\n      fontSize: 12,\n      fontFamily: ' Source Han Sans CN-Regular',\n      fontWeight: 400,\n      color: 'rgba(0, 0, 0, 0.65)'\n    }\n  },\n  series: seriesData\n};"
  },
  {
    id: "radar1",
    name: "教学评教分布",
    type: "radar",
    date: "2023.12.19",
    exampleImg: radar1Img,
    remark: "雷达分布图",
    renderer: "svg",
    code: "const nameList = ['教学态度', '教学内容', '教学方式', '教学基本功', '教学效果']; // 名字\nconst valueList = [85, 80, 60, 76, 85]; // 分数,最大值为100\n\nlet indicatorList = [];\nnameList.map((item, index) => {\n  indicatorList.push({\n    name: item,\n    value: valueList[index],\n    max: 100\n  });\n});\n\noption = {\n  radar: {\n    // shape: 'circle',\n    indicator: indicatorList,\n    axisName: {\n      formatter: function (value, indicator) {\n        return `{a|${value}}`;\n      },\n      rich: {\n        a: {\n          fontSize: '14px',\n          fontFamily: ' Source Han Sans CN-Regular',\n          fontWeight: 400,\n          color: '#333333',\n          padding: [0, 8, 0, 0]\n        },\n        b: {\n          padding: [4, 8, 4, 8],\n          backgroundColor: 'rgba(229, 243, 255, 0.6500)',\n          borderRadius: 50,\n          fontFamily: 'Source Han Sans CN-Medium',\n          fontWeight: 500,\n          color: '#397EF0'\n        }\n      }\n    }\n  },\n  series: [\n    {\n      name: '雷达图',\n      type: 'radar',\n      color: 'rgba(57, 126, 240, 1)',\n      label: {\n        show: false\n      },\n      areaStyle: {\n        color: 'rgba(170, 217, 255, 0.35)'\n      },\n      data: [\n        {\n          value: valueList,\n          name: 'Allocated Budget'\n        }\n      ]\n    }\n  ]\n};"
  },
]