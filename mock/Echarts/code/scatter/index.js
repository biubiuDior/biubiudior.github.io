/*
 * @Name: 散点图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 散点图图例 */
// 人均项目数量分布
const ScatterCode1 = (myChart) => {
  // 散点数据
  const nameList = ['散点1', '散点2', '散点3', '散点4', '散点5'];
  const xList = [0.12, 3.73, 2.4, 1, 1];
  const yList = [16, 126, 30, 90, 1];
  let center = [2, 90];//中心点

// 数据转换
  const marksData = nameList.map((item, index) => ({
    name: item,
    value: [xList[index], yList[index]]
  }));

  const option = {
    tooltip: {
      axisPointer: {
        show: true,
        type: 'shadow',
        lineStyle: {
          type: 'dashed',
          width: 1
        },
        label: {
          backgroundColor: '#555'
        }
      },
      position: function (point, params, dom, rect, size) {
        // 提示框位置
        let x = 0;
        let y = 0;
        //固定在中间
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
      formatter: params => {
        const {
          name,
          value,
        } = params;
        return `
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:8px;">${name}</div>
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:4px;">项目数量：${value[1]}个</div>
            <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;">人均项目数量：${value[0]}个</div>
         `
      },
      extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:12px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    grid: {
      left: 32,
      right: 32,
      bottom: 32,
      top: 60,
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: "人均项目数",
      splitNumber: 5,
      nameTextStyle: {
        color: "rgba(0,0,0,0.65)",
        align: "right",
        verticalAlign: "top",
        padding: [8, 12, 0, 0]
      },
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLabel: {
        color: '#666',
        showMaxLabel: false,
      },
      splitLine: {
        lineStyle: {
          color: '#eee',
          type: "dashed"
        }
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      name: "项目数量",
      nameTextStyle: {
        color: "rgba(0,0,0,0.65)",
        align: "left",
        verticalAlign: "center"
      },
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLabel: {
        color: '#666',
      },
      splitLine: {
        lineStyle: {
          color: '#eee',
          type: 'dashed',
        }
      }
    },
    series: [
      {
        type: 'scatter',
        data: marksData,
        symbolSize: 10,
        label: {
          show: false,
        },
        itemStyle: {
          shadowBlur: 2,
          shadowColor: 'rgba(120, 36, 50, 0.5)',
          shadowOffsetY: 1,
          color: "#5B8FF9"
        },
        emphasis: {
          scale: 1.5
        },
        // 中心点交集象限轴
        markLine: {
          silent: true, // 是否不响应鼠标事件
          precision: 2, // 精度
          symbol: "none",
          lineStyle: {
            type: 'solid',
            color: '#FA8974'
          },
          label: {
            show: false
          },
          data: [
            {
              xAxis: center[0],
            }, {
              yAxis: center[1]
            }
          ]
        },
      }
    ]
  }

  return option;
}


export const ScatterCodeList = [
  {id: "ScatterCode1", name: "人均项目数量分布", type: "scatter", author: "biubiu", date: "2023.12.25", remark: "中心坐标轴突出均值", code: `${ScatterCode1}`},
]