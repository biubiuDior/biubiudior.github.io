/*
 * @Name: echarts组件
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-16
*/

import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import React, {useEffect, useRef, useState} from "react";
import {unicodeToChinese} from "@/utils/utils";
import { message } from 'antd';

const BiuChart = (props) => {
  const {
    renderer = 'svg',// 渲染方式
    code = "",// 原始代码
  } = props;
  const echartsRef = useRef(null);
  const [option, setOption] = useState({})

  useEffect(() => {
    // 获取并渲染实例
    let myChart = echartsRef.current.getEchartsInstance();
    try {
      setOption(eval(unicodeToChinese(code))(myChart,echarts))
    }catch (error) {
      message.error('Echarts渲染失败');
    }
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
export default BiuChart;