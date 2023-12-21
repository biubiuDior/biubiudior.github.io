/*
 * @Name: 旭日图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 旭日图图例 */
// 教职工年龄分布图
const SunburstCode1 = (myChart) => {
  /* 数据 */
  let jbList = ['中青年教书', '其他']; // 年龄段
  let djgsList = [3, 3]; // 年龄段类型数
  let djList = ['<35岁', '35-40岁', '41-45岁', '46-50岁', '51-55岁', '>55岁']; // 类型
  let djslList = [25, 27, 63, 25, 65, 76]; // 类型对应人数
  let jbslList = [115, 166]; // 年龄段总人数

  const unit = "人";// 统计单位

  /* 整合 */
  let colorList = [
    ['#5B8FF9', '#ADC6FC', '#2F467A'],
    ['#61DDAA', '#B2EED5', '#21A397'],
    ['#F6BD16', '#F4E6BB', '#F6BD16']
  ];
  let data = [];
  let j = 0;
  jbList.map((item, index) => {
    let childList = [];
    for (let i = 0; i < djgsList[index]; i++) {
      childList.push({
        value: djslList[j],
        name: djList[j],
        // 每个子类别 可以单独设置颜色
        itemStyle: {
          color: colorList[index][1]
        },
        label: {
          color: colorList[index][2]
        }
      });
      j++;
    }
    data.push({
      name: item,
      value: jbslList[index],
      itemStyle: {
        color: colorList[index][0]
      },
      children: childList
    });
  });

  const option = {
    tooltip: {
      show: true,
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
        let parentName = params.treePathInfo[1].name; // 类别
        let pieColor = params.color;
        let childData = data.filter((item) => {
          return item.name == parentName;
        })[0].children;
        let childDiv = `<div>`;
        childData.map((item, index) => {
          childDiv += `
                <div style="margin-top: 8px;position:relative;">
                  <div style="width: 9px;height: 9px;background: ${pieColor};border: 1px solid #FFFFFF;position:absolute;top:50%;transform:translateY(-50%);left:0;border-radius:50%;"></div>
                  <span style="margin:0 0 0 15px;font-size: 14px;font-family: Source Han Sans CN-Regular;font-weight: 400;color: #FFFFFF;">${item.name}：${item.value}${unit}</span>
                </div>
              `;
        });
        childDiv += `</div>`;
        return `
				<div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;margin-bottom:12px;">${parentName}</div>
            ${childDiv}
			`;
      },
      extraCssText:
        'opacity: 0.8;background-color:#050F1B;padding:16px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
    },
    series: [
      {
        type: 'sunburst',
        nodeClick: false, //是否允许旭日图点击 默认可以点击
        center: ['50%', '50%'],
        radius: ['0%', '100%'],
        sort: 'null',
        data: data,
        clockwise: false,// 数据顺序
        // 占据的位置 文字设置
        label: {
          rotate: 'tangential', // 文字水平(tangential)竖直(radial)
          color: '#fff',
          fontSize: 14,
          minAngle: 30 // 控制角度文本显示
        },
        // 旭日图的分割线
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 7,
          borderRadius: 7
        },
        levels: [
          // 这里是设置 每一层的样式，层级低于单独在data里面的
          // 第一个空数据是 占据下钻的位置
          {},
          // 设置第一层为环形
          {
            r0: "45%",
            r: "70%",
            emphasis: {
              focus: "descendant"
            }
          },
          {
            r0: "70%",
            r: "95%",
            emphasis: {
              focus: "none"
            }
          }
        ]
      }
    ]
  };

  return option;
}


export const SunburstCodeList = [
  {name: "教职工年龄分布图", type: "sunburst", author: "biubiu", date: "2023.12.19", remark: "旭日分布图", code: `${SunburstCode1}`},
]