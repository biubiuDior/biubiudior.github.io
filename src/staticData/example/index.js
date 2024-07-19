/*
 * @Name: chart图集静态数据
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-15
*/

import {BarChartData} from "@/staticData/example/bar";
import {LineChartData} from "@/staticData/example/line";
import {PieChartData} from "@/staticData/example/pie";
import {MapChartData} from "@/staticData/example/map";
import {RadarChartData} from "@/staticData/example/radar";
import {GraphChartData} from "@/staticData/example/graph";
import {ScatterChartData} from "@/staticData/example/scatter";
import {TreemapChartData} from "@/staticData/example/treemap";
import {ParallelChartData} from "@/staticData/example/parallel";
import {BoxplotChartData} from "@/staticData/example/boxplot";
import {SankeyChartData} from "@/staticData/example/sankey";
import {HeatmapChartData} from "@/staticData/example/heatmap";
import {TreeChartData} from "@/staticData/example/tree";
import {GaugeChartData} from "@/staticData/example/gauge";
import {SunburstChartData} from "@/staticData/example/sunburst";
import {AssemblyChartData} from "@/staticData/example/assembly";

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