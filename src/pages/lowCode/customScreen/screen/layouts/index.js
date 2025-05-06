/*
 * @Name: 大屏布局
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-04-28
*/

import FixedLayout1 from "@/pages/lowCode/customScreen/screen/layouts/Fixed1";
import {useEffect} from "react";

const ScreenLayouts = (props) => {
  const {
    layout = "",// 布局类型
    screenId = "",// 大屏Id
    modules = [],// 模块信息
  } = props;

  const layoutType = {
    "fixed1": <FixedLayout1 screenId={screenId} modules={modules}/>,
  }

  return layoutType[layout];
}
export default ScreenLayouts;