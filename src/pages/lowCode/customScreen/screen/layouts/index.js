/*
 * @Name: 大屏布局
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-04-28
*/

import FixedLayout1 from "@/pages/lowCode/customScreen/screen/layouts/Fixed1";
import {useEffect} from "react";
import FixedLayout1_edit from "@/pages/lowCode/customScreen/screen/layouts/Fixed1/edit";

const ScreenLayouts = (props) => {
  const {
    screenData = {},// 大屏数据
    mode = "read",// 模式 read=阅读模式 | edit=编辑模式
  } = props;

  const layoutType = {
    fixed1: {
      read: <FixedLayout1 {...screenData}/>,
      edit: <FixedLayout1_edit {...screenData}/>
    }
  }

  return layoutType[screenData.layout][mode];
}
export default ScreenLayouts;