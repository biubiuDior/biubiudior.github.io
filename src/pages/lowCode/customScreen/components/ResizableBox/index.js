/*
 * @Name: 可调整容器
 * @Description: 子容器可调整大小,flex布局
 * @Author: biubiu
 * @Date: 2025-04-29
*/

import styles from "./index.less";
import {useEffect, useRef, useState} from "react";
import {Spin} from "antd";
import {useSelector} from "react-redux";

const ResizableBox = (props) => {
  const {
    children = undefined,
    orient = "row",// 布局朝向 row=水平 | column=垂直
    mode = "read",// 模式 read=阅读 | edit=编辑
    sizeData = [],// 子容器size
    loading = false,// 加载状态
    minWidth = 0,// 最小宽度
    minHeight = 0,// 最小高度
  } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [currentNode, setCurrentNode] = useState(null);
  const [currentSizeData, setCurrentSizeData] = useState(sizeData);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [startWidth, setStartWidth] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const boxRef = useRef(null);
  const { screenScale } = useSelector((state) =>  state.global)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      // 计算新的宽度或高度
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      let newWidth = startWidth + deltaX;
      let newHeight = startHeight + deltaY;

      // 限制最小和最大宽度或高度
      const parent = boxRef.current;

      // 计算其他子元素的最小宽度总和
      const siblings = Array.from(parent.children).filter(child => child !== currentNode);
      const totalMinWidth = siblings.reduce((acc, sibling) => {
        const minWidth = parseFloat(window.getComputedStyle(sibling).minWidth) || 0;
        return acc + minWidth;
      }, 0);
      const totalMinHeight = siblings.reduce((acc, sibling) => {
        const minHeight = parseFloat(window.getComputedStyle(sibling).minHeight) || 0;
        return acc + minHeight;
      }, 0);

      const maxWidth = parent.offsetWidth - totalMinWidth;
      const maxHeight = parent.offsetHeight - totalMinHeight;
      // 确保不小于最小值且不超过最大允许值
      newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
      newHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));

      currentNode.style.height = `${newHeight}px`
    };

    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startX, startWidth]);

  const handleMouseDown = (event, index) => {
    setIsDragging(true);
    // 获取子元素
    const childNodes = boxRef.current.children;
    setCurrentNode(childNodes[index]);
    // 设置初始值
    if (orient === "column") {
      setStartY(event.clientY);
      setStartHeight(childNodes[index].getBoundingClientRect().height);
    }
  };

  return (
    <div className="ResizableBox" style={{flexDirection: orient}} data-type={mode} ref={boxRef}>
      {loading ? <Spin/> : children.map((item, index) => {
        const itemStyle = {...sizeData[index], minHeight: minHeight, minWidth: minWidth};
        // 重置样式
        if (mode === "edit") {
          if (orient === "column") {
            itemStyle['width'] = itemStyle['width'] - 16
          } else {
            itemStyle['height'] = itemStyle['height'] - 16
          }
        }

        return <div className="ResizableItem" key={index} style={itemStyle}>
          {item}
          <div className="moveBottomLine" onMouseDown={event => handleMouseDown(event, index)}/>
        </div>
      })}
    </div>
  )
}
export default ResizableBox;