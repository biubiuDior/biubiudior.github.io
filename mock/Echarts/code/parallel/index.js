/*
 * @Name: 平行坐标图代码集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-19
*/

/* 平行坐标图图例 */
// 基础平行坐标图
const ParallelCode1 = (myChart) => {
  var line1 = [
    '博士后流动站',
    '财经研究所',
    '长三角与长江经济带发展研究院',
    '城乡发展研究院',
    '党委教师工作部'
  ];
  var line2 = [126, 26, 50, 44, 38];
  var line3 = [1.6, 2.6, 1, 1, 1];
  var line4 = [106, 206, 50, 44, 38];
  var line5 = [10, 20, 50, 40, 30];
  var pj = ['校均值', 40.5625, 1.8787805, 43.9279167, 26.2790244];

  var schema = [
    {
      name: '部门',
      index: 0,
      text: '部门'
    },
    {
      name: '项目数量',
      index: 1,
      text: '项目数量'
    },
    {
      name: '人均项目数',
      index: 2,
      text: '人均项目数'
    },
    {
      name: '合同经费',
      index: 3,
      text: '合同经费'
    },
    {
      name: '人均合同经费',
      index: 4,
      text: ' 人均合同经费'
    }
  ];

  function getdata() {
    let arr = [];
    for (let i = 0; i < line1.length; i++) {
      arr.push([line1[i], line2[i], line3[i], line4[i], line5[i]]);
    }
    return arr;
  }

  let labelBuld = [];
  var lineStyle = {
    width: 2,
    color: function (params) {
      let xmss = params.data[1]; // 项目数量值
      let color = xmss >= pj[1] ? "#61ddaa" : "#74A0F9";
      if (xmss < pj[1]) {
        labelBuld.push(params.data[0])
      }
      return color;
    }
  };

  const option = {
    tooltip: {
      show: true,
      formatter: function (params) {
        let name = params.name;
        let data = params.value;
        return `<div>
        <div>部门：${name}</div>
        <div>项目数量：${data[1]}个</div>
        <div>人均项目数：${data[2]}个</div>
        <div>合同经费：${data[3]}万元</div>
        <div>人均合同经费：${data[4]}万元</div>
      </div>`;
      }
    },
    parallelAxis: [
      {
        dim: 0,
        name: schema[0].text,
        type: 'category',
        data: [...line1, '校均值'],
        axisLabel: {
          align: 'right',
          padding: [2, 5, 0, 0],
          formatter: function (params, index) {
            let newParamsName = params;
            let paramsNameNumber = params.length; // 实际标签的个数
            let provideNumber = 8; // 每行能显示的字的个数
            /**
             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
             */
            // 条件等同于rowNumber>1
            if (paramsNameNumber > provideNumber) {
              newParamsName = params.substring(0, 8) + '...';; // 最终拼接成的字符串
            } else {
              // 将旧标签的值赋给新标签
              newParamsName = params;
            }
            //将最终的字符串返回
            if (params === '校均值') {
              return `{a|${params}} {b0|}`;
            } else {
              if (labelBuld.indexOf(params) > -1) {
                return `{a|${newParamsName}} {b1|}`;
              } else {
                return `{a|${newParamsName}} {b2|}`;
              }
            }
          },
          rich: {
            b0: {
              width: 8,
              height: 8,
              backgroundColor: '#fff',
              borderColor: '#F7CB46',
              borderWidth: 3,
              borderRadius: [50, 50, 50, 50]
            },
            b1: {
              width: 8,
              height: 8,
              backgroundColor: '#fff',
              borderColor: '#74a0f9',
              borderWidth: 3,
              borderRadius: [50, 50, 50, 50]
            },
            b2: {
              width: 8,
              height: 8,
              backgroundColor: '#fff',
              borderColor: '#61ddaa',
              borderWidth: 3,
              borderRadius: [50, 50, 50, 50]
            },
            a: {
              padding: [0, 5, 0, 0],
              lineHeight: 16,
            }
          }
        }
      },
      {
        dim: 1,
        name: schema[1].text
      },
      {
        dim: 2,
        name: schema[2].text
      },
      {
        dim: 3,
        name: schema[3].text
      },
      {
        dim: 4,
        name: schema[4].text
      }
    ],
    parallel: {
      left: '15%',
      bottom: '24'
    },
    series: [
      {
        name: 'parallel',
        type: 'parallel',
        lineStyle: lineStyle,
        data: getdata(),
        emphasis: {
          focus: 'self'
        }
      },
      {
        name: 'parallel',
        type: 'parallel',
        lineStyle: {
          width: 2,
          opacity: 1,
          color: '#F7CB46'
        },
        data: [pj],
        emphasis: {
          disabled: true
        }
      }
    ]
  };

  return option;
}


export const ParallelCodeList = [
  {id: "ParallelCode1", name: "基础平行坐标图", type: "parallel", author: "biubiu", date: "2023.12.25", remark: "基础平行坐标图", code: `${ParallelCode1}`},
]