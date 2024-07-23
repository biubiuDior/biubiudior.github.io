/*
 * @Name: chart图集静态数据
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-15
*/

import {BarChartData} from "@/staticData/chartExample/bar";
import {LineChartData} from "@/staticData/chartExample/line";
import {PieChartData} from "@/staticData/chartExample/pie";
import {MapChartData} from "@/staticData/chartExample/map";
import {RadarChartData} from "@/staticData/chartExample/radar";
import {GraphChartData} from "@/staticData/chartExample/graph";
import {ScatterChartData} from "@/staticData/chartExample/scatter";
import {TreemapChartData} from "@/staticData/chartExample/treemap";
import {ParallelChartData} from "@/staticData/chartExample/parallel";
import {BoxplotChartData} from "@/staticData/chartExample/boxplot";
import {SankeyChartData} from "@/staticData/chartExample/sankey";
import {HeatmapChartData} from "@/staticData/chartExample/heatmap";
import {TreeChartData} from "@/staticData/chartExample/tree";
import {GaugeChartData} from "@/staticData/chartExample/gauge";
import {SunburstChartData} from "@/staticData/chartExample/sunburst";
import {AssemblyChartData} from "@/staticData/chartExample/assembly";

export const ChartStaticData = [
  ...BarChartData,// 柱状图
  ...LineChartData,// 折线图
  ...PieChartData,// 饼图
  ...MapChartData,// 地图
  ...RadarChartData,// 雷达图
  ...GraphChartData,// 关系图
  ...ScatterChartData,// 散点图
  ...TreeChartData,// 树图
  ...TreemapChartData,// 矩形树图
  ...ParallelChartData,// 平行坐标图
  ...BoxplotChartData,// 盒须图
  ...SankeyChartData,// 桑葚图
  ...HeatmapChartData,// 热力图
  ...GaugeChartData,// 仪表盘
  ...SunburstChartData,// 旭日图
  ...AssemblyChartData,// 组合图
]