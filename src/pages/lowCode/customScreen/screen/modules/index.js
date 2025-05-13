/*
 * @Name: 模块组件
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-05-12
*/

const ScreenModules = (props) => {
  const {
    id = "",
    screenId = "",
  } = props;

  const modulesData = {
    singleBar1: ""
  }

  return modulesData[id];
}
export default ScreenModules;