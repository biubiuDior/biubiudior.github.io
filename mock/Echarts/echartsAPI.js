// Echarts图集类型
const EchartsAtlasType = [
  {name: "全部", icon: "menuIcon", type: "all"},
  {name: "柱状图", icon: "barIcon", type: "bar"},
  {name: "折线图", icon: "lineIcon", type: "line"},
  {name: "饼图", icon: "pieIcon", type: "pie"},
  {name: "地图", icon: "mapIcon", type: "map"},
  {name: "联动组合图", icon: "linkageIcon", type: "linkage"},
  {name: "其他", icon: "elseIcon", type: "other"},
];

// Echarts图集展示
import {BarCodeList} from "./code/bar";// 柱状图
import {LineCodeList} from "./code/line";// 折线图
import {PieCodeList} from "./code/pie";// 饼图
import {SunburstCodeList} from "./code/sunburst";// 旭日图
import {RadarCodeList} from "./code/radar";// 雷达图
import {GraphCodeList} from "./code/graph";// 关系图
import {LinkageCodeList} from "./code/linkage";// 关系图

const EchartsCodeList = [
  ...BarCodeList,
  ...PieCodeList,
  ...SunburstCodeList,
  ...LineCodeList,
  ...RadarCodeList,
  ...GraphCodeList,
  ...LinkageCodeList,
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
      data: {
        list: EchartsCodeList,
        total: EchartsCodeList.length
      },
      errorCode: 0,
    });
  },
}