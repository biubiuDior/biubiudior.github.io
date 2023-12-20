/*
 * @Name: 饼图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 饼图图例 */
// 在岗在编教职工类型分布占比图
const PieCode1 = () => {
  const numList = [1002, 540]; // 数量
  const nameList = ["教学科研岗", "非教学科研岗"]; // 类别

  const pieData = [];
  nameList.map((item, index) => {
    pieData.push({
      name: item,
      value: numList[index]
    })
  });

// 数字分割：1653 => 1,653
  const formatNum = (value) => {
    if (!value && value !== 0) return 0;
    let str = value.toString();
    let reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg, "$1,");
  }

  const option = {
    tooltip: {
      trigger: "item",
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
      formatter: params => {
        let pieColor = params.color;
        return `
            <div style="position:relative;">
               <div style="width: 8px;height: 8px;background: ${pieColor};border: 1px solid #FFFFFF;position:absolute;top:50%;transform:translateY(-50%);left:0;border-radius:50%;"></div>
               <span style="margin:0 0 0 16px;font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 400;color: #FFFFFF;">在岗在编</span>
            </div>
            <div style="margin:8px 0 0 16px;font-size: 14px;font-family: Source Han Sans CN-Regular;font-weight: 500;color: #FFFFFF;">${params.name}<span style="margin-left:12px;">${formatNum(params.value)}</span></div>
         `
      },
      extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:8px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    series: [{
      name: 'pie',
      type: 'pie',
      center: ['50%', '50%'],
      radius: '80%',
      color: ["#73A0FB", "#73DEB4"],
      label: {
        show: false
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 2
      },
      data: pieData
    }]
  };

  return option;
};
// 占比进度条
const PieCode2 = () => {
  const data = 60;

  const option = {
    series: [
      {
        name: "中间圆",
        type: "pie",
        radius: '40%',
        animation: false,
        hoverAnimation: false,
        center: ['50%', '50%'],
        label: {
          show: true,
          position: "center",
          formatter: (params) => {
            return `{value|${data}%}`
          },
          rich: {
            value: {
              fontSize: 24,
              fontFamily: "HarmonyOS Sans-Medium",
              fontWeight: 500,
              color: "rgba(0, 0, 0, 0.85)",
            }
          }
        },
        cursor: "default",
        itemStyle: {
          color: "#FFFFFF",
          shadowColor: "rgba(57,126,240,0.24)",
          shadowBlur: 24,
        },
        data: [100],
        z: 3,
      },
      {
        name: "进度条",
        type: "gauge",
        radius: '80%',
        startAngle: 225,
        endAngle: -45,
        min: 0,
        max: 100,
        splitNumber: 10,
        z: 2,
        itemStyle: {
          color: '#FD7347'
        },
        progress: {// 进度条
          show: true,
          width: 12,
          itemStyle: {
            color: {
              type: 'radial',
              x: 0,
              y: 1,
              r: 1,
              colorStops: [{
                offset: 0, color: 'rgba(57, 126, 240, 0)' // 0% 处的颜色
              }, {
                offset: 0.5, color: 'rgba(57, 126, 240, 0.2)',
              }, {
                offset: 1, color: 'rgba(57, 126, 240, 1)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        },
        pointer: {// 仪表盘指针
          show: false
        },
        axisLine: {// 仪表盘轴线
          show: true,
          lineStyle: {
            color: [[1, "rgba(57, 126, 240, 0.1)"]],
            width: 12
          }
        },
        axisTick: {// 刻度
          show: false
        },
        splitLine: {// 分割线
          show: false
        },
        axisLabel: {// 刻度标签
          show: false
        },
        detail: {
          show: false
        },
        data: [data]
      },
      {
        name: "进度条阴影",
        type: "gauge",
        radius: "80%",
        startAngle: 225,
        endAngle: -45,
        min: 0,
        max: 100,
        splitNumber: 10,
        z: 1,
        progress: {
          show: true,
          width: 100,
          itemStyle: {
            color: {
              type: 'radial',
              x: 0,
              y: 1,
              r: 1,
              colorStops: [{
                offset: 0, color: 'rgba(57, 126, 240, 0)' // 0% 处的颜色
              }, {
                offset: 0.5, color: 'rgba(57, 126, 240, 0)',
              }, {
                offset: 1, color: 'rgba(57, 126, 240, 0.2)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
        },
        axisLine: {
          show: false,
        },
        detail: {
          show: false
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        pointer: {// 仪表盘指针, 根据实际画布大小调整
          show: true,
          icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAABQCAYAAAA6GwSiAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZWlDQ1BEaXNwbGF5IFAzAAB4nHWQvUvDUBTFT6tS0DqIDh0cMolD1NIKdnFoKxRFMFQFq1OafgltfCQpUnETVyn4H1jBWXCwiFRwcXAQRAcR3Zw6KbhoeN6XVNoi3sfl/Ticc7lcwBtQGSv2AijplpFMxKS11Lrke4OHnlOqZrKooiwK/v276/PR9d5PiFlNu3YQ2U9cl84ul3aeAlN//V3Vn8maGv3f1EGNGRbgkYmVbYsJ3iUeMWgp4qrgvMvHgtMunzuelWSc+JZY0gpqhrhJLKc79HwHl4plrbWD2N6f1VeXxRzqUcxhEyYYilBRgQQF4X/8044/ji1yV2BQLo8CLMpESRETssTz0KFhEjJxCEHqkLhz634PrfvJbW3vFZhtcM4v2tpCAzidoZPV29p4BBgaAG7qTDVUR+qh9uZywPsJMJgChu8os2HmwiF3e38M6Hvh/GMM8B0CdpXzryPO7RqFn4Er/QfBIQM2AAACbUlEQVR4AYVU7Y3bMAwlKR2QPwW6U2foHh2iA7RdowPcOs4EJ6PAIUBj8R5JWZLjAOc4jkPqPT5+SPzt51qJmUiVFU+84SYSfFdVtfewxFXMUZgnU3cEdvfEEjzFaHYqGNqbksC3dAIIcITyIhO7hs3EVVANY18DFpOr18mong9DlTaKvnjKowliVxUalDJeV2LaJUcasAmLvHX+hjCbUK09654HbJkeIhtEBTcLL1OGTpWIr7JtW4vIhyTzXga2HjUuBNIskt7cuKOwpm7bNefEa7TUWttU5Ww31InZaW8T1Jovcbl7D7Vrk7wh+Pa/pJy6IHPLnZZMF1+sHha3NKzLTSbUpYa6l0vDf//1r7qx1fbvjy/iCIF2H0YauYfDiOeWU4woYnCxcRFAEa90B/6Hg71X5UA1Wi9TDB5dws9EhWaBm5I4elClMet6aFRQuWCuOjsSXz2CGl3MQFBhujFMDtE2sV1uayHvzcpRA888glBdR0myvNlkCI88cntwbSSaYi/lJr8kK5T1RHWdHNjrvsPYCzrkJjpdLY9WxP07aqWLStSp1rQMVZjHTWMD7Tum/dwRVKxLe0V2R15yUtufcKUyOfaqK22XbTgumLy6hfelLYzO325tSuz9Ug4J/Xl9r79f34+t9Rji99mRmdv0nBC6TPM7HCJ8OKC6oxfyhIg+lDMiSZm5JsSRaxx9dg7yU4SuQfeAmM6AByppkp/kseChJ4RkwXFRz7WKqZAnZSeMZn0SA9UtOAbPCBvTab+P4D6/NSb9gMA5uGSWM8KuOz5PHfM18sABSXZAfoY4OG74nKhAUy5f6fPrA9mB9uq90qS2AAAAAElFTkSuQmCC",
          width: 8,
          length: 50,
          offsetCenter: [0, -276]
        },
        splitLine: {
          show: false,
        },
        itemStyle: {
          show: false,
        },
        data: [data]
      },
    ]
  };

  return option;
}
// 男女比例分布图
const PieCode3 = () => {
  const menNum = 650; //男性
  const womenNum = 350; //女性
  const xbRate = [65, 35]; // 占比

  /* 函数 */
  // 数字分割：1653 => 1,653
  const formatNum = (value) => {
    if(!value&&value!==0) return 0;
    let str = value.toString();
    let reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg,"$1,");
  }

  const option = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'none'
      },
      position: function (point, params, dom, rect, size) { // 提示框位置
        let x = 0;
        let y = 0;
        //提示框定位
        if (point[0] + size.contentSize[0] < size.viewSize[0]) {
          x = point[0]
        }else if (point[0] > size.contentSize[0]) {
          x = point[0] - size.contentSize[0]
        }else {
          y = "30%"
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
        let pieColor = params.color;
        return `
            <div style="position:relative;">
               <div style="width: 8px;height: 8px;background: ${pieColor};border: 1px solid #FFFFFF;position:absolute;top:50%;transform:translateY(-50%);left:0;border-radius:50%;"></div>
               <span style="margin:0 0 0 16px;font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 400;color: #FFFFFF;">${params.name}</span>
            </div>
            <div style="margin:4px 0 0 16px;font-size: 14px;font-family: Source Han Sans CN-Regular;font-weight: 500;color: #FFFFFF;">${formatNum(params.value)}人<span style="margin-left:12px;">${xbRate[params.dataIndex]}%</span></div>
         `
      },
      extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:8px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    series: [{
      name: '性别分布',
      type: "pie",
      radius: ['55%', '90%'],
      startAngle: 180,
      center: ['50%', '70%'],
      roseType: "radius",
      labelLine: {
        show: false
      },
      label: {
        show: false
      },
      data: [{
        value: menNum,
        name: "男",
        itemStyle: {
          color: "#73A0FB"
        }
      }, {
        value: womenNum,
        name: "女",
        itemStyle: {
          color: "#FACA42"
        }
      }, {
        value: menNum + womenNum,
        name: "空白占比",
        itemStyle: {
          color: "rgba(255,255,255,1)"
        },
        cursor: "default",
        tooltip:{
          show:false
        }
      }]
    }]
  };

  return option;
}
// 岗位分布图
const PieCode4 = () => {
  /* 数据 */
  const nameList = ["岗位1", "岗位", "岗位3", "岗位4"];
  const valueList = [50, 40, 30, 20];

  /* 整合 */
  let colorList =  ["#73A0FB", "#73DEB4", "#FACA42", "#F98973", "#2F467A"];
  let data = [];
  nameList.map((item,index) => {
    data.push({
      name:item,
      value:valueList[index]
    })
  })

  /* 函数 */
// 数字分割：1653 => 1,653
  const formatNum = (value) => {
    if (!value && value !== 0) return 0;
    let str = value.toString();
    let reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg, "$1,");
  }

  const option = {
    color: colorList,
    tooltip: {
      trigger: 'item',
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
        let pieColor = params["color"];
        return `
            <div style="position:relative;">
               <div style="width: 8px;height: 8px;background: ${pieColor};border: 1px solid #FFFFFF;position:absolute;top:50%;transform:translateY(-50%);left:0;border-radius:50%;"></div>
               <span style="margin:0 0 0 16px;font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 400;color: #FFFFFF;">${params.name}</span>
            </div>
            <div style="margin:8px 0 0 16px;font-size: 14px;font-family: Source Han Sans CN-Regular;font-weight: 500;color: #FFFFFF;">${formatNum(params.value)}人<span style="margin-left:16px;">${[params.percent]}%</span></div>
         `
      },
      extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:8px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    series: [{
      type: 'pie',
      roseType: true,
      radius: ["20%", "70%"],
      label: {
        show: false,
      },
      data: data
    }]
  };

  return option;
}
// 精品课程类型占比图01
const PieCode5 = () => {
  const nameList = ['国家级', '省部级', '学会/协会类', '校级', '其他']; // 课程名
  const valueList = [11.24, 13.68, 20.7, 21.41, 32.95]; // 比例

  const data = [];
  for (let i = 0; i < nameList.length; i++) {
    data.push({ name: nameList[i], value: valueList[i] });
  }

  const fontColor = ['#FAAD14', '#FF4D4F', '#8839F0', '#23D688', '#397EF0'];
  const backgroundColor = ['#FFFBE6', '#FFF1F0', '#F1EBFF', '#E5FFF3', '#E5F3FF'];
  const colorList = [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#FACB36'
          // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#FCBE2E'
          // 100% 处的颜色
        }
      ],
      global: false
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
          color: '#FFA66A' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#EE607E' // 100% 处的颜色
        }
      ],
      global: false
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
          color: '#C478FA' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#5272FE' // 100% 处的颜色
        }
      ],
      global: false
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
          color: '#3ED89B' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#59EBD7' // 100% 处的颜色
        }
      ],
      global: false
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
          color: '#494CF3' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#2AB0FF' // 100% 处的颜色
        }
      ],
      global: false
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
          color: '#F4E83F' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#16A068' // 100% 处的颜色
        }
      ],
      global: false
    }
  ];

  const option = {
    series: [
      {
        type: 'pie',
        radius: ['43%', '55%'],
        center: ['50%', '50%'],
        itemStyle: {
          shadowBlur: 8,
          shadowColor: 'rgba(255, 255, 255, 0)',
          borderColor: '#FFF',
          borderWidth: 2,
          color: function (params) {
            return colorList[params.dataIndex];
          }
        },
        label: {
          formatter: (params) => {
            let nameIndex = nameList.indexOf(params.name);
            return `{name${nameIndex}|${params.name}：${params.value}%}`
          },
          rich: {
            name0: {
              fontSize: 14,
              fontFamily: 'Source Han Sans CN-Regular',
              color: fontColor[0],
              backgroundColor: backgroundColor[0],
              padding: [9, 12, 6, 12],
              borderRadius: 100
            },
            name1: {
              fontSize: 14,
              fontFamily: 'Source Han Sans CN-Regular',
              color: fontColor[1],
              backgroundColor: backgroundColor[1],
              padding: [9, 12, 6, 12],
              borderRadius: 100
            },
            name2: {
              fontSize: 14,
              fontFamily: 'Source Han Sans CN-Regular',
              color: fontColor[2],
              backgroundColor: backgroundColor[2],
              padding: [9, 12, 6, 12],
              borderRadius: 100
            },
            name3: {
              fontSize: 14,
              fontFamily: 'Source Han Sans CN-Regular',
              color: fontColor[3],
              backgroundColor: backgroundColor[3],
              padding: [9, 12, 6, 12],
              borderRadius: 100
            },
            name4: {
              fontSize: 14,
              fontFamily: 'Source Han Sans CN-Regular',
              color: fontColor[4],
              backgroundColor: backgroundColor[4],
              padding: [9, 12, 6, 12],
              borderRadius: 100
            }
          }
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ]
  };

  return option;
}
// 精品课程类型占比图02
const PieCode6 = () => {
  const nameList = ['国家级', '省部级', '学会/协会类', '校级', '其他']; // 课程名
  const valueList = [11.24, 13.68, 20.7, 21.41, 32.95]; // 比例
  const numList = [8, 9, 16, 21, 26]; // 数量

  const data = [];
  for (let i = 0; i < nameList.length; i++) {
    data.push({ name: nameList[i], value: valueList[i] });
  }

  const colorList = [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#FACB36'
          // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#FCBE2E'
          // 100% 处的颜色
        }
      ],
      global: false
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
          color: '#FFA66A' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#EE607E' // 100% 处的颜色
        }
      ],
      global: false
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
          color: '#C478FA' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#5272FE' // 100% 处的颜色
        }
      ],
      global: false
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
          color: '#3ED89B' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#59EBD7' // 100% 处的颜色
        }
      ],
      global: false
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
          color: '#494CF3' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#2AB0FF' // 100% 处的颜色
        }
      ],
      global: false
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
          color: '#F4E83F' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#16A068' // 100% 处的颜色
        }
      ],
      global: false
    }
  ];

  const option = {
    legend: {
      type: "scroll",
      orient: 'vertical',
      height: '80%',
      left: '60%',
      top: 'center',
      //icon: "circle", //设置为圆，删除则为矩形
      itemWidth: 15,
      itemHeight: 15,
      itemGap: 25,
      data: nameList,
      formatter: function (name) {
        for (let i = 0; i < nameList.length; i++) {
          if (name === data[i].name) {
            return '{name|' + name + '}{num|' + numList[i] + '项}{value|' + valueList[i] + '%}'
          }
        }
      },
      textStyle: {
        rich: {
          name: {
            fontSize: 14,
            fontWeight: 400,
            width: 100,
            height: 20,
            padding: [0, 0, 0, 5],
            color: 'rgba(0, 0, 0, 0.85)',
            fontFamily: 'Source Han Sans CN-Regular',
          },
          num: {
            fontSize: 14,
            fontWeight: 500,
            height: 20,
            width: 50,
            align: 'left',
            color: 'rgba(0, 0, 0, 0.65)',
            fontFamily: 'Source Han Sans CN-Regular',
          },
          value: {
            fontSize: 14,
            fontWeight: 500,
            height: 20,
            width: 50,
            align: 'left',
            color: 'rgba(0, 0, 0, 0.65)',
            fontFamily: 'Source Han Sans CN-Regular',
          }
        }
      }

    },
    series: [{
      type: 'pie',
      radius: ['43%', '55%'],
      center: ["35%", "50%"],
      itemStyle: {
        shadowBlur: 8,
        shadowColor: "rgba(255, 255, 255, 0)",
        borderColor: '#FFF',
        borderWidth: 2,
        color: function (params) {
          return colorList[params.dataIndex]
        }
      },
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: data
    }
    ]
  };

  return option;
}


export const PieCodeList = [
  {name: "精品课程类型占比图02", type: "pie", author: "biubiu", date: "2023.12.19", remark: "legend提示饼图", code: `${PieCode6}`},
  {name: "精品课程类型占比图01", type: "pie", author: "biubiu", date: "2023.12.19", remark: "label提示饼图", code: `${PieCode5}`},
  {name: "岗位分布图", type: "pie", author: "biubiu", date: "2023.12.19", remark: "南丁格尔图(玫瑰图)", code: `${PieCode4}`},
  {name: "男女比例分布图", type: "pie", author: "biubiu", date: "2023.12.19", remark: "半圆饼图", code: `${PieCode3}`},
  {name: "占比进度条", type: "pie", author: "biubiu", date: "2023.12.19", remark: "饼图 + 仪表盘结合，指针位置根据实际画布调整", code: `${PieCode2}`},
  {name: "教职工类型分布占比图", type: "pie", author: "biubiu", date: "2023.12.19", remark: "占比分布饼图", code: `${PieCode1}`},
]