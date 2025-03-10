/*
 * @Name: 拖拽放置区域
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-03-05
*/

import styles from "./index.less";
import {useDrop} from "react-dnd";
import React, {useEffect, useRef, useState} from "react";
import {hasObjectWithProperty} from "@/utils/utils";

const DropArea = (props) => {
  const {
    maxItems = 0,// 限制最大数量[0=不限制]
    unique = true,// 唯一性，是否重复添加
    type = "",// 类型
    renderNode = (canDrop, maxItems, nodeList, setNodeList) => {},// 元素节点渲染
    getDropData = (data) => {},// 获取放置数据
  } = props;

  const [nodeList, setNodeList] = useState([]);
  const dropRef = useRef(nodeList); // 使用 ref 保持最新状态引用

  // 同步 ref 和 state
  useEffect(() => {
    dropRef.current = nodeList;
    getDropData(nodeList);
  }, [nodeList]);

  const [{isOver, canDrop}, drop] = useDrop(() => ({
    accept: type,
    drop: (item) => {
      // 判断是否超出数量限制
      if (maxItems === 0 || dropRef.current.length < maxItems) {
        // 防止重复添加
        if (!unique || !hasObjectWithProperty(dropRef.current, 'dragId', item.dragId)) {
          setNodeList(prev => [...prev, item]);
        }
      }
    },
    // 使用 ref 获取最新值
    canDrop: () => maxItems === 0 || dropRef.current.length < maxItems,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div ref={drop} className={"dropArea"}>
      {renderNode(canDrop, maxItems, nodeList, setNodeList)}
    </div>
  )
}
export default DropArea;