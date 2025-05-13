/*
 * @Name: 拖拽容器
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-03-04
*/

import styles from "./index.less";
import {useDrag} from "react-dnd";

const DragContainer = (props) => {
  const {
    childNode = (isDragging) => {},// 子元素
    type = "",// 类型
    dragData = {},// 拖动dom数据 {dragId: "aaa", type: "module"},
  } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: dragData,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return(
    <div ref={drag} className={"dragContainer"}>
      {childNode(isDragging)}
    </div>
  )
}
export default DragContainer;