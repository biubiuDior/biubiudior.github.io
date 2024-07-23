/*
 * @Name: 旭日图集静态数据
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-18
*/

import sunburst1Img from "@/assets/image/chartExample/sunburst/sunburst1.png";

export const SunburstChartData = [
  {
    id: "sunburst1",
    name: "教职工年龄分布图",
    type: "sunburst",
    date: "2023.12.19",
    exampleImg: sunburst1Img,
    remark: "旭日分布图",
    renderer: "svg",
    code: "/* 数据 */\nlet jbList = ['中青年教书', '其他']; // 年龄段\nlet djgsList = [3, 3]; // 年龄段类型数\nlet djList = ['<35岁', '35-40岁', '41-45岁', '46-50岁', '51-55岁', '>55岁']; // 类型\nlet djslList = [25, 27, 63, 25, 65, 76]; // 类型对应人数\nlet jbslList = [115, 166]; // 年龄段总人数\n\nconst unit = '人'; // 统计单位\n\n/* 整合 */\nlet colorList = [\n  ['#5B8FF9', '#ADC6FC', '#2F467A'],\n  ['#61DDAA', '#B2EED5', '#21A397'],\n  ['#F6BD16', '#F4E6BB', '#F6BD16']\n];\nlet data = [];\nlet j = 0;\njbList.map((item, index) => {\n  let childList = [];\n  for (let i = 0; i < djgsList[index]; i++) {\n    childList.push({\n      value: djslList[j],\n      name: djList[j],\n      // 每个子类别 可以单独设置颜色\n      itemStyle: {\n        color: colorList[index][1]\n      },\n      label: {\n        color: colorList[index][2]\n      }\n    });\n    j++;\n  }\n  data.push({\n    name: item,\n    value: jbslList[index],\n    itemStyle: {\n      color: colorList[index][0]\n    },\n    children: childList\n  });\n});\n\noption = {\n  tooltip: {\n    show: true,\n    confine: true,\n    formatter: (params) => {\n      let parentName = params.treePathInfo[1].name; // 类别\n      let pieColor = params.color;\n      let childData = data.filter((item) => {\n        return item.name == parentName;\n      })[0].children;\n      let childDiv = `<div>`;\n      childData.map((item, index) => {\n        childDiv += `\n                <div style=\"margin-top: 8px;position:relative;\">\n                  <div style=\"width: 9px;height: 9px;background: ${pieColor};border: 1px solid #FFFFFF;position:absolute;top:50%;transform:translateY(-50%);left:0;border-radius:50%;\"></div>\n                  <span style=\"margin:0 0 0 15px;font-size: 14px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #FFFFFF;\">${item.name}：${item.value}${unit}</span>\n                </div>\n              `;\n      });\n      childDiv += `</div>`;\n      return `\n\t\t\t\t<div style=\"font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:12px;\">${parentName}</div>\n            ${childDiv}\n\t\t\t`;\n    },\n    extraCssText:\n      'opacity: 0.8;background-color:#050F1B;padding:16px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'\n  },\n  series: [\n    {\n      type: 'sunburst',\n      nodeClick: false, //是否允许旭日图点击 默认可以点击\n      center: ['50%', '50%'],\n      radius: ['0%', '100%'],\n      sort: 'null',\n      data: data,\n      clockwise: false, // 数据顺序\n      // 占据的位置 文字设置\n      label: {\n        rotate: 'tangential', // 文字水平(tangential)竖直(radial)\n        color: '#fff',\n        fontSize: 14,\n        minAngle: 30 // 控制角度文本显示\n      },\n      // 旭日图的分割线\n      itemStyle: {\n        borderColor: '#fff',\n        borderWidth: 7,\n        borderRadius: 7\n      },\n      levels: [\n        // 这里是设置 每一层的样式，层级低于单独在data里面的\n        // 第一个空数据是 占据下钻的位置\n        {},\n        // 设置第一层为环形\n        {\n          r0: '45%',\n          r: '70%',\n          emphasis: {\n            focus: 'descendant'\n          }\n        },\n        {\n          r0: '70%',\n          r: '95%',\n          emphasis: {\n            focus: 'none'\n          }\n        }\n      ]\n    }\n  ]\n};"
  },
]