/*
 * @Name: 移动模块
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-05-12
*/

import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {DragOutlined} from "@ant-design/icons";

const MoveItem = (props) => {
  const {
    children = undefined,
    type = "moveItem",// 类型
    dragData = {},// 拖动数据 {id: "", index: 0}
    moveItem = (preIndex, nextIndex) => {},// 交换
    dragNode = undefined,// 拖动ReactNode
  } = props;

  const containerRef = React.useRef(null);  // 容器ref
  const dragHandleRef = React.useRef(null); // 手柄ref

  // 使用 useDrag（绑定到手柄）
  const [{ isDragging }, drag] = useDrag({
    type: type,
    item: dragData,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // 使用 useDrop（绑定到整个容器）
  const [, drop] = useDrop({
    accept: type,
    hover(item) {
      if (!containerRef.current) return;

      const dragIndex = item.index;
      const hoverIndex = dragData.index

      if (dragIndex === hoverIndex) return;

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  // 分开绑定：容器使用drop，手柄使用drag
  drop(containerRef);
  drag(dragHandleRef);

  return <div ref={containerRef} className="moveItem">
    {children}
    <div ref={dragHandleRef} className="handle">
      {dragNode}
    </div>
  </div>
}
export default MoveItem;