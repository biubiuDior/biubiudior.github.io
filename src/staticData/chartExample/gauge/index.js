/*
 * @Name: 仪表盘集静态数据
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-18
*/

import gauge1Img from "@/assets/image/chartExample/gauge/gauge1.png";

export const GaugeChartData = [
  {
    id: "gauge1",
    name: "心理异常检出人数",
    type: "gauge",
    date: "2024.07.19",
    exampleImg: gauge1Img,
    remark: "基础仪表盘",
    renderer: "svg",
    code: "const name = '心理异常检出人数';\nconst value = 70;\nconst percent = 20;\n\noption = {\n  series: [\n    {\n      name: 'gauge',\n      type: 'gauge',\n      detail: {\n        lineHeight: 36,\n        offsetCenter: ['0%', '80%'],\n        formatter: `{value|${value}}\\n{name|${name}}`,\n        rich: {\n          value: {\n            fontFamily: 'Source Han Sans CN-Regular',\n            fontWeight: 'bold',\n            fontSize: 24,\n            color: '#FF9360'\n          },\n          name: {\n            fontFamily: 'Source Han Sans CN-Regular',\n            fontWeight: '500',\n            fontSize: 14,\n            color: 'rgba(0,0,0,0.65)'\n          }\n        }\n      },\n      axisLine: {\n        lineStyle: {\n          width: 20,\n          color: [[1, 'rgba(255, 147, 96, 0.1)']]\n        }\n      },\n      progress: {\n        show: true,\n        width: 20,\n        itemStyle: {\n          color: 'rgba(255, 147, 96, 1)'\n        }\n      },\n      axisTick: {\n        distance: 10,\n        length: 10,\n        lineStyle: {\n          width: 2,\n          color: 'rgba(0, 0, 0, 0.25)'\n        }\n      },\n      splitLine: {\n        distance: 10,\n        length: 12,\n        lineStyle: {\n          width: 4,\n          color: 'rgba(0, 0, 0, 0.25)'\n        }\n      },\n      axisLabel: {\n        fontFamily: 'Source Han Sans CN-Regular',\n        fontWeight: 400,\n        fontSize: 12,\n        color: 'rgba(0,0,0,0.45)',\n        distance: 28\n      },\n      pointer: {\n        length: 66,\n        itemStyle: {\n          color: 'rgba(255, 147, 96, 1)'\n        }\n      },\n      data: [percent]\n    }\n  ]\n};"
  },
]