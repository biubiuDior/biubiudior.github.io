/*
 * @Name: 低代码平台
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-03-04
*/

import React, {useState, useRef, useEffect, useMemo} from 'react';
import styles from "./index.less";
import classNames from "classnames";
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import DragContainer from "@/pages/lowCode/dragContainer";
import DropArea from "@/pages/lowCode/dropArea";
import GridLayout from "@/pages/lowCode/gridLayout";
import {Button, message, Popconfirm, Spin, Tooltip} from "antd";
import {Scrollbars} from "react-custom-scrollbars";
import {debounce} from "lodash";
import {BarChartOutlined, LayoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

// 主应用组件
const LowCode = () => {
  // 面板
  const [panelData, setPanelData] = useState([]);
  const [panelLoading, setPanelLoading] = useState(true);
  const [currentGridItem, setCurrentGridItem] = useState("");
  const [currentGridData, setCurrentGridData] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const rowCols = 24;
  // 维度
  const [dimensionData, setDimensionData] = useState([]);
  // 度量
  const [measureData, setMeasureData] = useState([]);
  // 设置
  const [settingData, setSettingData] = useState({});
  const [settingUnfold, setSettingUnfold] = useState(true);

  useEffect(() => {
    getDataSourceData();
    getPanelData();
  }, [])

  // 获取数据源数据
  const getDataSourceData = () => {
    const data1 = [
      {dragId: "dqzt", name: "当前状态", type: "dimension"},
      {dragId: "jzglb", name: "教职工类别", type: "dimension"},
      {dragId: "jzgxb", name: "教职工性别", type: "dimension"},
    ];
    const data2 = [
      {dragId: "sj", name: "时间", type: "measure"},
      {dragId: "jzgrs", name: "教职工人数", type: "measure"},
    ];
    setDimensionData(data1);
    setMeasureData(data2);
  };
  // 获取面板编辑数据
  const getPanelData = () => {
    const data = [];

    setPanelData(data);
    setPanelLoading(false)
  }

  // 获取设置区变化数据
  const updateDropData = (data, type) => {
    const newData = settingData;
    newData[type] = data;
    setSettingData(newData);
  }

  // 点击预览
  const previewClick = () => {
    // 传参 用 localStorage 传递
    const userData = {id: 123, token: "secure-token", profile: {name: "Alice"}};
    const storageKey = "reportPanel_" + Date.now();
    localStorage.setItem(storageKey, JSON.stringify(userData));
    // 跳转
    window.open("/preview", '_blank');

    // 子页面
    // window.addEventListener("DOMContentLoaded", () => {
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const storageKey = urlParams.get("storageKey");
    //
    //   if (storageKey) {
    //     const data = JSON.parse(localStorage.getItem(storageKey));
    //     console.log("Received data:", data);
    //
    //     // 清理数据
    //     localStorage.removeItem(storageKey);
    //   }
    // });
  }

  // 智能整理布局 TODO：布局逻辑待完善
  const tidyLayout = (newLayout, cols) => {
    const sortedLayout = [...newLayout].sort((a, b) => a.y - b.y || a.x - b.x);// 优先按行排序，其次按列排序

    const maxCols = cols;
    const gridMap = new Array(maxCols).fill(0).map(() => []);
    const validatedLayout = [];
    let safetyCounter = 1000;// 防止无限循环

    sortedLayout.forEach((item) => {
      let placed = false;
      let currentY = 0;
      let currentX = 0;
      let attempts = 0;

      while (!placed && attempts < safetyCounter) {
        attempts++;

        // 检查当前行剩余空间
        if (currentX + item.w > maxCols) {
          currentX = 0;
          currentY++;
        }

        // 查找当前行可用位置
        let found = true;
        for (let x = currentX; x < currentX + item.w; x++) {
          if (gridMap[x]?.[currentY] || x >= maxCols) {
            found = false;
            break;
          }
        }

        if (found) {
          // 标记占用空间
          for (let x = currentX; x < currentX + item.w; x++) {
            if (!gridMap[x]) gridMap[x] = [];
            for (let y = currentY; y < currentY + item.h; y++) {
              gridMap[x][y] = true;
            }
          }

          validatedLayout.push({
            ...item,
            x: currentX,
            y: currentY
          });

          currentX += item.w;
          placed = true;
        } else {
          currentX++;
          if (currentX >= maxCols) {
            currentX = 0;
            currentY++;
          }
        }
      }

      if (attempts >= safetyCounter) {
        console.error(`无法放置元素 ${item.i}，请检查尺寸`);
      }
    });

    return validatedLayout;
  }
  // 画板改变
  const onPanelChange = (newLayout) => {
    const layoutData = newLayout.map((item, index) => {
      return {
        ...panelData.filter(panelItem => panelItem.i === item.i)[0],
        ...item,
      }
    })
    setPanelData(layoutData)
  }
  // 面板容器变化时
  const gridItemChange = (id) => {
    // 改变元素
    document.getElementById(currentGridItem).style.border = "1px solid transparent";
    document.getElementById(id).style.border = "1px solid #397EF0";
    setCurrentGridItem(id);
    // 元素数据
    const nodeData = panelData.filter(item => item.i === id)[0];
    setCurrentGridData(nodeData);
  };
  // 画板添加容器
  const panelAddContainer = () => {
    const layoutData = [...panelData];
    // 改变子元素样式
    if (panelData.length > 0) document.getElementById(currentGridItem).style.border = "1px solid transparent";
    // 修改当前选中
    setCurrentGridItem(`panelItem-${panelData.length}`);
    // 添加新容器
    layoutData.push({
      i: `panelItem-${panelData.length}`,
      x: 0,
      y: panelData.length > 0 ? panelData[panelData.length - 1].h + panelData[panelData.length - 1].y : 0,
      w: 24,
      h: 10.75,
      node: <div id={`panelItem-${panelData.length}`} style={{border: "1px solid #397EF0"}} className="gridItem"></div>
    });
    setPanelData(layoutData);
  }
  // 点击排序布局
  const layoutClick = () => {
    setPanelData(tidyLayout(panelData, rowCols));
    messageApi.info('已完成智能布局');
  }

  return (
    <DndProvider backend={HTML5Backend}>
      {contextHolder}
      <div className={styles.lowCode}>
        {/* 顶部 */}
        <div className={styles.headerOperate}>
          <Button onClick={previewClick} type="primary" ghost>预览</Button>
        </div>
        {/* 报表区 */}
        <div className={styles.report}>
          {/* 面板 */}
          <div className={styles.panel}>
            <div className={styles.operate}>
              <div onClick={debounce(panelAddContainer, 100)}>
                <BarChartOutlined/> 添加图表
              </div>
              <div>
                <Popconfirm
                  title="智能布局"
                  description="智能布局后可能会打乱当前布局"
                  okText="确定"
                  cancelText="取消"
                  onConfirm={layoutClick}
                >
                  <LayoutOutlined/> 智能布局
                </Popconfirm>
              </div>
            </div>
            <Spin spinning={panelLoading}>
              <Scrollbars>
                <GridLayout
                  layoutData={panelData}
                  onLayoutChange={onPanelChange}
                  gridItemClick={gridItemChange}
                  rowCols={rowCols}
                />
              </Scrollbars>
            </Spin>
          </div>
          {/* 设置 */}
          <div className={styles.setting}>
            <Scrollbars>
              <DropArea
                type="dimension"
                getDropData={data => updateDropData(data, "dimension")}
                renderNode={(canDrop, maxItems, nodeList, setNodeList) => {
                  return <div className={styles.operateRow}>
                    <div className={styles.title}>类别轴/维度</div>
                    <div className={styles.dropArea}>
                      {nodeList.length > 0 ? <>
                        {nodeList.map((nodeItem, nodeIndex) => {
                          return <div className={styles.dimensionItem}>
                            {nodeItem.name}
                            <div className={styles.close}
                                 onClick={() => setNodeList(prev => prev.filter((_, i) => i !== nodeIndex))}>×
                            </div>
                          </div>
                        })}
                      </> : <div className={styles.tip}>拖动数据字段至此处</div>}
                    </div>
                  </div>
                }}
              />
              <DropArea
                type="measure"
                maxItems={1}
                getDropData={data => updateDropData(data, "measure")}
                renderNode={(canDrop, maxItems, nodeList, setNodeList) => {
                  return <div className={styles.operateRow}>
                    <div className={styles.title}>
                      主值轴/度量
                      <div className={styles.limit}>{nodeList.length} / 1</div>
                    </div>
                    <div className={styles.dropArea}>
                      {nodeList.length > 0 ? <>
                        {nodeList.map((nodeItem, nodeIndex) => {
                          return <div className={styles.measureItem}>
                            {nodeItem.name}
                            <div className={styles.close}
                                 onClick={() => setNodeList(prev => prev.filter((_, i) => i !== nodeIndex))}>×
                            </div>
                          </div>
                        })}
                      </> : <div className={styles.tip}>拖动数据字段至此处</div>}
                    </div>
                  </div>
                }}
              />
            </Scrollbars>
          </div>
          {/* 数据源 */}
          <div className={styles.dataSource}>
            <div className={styles.headerBox}>
              <div className={styles.title}>
                数据
                <div className={styles.icon} onClick={() => setSettingUnfold(!settingUnfold)}>
                  {settingUnfold ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </div>
              </div>
            </div>
            <div className={styles.dimension}>
              <div>维度</div>
              <Scrollbars>
                <div className={styles.list}>
                  {dimensionData.map((item, index) => {
                    return <DragContainer
                      type={item.type}
                      dragData={item}
                      childNode={(isDragging) =>
                        <div className={styles.dimensionItem}
                             style={isDragging ? {border: "1px solid #4b87ff"} : null}>{item.name}</div>
                      }
                    />
                  })}
                </div>
              </Scrollbars>
            </div>
            <div className={styles.measure}>
              <div>度量</div>
              <Scrollbars>
                <div className={styles.list}>
                  {measureData.map((item, index) => {
                    return <DragContainer
                      type={item.type}
                      dragData={item}
                      childNode={(isDragging) =>
                        <div className={styles.measureItem} style={isDragging ? {border: "1px solid #42c76e"} : null}>{item.name}</div>
                      }
                    />
                  })}
                </div>
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default LowCode;