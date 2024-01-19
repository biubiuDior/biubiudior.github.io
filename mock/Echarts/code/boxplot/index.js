/*
 * @Name: 箱形图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 箱形图图例 */
// 历年成绩趋势分析
const BoxplotCode1 = (myChart) => {
  const xData = [
    '2017年第一学期',
    '2017年第二学期',
    '2018年第一学期',
    '2018年第二学期',
    '2019年第一学期',
    '2019年第二学期'
  ];
  const cjjdData = [88, 94, 94, 90, 92, 94]; // 成绩均点
// [最小值，下四分位，中位数，上四分位，最大值]
  const xxtData = [
    [36, 46, 60, 70, 82],
    [38, 50, 58, 68, 86],
    [44, 52, 60, 70, 88],
    [40, 50, 62, 78, 90],
    [42, 52, 64, 72, 82],
    [34, 50, 66, 74, 84]
  ]; // 箱形图
  const lsqdData = [30, 32, 40, 35, 36, 28];

  const option = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '41',
      right: '0',
      top: '63',
      bottom: '21'
    },
    legend: {
      data: [
        {
          name: '离散群点'
        },
        {
          name: '成绩均点'
        }
      ],
      type: 'scroll',
      right: '0',
      top: '22',
      itemGap: 25,
      itemWidth: 15,
      itemHeight: 15,
      textStyle: {
        fontSize: '14',
        fontFamily: 'Source Han Sans CN-Regular',
        color: 'rgba(0, 0, 0, 0.85)'
      }
    },
    xAxis: {
      type: 'category',
      data: xData,
      name: '学期',
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.45)',
        textStyle: {
          fontSize: '12',
          fontFamily: 'Source Han Sans CN-Regular'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      name: '单位：分',
      nameTextStyle: {
        color: 'rgba(0, 0, 0, 0.45)',
        fontSize: '12',
        fontFamily: 'Source Han Sans CN-Regular',
        align: 'left',
        verticalAlign: 'center'
      },
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.45)',
        fontSize: '12',
        fontFamily: 'Source Han Sans CN-Regular'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    },
    series: [
      {
        name: '成绩趋势',
        type: 'boxplot',
        z: -1,
        data: xxtData,
        itemStyle: {
          borderColor: 'rgba(57, 126, 240, 0.45)',
          borderWidth: 1
        },
        tooltip: {
          formatter: function (param) {
            return [
              '最大值: ' + param.data[5] + '分',
              '上四分位: ' + param.data[4] + '分',
              '中位数: ' + param.data[3] + '分',
              '下四分位: ' + param.data[2] + '分',
              '最小值: ' + param.data[1] + '分'
            ].join('<br/>');
          }
        }
      },
      {
        name: '成绩均点',
        type: 'line',
        data: cjjdData,
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
          width: 2,
          color: '#FAAD14'
        },
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#FFB536' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#FF7B36' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#FFB536' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#FF7B36' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          borderWidth: 2
        }
      },
      {
        name: '离散群点',
        type: 'scatter',
        symbolSize: 12,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#59EBD7' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#3ED89B' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        data: lsqdData
      }
    ]
  };

  return option;
}


export const BoxplotCodeList = [
  {id: "BoxplotCode1", name: "历年成绩趋势分析", type: "boxplot", author: "biubiu", date: "2024.01.09", remark: "基础箱形图，均值对比，离散点对比", code: `${BoxplotCode1}`},
]