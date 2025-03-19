/*
 * @Name: react-grid-layout
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-03-06
*/

import styles from "./index.less";
import React, {useEffect, useRef, useState, useCallback} from "react";
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
    rowCols = 24,// 行列数
  } = props;

  const containerRef = useRef(null);
  const [showGrid, setShowGrid] = useState(false);
  const [gridSize, setGridSize] = useState({ colWidth: 0, rowHeight: 0 });
  const [selectItem, setSelectItem] = useState("");

  // 拖拽开始标记
  const handleDragStart = (layout, oldItem, newItem, placeholder, e, element) => {
    if(selectItem !== oldItem.i) {
      setSelectItem(newItem.i);
      gridItemClick(newItem.i)
    }
  };

  // 计算网格尺寸
  const calculateGrid = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    setGridSize({
      colWidth: clientWidth / rowCols,
      rowHeight
    });
  }, []);

  // 网格背景样式
  const gridStyle = {
    backgroundImage: `
    repeating-linear-gradient(
      to right,
      transparent 0,
      transparent calc(${gridSize.colWidth}px - 1px),
      #eee calc(${gridSize.colWidth}px - 1px),
      #eee ${gridSize.colWidth}px
    ),
    repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent calc(${gridSize.rowHeight}px - 1px),
      #eee calc(${gridSize.rowHeight}px - 1px),
      #eee ${gridSize.rowHeight}px
    )`,
    backgroundSize: `${gridSize.colWidth}px ${gridSize.rowHeight}px`,
    opacity: showGrid ? 1 : 0,
    transition: 'opacity 0.2s'
  };

  useEffect(() => {
    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  // 调整大小事件处理
  const handleResize = (layout, oldItem, newItem) => {
    calculateGrid();
  };

  return (
    <div className={"gridLayout"} ref={containerRef}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          ...gridStyle
        }}
      />
      <ResponsiveGridLayout
        className="layout"
        margin={gutter}
        containerPadding={gutter}
        compactType={compactType}
        rowHeight={rowHeight}
        layouts={{ lg: layoutData }} // 响应式断点布局
        breakpoints={{ lg: 1200 }}
        cols={{ lg: rowCols }} // 不同断点的列数
        onLayoutChange={onLayoutChange}
        onDragStart={(layout, oldItem, newItem, placeholder, e, element) => handleDragStart(layout, oldItem, newItem, placeholder, e, element)}
        isDraggable={isDraggable}
        isResizable={isResizable}
        allowOverlap={allowOverlap}
        onResizeStart={() => setShowGrid(true)}
        onResize={handleResize}
        onResizeStop={() => {
          setShowGrid(false);
        }}
      >
        {layoutData.map((item,index) => {
          return <div key={item.i}>
            {item?.node}
          </div>
        })}
      </ResponsiveGridLayout>
    </div>
  );
}
export default GridLayout;