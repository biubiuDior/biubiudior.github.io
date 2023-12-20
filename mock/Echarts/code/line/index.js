/*
 * @Name: 折线图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 折线图图例 */
// 到账经费年度趋势
const LineCode1 = () => {
  const nameList = ['2017', '2018', '2019', '2020', '2021'];
  const valueList = ['81', '65', '76', '84', '49'];

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      position: function (point, params, dom, rect, size) {
        // 提示框位置
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
      formatter: (params) => {
        const { name, data } = params[0];
        return `
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:8px;">${name}年</div>
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;">到账经费：${data} 万元</div>
         `;
      },
      extraCssText:
        'opacity: 0.8;background-color:#050F1B;padding:12px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    grid: {
      top: '24', //上边距
      right: '0', //右边距
      left: '0', //左边距
      bottom: '0', //下边距
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
          color: '#CCCCCC'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 14,
          fontFamily: 'Source Han Sans CN-Regular'
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '单位：万元',
        nameTextStyle: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 14,
          fontFamily: 'Source Han Sans CN-Regular',
          align: 'left',
          verticalAlign: 'center'
        },
        axisLabel: {
          color: 'rgba(0,0,0,0.65)',
          textStyle: {
            fontSize: 14
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(223, 223, 223, 1)'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(223, 223, 223, 1)',
            type: 'dashed'
          }
        }
      }
    ],
    series: [
      {
        type: 'line',
        data: valueList,
        symbolSize: 8, //标记的大小
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
                color: 'rgba(116,160,249,0.15)'
                // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(29,63,120,0)'
                // 100% 处的颜色
              }
            ],
            global: false
            // 缺省为 false
          }
        },
        lineStyle: {
          color: '#5B8FF9',
          width: 3,
          shadowColor: 'rgba(26,117,218,0.17)', //设置折线阴影
          shadowBlur: 5,
          shadowOffsetY: 9
        },
        itemStyle: {
          //折线拐点标志的样式
          color: '#5B8FF9',
          borderColor: '#5B8FF9',
          borderWidth: 5
        },
        smooth: 0.4,
        emphasis: {
          scale: 1.5
        }
      }
    ]
  };

  return option;
}


export const LineCodeList = [
  {name: "到账经费年度趋势", type: "line", author: "biubiu", date: "2023.12.19", remark: "折线面积图", code: `${LineCode1}`},
]
