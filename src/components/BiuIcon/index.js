/*
 * @Name: 自定义图标
 * @Description: 引用svg格式, antd的Icon组件
 * @Author: biubiu
 * @Date: 2023-12-08
*/

import React, { Component } from 'react';
import Icon from '@ant-design/icons';

/* 引入svg */
// 系统图标
import { ReactComponent as developingIcon } from '@/assets/icon/developing.svg';

// 功能图标
import { ReactComponent as backIcon } from '@/assets/icon/back.svg';
import { ReactComponent as blowUpIcon } from '@/assets/icon/blowUp.svg';
import { ReactComponent as downLoadIcon } from '@/assets/icon/downLoad.svg';
import { ReactComponent as copyIcon } from '@/assets/icon/copy.svg';
import { ReactComponent as editIcon } from '@/assets/icon/edit.svg';

// Echarts图集
import { ReactComponent as menuIcon } from '@/assets/icon/menu.svg';
import { ReactComponent as barIcon } from '@/assets/icon/bar.svg';
import { ReactComponent as lineIcon } from '@/assets/icon/line.svg';
import { ReactComponent as pieIcon } from '@/assets/icon/pie.svg';
import { ReactComponent as mapIcon } from '@/assets/icon/map.svg';
import { ReactComponent as linkageIcon } from '@/assets/icon/linkage.svg';
import { ReactComponent as elseIcon } from '@/assets/icon/else.svg';
import { ReactComponent as radarIcon } from '@/assets/icon/radar.svg';
import { ReactComponent as graphIcon } from '@/assets/icon/graph.svg';
import { ReactComponent as scatterIcon } from '@/assets/icon/scatter.svg';
import { ReactComponent as treemapIcon } from '@/assets/icon/treemap.svg';
import { ReactComponent as parallelIcon } from '@/assets/icon/parallel.svg';
import { ReactComponent as boxplotIcon } from '@/assets/icon/boxplot.svg';
import { ReactComponent as sankeyIcon } from '@/assets/icon/sankey.svg';
import { ReactComponent as heatmapIcon } from '@/assets/icon/heatmap.svg';
import { ReactComponent as treeIcon } from '@/assets/icon/tree.svg';
import { ReactComponent as gaugeIcon } from '@/assets/icon/gauge.svg';
import { ReactComponent as sunburstIcon } from '@/assets/icon/sunburst.svg';

// 图标列表
const iconList = {
  // 系统图标
  developingIcon: developingIcon,
  // 功能图标
  backIcon: backIcon,
  blowUpIcon: blowUpIcon,
  downLoadIcon: downLoadIcon,
  copyIcon: copyIcon,
  editIcon: editIcon,
  // Echarts图集
  menuIcon: menuIcon,
  barIcon: barIcon,
  lineIcon: lineIcon,
  pieIcon: pieIcon,
  mapIcon: mapIcon,
  radarIcon: radarIcon,
  linkageIcon: linkageIcon,
  elseIcon: elseIcon,
  graphIcon: graphIcon,
  scatterIcon: scatterIcon,
  treemapIcon: treemapIcon,
  parallelIcon: parallelIcon,
  boxplotIcon: boxplotIcon,
  sankeyIcon: sankeyIcon,
  heatmapIcon: heatmapIcon,
  treeIcon: treeIcon,
  gaugeIcon: gaugeIcon,
  sunburstIcon: sunburstIcon,
}

const BiuIcon = props => {
  const { type, ...other } = props;
  if (iconList[type]) {
    return <Icon component={iconList[type]} {...other} />;
  } else {
    return <Icon type={type} {...other} />;
  }
};

export default BiuIcon;