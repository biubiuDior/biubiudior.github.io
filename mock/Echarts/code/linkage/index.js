/*
 * @Name: 联动组合图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 联动组合图图例 */
// 科研项目增长趋势
const LinkageCode1 = (myChart) => {
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

  let count = 0;
  let timer = null;

  let dataLength = option.series[1].data.length;
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
// 教职工职称级别分布
const LinkageCode2 = (myChart) => {
  /* 数据 */
  // 饼图
  const pieName = ["常任职教师", "常任教职"]; // 类型
  const pieValue = [648, 324]; // 数量
  // 柱状图
  const barName = ["正高级", "副高级", "中级", "初级", "其他", "正高级", "初级", "其他"]; // 类型
  const barValue = [150, 120, 100, 180, 98, 124, 100, 100]; // 数量
  const barNum = [5, 3]; // 柱子数量

  /* 数据整合 */
  let pieData = []; // 饼图数据
  let barData = []; // 柱状图数据
  let currentIndex = 0; // 当前岗位下标
  const colorPie = ["#73A0FB", "#73DEB4", "#2F467A", "#FACA42", "#F98973"];// 饼图颜色系列
  pieName.map((item, index) => {
    // 饼图数据整合
    pieData.push({
      name: item,
      value: pieValue[index]
    })
    // 柱状图数据整合
    let list = [];
    for (let i = currentIndex; i < currentIndex + barNum[index]; i++) {
      list.push({
        name: barName[i],
        value: barValue[i],
      })
    }
    currentIndex += barNum[index]
    barData[item] = list
  })

  /* 函数 */
// 数字分割：1653 => 1,653
  const formatNum = (value) => {
    if (!value && value !== 0) return 0;
    let str = value.toString();
    let reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg, "$1,");
  }
//获取当前类型的柱状图数据
  const getBarData = (type) => {
    return barData[type]
  };
// 获取当前类型x轴数据
  const getXData = (type) => {
    let list = barData[type];
    return list.map(item => item.name)
  }

  /* 当前数据 */
// 柱状图当前数据
  let currentBarData = getBarData(pieName[0]);
// 当前类型
  let currentType = pieName[0]
// 当前x轴数据
  let xData = getXData(pieName[0]);
// 当前柱子颜色
  let barColor = colorPie[0]

  /* series整合 */
  let seriesData = [];

// 饼图
  seriesData.push({
    name: "pie",
    id: "pie",
    type: "pie",
    left: "16",
    top: "center",
    width: "35%",
    color: colorPie,
    label: { show: false },
    itemStyle: {
      borderColor: "#fff",
      borderWidth: 2
    },
    radius: ['80%', '100%'],
    data: pieData,
    tooltip: {
      formatter: params => {
        let pieColor = params.color;
        return `
            <div style="position:relative;">
               <div style="width: 9px;height: 9px;background: ${pieColor};border: 1px solid #FFFFFF;position:absolute;top:50%;transform:translateY(-50%);left:0;border-radius:50%;"></div>
               <span style="margin:0 0 0 15px;font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 400;color: #FFFFFF;">${params.name}</span>
            </div>
            <div style="margin:12px 0 0 15px;font-size: 14px;font-family: Source Han Sans CN-Regular;font-weight: 500;color: #FFFFFF;">${formatNum(params.value)}人<span style="margin-left:24px;">${params.percent}%</span></div>
			 `
      },
    }
  });
// 柱状图
  seriesData.push({
    name: "bar",
    id: "bar",
    type: "bar",
    data: currentBarData,
    itemStyle: {
      color: barColor,
      borderRadius: [2, 2, 0, 0]
    },
    barWidth: 12,
    tooltip: {
      formatter: params => {
        let pieColor = params.color;
        return `
            <div style="position:relative;">
               <div style="width: 9px;height: 9px;background: ${pieColor};border: 1px solid #FFFFFF;position:absolute;top:50%;transform:translateY(-50%);left:0;border-radius:50%;"></div>
               <span style="margin:0 0 0 15px;font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 400;color: #FFFFFF;">${params.name}</span>
            </div>
            <div style="margin:12px 0 0 15px;font-size: 14px;font-family: Source Han Sans CN-Regular;font-weight: 500;color: #FFFFFF;">${formatNum(params.value)}人</div>
			 `
      },
    }
  })

  const option = {
    grid: {
      left: "40%",
      right: "16",
      bottom: "16",
      containLabel: true,
    },
    title: {
      text: `{bm| ${currentType}}{txt|职称级别分布}`,
      textStyle: {
        rich: {
          bm: {
            color: 'rgba(151, 30, 35, 1)',
            fontFamily: 'Source Han Sans CN-Regular',
            fontSize: 14,
          },
          txt: {
            color: 'rgba(0, 0, 0, 0.85)',
            fontFamily: 'Source Han Sans CN-Regular',
            fontSize: 14,
            padding: [0, 0, 0, 8]
          }
        }
      },
      backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
          offset: 0, color: 'rgba(151, 30, 35, 0.2)' // 0% 处的颜色
        }, {
          offset: 1, color: 'rgba(151, 30, 35, 0)' // 100% 处的颜色
        }],
        global: false // 缺省为 false
      },
      left: "40%",
      top: 0
    },
    graphic: [
      {
        type: 'image',
        top: "center",
        left: "39%",
        style: {
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAOhJREFUOE9jZGBgYJgho6Sa8eTebRCbWMAIUjhdTnkHw3+GU8KP7zaGMTD8JUYzQiMDgzsDA8MDhv8MjZmP7y4gpBldI0z9Psb//xozHt8/hMsAXBph6uew/GVsTH165wm6AYQ0gtT/ZGRgbMx4dKcdWTMxGmHqr//7z9CY/fjuSpAAKRohBvxnaM18fLeGeI2MDMuZmf83pN27d4soG/8z/j/JwMDYmPXw7nbi/MjI8Po/WMOdqdiiBKtT/zP+7/vDytSYd+fOJ6LikZGRYcNfRqbG7Ae3LxCdchgZ/8/KeHhvHSENMHkAvNRhD4R/LDUAAAAASUVORK5CYII="
        }
      },
      {
        type: "group",
        x: 16,
        top: 6,
        children: [
          {
            type: "text",
            silent: true, // 不响应鼠标
            top: 'middle',
            left: 0,
            style: {

              text: "常任职教师数量",
              font: '12px "Source Han Sans CN-Regular"',
              fill: "rgba(0, 0, 0, 1)",
            }
          },
          {
            type: "text",
            silent: true, // 不响应鼠标
            top: 'middle',
            left: 92,
            style: {
              text: pieValue[0] + "人",
              font: '16px "HarmonyOS Sans-Medium"',
              fill: "rgba(151, 30, 35, 1)",
            }
          },
        ]
      },
      {
        type: "group",
        x: 16,
        top: 22,
        children: [
          {
            type: "text",
            silent: true, // 不响应鼠标
            left: 0,
            top: 32,
            style: {
              text: "常任教职人数",
              font: '12px "Source Han Sans CN-Regular"',
              fill: "rgba(0, 0, 0, 1)"
            }
          },
          {
            type: "text",
            silent: true, // 不响应鼠标
            left: 92,
            top: 30,
            style: {
              text: pieValue[1] + "人",
              font: '16px "HarmonyOS Sans-Medium"',
              fill: "rgba(151, 30, 35, 1)"
            }
          }
        ]
      },
    ],
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'none'
      },
      position: function (point, params, dom, rect, size) { // 提示框位置
        let x = 0;
        let y = 0;
        // 提示框位置
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
      extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:12px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: false //隐藏X轴刻度
      },
      axisLine: {
        lineStyle: {
          color: "#CCCCCC"
        }
      },
      axisLabel: {
        show: true,
        color: 'rgba(0,0,0,0.65)',
        fontSize: 14,
        fontFamily: 'Source Han Sans CN-Regular',
      },
    },
    yAxis: [{
      type: 'value',
      name: "单位：人",
      nameTextStyle: {
        color: 'rgba(0,0,0,0.65)',
        fontSize: 14,
        fontFamily: 'Source Han Sans CN-Regular',
        align: "left",
        verticalAlign: "center",
      },
      boundaryGap: ['0%', '20%'],
      axisLabel: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
        fontFamily: 'HarmonyOS Sans-Regular',
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(223, 223, 223, 1)',
          type: "dashed",
        }
      }
    }],
    series: seriesData
  };

  // 事件
  myChart.on("mouseover", "series.pie", (param) => {
    let index = param.dataIndex;
    // 改变当前数据
    currentType = pieName[index];
    currentBarData = getBarData(pieName[index]);
    xData = getXData(pieName[index]);
    barColor = colorPie[index];
    // 改变option
    myChart.setOption({
      title: {
        text: `{bm| ${currentType}}{txt|职称级别分布}`,
      },
      xAxis: {
        data: xData
      },
      series: [{
        id: 'bar',
        data: currentBarData,
        itemStyle: {
          color: barColor,
        },
      }],
    });
  })

  return option;
}
// 在编岗位人员分布
const LinkageCode3 = (myChart) => {
  /* 数据 */
// 矩形树图
  const bmName = ["消防指挥", "信息技术", "会计学", "外国语言与外国历史"]; // 部门名称
  const bmValue = [100, 50, 80, 60]; // 部门人数
// 饼图
  const gwName = ["行政岗", "专任教师岗", "科学研究岗", "双肩挑岗位", "其他", "行政岗", "专任教师岗", "其他", "科学研究岗", "其他", "其他"]; // 岗位名称
  const gwValue = [209, 180, 169, 136, 125, 150, 50, 50, 150, 50, 60]; // 岗位人数
  const gwPercent = [35, 25, 20, 12, 8, 60, 20, 20, 75, 25, 100]; // 岗位人数占比
  const gwNum = [5, 3, 2, 1]; // 部门对应岗位数

  /* 整合 */
// 颜色系列
  const colorSelectList = ["rgba(115, 160, 251, 1)", "rgba(249, 202, 65, 1)", "rgba(115, 222, 180, 1)", "rgba(249, 137, 115, 1)"]
  const colorTreemap = ["rgba(115, 160, 251, 0.25)", "rgba(249, 202, 65, 0.25)", "rgba(115, 222, 180, 0.25)", "rgba(249, 137, 115, 0.25)"]
  const colorPie = ["#73A0FB", "#73DEB4", "#2F467A", "#FACA42", "#F98973"];
// 矩形树图
  let treeMapData = [];
  bmName.map((item, index) => {
    treeMapData.push({
      name: item,
      value: bmValue[index],
      itemStyle: {
        color: colorTreemap[index]
      },
      select: {
        itemStyle: {
          color: colorSelectList[index]
        }
      },
    })
  });
// 饼图
  let pieData = {};
  let currentIndex = 0; // 当前岗位下标
  bmName.map((item, index) => {
    let list = [];
    for (let i = currentIndex; i < currentIndex + gwNum[index]; i++) {
      list.push({
        name: gwName[i],
        value: gwValue[i],
        percent: gwPercent[i]
      })
    }
    currentIndex += gwNum[index]
    pieData[item] = list
  })

  /* 函数 */
  //获取当前部门的饼图数据
  const getPieData = (bm) => {
    return pieData[bm]
  };
  // 获取当前岗位的legend数据
  const getLegendData = (bm) => {
    let pieData = getPieData(bm);
    return pieData.map(item => item.name)
  }

  /* 当前数据 */
  // 饼图当前数据
  let currentPieData = getPieData(bmName[0]);
  // 当前部门
  let currentBm = bmName[0]

  /* series数据 */
  let seriesData = [];
  // 树图series
  seriesData.push({
    name: "treemap",
    id: "treemap",
    type: 'treemap',
    data: treeMapData,
    roam: false,//拖拽漫游（移动和缩放）
    nodeClick: false, // 节点点击
    breadcrumb: false, // 面包屑
    width: "45%",
    left: "16",
    top: 300,
    bottom: 300,
    label: {
      show: true,
      position: [8, 8],
      formatter: function (params) {
        return `{name|${params.name}}\n{value|${params.value}人}`
      },
      rich: {
        name: {
          fontSize: 12,
          fontFamily: "Source Han Sans CN-Regular",
          color: "#fff",
        },
        value: {
          fontSize: 24,
          fontFamily: "HarmonyOS Sans-Medium",
          color: "#fff",
          padding: [10, 0, 0, 0]
        }
      },
    },
    selectedMode: "single",
    itemStyle: {
      borderWidth: 2,
      borderColor: "#fff"
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'none'
      },
      position: function (point, params, dom, rect, size) { // 提示框位置
        let x = 0;
        let y = 0;
        // 提示框位置
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
        return `
				   <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:8px;">${params.name}</div>
               <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;">部门在岗在编人数：${params.value}人</div>
			    `
      },
      extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:12px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
  })
  // 饼图series
  seriesData.push({
    name: "pie",
    id: "pie",
    type: "pie",
    left: "40%",
    top: "center",
    width: "45%",
    color: colorPie,
    label: { show: false },
    radius: ['30%', '40%'],
    data: currentPieData
  })

  const option = {
    graphic: {
      type: 'image',
      top:"center",
      left:"48%",
      style:{
        image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAOhJREFUOE9jZGBgYJgho6Sa8eTebRCbWMAIUjhdTnkHw3+GU8KP7zaGMTD8JUYzQiMDgzsDA8MDhv8MjZmP7y4gpBldI0z9Psb//xozHt8/hMsAXBph6uew/GVsTH165wm6AYQ0gtT/ZGRgbMx4dKcdWTMxGmHqr//7z9CY/fjuSpAAKRohBvxnaM18fLeGeI2MDMuZmf83pN27d4soG/8z/j/JwMDYmPXw7nbi/MjI8Po/WMOdqdiiBKtT/zP+7/vDytSYd+fOJ6LikZGRYcNfRqbG7Ae3LxCdchgZ/8/KeHhvHSENMHkAvNRhD4R/LDUAAAAASUVORK5CYII="
      }
    },
    title: {
      text: `{bm| ${currentBm}}{txt|在岗在编岗位系列人员分布}`,
      textStyle: {
        rich: {
          bm: {
            color: 'rgba(151, 30, 35, 1)',
            fontFamily: 'Source Han Sans CN-Regular',
            fontSize: 14,
          },
          txt: {
            color: 'rgba(0, 0, 0, 0.85)',
            fontFamily: 'Source Han Sans CN-Regular',
            fontSize: 14,
            padding: [0, 0, 0, 8]
          }
        }
      },
      backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
          offset: 0, color: 'rgba(151, 30, 35, 0.2)' // 0% 处的颜色
        }, {
          offset: 1, color: 'rgba(151, 30, 35, 0)' // 100% 处的颜色
        }],
        global: false // 缺省为 false
      },
      left: "52%",
      top: "20%"
    },
    tooltip: {},
    legend: {
      type: "scroll",
      orient: 'vertical',
      //height: '80%',
      right: '16',
      top: 'center',
      icon: "circle", //设置为圆，删除则为矩形
      itemWidth: 6,
      itemHeight: 6,
      itemGap: 25,
      data: getLegendData(bmName[0]),
      formatter: function (params) {
        for (let i = 0; i < currentPieData.length; i++) {
          if (params === currentPieData[i].name) {
            return '{name|' + params + '}{value|' + currentPieData[i].value + '人}{rate|' + currentPieData[i].percent + '%}'
          }
        }
      },
      textStyle: {
        rich: {
          name: {
            fontSize: 14,
            fontWeight: 400,
            width: 80,
            //height: 20,
            padding: [0, 0, 0, 5],
            color: 'rgba(0, 0, 0, 0.65)',
            fontFamily: 'Source Han Sans CN-Regular',
          },
          rate: {
            fontSize: 14,
            fontWeight: 500,
            //height: 20,
            width: 50,
            align: 'right',
            color: 'rgba(0, 0, 0, 0.85)',
            fontFamily: 'Source Han Sans CN-Medium',
          },
          value: {
            fontSize: 14,
            fontWeight: 500,
            //height: 20,
            width: 50,
            align: 'right',
            color: 'rgba(0, 0, 0, 0.85)',
            fontFamily: 'Source Han Sans CN-Medium',
          }
        }
      }
    },
    series: seriesData
  };
  // 设置默认选中
  setTimeout(() => {
    myChart.dispatchAction({
      type: 'select',
      seriesName: "treemap",
      name: bmName[0]
    })
  }, 50)

  // 点击事件
  myChart.on("click", "series.treemap", (param) => {
    let seriesName = param.seriesName; // seriesName
    let index = param.dataIndex - 1;
    currentPieData = getPieData(bmName[index]);
    currentBm = bmName[index];
    myChart.setOption({
      title: {
        text: `{bm| ${currentBm}}{txt|在岗在编岗位系列人员分布}`,
      },
      series: [{
        id: 'pie',
        data: currentPieData,
      }],
    });
    myChart.dispatchAction({
      type: 'select',
      seriesName: "treemap",
      name: bmName[index]
    })
  })

  return option;
}
// 各类型奖项级别分布
const LinkageCode4 = (myChart) => {
  // 数据
  var xyear = ["2017", "2018", "2019", "2020", "2021", "2022"]// 年份
  var legenddata = ["省部级", "教育部级"]; // 图例，级别类型
  var djList = ["二等奖", "三等奖", "一等奖", "二等奖", "一等奖", "优秀奖", "二等奖", "三等奖", "优秀奖", "二等奖", "其他奖", "三等奖", "一等奖", "二等奖", "三等奖", "一等奖", "二等奖", "二等奖", "三等奖", "一等奖"] // 等级类型;
  var djgsList = [3, 0, 3, 0, 3, 0, 4, 3, 1, 0, 3, 0] // 等级个数;
  var djslList = [8, 10, 4, 41, 21, 1, 1, 1, 2, 12, 4, 5, 2, 5, 2, 3, 1, 7, 1, 4] // 等级数量;
  var jbSum = [22, 0, 63, 0, 4, 0, 23, 10, 1, 0, 12, 0]; // 级别总数
  let colorList = [["#5B8FF9", ["#7FA5FA", "#ADC6FC", "#DEE9FF", "#EFF3FF"], "#2F467A"], ["#61DDAA", ["#81E3BC", "#B2EED5", "#E2F7EE", "#EFFBF7"], "#21A397"], ["#F6BD16", ["#F9D56A", "#FCE5A1", "#FEF5D7", "#FDF9ED"], "#F6BD16"], ["#FA8974", ["#FCA18F", "#FAC6B9", "#FBE8E2", "#FEF3F1"], "#971E23"]]

// 数据汇总整合
  let jbi = 0; // 当前级别位置
  let dji = 0; // 当前等级位置
  let dataAll = []; // 数据整合列表 [年份：[级别：[等级名字：[],等级数量：[],级别总和：0],[],...],[],...]
  xyear.map((item, index) => {
    let a = []; // 年份
    legenddata.map((i, v) => {
      let b = []; // 等级名字
      let c = []; // 等级数量
      for (let j = dji; j < djgsList[jbi] + dji; j++) {
        b.push(djList[j]);
        c.push(djslList[j]);
      }
      a.push([b, c, jbSum[jbi]]);
      dji += djgsList[jbi];
      jbi++;
    })
    dataAll.push(a)
  });

// 旭日图数据转换
  var index = 5    //修改处一：数据索引下标由 0->5
  var data = (index) => {
    let dataList = [];
    dataAll[index].map((item, len) => {
      let childList = [];
      let jbsum = 0; // 级别总和
      item[0].map((v, i) => {
        childList.push({
          value: item[1][i],
          name: v,
          label: {
            color: colorList[len][2],
          },
          // 每个子类别 可以单独设置颜色
          itemStyle: {
            color: colorList[len][1][i]
          }
        })
        jbsum += item[1][i]
      })
      dataList.push({
        name: legenddata[len],
        value: jbsum,
        label: {
          color: "#fff",
        },
        itemStyle: {
          color: colorList[len][0]
        },
        children: childList
      })
    })
    return dataList;
  }
// series数据
  let seriesData = [];
  let yearSum = []; // 年份总和
  dataAll.map((v, i) => {
    let a = 0;
    v.map((vv, ii) => {
      a += vv[2]
    })
    yearSum.push(a)
  })
// 柱状图数据添加
  legenddata.map((item, index) => {
    let barData = []; // 柱状图数据
    dataAll.map((v, i) => {
      barData.push(v[index][2]);
    })
    seriesData.push({
      name: item,
      type: 'bar',
      stack: 'total', // ! 多条数据总计 => 堆叠
      barWidth: 16,
      color: colorList[index][0],
      itemStyle: { borderRadius: 0 },
      data: barData,
    })
  })
// 旭日图数据添加
  seriesData.push({
    type: "sunburst",
    id: 'sunburst',
    nodeClick: false, //是否允许旭日图点击 默认可以点击
    center: ["80%", "50%"],
    radius: ['0%', '40%'],
    data: data(index),
    // 占据的位置 文字设置
    label: {
      rotate: "tangential", // 文字水平(tangential)竖直(radial)
      color: "#fff",
      fontSize: 14,
      fontFamily: "Source Han Sans CN-Regular",
      minAngle: 30, // 控制角度文本显示
    },
    // 旭日图的分割线
    itemStyle: {
      borderColor: "#fff",
      borderWidth: 7,
      borderRadius: 7
    },
    tooltip: {
      trigger: 'item',
    },
    levels: [
      // 这里是设置 每一层的样式，层级低于单独在data里面的
      // 第一个空数据是 占据下钻的位置
      {},
      // 设置第一层为环形
      {
        r0: "25%",
        r: "40%",
        emphasis: {
          focus: 'descendant',
        },
      },
      {
        r0: "40%",
        r: "55%",
        emphasis: {
          focus: 'none',
        },
      },
    ]
  })

  var getYearTotal = (index) => {
    return yearSum[index]
  }
  const option = {
    title: {
      id: "title",
      text: getYearTotal(index) + "个",
      textStyle: {
        fontSize: 18,
        fontFamily: "Source Han Sans CN-Medium",
        fontWeight: 500,
        color: "rgba(0, 0, 0, 0.85)",
      },
      subtext: xyear[5] + "年",
      subtextStyle: {
        fontSize: 16,
        fontFamily: "Source Han Sans CN-Regular",
        fontWeight: 500,
        color: "rgba(0, 0, 0, 0.45)",
      },
      textAlign:"center",
      itemGap:5,
      top:"center",
      left:"79.5%"
    },
    legend: {
      data: legenddata,
      itemWidth: 10,
      itemHeight: 10,
      top: "12",
      left: '24',
      itemGap: 20,
      textStyle: {
        fontSize: 14,
        color: "rgba(0, 0, 0, 0.45)",
        fontFamily: 'Source Han Sans CN-Regular'
      }
    },
    grid: {
      left: '24',
      right: '40%',
      top: '74',
      bottom: '12',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xyear,
      axisTick: {
        show: false //隐藏X轴刻度
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(204, 204, 204, 1)',
        }
      },
      axisLabel: {
        show: true,
        fontSize: 14,
        color: "rgba(0, 0, 0, 0.65)", //X轴文字颜色
        fontFamily: 'Source Han Sans CN-Regular'
      },
    },
    yAxis: {
      name: "获奖：个",
      type: 'value',
      nameTextStyle: {
        color: 'rgba(0,0,0,0.65)',
        fontSize: 14,
        fontFamily: 'Source Han Sans CN-Regular',
        align: "left",
        verticalAlign: "center",
      },
      axisLabel: {
        color: 'rgba(0,0,0,0.65)',
        fontSize: 14,
        fontFamily: 'HarmonyOS Sans-Regular'
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(223, 223, 223, 1)',
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(223, 223, 223, 1)',
          type: "dashed",
        }
      }
    },
    tooltip: {
      trigger: 'axis',
      triggerOn: "mousemove",
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: "rgba(151, 30, 35, 0.1)"
        }
      },
      position: function (point, params, dom, rect, size) { // 提示框位置
        let x = 0;
        let y = 0;
        // 提示框位置
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
        let dataIndex = params[0]?.dataIndex
        let childDiv = `<div>`
        params.map((item, index) => {
          childDiv += `
                <div style="margin-top: 8px;">
                  <span style="font-size: 14px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #FFFFFF;">${item.seriesName}：${item.value}</span>
                </div>
              `
        })
        childDiv += `</div>`;
        return `
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:12px;">${xyear[dataIndex]}年获奖${getYearTotal(dataIndex)}个</div>
            ${childDiv}`
      },
      extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:16px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;',
      renderMode: 'html',
      className: 'tooltip',
      order: 'seriesDesc',
    },
    series: seriesData
  };
  // 交互
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const index = event.dataIndexInside;
      myChart.setOption({
        title: {
          text: getYearTotal(index) + "个",
          subtext: xyear[index] + "年"
        },
        series: {
          id: 'sunburst',
          data: data(index),

        },
      });
    }
  });

  return option;
}
// 图书类型阅读数趋势
const LinkageCode5 = (myChart) => {
  // 折线图
  let captions = ['2017', '2018', '2019', '2020', '2021', '2022']; //日期
  let values1 = [11, 21, 31, 41, 51, 61]; //专著
  let values2 = [13, 23, 33, 43, 53, 63]; //编著
  let values3 = [15, 25, 35, 45, 55, 65]; //译著
  let values4 = [17, 27, 37, 47, 57, 67]; //电子
  let values5 = [19, 29, 39, 49, 59, 69]; //其他
  let lineData = [values1, values2, values3, values4, values5];
  // 柱状图
  let getname = ['专著', '编著', '译著', '电子出版物', '其他读物'];
  let getbl = [150, 20, 16, 10, 9]; // 数量
  let data = [];
  for (let i = 0; i < getname.length; i++) {
    data.push({ name: getname[i], value: getbl[i] });
  }
  // 其他数据
  let currentYear = '2022'; // 当年
  let colorList = ['#5B8FF9', '#61DDAA', '#2F467A', '#F6BD16', '#FA8974']; // 色系

  // series整合
  let seriesData = [];
  getname.map((item, index) => {
    seriesData.push({
      name: item,
      type: 'line',
      data: lineData[index],
      color: colorList[index],
      symbolSize: 10, //标记的大小
      lineStyle: {
        color: colorList[index],
        width: 3
      },
      itemStyle: {
        //折线拐点标志的样式
        color: colorList[index],
        borderColor: colorList[index],
        borderWidth: 3
      },
      emphasis: {
        focus: 'series'
      }
    });
  });
  seriesData.push({ // 饼图
    type: 'pie',
    radius: ['25%', '35%'],
    center: ['20%', '50%'],
    itemStyle: {
      shadowBlur: 8,
      shadowColor: 'rgba(255, 255, 255, 0)',
      borderColor: '#FFF',
      borderWidth: 2,
      borderRadius: 5,
      color: function (params) {
        return colorList[params.dataIndex];
      }
    },
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'none'
      },
      formatter: `{b}<br/>${currentYear}年：{c}本({d}%)`
    },
    data: data
  });

  function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
      el.forEach((el1) => {
        if (!(el1 === undefined || el1 === '')) {
          if (max < el1) {
            max = el1;
          }
        }
      });
    });
    let maxInt = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度
    let maxVal = maxInt * 10;
    //让显示的刻度是整数
    return maxVal;
  }
  const max = Math.ceil(calMax([values1, values2, values3, values4, values5]) / 100) * 100;

  const option = {
    color: colorList,
    tooltip: {
      trigger: 'axis',
      //axisPointer: {
      //type: 'none'
      //},
      formatter:
        '{b0}年<br/>{a0}：{c0}<br/>{a1}：{c1}<br/>{a2}：{c2}<br/>{a3}：{c3}<br/>{a4}：{c4}'
    },
    legend: {
      data: getname,
      top: '5%',
      left: 'center',
      itemGap: 25,
      itemWidth: 10,
      selectedMode: 'multiple',
      textStyle: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.45)',
        fontFamily: 'Source Han Sans CN-Regular',
        padding: [0, 0, 0, 5]
      }
    },
    grid: [
      {
        left: '40%',
        right: '5%',
        top: '15%',
        bottom: '15%',
        containLabel: true
      }
    ],
    xAxis: {
      type: 'category',
      data: captions,
      gridIndex: 0,
      axisTick: {
        show: false //隐藏X轴刻度
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(204, 204, 204, 1)'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          fontSize: 14,
          color: 'rgba(0, 0, 0, 0.65)', //X轴文字颜色
          fontFamily: 'Source Han Sans CN-Regular'
        }
      }
    },
    yAxis: {
      name: '著作：本',
      nameTextStyle: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.65)', //X轴文字颜色
        fontFamily: 'Source Han Sans CN-Regular',
        align: 'left',
        verticalAlign: 'center'
      },
      min: 0,
      max: max, // 计算最大值
      interval: max / 5, //  平均分为5份
      splitNumber: 5,
      type: 'value',
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          width: 1,
          color: 'rgba(223, 223, 223, 1)',
          opacity: '1'
        }
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          fontSize: 14,
          color: 'rgba(0, 0, 0, 0.65)',
          fontFamily: 'HarmonyOS Sans-Regular'
        }
      },
      splitArea: {
        show: false
      }
    },
    series: seriesData
  };
  myChart.on('mouseover', 'series.pie', function (params) {
    myChart.dispatchAction({
      type: 'highlight', // 高亮
      seriesName: params.name
    });
  });

  return option;
}


export const LinkageCodeList = [
  {id: "LinkageCode5", name: "图书类型阅读数趋势", type: "linkage", author: "biubiu", date: "2023.12.25", remark: "饼图联动折线图，鼠标悬浮高亮折线", code: `${LinkageCode5}`},
  {id: "LinkageCode4", name: "各类型奖项级别分布", type: "linkage", author: "biubiu", date: "2023.12.25", remark: "柱状图联动旭日图，鼠标悬浮切换", code: `${LinkageCode4}`},
  {id: "LinkageCode3", name: "在编岗位人员分布", type: "linkage", author: "biubiu", date: "2023.12.25", remark: "矩形树图联动饼图，鼠标点击切换", code: `${LinkageCode3}`},
  {id: "LinkageCode2", name: "教职工职称级别分布", type: "linkage", author: "biubiu", date: "2023.12.25", remark: "饼图联动柱状图，鼠标悬浮切换", code: `${LinkageCode2}`},
  {id: "LinkageCode1", name: "科研项目增长趋势", type: "linkage", author: "biubiu", date: "2023.12.22", remark: "柱状图联动折线图，自动轮播，双Y轴", renderer: 'canvas', code: `${LinkageCode1}`},
]