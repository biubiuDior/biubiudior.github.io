/*
 * @Name: 折线图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 折线图图例 */
// 到账经费年度趋势
const LineCode1 = (myChart) => {
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
// 收支趋势对比图
const LineCode2 = (myChart) => {
  /* 数据 */
  const nameList = ['2018', '2019', '2020', '2021', '2022']; // x轴数据
  const valueList = [
    [60, 70, 78, 70, 60],
    [45, 60, 65, 60, 78]
  ]; // 折线总数据
  const legend = ['金额', '增长率']; // 图例数据
  const yName = '人数(人)'; // y轴名称
  const unit = '人';

  /* 颜色 */
  const colorList = ['rgba(57, 126, 240, 1)', 'rgba(250, 173, 20, 1)']; // 主颜色系
  const areaColorList = [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(0, 117, 255, 0.3)' // 0% 处的颜色
        },
        {
          offset: 1,
          color: 'rgba(0, 117, 255, 0)' // 100% 处的颜色
        }
      ],
      global: false // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(255, 175, 20, 0.3)' // 0% 处的颜色
        },
        {
          offset: 1,
          color: 'rgba(255, 179, 31, 0)' // 100% 处的颜色
        }
      ],
      global: false // 缺省为 false
    }
  ]; // 渐变空间颜色

  /* 数据整理 */
// 获取拐点数据
  const getLineDataAll = () => {
    let dataArr = []; // 拐点数据
    let arr1 = [];
    let arr2 = [];
    nameList.map((item, index) => {
      // 判断大小显示label
      // arr1
      if (Number(valueList[0][index]) > Number(valueList[1][index])) {
        arr1.push({
          value: valueList[0][index],
          label: {
            show: true,
            z: 3,
            position: 'top',
            opacity: 0.6,
            backgroundColor: '#001435',
            offset: [0, -8],
            borderRadius: 2,
            formatter: (params) => {
              return `{a|${valueList[0][index]}}\n{b|${valueList[1][index]}}`;
            },
            rich: {
              a: {
                fontSize: 12,
                color: 'rgba(57, 126, 240, 1)',
                fontFamily: 'Source Han Sans CN-Regular',
                padding: [4, 2, 2, 2]
              },
              b: {
                fontSize: 12,
                color: 'rgba(255, 229, 143, 1)',
                fontFamily: 'Source Han Sans CN-Regular',
                padding: [2, 2, 0, 2]
              }
            }
          },
          emphasis: {
            scale: 2,
            itemStyle: {
              borderWidth: 3
            },
            label: {
              opacity: 1,
              rich: {
                a: {
                  fontSize: 14,
                  color: '#ABC6F7',
                  fontFamily: 'Source Han Sans CN-Regular',
                  padding: [4, 2, 2, 2]
                },
                b: {
                  fontSize: 14,
                  color: 'rgba(255, 229, 143, 1)',
                  fontFamily: 'Source Han Sans CN-Regular',
                  padding: [2, 2, 0, 2]
                }
              }
            }
          }
        });
      } else {
        arr1.push({
          value: valueList[0][index],
          emphasis: {
            scale: 2,
            itemStyle: {
              borderWidth: 3
            }
          }
        });
      }
      // arr2
      if (Number(valueList[1][index]) > Number(valueList[0][index])) {
        arr2.push({
          value: valueList[1][index],
          label: {
            show: true,
            z: 3,
            position: 'top',
            opacity: 0.6,
            backgroundColor: '#001435',
            offset: [0, -8],
            borderRadius: 2,
            formatter: (params) => {
              return `{b|${valueList[1][index]}}\n{a|${valueList[0][index]}}`;
            },
            rich: {
              a: {
                fontSize: 12,
                color: 'rgba(57, 126, 240, 1)',
                fontFamily: 'Source Han Sans CN-Regular',
                padding: [2, 2, 0, 2]
              },
              b: {
                fontSize: 12,
                color: 'rgba(255, 229, 143, 1)',
                fontFamily: 'Source Han Sans CN-Regular',
                padding: [4, 2, 0, 2]
              }
            }
          },
          emphasis: {
            scale: 2,
            itemStyle: {
              borderWidth: 3
            },
            label: {
              opacity: 1,
              rich: {
                a: {
                  fontSize: 14,
                  color: '#ABC6F7',
                  fontFamily: 'Source Han Sans CN-Regular',
                  padding: [2, 2, 0, 2]
                },
                b: {
                  fontSize: 14,
                  color: 'rgba(255, 229, 143, 1)',
                  fontFamily: 'Source Han Sans CN-Regular',
                  padding: [4, 2, 0, 2]
                }
              }
            }
          }
        });
      } else {
        arr2.push({
          value: valueList[1][index],
          emphasis: {
            scale: 2,
            itemStyle: {
              borderWidth: 3
            }
          }
        });
      }
    });
    dataArr.push(arr1);
    dataArr.push(arr2);
    return dataArr;
  };
// 获取单条
  const getLineDataSingle = () => {
    let dataArr = []; // 拐点数据
    let arr1 = [];
    let arr2 = [];
    nameList.map((item, index) => {
      // 判断大小显示label
      // arr1
      arr1.push({
        value: valueList[0][index],
        label: {
          show: true,
          z: 3,
          position: 'top',
          opacity: 0.6,
          backgroundColor: '#001435',
          offset: [0, -8],
          borderRadius: 2,
          formatter: (params) => {
            return `{a|${valueList[0][index]}}`;
          },
          rich: {
            a: {
              fontSize: 12,
              color: 'rgba(57, 126, 240, 1)',
              fontFamily: 'Source Han Sans CN-Regular',
              padding: [4, 2, 2, 2]
            }
          }
        },
        emphasis: {
          scale: 2,
          itemStyle: {
            borderWidth: 3
          },
          label: {
            opacity: 1,
            rich: {
              a: {
                fontSize: 14,
                color: '#ABC6F7',
                fontFamily: 'Source Han Sans CN-Regular',
                padding: [4, 2, 2, 2]
              }
            }
          }
        }
      });
      // arr2
      arr2.push({
        value: valueList[1][index],
        label: {
          show: true,
          z: 3,
          position: 'top',
          opacity: 0.6,
          backgroundColor: '#001435',
          offset: [0, -8],
          borderRadius: 2,
          formatter: (params) => {
            return `{b|${valueList[1][index]}}`;
          },
          rich: {
            b: {
              fontSize: 12,
              color: 'rgba(255, 229, 143, 1)',
              fontFamily: 'Source Han Sans CN-Regular',
              padding: [4, 2, 0, 2]
            }
          }
        },
        emphasis: {
          scale: 2,
          itemStyle: {
            borderWidth: 3
          },
          label: {
            opacity: 1,
            rich: {
              b: {
                fontSize: 14,
                color: 'rgba(255, 229, 143, 1)',
                fontFamily: 'Source Han Sans CN-Regular',
                padding: [4, 2, 0, 2]
              }
            }
          }
        }
      });
    });
    dataArr.push(arr1);
    dataArr.push(arr2);
    return dataArr;
  };
  let dataList = getLineDataAll();

  let legendData = []; // legend数据
  let seriesData = []; // series数据
  legend.map((item, index) => {
    legendData.push({
      name: item,
      icon: 'circle',
      itemStyle: {
        color: '#FFFFFF',
        borderColor: colorList[index],
        borderWidth: 3
      }
    });
    seriesData.push({
      name: item,
      yAxisIndex: 0,
      type: 'line',
      silent: true,
      z: 2,
      data: dataList[index],
      symbolSize: 6, //标记的大小
      lineStyle: {
        color: colorList[index],
        width: 2
      },
      itemStyle: {
        //折线拐点标志的样式
        color: colorList[index],
        borderColor: colorList[index],
        borderWidth: 1
      },
      areaStyle: {
        color: areaColorList[index]
      }
    });
  });
  let valueMax = 0;
  [...valueList[0], ...valueList[1]].map((item) => {
    if (Number(item) > valueMax) {
      valueMax = Number(item);
    }
  });
  seriesData.push({
    name: 'bgBar',
    type: 'bar',
    // silent: true,
    yAxisIndex: 1,
    z: 1,
    data: nameList.map((item) => {
      return {
        value: valueMax + 0.2 * valueMax,
        itemStyle: {
          color: 'rgba(57,126,240,0)'
        }
      };
    })
    // barWidth: 33
  });

  const option = {
    backgroundColor: 'RGBA(0, 13, 32, 1)',
    tooltip: {
      trigger: 'none',
      axisPointer: {
        type: 'none',
        shadowStyle: {
          color: 'rgba(57, 126, 240, 0.2)'
        }
      },
      showContent: false,
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
        let currenrName = params[0].name;
        let currenrTypeList = params.filter((item) => item.seriesName);
        let childDiv = `<div>`;
        legend.map((item, index) => {
          params.map((item2, index2) => {
            if (item2.seriesName === item) {
              childDiv += `
                <div style="margin-top: 4px;position:relative;">
                  <div style="width: 6px;height: 6px;background: #FFFFFF;border: 3px solid ${colorList[index]};position:absolute;top:50%;transform:translateY(-50%);left:0;border-radius:50%;"></div>
                  <span style="margin:0 0 0 20px;font-size: 12px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #FFFFFF;">${item}：${params[index2].value}${unit}</span>
                </div>
            `;
            }
          });
        });
        childDiv += `</div>`;
        return `
				    <div style="font-size: 12px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:4px;">${currenrName}年</div>
            ${childDiv}
			    `;
      },
      extraCssText:
        'background-color:rgba(0,13,35,0.9);padding:8px 12px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    legend: {
      data: legendData,
      top: 16,
      left: 0,
      itemWidth: 9,
      itemHeight: 9,
      itemGap: 16,
      textStyle: {
        fontSize: 12,
        color: '#ABC6F7',
        fontFamily: 'Source Han Sans CN-Regular',
        padding: [0, 0, 0, 4]
      }
    },
    grid: {
      left: '24',
      right: '24',
      top: '80',
      bottom: '24',
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
          color: 'rgba(62, 102, 181, 1)'
        }
      },
      axisLabel: {
        show: true,
        margin: 12,
        textStyle: {
          fontSize: 12,
          color: '#ABC6F7', //X轴文字颜色
          fontFamily: 'Source Han Sans CN-Regular',
          fontWeight: 400
        }
      }
    },
    yAxis: [
      {
        boundaryGap: ['0', '20%'],
        name: yName,
        nameTextStyle: {
          fontSize: 12,
          color: '#ABC6F7', //X轴文字颜色
          fontFamily: 'Source Han Sans CN-Regular',
          align: 'left',
          verticalAlign: 'center'
        },
        type: 'value',
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            width: 1,
            color: '#3E66B5'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          fontSize: 12,
          color: '#ABC6F7',
          fontFamily: 'HarmonyOS Sans-Regular'
        },
        splitArea: {
          show: false
        }
      },
      {
        boundaryGap: ['0', '10%'],
        position: 'right',
        max: valueMax + 0.2 * valueMax,
        type: 'value',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitArea: {
          show: false
        }
      }
    ],
    series: seriesData
  };

  // 图例legend改变时
  myChart.on('legendselectchanged', (params) => {
    let selectArr = []; // 当前选中数据
    let lineData = []; // 折线图数据
    legend.map((item) => {
      if (params.selected[item]) {
        selectArr.push(item);
      }
    });
    if (selectArr.length < 2) {
      lineData = getLineDataSingle();
    } else {
      lineData = getLineDataAll();
    }
    myChart.setOption({
      series: [
        {
          name: legend[0],
          data: lineData[0]
        },
        {
          name: legend[1],
          data: lineData[1]
        }
      ]
    });
  });

  // 鼠标移入
  myChart.on('mouseover', (params) => {
    const currentIndex = params.dataIndex;
    myChart.dispatchAction({
      type: 'downplay',
      seriesName: legend
    });
    myChart.dispatchAction({
      type: 'highlight',
      seriesName: legend,
      dataIndex: currentIndex
    });
    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        showContent: true
      },
      series: [
        {
          name: 'bgBar',
          data: nameList.map((item, index) => {
            if (index === currentIndex) {
              return {
                value: valueMax + 0.2 * valueMax,
                itemStyle: {
                  color: 'rgba(57,126,240,0.2)'
                }
              };
            } else {
              return {
                value: valueMax + 0.2 * valueMax,
                itemStyle: {
                  color: 'rgba(57,126,240,0)'
                }
              };
            }
          })
        }
      ]
    });
  });

  // 鼠标移出
  myChart.on('mouseout', (params) => {
    myChart.setOption({
      tooltip: {
        trigger: 'none',
        showContent: false
      },
      series: [
        {
          name: 'bgBar',
          data: nameList.map((item, index) => {
            return {
              value: valueMax + 0.2 * valueMax,
              itemStyle: {
                color: 'rgba(57,126,240,0)'
              }
            };
          })
        }
      ]
    });
  });

  return option;
}
// 轮播趋势折线图
const LineCode3 = (myChart) => {
  const dateList = ['05.01', '05.02', '05.03', '05.04', '05.05', '05.06', '05.07']; // 日期
  const values = [81, 65, 76, 84, 59, 64, 65];

  const option = {
    backgroundColor: "#010d20",
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: "line",
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
              offset: 0, color: 'rgba(66, 151, 255, 1)' // 0% 处的颜色
            }, {
              offset: 1, color: 'rgba(66, 151, 255, 0)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
        },
        label: {
          show: true,
          fontSize: 12,
          fontFamily: "Source Han Sans CN-Regular",
          fontWeight: 400,
          color: "#A0CAFF",
          backgroundColor: "transparent",
          margin:1
        }
      },
      formatter: (params) => {
        return ""
      },
      extraCssText: 'background: transparent;border: none'
    },
    grid: {
      top: '48',//上边距
      right: '48',//右边距
      left: '48',//左边距
      bottom: '48',//下边距
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: dateList,
      boundaryGap: false,
      axisTick: {
        show: false //隐藏X轴刻度
      },
      axisLine: {
        show: false //隐藏X轴
      },
      axisLabel: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [{
      type: 'line',
      data: values,
      markLine: {
        silent: true, // 是否不响应鼠标事件
        precision: 0, // 精度
        symbol: "none",
        lineStyle: {
          type: 'dashed',
          color: "rgba(160, 202, 255, 0.3)"
        },
        label: {
          show: true,
          position: "start",
          fontSize: 12,
          fontFamily: "Source Han Sans CN-Regular",
          fontWeight: 400,
          color: "#A0CAFF",
        },
        data: [{
          name: '平均线',
          type: 'average',
        }]
      },
      symbolSize: 2, //标记的大小
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(47, 145, 255, 0.3)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(47,145,255,0)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        },
      },
      lineStyle: {
        color: "#4297FF",
        width: 1,
        shadowColor: '#0090FF',//设置折线阴影
        shadowBlur: 5,
      },
      itemStyle: {
        //折线拐点标志的样式
        color: "#FFF",
        shadowColor: '#0090FF',//设置折线阴影
        shadowBlur: 5,
      },
      smooth: 0.5,
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          position: [20, -50],
          fontFamily: "HarmonyOS Sans-Regular",
          fontWeight: 400,
          color: "#4297FF",
          formatter: '{c}人',
          //padding: [0, 0, 0, 40]
        }
      }
    }]
  };
  let count = 0;
  var timer = null;

  var dataLength = option.series[0].data.length;
  timer && clearInterval(timer);
  timer = setInterval(() => {
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
    });
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: count % dataLength,
    });
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: count % dataLength,
    });
    count++;
  }, 3000);
  myChart.on('mouseover', function (params) {
    clearInterval(timer);
    count = 0;
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
    });
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: params.dataIndex,
    });
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: params.dataIndex,
    });
  });
  myChart.on('mouseout', function (params) {
    count = 0;
    timer && clearInterval(timer);
    timer = setInterval(function () {
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
      });
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: count % dataLength,
      });
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: count % dataLength,
      });
      count++;
    }, 2000);
  });

  return option;
}

export const LineCodeList = [
  {id: "LineCode3", name: "轮播趋势折线图", type: "line", author: "biubiu", date: "2023.12.22", remark: "轮播，趋势折线图", code: `${LineCode3}`},
  {id: "LineCode2", name: "收支趋势对比图", type: "line", author: "biubiu", date: "2023.12.21", remark: "双折线对比图", code: `${LineCode2}`},
  {id: "LineCode1",name: "到账经费年度趋势", type: "line", author: "biubiu", date: "2023.12.19", remark: "折线面积图", code: `${LineCode1}`},
]
