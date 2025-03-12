/*
 * @Name: react-grid-layout
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-03-06
*/

import styles from "./index.less";
import React, {useMemo, useRef, useState} from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridLayout = (props) => {
  const {
    gutter = [15, 15],// 栅格间隔 [水平, 垂直]
    compactType = "vertical",// 排列类型 vertical | horizontal | null
    allowOverlap = false,// 元素是否可重叠 true=可重叠,开启后无法响应式排序 | false=不可重叠
    rowHeight = 5,// 行高
    layoutData = [],// 布局数据
    isDraggable = true,// 是否可拖拽
    isResizable = true,// 是否可调整大小
    onLayoutChange = (newLayout) => {},// 布局变化时的回调 layout=新的布局数据
    gridItemClick = (id) => {},// 点击事件
  } = props;

  const [layouts, setLayouts] = useState(layoutData);
  const [selectItem, setSelectItem] = useState("");

  // 拖拽开始标记
  const handleDragStart = (layout, oldItem, newItem, placeholder, e, element) => {
    if(selectItem !== oldItem.i) {
      setSelectItem(newItem.i);
      gridItemClick(newItem.i)
    }
  };

  return (
    <div className={"gridLayout"}>
      <ResponsiveGridLayout
        className="layout"
        margin={gutter}
        containerPadding={gutter}
        compactType={compactType}
        rowHeight={rowHeight}
        layouts={{ lg: layoutData }} // 响应式断点布局
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 24 }} // 不同断点的列数
        onLayoutChange={onLayoutChange}
        onDragStart={(layout, oldItem, newItem, placeholder, e, element) => handleDragStart(layout, oldItem, newItem, placeholder, e, element)}
        isDraggable={isDraggable}
        isResizable={isResizable}
        allowOverlap={allowOverlap}
      >
        {layoutData.map((item,index) => {
          return <div id={item.i} key={item.i}>
            {item?.node}
          </div>
        })}
      </ResponsiveGridLayout>
    </div>
  );
}
export default GridLayout;