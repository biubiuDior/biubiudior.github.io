// Echarts图集类型
const echartsAtlasType = [
  {name: "全部", icon: "menuIcon"},
  {name: "柱状图", icon: "barIcon"},
  {name: "折线图", icon: "lineIcon"},
  {name: "饼图", icon: "pieIcon"},
  {name: "地图", icon: "mapIcon"},
  {name: "其他", icon: "elseIcon"},
];

export default {
  'GET /api/echarts/queryAtlasType': (req, res) => {
    res.json({
      success: true,
      code: 200,
      data: echartsAtlasType,
      errorCode: 0,
    });
  },
}