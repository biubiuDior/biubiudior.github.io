/*
 * @Name: Echarts组件
 * @Description: 根据传入option渲染图层
 * @Author: biubiu
 * @Date: 2023-12-11
*/

import React, {useEffect, useState, useRef} from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import {unicodeToChinese} from "@/utils/utils";

const BiuEcharts = (props) => {
  const {
    code = "",// 原始代码
    renderer = 'svg',// 默认渲染方式svg
  } = props;
  const echartsRef = useRef(null);
  const [option, setOption] = useState({})

  useEffect(() => {
    let myChart = echartsRef.current.getEchartsInstance();
    myChart.setOption(eval(unicodeToChinese(code))(myChart));
  },[code])

  return (
    <ReactEcharts
      ref={echartsRef}
      option={option}
      style={{ width: "100%", height: "100%" }}
      notMerge={true} // option不合并
      opts={{
        renderer
      }}
    />
  )
}
export default BiuEcharts;