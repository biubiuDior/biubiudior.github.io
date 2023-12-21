/*
 * @Name: 雷达图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 雷达图图例 */
// 教学评教分布
const RadarCode1 = (myChart) => {
  const nameList =["教学态度","教学内容","教学方式","教学基本功","教学效果"]; // 名字
  const valueList = [85,80,60,76,85]; // 分数,最大值为100

  let indicatorList = [];
  nameList.map((item,index) => {
    indicatorList.push({
      name:item,
      value:valueList[index],
      max:100
    })
  })

  const option = {
    radar: {
      // shape: 'circle',
      indicator: indicatorList,
      axisName:{
        formatter: function (value, indicator) {
          return `{a|${value}}`;
        },
        rich:{
          a:{
            fontSize: "14px",
            fontFamily:" Source Han Sans CN-Regular",
            fontWeight: 400,
            color: "#333333",
            padding:[0,8,0,0],
          },
          b:{
            padding:[4,8,4,8],
            backgroundColor:"rgba(229, 243, 255, 0.6500)",
            borderRadius:50,
            fontFamily: "Source Han Sans CN-Medium",
            fontWeight: 500,
            color: "#397EF0",
          }
        }
      }
    },
    series: [
      {
        name: '雷达图',
        type: 'radar',
        color:"rgba(57, 126, 240, 1)",
        label:{
          show:false
        },
        areaStyle:{
          color:"rgba(170, 217, 255, 0.35)"
        },
        data: [
          {
            value: valueList,
            name: 'Allocated Budget'
          }
        ]
      }
    ]
  };

  return option;
}


export const RadarCodeList = [
  {name: "教学评教分布", type: "radar", author: "biubiu", date: "2023.12.19", remark: "雷达分布图", code: `${RadarCode1}`},
]