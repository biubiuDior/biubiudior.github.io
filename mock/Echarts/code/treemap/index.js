/*
 * @Name: 矩形树图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 矩形树图图例 */
// 部门人数分布占比
const TreemapCode1 = (myChart) => {
  /* 数据 */
// 矩形树图
  const bmName = ["消防指挥", "信息技术", "会计学", "外国语言与外国历史"]; // 部门名称
  const bmValue = [100, 50, 80, 60]; // 部门人数

  /* 整合 */
// 颜色系列
  const colorList = ["rgba(115, 160, 251, 1)", "rgba(249, 202, 65, 1)", "rgba(115, 222, 180, 1)", "rgba(249, 137, 115, 1)"]
// 矩形树图
  let treeMapData = [];
  bmName.map((item, index) => {
    treeMapData.push({
      name: item,
      value: bmValue[index],
      itemStyle: {
        color: colorList[index]
      },
    })
  });

  const option = {
    tooltip: {},
    series: [{
      name: "treemap",
      id: "treemap",
      type: 'treemap',
      data: treeMapData,
      roam: false,//拖拽漫游（移动和缩放）
      nodeClick: false, // 节点点击
      breadcrumb: false, // 面包屑
      left: "16",
      right: 16,
      top: 30,
      bottom: 35,
      label: {
        show: true,
        position: [6, 6],
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
        boderColor: "#fff"
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'none'
        },
        position: function (point, params, dom, rect, size) { // 提示框位置
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
               <div style="font-size: 14px;font-family: Source Han Sans CN-Medium;font-weight: 500;color: #FFFFFF;">专业人数：${params.value}人</div>
			    `
        },
        extraCssText: 'opacity: 0.8;background-color:#050F1B;padding:12px;box-shadow: 1px 6px 15px 1px rgba(0,0,0,0.13);border-radius: 4px;filter: blur(undefinedpx);border:none;'
      },
    }]
  };

  return option;
}


export const TreemapCodeList = [
  {id: "TreemapCode1", name: "部门人数分布占比", type: "treemap", author: "biubiu", date: "2023.12.25", remark: "基础矩形树图", code: `${TreemapCode1}`},
]