/*
 * @Name: 柱状图代码
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-12
*/

/* 柱状图图例 */
// 单条形占比图
const BarCode1 = () => {
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
const BarCode2 = () => {
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

export const BarCodeList = [
  {name: "单柱状分布图", type: "bar", author: "biubiu", date: "2023.12.15", remark: "单柱状分布图", code: `${BarCode2}`},
  {name: "单条形占比图", type: "bar", author: "biubiu", date: "2023.12.12", remark: "单柱状占比条形图", code: `${BarCode1}`},
]

