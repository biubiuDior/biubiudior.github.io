/*
 * @Name: 联动组合图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 联动组合图图例 */
// 科研项目增长趋势
const LinkageCode1 = (myChart) => {
  /* 数据 */
  let xData = ['2018', '2019', '2020', '2021', '2022'];
  let values1 = [273, 372, 160, 255, 180]; // 柱状
  let values2 = [70, 75, 65, 60, 85]; // 折线
  const legendData = ['新增科研项目数', '增长率'];

  const option = {
    backgroundColor: '#040a11',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      position: function (point, params, dom, rect, size) {
        // 提示框位置
        let x = 0;
        let y = 0;
        //提示框定位
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
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:12px;">${params[0].name}年</div>
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:4px;">${legendData[0]}：${params[0].value}个</div>
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:4px;">${legendData[1]}：${params[1].value}%</div>`;
      },
      extraCssText:
        'opacity: 0.8;background-color:#050F1B;padding:16px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    legend: {
      data: legendData,
      top: '0',
      left: '0',
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 25,
      textStyle: {
        fontSize: 13,
        color: '#82AFC6',
        fontFamily: 'Source Han Sans CN-Normal',
        padding: [0, 0, 0, 2]
      }
    },
    grid: {
      top: "60",
      right: "16",
      left: "16",
      bottom: "16",
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: false //隐藏X轴刻度
      },
      axisLine: {
        lineStyle: {
          color: '#1a6d84'
        }
      },
      axisLabel: {
        show: true,
        color: '#82AFC6',
        fontSize: 13,
        fontFamily: 'Source Han Sans CN-Normal'
      }
    },
    yAxis: [
      {
        type: 'value',
        name: legendData[0],
        boundaryGap: ['0%', '20%'],
        alignTicks: true,
        splitNumber: 5,
        nameTextStyle: {
          color: '#82AFC6',
          fontSize: 13,
          fontFamily: 'Source Han Sans CN-Normal',
          align: 'left',
          verticalAlign: 'center'
        },
        axisLabel: {
          color: '#82AFC6',
          fontSize: 13,
          fontFamily: 'Source Han Sans CN-Normal'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(49, 218, 255, 0.5)',
            type: 'dashed'
          }
        }
      },
      {
        type: 'value',
        name: legendData[1],
        position: 'right',
        boundaryGap: ['0%', '20%'],
        alignTicks: true,
        splitNumber: 5,
        nameTextStyle: {
          color: '#82AFC6',
          fontSize: 13,
          fontFamily: 'Source Han Sans CN-Normal',
          align: 'right',
          verticalAlign: 'center'
        },
        axisLabel: {
          color: '#82AFC6',
          fontSize: 13,
          fontFamily: 'Source Han Sans CN-Normal'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(49, 218, 255, 0.5)',
            type: 'dashed'
          }
        }
      }
    ],
    series: [
      {
        type: 'bar',
        name: legendData[0],
        data: values1,
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
                color: 'rgba(49, 218, 255, 1)' // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(3, 21, 50, 1)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          borderRadius: [4, 4, 0, 0]
        },
        barWidth: 26
      },
      {
        name: legendData[1],
        type: 'line',
        data: values2,
        yAxisIndex: 1,
        symbolSize: 8, //标记的大小
        emphasis: {
          scale: 1.5
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(6, 201, 112, 0.3)' // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(47,145,255,0)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        lineStyle: {
          color: 'rgba(6, 201, 112, 1)',
          width: 2
        },
        itemStyle: {
          //折线拐点标志的样式
          color: 'rgba(6, 201, 112, 1)',
          borderColor: 'rgba(6, 201, 112, 1)',
          borderWidth: 2
        }
        // smooth: true
      },
      {
        // 滚动点
        type: 'lines',
        zIndex: 999,
        z: 999,
        yAxisIndex: 1,
        coordinateSystem: 'cartesian2d',
        polyline: true,
        smooth: true,
        effect: {
          show: true,
          trailLength: 0,
          period: 10, //光点滑动速度
          delay: 2000,
          symbol: 'circle',
          color: '#9eefce',
          symbolSize: 8,
          shadowBlur: 10,
          shadowColor: '#9eefce'
        },
        lineStyle: {
          show: false,
          opacity: 0
        },
        data: [
          {
            coords: xData.map((item, index) => {
              return ['' + xData[index], '' + values2[index]];
            })
          }
        ]
      }
    ]
  };

  var count = 0;
  var timer = null;

  var dataLength = option.series[1].data.length;
  timer && clearInterval(timer);
  timer = setInterval(() => {
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 1
    });
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 1,
      dataIndex: count % dataLength
    });
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 1,
      dataIndex: count % dataLength
    });
    count++;
  }, 2000);

  return option;
}


export const LinkageCodeList = [
  {id: "LinkageCode1", name: "科研项目增长趋势", type: "linkage", author: "biubiu", date: "2023.12.22", remark: "柱状图联动折线图，自动轮播，双Y轴", renderer: 'canvas', code: `${LinkageCode1}`},
]