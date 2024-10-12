/*
 * @Name: 问题方法静态数据
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-19
*/

export const ProblemStaticData = [
  {
    id: "problem4",
    name: "隐藏海南诸岛小框",
    intro: "利用geo的regions属性",
    type: "echarts",
    code: "// 利用geo的regions属性\ngeo: [\n  regions: [\n    {\n      name: '南海诸岛',\n      itemStyle: {\n        // 隐藏地图\n        opacity: 0 // 为 0 时不绘制该图形\n      },\n      label: {\n        show: false // 隐藏文字\n      }\n    }\n  ]\n]\n// series中绑定对应的geo\nseries: [\n  {\n    type: 'map',\n    map: 'china',\n    geoIndex: 0, // 匹配geo\n    aspectScale: 0.75,\n    zoom:1.1,\n    data: data\n  }\n]"
  },
  {
    id: "problem3",
    name: "数字分割",
    intro: "数字根据千位符进行分割",
    type: "javascript",
    code: "// 数字分割：1653 => 1,653\nconst formatNum = (value) => {\n\tif(!value&&value!==0) return 0;\n\tlet str = value.toString();\n\tlet reg = str.indexOf(\".\") > -1 ? /(\\d)(?=(\\d{3})+\\.)/g : /(\\d)(?=(?:\\d{3})+$)/g;\n\treturn str.replace(reg,\"$1,\");\n}"
  },
  {
    id: "problem2",
    name: "json数组排序",
    intro: "根据某个字段实现对json数组的排序",
    type: "javascript",
    code: "/**\n * @description\t\t根据某个字段实现对json数组的排序\n * @param\t\t\tarray\t\t要排序的json数组对象\n * @param\t\t\tfield\t\t排序字段（此参数必须为字符串）\n * @param\t\t\treverse\t\t是否倒序（默认为false）\n * @return\t\t\tarray\t\t返回排序后的json数组\n */\nconst jsonSort = (array, field, reverse) => {\n\t//数组长度小于2 或 没有指定排序字段 或 不是json格式数据\n\tif(array.length < 2 || !field || typeof array[0] !== \"object\") return array;\n\t//数字类型排序\n\tif(typeof array[0][field] === \"number\") {\n\t\tarray.sort(function(x, y) { return x[field] - y[field] }) \n\t}\n\t//字符串类型排序\n\tif(typeof array[0][field] === \"string\") {\n\t\tarray.sort(function(x, y) { return x[field].localeCompare(y[field]) });\n\t}\n\t//倒序\n\tif(reverse) {\n\t\tarray.reverse();\n\t}\n\treturn array;\n}"
  },
  {
    id: "problem1",
    name: "计算字符串的宽度",
    intro: "通过字号大小，计算字符串的宽度",
    type: "javascript",
    code: "/**\n * @description\t\tjs计算字符串的宽度\n * @param\t\t\tletter\t\t文本(string)\n * @param\t\t\tfontSize\t\t预设字体大小(int)\n * @return\t\t\tletterWidth\t\t文本宽度\n */\nconst getLetterWidth = (letter, fontSize, fontFamily) => {\n\tconst dom = document.createElement(\"span\");\n\tdom.style.display = \"inline-block\";\n\tdom.style.fontSize = fontSize + \"px\";\n\tdom.style.fontFamily = fontFamily;\n\tdom.textContent = letter;\n\tdocument.body.appendChild(dom);\n\tconst width = dom.getBoundingClientRect().width;\n\tdom.remove();\n\tconst letterWidth = Number(width.toFixed(2));\n\treturn letterWidth;\n};"
  },
]