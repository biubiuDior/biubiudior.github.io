/*
 * @Name: Echarts组件
 * @Description: 根据传入option渲染图层
 * @Author: biubiu
 * @Date: 2023-12-11
*/

import React, {useEffect, useState, useRef} from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const BiuEcharts = (props) => {
  const {
    optionCode = {},// Echarts代码
    renderer = 'svg',// 默认渲染方式svg
  } = props;

  return (
    <ReactEcharts
      option={optionCode}
      style={{ width: "100%", height: "100%" }}
      notMerge={true} // option不合并
      opts={{
        renderer
      }}
    />
  )
}
export default BiuEcharts;