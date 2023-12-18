// Echarts图集类型
const EchartsAtlasType = [
  {name: "全部", icon: "menuIcon", type: "all"},
  {name: "柱状图", icon: "barIcon", type: "bar"},
  {name: "折线图", icon: "lineIcon", type: "line"},
  {name: "饼图", icon: "pieIcon", type: "pie"},
  {name: "地图", icon: "mapIcon", type: "map"},
  {name: "其他", icon: "elseIcon", type: "other"},
];

// Echarts图集展示
import {BarCodeList} from "./code/bar";

const EchartsCodeList = [
  ...BarCodeList,
]


export default {
  'GET /api/echarts/queryAtlasType': (req, res) => {
    res.json({
      success: true,
      code: 200,
      data: EchartsAtlasType,
      errorCode: 0,
    });
  },
  'GET /api/echarts/queryCodeList': (req, res) => {
    res.json({
      success: true,
      code: 200,
      data: EchartsCodeList,
      errorCode: 0,
    });
  },
}