/*
 * @Name: 柱状图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-12
*/

/**
 * 柱状图图例
 * @params  myChart echarts图实例
 * */
// 单条形占比图
const BarCode1 = (myChart) => {
  let value = [65];

  const option = {
    grid: {
      top: "center",
      left: "0",
      right: "0",
    },
    xAxis: {
      show: false,
      type: "value",
      boundaryGap: [0, 0],
      max: 100
    },
    yAxis: {
      type: 'category',
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      position: "right",
      axisLabel: {
        show: false
      },
      data: value
    },
    series: [
      {
        data: value,
        type: 'bar',
        name: '占比条',
        barWidth: 10,
        showBackground: true,
        backgroundStyle: {
          color: "#F1F1F1"
        },
        itemStyle: {
          color: "#73DEB4",
        },
        markPoint: {
          symbol: "rect",
          symbolSize: [3, 15],
          symbolOffset: [0, -2.5],
          label: {
            show: false
          },
          data: [
            { type: "max" }
          ]
        }
      }
    ]
  };

  return option;
};
// 单柱状分布图
const BarCode2 = (myChart) => {
  let nameList = ["历史学", "文学", "管理学", "法学", "经济学"]; // 学科类别
  let valueList = [48, 48, 30, 45, 75]; // 人数

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: 'none'
      },
      position: function (point, params, dom, rect, size) { // 提示框位置
        let x = 0;
        let y = 0;
        //提示框定位
        if (point[0] + size.contentSize[0] < size.viewSize[0]) {
          x = point[0]
        } else if (point[0] > size.contentSize[0]) {
          x = point[0] - size.contentSize[0]
        } else {
          x = "30%"
        }
        if (point[1] > size.contentSize[1]) {
          y = point[1] - size.contentSize[1]
        } else if (point[1] + size.contentSize[1] < size.viewSize[1]) {
          y = point[1]
        } else {
          y = "30%"
        }
        return [x, y];
      },
      formatter: params => {
        const {
          name,
          data,
        } = params[0];
        return `
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:4px;">${name}</div>
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;">${data}人次</div>`
      },
      extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:12px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    grid: {
      top: '24',//上边距
      right: '0',//右边距
      left: '0',//左边距
      bottom: "0",//下边距
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: nameList,
      axisTick: {
        show: false //隐藏X轴刻度
      },
      axisLine: {
        lineStyle: {
          color: "#eaeaea"
        }
      },
      axisLabel: {
        color: 'rgba(0,0,0,0.65)',
        fontSize: 12,
        fontFamily: 'Source Han Sans CN-Regular',
        interval: 0,
      },
    },
    yAxis: [{
      boundaryGap: ['0', '5%'],
      type: 'value',
      name: "人次",
      splitNumber: 5,
      nameTextStyle: {
        color: 'rgba(0,0,0,0.65)',
        fontSize: 12,
        fontFamily: 'Source Han Sans CN-Regular',
        align: "left",
        verticalAlign: "center",
      },
      axisLabel: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.65)',
        fontFamily: 'Source Han Sans CN-Regular',
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0.09)',
          type: "dashed",
        }
      }
    }],
    series: [{
      type: 'bar',
      data: valueList,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#84ACF5' // 0% 处的颜色
          }, {
            offset: 1, color: '#397EF0' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        },
        borderRadius: [4, 4, 0, 0]
      },
      barWidth: 15,
    }]
  };

  return option;
}
// 办理进度条
const BarCode3 = (myChart) => {
  const data = 85;
  const name = "办理进度"

  const option = {
    backgroundColor: "#001e45",
    grid: {
      top: "center",
    },
    xAxis: {
      show: false,
      type: "value",
      boundaryGap: [0, 0],
      max: 100
    },
    yAxis: {
      type: 'category',
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      position: "right",
      axisLabel: {
        padding: [20, 5, 0, 0],
        align: "right",
        verticalAlign: "top",
        textStyle: {
          color: '#ffedcb',
          fontSize: 16,
          fontFamily: "Source Han Sans CN-Medium"
        },
        formatter: '{value}%'
      },
      data: [data]
    },
    series: [
      {// 进度
        data: [
          { name: name, value: data }
        ],
        name: name,
        type: 'bar',
        barWidth: 8,
        showBackground: true,
        backgroundStyle: {
          borderRadius: 11,
          color: "rgba(255,250,239,0.3)",
          borderColor: 'rgba(255,250,239,0.3)',
          borderWidth: 8,
          opacity: 1,
        },
        itemStyle: {
          color: {
            type: "linear",
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: "rgba(255, 225, 167, 1)"
            }, {
              offset: 0.5,
              color: "rgba(255, 250, 239, 1)"
              // 100% 处的颜色
            }, {
              offset: 1,
              color: "rgba(255, 225, 167, 1)"
              // 100% 处的颜色
            }],
            global: false
          },
          borderRadius: 11,
        },
        label: {
          show: true,
          position: "insideTopLeft",
          fontSize: 16,
          fontFamily: "Source Han Sans CN-Regular",
          fontWeight: 400,
          color: "#FFFFFF",
          padding: [20, 0, 0, 0],
          formatter: '{b}'
        },
        emphasis: {
          disabled: true,
        },
        markPoint: {
          symbol: "image://data:image/png;base64,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",
          symbolSize: [23, 34],
          label: {show: false},
          symbolOffset: [0, -20],
          data: [
            { name: '最大值', type: 'max' }
          ],
        }
      }, {
        name: '圆',
        type: 'scatter',
        data: [
          { name: name, value: data }
        ],
        label: "none",
        symbolSize: 9,
        itemStyle: {
          borderColor: '#FFFFFF',
          borderWidth: 2.5,
          color: "rgba(255, 225, 167, 1)",
          opacity: 1,
        },
        z: 2
      }]
  };

  return option;
}
// 横向柱状图
const BarCode4 = (myChart) => {
  /* 数据 */
  let nameList = [
    '总学分预警',
    '公共必修学位课预警',
    '专业学位课预警',
    '专业选修课预警',
    '公共必修非学位课预警',
    '公共选修非学位课预警'
  ]; // y轴数据
  let valueList = [10, 11, 13, 14, 15, 10]; // 数量

  const option = {
    tooltip: {
      trigger: 'item',
      position: function (point, params, dom, rect, size) {
        let x = 0;
        let y = 0;
        if (point[0] + size.contentSize[0] < size.viewSize[0]) {
          x = point[0];
        } else if (point[0] > size.contentSize[0]) {
          x = point[0] - size.contentSize[0];
        } else {
          x = '30%';
        }
        if (point[1] > size.contentSize[1]) {
          y = point[1] - size.contentSize[1];
        } else if (point[1] + size.contentSize[1] < size.viewSize[1]) {
          y = point[1];
        } else {
          y = '30%';
        }
        return [x, y];
      },
      formatter: (params) => {
        return `
      <div style="font-size:12px;color:rgba(0,0,0,0.85);margin-bottom:10px;font-family:Source Han Sans CN-Medium;font-weight: 500;margin-bottom:8px">${params.name}</div>
      <div style="font-size: 12px;font-family: Source Han Sans CN-Normal;font-weight: 400;color: rgba(0,0,0,0.65);">当前预警<span style="font-size: 16px;font-family: Source Han Sans CN-Bold;font-weight: bold;color: #397EF0;;margin:0 2px">${params.value}</span>人次</div>
      `;
      },
      extraCssText:
        'background-color:rgba(255, 255, 255, 0.8);padding:12px;box-shadow: 0px 3px 12px 1px rgba(57,126,240,0.22);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    grid: {
      left: '0',
      right: '8',
      bottom: '0', //下边距,
      top: '0',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(0,0,0,0.85)',
        fontSize: '12',
        fontFamily: 'Source Han Sans CN-Regular'
      },
      boundaryGap: ['0%', '20%'],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.1)',
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'category',
      inverse: true,
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.85)',
        fontSize: '12',
        fontFamily: 'Source Han Sans CN-Regular'
      },
      axisLine: {
        lineStyle: {
          color: '#CCCCCC'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: nameList
    },
    series: [
      {
        name: '当前预警人次',
        type: 'bar',
        barWidth: '12px', //柱子宽度
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#EE607E' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#FFA66A' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          barBorderRadius: [2, 2, 0, 0]
        },
        data: valueList
      }
    ]
  };

  return option;
}
// 民族人数占比图
const BarCode5 = (myChart) => {
  /* 数据 */
  const nameList = ['壮族', '维吾尔族', '傣族', '藏族', '苗族', '回族']; // y轴名称
  const valueList = [3.12, 2.98, 2.52, 2.11, 1.55, 1.03]; // 占比

  const option = {
    tooltip: {
      trigger: 'axis',
      show: true,
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '人数占比：{c}%'
    },
    legend: {
      show: false
    },
    grid: {
      left: '0',
      right: '16',
      bottom: '16',
      top: '16',
      containLabel: true
    },
    xAxis: [
      {
        splitLine: {
          show: false
        },
        type: 'value',
        show: false
      }
    ],
    yAxis: [
      {
        splitLine: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.09)'
          }
        },
        type: 'category',
        axisTick: {
          show: false
        },
        inverse: true, // 倒序
        boundaryGap: false, // 留白政策
        data: nameList,
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.65)',
          fontFamily: 'Source Han Sans CN-Regular',
          fontSize: 14,
          // align: 'left',
          margin: 15
        }
      },
    ],
    series: [
      {
        name: '占比',
        type: 'bar',
        barWidth: 13, // 柱子宽度
        label: {
          show: true,
          position: 'right', // 位置
          fontSize: 14,
          offset: [8,2],
          color: 'rgba(0, 0, 0, 0.85)',
          fontFamily: 'HarmonyOS Sans-Medium',
          fontWeight: 500,
          formatter: '{c}%' // 这里是数据展示的时候显示的数据
        }, // 柱子上方的数值
        itemStyle: {
          barBorderRadius: [0, 3, 3, 0], // 圆角（左上、右上、右下、左下）
          color: {
            type: "linear",
            x: 0,
            y: 1,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: "rgba(57, 126, 240, 1)"
            }, {
              offset: 1,
              color: "rgba(51, 207, 201, 1)"
              // 100% 处的颜色
            }],
            global: false
          }
        },
        data: valueList
      }
    ]
  };

  return option;
}
// 人数排名分布图
const BarCode6 = (myChart) => {
  /* 数据 */
  const nameList = ['公派留学', '提前毕业', '停学实践', '复读', '疾病']; // 类型
  const valueList = [80, 70, 60, 50, 40]; // 对应人数

  let fontWidth = 0;
  const getLetterWidth = (letter, fontSize) => {// 文本,字体大小
    const dom = document.createElement('span');
    dom.style.display = 'inline-block';
    dom.style.fontSize = fontSize + 'px';
    dom.textContent = letter;
    document.body.appendChild(dom);
    const width = dom.getBoundingClientRect().width;
    dom.remove();
    return Number(width.toFixed(2));
  };
  nameList.map(item => {
    if(fontWidth < getLetterWidth(item,16)){
      fontWidth = getLetterWidth(item,16)
    }
  })

  const option = {
    legend: {
      show: false
    },
    grid: {
      left: '16',
      right: '16',
      bottom: '16',
      top: '16',
      containLabel: true
    },
    xAxis: [
      {
        splitLine: {
          show: false
        },
        type: 'value',
        show: false,
        boundaryGap: ['0%', '5%']
      }
    ],
    yAxis: [
      {
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        type: 'category',
        axisTick: {
          show: false
        },
        inverse: true, // 倒序
        boundaryGap: false, // 留白政策
        data: nameList,
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.65)',
          align: 'left',
          padding: [-12, 0, 0, -70 -fontWidth - 24],
          verticalAlign: 'top',
          formatter: (value, index) => {
            if (index === 0) {
              return [`{lg0|TOP${index + 1}} ` + '{title|' + value + '} '].join(
                '\n'
              );
            } else if (index === 1) {
              return [`{lg1|TOP${index + 1}} ` + '{title|' + value + '} '].join(
                '\n'
              );
            } else if (index === 2) {
              return [`{lg2|TOP${index + 1}} ` + '{title|' + value + '} '].join(
                '\n'
              );
            } else if (index === 3) {
              return [`{lg3|TOP${index + 1}} ` + '{title|' + value + '} '].join(
                '\n'
              );
            } else if (index === 4) {
              return [`{lg4|TOP${index + 1}} ` + '{title|' + value + '} '].join(
                '\n'
              );
            }
          },
          rich: {
            lg0: {
              backgroundColor: 'rgba(240, 106, 57, 0.1)',
              color: 'rgba(240, 106, 57, 1)',
              borderRadius: 5,
              padding: [7, 12, 3, 12],
              align: 'center',
              fontSize: 16,
              fontFamily: 'Source Han Sans CN-Regular'
            },
            lg1: {
              backgroundColor: 'rgba(255, 176, 38, 0.1)',
              color: 'rgba(255, 176, 38, 1)',
              borderRadius: 5,

              align: 'center',
              padding: [7, 12, 3, 12],
              fontSize: 16,
              fontFamily: 'Source Han Sans CN-Regular'
            },
            lg2: {
              backgroundColor: 'rgba(51, 207, 201, 0.1)',
              color: 'rgba(51, 207, 201, 1)',
              borderRadius: 5,
              padding: [7, 12, 3, 12],
              align: 'center',
              lineHeight: 32,
              fontSize: 16,
              fontFamily: 'Source Han Sans CN-Regular'
            },
            lg3: {
              backgroundColor: 'rgba(126, 107, 241, 0.1)',
              color: 'rgba(126, 107, 241, 1)',
              borderRadius: 5,
              padding: [7, 12, 3, 12],
              align: 'center',
              lineHeight: 32,
              fontSize: 16,
              fontFamily: 'Source Han Sans CN-Regular'
            },
            lg4: {
              backgroundColor: 'rgba(57, 126, 240, 0.1)',
              color: 'rgba(57, 126, 240, 1)',
              borderRadius: 5,
              padding: [7, 12, 3, 12],
              align: 'center',
              lineHeight: 32,
              fontSize: 16,
              fontFamily: 'Source Han Sans CN-Regular'
            },
            title: {
              color: 'rgba(0,0,0,0.85)',
              align: 'right',
              fontSize: 16,
              fontFamily: 'Source Han Sans CN-Regular',
              padding: [0, 0, 0, 10]
            }
          }
        }
      }
    ],
    series: [
      {
        name: '人数',
        type: 'bar',
        barWidth: 13, // 柱子宽度
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(57, 126, 240, 0)',
          borderColor: 'rgba(57, 126, 240, 0.04)',
          borderWidth: 20
        },
        label: {
          show: true,
          formatter: '{c}人',
          color: 'rgba(0, 0, 0, 0.85)',
          fontFamily: 'HarmonyOS Sans-Medium',
          fontSize: 14,
          position: 'right'
        },
        itemStyle: {
          barBorderRadius: [0, 3, 3, 0], // 圆角（左上、右上、右下、左下）
          color: {
            type: "linear",
            x: 0,
            y: 1,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: "rgba(57, 126, 240, 1)"
            }, {
              offset: 1,
              color: "rgba(51, 207, 201, 1)"
              // 100% 处的颜色
            }],
            global: false
          }
        },
        data: valueList
      }
    ]
  };

  return option;
}
// 主题访问人次排名
const BarCode7 = (myChart) => {
  const nameList = [
    '数字高校',
    '数字学工',
    '数字教工',
    '数字教务',
    '数字生活',
    '数字智治'
  ]; //名称
  const numList = [800, 700, 600, 400, 300, 250]; // 数量
  const percentList = ['90', '80', '70', '65', '60', '55']; //比例

  const option = {
    grid: {
      left: "48",
      right: "0",
      bottom: "0",
      top: "16"
      // containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params) {
        return params[0].name + ': ' + params[0].value + '%';
      }
    },
    xAxis: {
      show: false,
      type: 'value',
      max: 100
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLabel: {
          inside: true,
          align: 'left',
          verticalAlign: 'bottom',
          padding: [0, 0, 15, -7],
          color: 'rgba(0,0,0,0.65)',
          fontSize: '14',
          fontFamily: 'Source Han Sans CN-Regular'
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        data: nameList
      },
      {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
          padding: [0, 10, 15, 0],
          verticalAlign: 'bottom',
          align: 'right',
          formatter: (value) => {
            return `{value|${value}}{unit|人次}`;
          },
          rich: {
            value: {
              color: 'rgba(0, 0, 0, 0.85)',
              fontFamily: 'HarmonyOS Sans-Regular',
              fontSize: '16'
            },
            unit: {
              color: 'rgba(0, 0, 0, 0.85)',
              fontFamily: 'Source Han Sans CN-Regular',
              fontSize: '14'
            }
          }
        },
        data: numList
      },
      {
        splitLine: {
          show: false
        },
        axisLine: {
          //y轴
          show: false
        },
        type: 'category',
        axisTick: {
          show: false
        },
        inverse: true, // 倒序
        data: nameList,
        position: 'left',
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.65)',
          padding: [0, 0, -3, -32],
          align: 'left',
          verticalAlign: 'bottom',
          formatter: (value, index) => {
            let i = nameList.indexOf(value);
            if (i === 0) {
              return `{lg1|${i + 1}}`;
            } else if (i === 1) {
              return `{lg2|${i + 1}}`;
            } else if (i === 2) {
              return `{lg3|${i + 1}}`;
            } else {
              return `{lg|${i + 1}}`;
            }
          },
          rich: {
            lg1: {
              backgroundColor: '#FFF2E8',
              color: '#FF7A45',
              borderRadius: 6,
              align: 'center',
              width: 28,
              height: 28,
              lineHeight: 28,
              verticalAlign: 'middle',
              fontSize: 14,
              fontFamily: 'HarmonyOS Sans-Regular'
            },
            lg2: {
              backgroundColor: '#FFFBE6',
              color: '#FAAD14',
              borderRadius: 6,
              align: 'center',
              width: 28,
              height: 28,
              lineHeight: 28,
              verticalAlign: 'middle',
              fontSize: 14,
              fontFamily: 'HarmonyOS Sans-Regular'
            },
            lg3: {
              backgroundColor: '#E5FFF3',
              color: '#23D688',
              borderRadius: 6,
              align: 'center',
              width: 28,
              height: 28,
              lineHeight: 28,
              verticalAlign: 'middle',
              fontSize: 14,
              fontFamily: 'HarmonyOS Sans-Regular'
            },
            lg: {
              backgroundColor: '#EDF1FF',
              color: '#397EF0',
              borderRadius: 6,
              align: 'center',
              width: 28,
              height: 28,
              lineHeight: 28,
              verticalAlign: 'middle',
              fontSize: 14,
              fontFamily: 'HarmonyOS Sans-Regular'
            }
          }
        }
      }
    ],
    series: [
      {
        name: '值',
        type: 'bar',
        barCategoryGap: '50%', // 柱子距离
        showBackground: true,
        backgroundStyle: {
          color: '#F5F9FF',
          borderRadius: [0, 2, 2, 0]
        },
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 1,
                color: 'rgba(132, 172, 245, 1)'
              },
              {
                offset: 0,
                color: 'rgba(57, 126, 240, 1)'
              }
            ],
            global: false // 缺省为 false
          },
          barBorderRadius: [0, 2, 2, 0]
        },
        barWidth: 10,
        data: percentList
      }
    ]
  };

  return option;
}
// 环形占比图
const BarCode8 = (myChart) => {
  const data = '86';

  const option = {
    title: {
      text: data + '%',
      textStyle: {
        color: '#2A95F9',
        fontSize: 24
      },
      itemGap: 20,
      left: 'center',
      top: 'center'
    },
    angleAxis: {
      max: 100,
      clockwise: true, // 逆时针
      // 隐藏刻度线
      show: false
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    polar: [
      {
        center: ['50%', '50%'], //中心点位置
        radius: '100%' //图形大小
      }
    ],
    series: [
      {
        type: 'bar',
        data: [data],
        showBackground: true,
        polarIndex: 0,
        backgroundStyle: {
          color: '#f0f2f6',
          borderWidth: 25
        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 25,
        itemStyle: {
          opacity: 1,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#494CF3'
              },
              {
                offset: 1,
                color: '#2AB0FF'
              }
            ],
            global: false // 缺省为 false
          },
          shadowBlur: 5,
          shadowColor: '#2A95F9'
        }
      }
    ]
  };

  return option;
}
// 各省招生分数区间
const BarCode9 = (myChart) => {
  const nameList = ['广东省', '湖南省', '浙江省', '福建省', '安徽省', '湖北省'];
  const lowestMarkData = [430, 460, 505, 480, 470, 550]; // 最低分
  const topScoreData = [690, 700, 720, 655, 710, 740]; // 最高分

  const topScoreBarData = topScoreData.map((item, index) => {
    return item - lowestMarkData[index];
  });

  const option = {
    backgroundColor: '#00286a',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      position: function (point, params, dom, rect, size) {
        let x = 0;
        let y = 0;
        if (point[0] + size.contentSize[0] + 10 > size.viewSize[0]) {
          x = point[0] - size.contentSize[0] - 10;
        } else {
          x = point[0] + 10;
        }
        if (point[1] + size.contentSize[1] + 10 > size.viewSize[1]) {
          y = point[1] - size.contentSize[1] - 10;
        } else {
          y = point[1] + 10;
        }
        return [x, y];
      },
      formatter: function (params) {
        const tar = params[1];
        const tar2 = params[0];
        const lowestMark = tar2.data; // 最低分
        const topScore = tar.data + tar2.data; // 最高分
        return `
      <span style="display:block;padding-left:11px;width:131px;height: 24px;background: linear-gradient(90deg, #1071FF, #15FFE1);box-shadow: 0px 3px 5px 0px rgba(0, 55, 111, 0.67);opacity: 0.9;border-radius: 5px 5px 0px 0px;font-size: 12px;font-family: Source Han Sans CN;font-weight: 400;color: #FFFFFF;line-height: 24px;">${
          tar.name
        }</span>
      <div style="display:flex;justify-content: space-between;padding:0 11px;margin-top:11px;margin-bottom:4px;">
        <div style="font-size: 12px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #70EEFE;">最高分</div>
        <div style="font-size: 12px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #FFFFFF;">${topScore}</div>
      </div>
      <div style="display:flex;justify-content: space-between;padding:0 11px;margin-bottom:4px;">
        <div style="font-size: 12px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #70EEFE;">最低分</div>
        <div style="font-size: 12px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #FFFFFF;">${lowestMark}</div>
      </div>
      <div style="display:flex;justify-content: space-between;padding:0 11px;margin-bottom:8px;">
        <div style="font-size: 12px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #70EEFE;">平均分</div>
        <div style="font-size: 12px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #FFFFFF;">${(
          (topScore + lowestMark) /
          2
        ).toFixed(2)}</div>
      </div>
      `;
      },
      extraCssText: `border:transparent;padding:0;opacity: 0.9;border-radius: 5px;background: rgba(2, 48, 85,1);box-shadow: 0px 1px 8px 0px rgba(32, 142, 255, 0.56);opacity: 0.9;`
    },
    grid: {
      left: '24',
      right: '24',
      bottom: '18',
      top: '24',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      position: 'top',
      min: 300,
      max: 750,
      interval: 50,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        fontSize: 12,
        fontFamily: 'Source Han Sans CN-Regular',
        fontWeight: 400,
        color: '#70EEFE'
      },
      splitLine: {
        // 分割线
        lineStyle: {
          color: '#70EEFE',
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'category',
      data: nameList,
      inverse: true, // 坐标标签倒序
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        align: 'left',
        padding: [0, 0, 0, -80],
        formatter: (value, index) => {
          let limit = 4;
          if (value.length > limit) {
            return [
              `{lg|${index + 1}} ` +
              '{title|' +
              value.substr(0, limit) +
              '...' +
              '} '
            ].join('\n');
          } else {
            return [`{lg|${index + 1}} ` + '{title|' + value + '} '].join('\n');
          }
        },
        rich: {
          lg: {
            backgroundColor: 'rgba(3, 207, 225, 0.3)',
            color: 'rgba(21, 255, 225, 1)',
            borderRadius: 2,
            padding: [5, 5, 2, 5],
            align: 'center',
            verticalAlign: 'top',
            fontSize: 14,
            fontFamily: 'Source Han Sans CN-Regular'
          },
          title: {
            color: '#C4E1FF',
            align: 'left',
            verticalAlign: 'top',
            fontSize: 14,
            fontFamily: 'Source Han Sans CN-Regular',
            padding: [5, 0, 0, 0]
          }
        }
      }
    },
    series: [
      {
        name: '最低分',
        type: 'bar',
        stack: 'Total',
        barWidth: 12,
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          }
        },
        data: lowestMarkData
      },
      {
        name: '最高分',
        type: 'bar',
        stack: 'Total',
        barWidth: 12,
        itemStyle: {
          borderColor: '#157DFE',
          borderWidth: 1,
          color: {
            type: 'linear',
            x: 1,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#157DFE'
              },
              {
                offset: 1,
                color: 'rgba(21, 125, 254, 0)'
              }
            ],
            global: false
          }
        },
        label: {
          show: false
        },
        data: topScoreBarData
      }
    ]
  };

  return option;
}
// 岗位招聘趋势
const BarCode10 = (myChart) => {
  /* 数据 */
  const nameList = ['2018', '2019', '2020', '2021', '2022'];
  const barData1 = [20, 52, 67, 33, 39]; // 柱子信息1,外层
  const barData2 = [15, 20, 30, 20, 30]; // 柱子信息2,内层下
  const barData3 = [17, 50, 60, 30, 35]; // 柱子信息3,内层上

  /* 数据整合 */
  let stackData = barData3.map((item, index) => {
    return item - barData2[index];
  });
  let barDataList = [barData1, barData2, stackData]; // 合并数组，方便使用
  let legendData = ['招聘岗位', '实际报道人数', '录用人数']; // legend

  /* series整理 */
  let seriesData = [];
  let colorList = ['transparent', '#B5D1FE', '#397EF0'];
  let legendShowList = [];
  legendData.map((item, index) => {
    if (index === 0) {
      seriesData.push({
        name: item,
        type: 'bar',
        yAxisIndex: 0,
        barWidth: 19,
        barGap: '-83%',
        z: 1,
        itemStyle: {
          color: colorList[index],
          barBorderRadius: [3, 3, 0, 0],
          borderColor: '#397EF0'
        },
        data: barDataList[index]
      });
      legendShowList.push({
        name: item,
        itemStyle: {
          color: colorList[index],
          borderColor: '#397EF0',
          borderWidth: 1
        }
      });
    } else {
      seriesData.push({
        name: item,
        type: 'bar',
        yAxisIndex: 0,
        barWidth: 13,
        barGap: '-83%',
        stack: 'a',
        z: 1,
        itemStyle: {
          color: colorList[index],
          barBorderRadius:
            index === legendData.length - 1 ? [3, 3, 0, 0] : [0, 0, 0, 0]
        },
        data: barDataList[index]
      });
      legendShowList.push({
        name: item
      });
    }
  });

  const option = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'none'
      },
      position: function (point, params, dom, rect, size) {
        // 提示框位置
        let x = 0;
        let y = 0;
        // 提示框位置
        if (point[0] + size.contentSize[0] < size.viewSize[0]) {
          x = point[0];
        } else if (point[0] > size.contentSize[0]) {
          x = point[0] - size.contentSize[0];
        } else {
          x = '30%';
        }
        if (point[1] > size.contentSize[1]) {
          y = point[1] - size.contentSize[1];
        } else if (point[1] + size.contentSize[1] < size.viewSize[1]) {
          y = point[1];
        } else {
          y = '30%';
        }
        return [x, y];
      },
      formatter: (params) => {
        let childDiv = '<div>';
        legendData.map((item, index) => {
          if (index === legendData.length - 1) {
            childDiv += `<div style="font-size: 14px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #FFFFFF;">
            <span>${item}:</span><span style="margin-left:8px">${
              barDataList[index][params['dataIndex']] +
              barDataList[index - 1][params['dataIndex']]
            }</span>
            </div>`;
          } else {
            childDiv += `<div style="font-size: 14px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #FFFFFF;margin-bottom:4px;">
            <span>${item}:</span><span style="margin-left:8px">${
              barDataList[index][params['dataIndex']]
            }</span>
            </div>`;
          }
        });
        return `
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:8px;">${params.name}年</div>
            ${childDiv}   
         `;
      },
      extraCssText:
        'opacity: 0.8;background-color:#050F1B;padding:12px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    legend: {
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 25,
      left: 0,
      textStyle: {
        color: 'rgba(0, 0, 0, 0.45)',
        fontFamily: 'Source Han Sans CN-Regular',
        fontSize: 14,
        padding: [0, 0, 0, 8]
      },
      data: legendShowList
    },
    grid: {
      top: '64',
      left: '8',
      right: '8',
      bottom: '8',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: nameList,
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(204, 204, 204, 1)',
            width: 1
          }
        },
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.65)',
          fontSize: 14,
          fontFamily: 'Source Han Sans CN-Regular'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '人数：人',
        splitNumber: 5,
        nameTextStyle: {
          color: 'rgba(0, 0, 0, 0.45)',
          fontSize: 14,
          fontFamily: 'Source Han Sans CN-Regular',
          align: 'left',
          verticalAlign: 'center'
        },
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.65)',
          fontSize: 14,
          fontFamily: 'Source Han Sans CN-Regular'
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(223, 223, 223, 1)',
            type: 'dashed',
            width: 1
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: seriesData
  };

  return option;
}
// 多柱状基础图
const BarCode11 = (myChart) => {
  const nameList = ['2017年', '2018年', '2019年', '2020年', '2021年']; // 类型
  const data1Arr = [810, 815, 800, 580, 900]; // 数据1
  const data2Arr = [800, 580, 900, 720, 700]; // 数据2
  const data3Arr = [700, 810, 815, 800, 700]; // 数据3
  const data4Arr = [800, 580, 900, 720, 700]; // 数据4

  const dataName = ['类型1', '类型2', '类型3', '类型4'];

  let dataList = [data1Arr, data2Arr, data3Arr, data4Arr];
  let colorList = ['#397EF0', '#3ED89B', '#F9D648', '#FF7A96'];

  let seriousList = [];
  dataName.map((item, index) => {
    seriousList.push({
      name: dataName[index],
      label: {
        show: false
      },
      color: colorList[index],
      itemStyle: {
        barBorderRadius: [2, 2, 0, 0]
      },
      type: 'bar',
      barWidth: '12', //柱型宽度
      data: dataList[index]
    });
  });

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      textStyle: {
        fontSize: 14
      }
    },
    legend: {
      data: dataName,
      right: '0',
      top: '0',
      //icon: "circle",
      itemWidth: 15, // 设置宽度
      itemHeight: 15, // 设置高度
      itemGap: 32,
      textStyle: {
        color: 'rgba(0, 0, 0, 0.85)',
        fontFamily: 'Source Han Sans CN-Regular',
        fontSize: 14,
        padding: [0, 0, 0, 5]
      }
    },
    grid: {
      left: '0',
      right: '0',
      bottom: '16', //下边距,
      top: '48',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#cccccc'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.85)',
          fontSize: 14,
          fontFamily: 'Source Han Sans CN-Regular'
        },
        data: nameList
      }
    ],
    yAxis: [
      {
        name: '单位：人',
        nameTextStyle: {
          color: 'rgba(0, 0, 0, 0.45)',
          fontSize: 14,
          fontFamily: 'Source Han Sans CN-Regular',
          align: 'left',
          verticalAlign: 'center'
        },
        type: 'value',
        splitLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.1)',
            type: 'dashed'
          }
        },
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.85)',
          fontSize: 14,
          fontFamily: 'Source Han Sans CN-Regular'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      }
    ],
    series: seriousList
  };

  return option;
}
// 人数对比柱状图
const BarCode12 = (myChart) => {
  /* 数据 */
  let nameList = ['目标', '对标1', '对标2']; // 类别
  let valueList = [36, 32, 38]; // 人数

  /* 数据整合 */
  let dataList = [];
  nameList.map((item, index) => {
    if (index === 0) {
      dataList.push({
        name: item,
        value: valueList[index],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#FFA66A' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#EE607E' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          borderRadius: [4, 4, 0, 0]
        },
        label: {
          show: true,
          position: 'top',
          fontSize: 14,
          fontFamily: 'HarmonyOS Sans-Regular',
          color: '#FF855C'
        }
      });
    } else {
      dataList.push({
        name: item,
        value: valueList[index]
      });
    }
  });

  const option = {
    backgroundColor: '#113659',
    grid: {
      top: '32', //上边距
      right: '16', //右边距
      left: '16', //左边距
      bottom: '16', //下边距
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: nameList,
      axisTick: {
        show: false //隐藏X轴刻度
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(49, 217, 255, 0.8)'
        }
      },
      axisLabel: {
        show: true,
        color: '#B6E6FF',
        fontSize: 13,
        fontFamily: 'Source Han Sans CN-Regular'
      }
    },
    yAxis: [
      {
        boundaryGap: ['0', '20%'],
        type: 'value',
        name: '人数(人)',
        splitNumber: 5,
        nameTextStyle: {
          color: '#B6E6FF',
          fontSize: 12,
          fontFamily: 'Source Han Sans CN-Regular',
          align: 'left',
          verticalAlign: 'center'
        },
        axisLabel: {
          fontSize: 12,
          color: '#B6E6FF',
          fontFamily: 'HarmonyOS Sans-Regular'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(49, 217, 255, 0.5)',
            type: 'dashed'
          }
        }
      }
    ],
    series: [
      {
        type: 'bar',
        data: dataList,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 245, 1)' // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(29, 130, 255, 1)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          borderRadius: [4, 4, 0, 0]
        },
        barWidth: 15,
        label: {
          show: true,
          position: 'top',
          fontSize: 14,
          fontFamily: 'HarmonyOS Sans-Regular',
          color: '#53E6FF'
        }
      }
    ]
  };

  return option;
}

export const BarCodeList = [
  {id: "BarCode12", name: "人数对比柱状图", type: "bar", author: "biubiu", date: "2023.12.22", remark: "异色柱状图，突出对比效果", code: `${BarCode12}`},
  {id: "BarCode11", name: "多柱状基础图", type: "bar", author: "biubiu", date: "2023.12.20", remark: "多柱状基础图", code: `${BarCode11}`},
  {id: "BarCode10", name: "岗位招聘趋势", type: "bar", author: "biubiu", date: "2023.12.20", remark: "柱状图重叠展示信息", code: `${BarCode10}`},
  {id: "BarCode9", name: "各省招生分数区间", type: "bar", author: "biubiu", date: "2023.12.20", remark: "堆叠柱状图，展示最低分到最高分区间", code: `${BarCode9}`},
  {id: "BarCode8", name: "环形占比图", type: "bar", author: "biubiu", date: "2023.12.19", remark: "环形柱状图", code: `${BarCode8}`},
  {id: "BarCode7", name: "主题访问人次排名", type: "bar", author: "biubiu", date: "2023.12.18", remark: "横向柱状图，顺序排名", code: `${BarCode7}`},
  {id: "BarCode6", name: "人数排名分布图", type: "bar", author: "biubiu", date: "2023.12.18", remark: "横向柱状图", code: `${BarCode6}`},
  {id: "BarCode5", name: "民族人数占比图", type: "bar", author: "biubiu", date: "2023.12.18", remark: "横向柱状图，显示百分比", code: `${BarCode5}`},
  {id: "BarCode4", name: "预警占比图", type: "bar", author: "biubiu", date: "2023.12.18", remark: "横向柱状图", code: `${BarCode4}`},
  {id: "BarCode3", name: "办理进度条", type: "bar", author: "biubiu", date: "2023.12.18", remark: "单柱状占比条形图", code: `${BarCode3}`},
  {id: "BarCode2", name: "单柱状分布图", type: "bar", author: "biubiu", date: "2023.12.15", remark: "单柱状分布图", code: `${BarCode2}`},
  {id: "BarCode1", name: "单条形占比图", type: "bar", author: "biubiu", date: "2023.12.12", remark: "单柱状占比条形图", code: `${BarCode1}`},
]

