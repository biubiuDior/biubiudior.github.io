/*
 * @Name: 低代码平台
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-03-04
*/

import React, {useState, useRef, useEffect, useMemo} from 'react';
import styles from "./index.less";
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import DragContainer from "@/pages/lowCode/dragContainer";
import DropArea from "@/pages/lowCode/dropArea";
import GridLayout from "@/pages/lowCode/gridLayout";
import {Button, message, Spin, Tooltip} from "antd";
import {Scrollbars} from "react-custom-scrollbars";
import {debounce} from "lodash";
import {AppstoreAddOutlined, BarChartOutlined, LayoutOutlined} from "@ant-design/icons";

// 主应用组件
const LowCode = () => {
  // 面板
  const [panelData, setPanelData] = useState([]);
  const [panelLoading, setPanelLoading] = useState(true);
  const [currentGridItem, setCurrentGridItem] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  // 维度
  const [dimensionData, setDimensionData] = useState([]);
  // 度量
  const [measureData, setMeasureData] = useState([]);
  // 设置
  const [settingData, setSettingData] = useState({});

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

    setTimeout(() => {
      setPanelData(data);
      setPanelLoading(false)
    }, 1500)
  }

  // 获取设置区变化数据
  const updateDropData = (data, type) => {
    const newData = settingData;
    newData[type] = data;
    setSettingData(newData);
  }

  // 点击预览
  const previewClick = () => {
    // 传参

    // 跳转
    window.open("/preview", '_blank');
  }

  // 自动排序布局
  const autoLayout = (newLayout) => {
    // 当前行高
    let currentH = 0;
    // 边界检查
    const validatedLayout = newLayout.map((item, index) => {
      let new_y = item.y;
      let new_x = item.x;
      if (index === 0) {
        currentH = item.h;
      }
      if (index > 0) {
        // 行对齐
        if (item.w + newLayout[index - 1].x + newLayout[index - 1].w < 25) {
          new_x = newLayout[index - 1].w + newLayout[index - 1].x;
        }else if (item.w < newLayout[index - 1].w + 1) {
          // 列对齐
          if(item.h < currentH) {
            new_x = newLayout[index - 1].x;
            currentH -= item.h;
          }else {
            currentH = item.h
          }
        }
      }

      return {
        ...item,
        x: new_x,
        y: new_y,
        node: panelData.filter(panelItem => panelItem.i === item.i)[0].node,
      }
    });

    return validatedLayout;
  }
  // 画板改变
  const onPanelChange = (newLayout) => {
    const layoutData = newLayout.map((item,index) => {
      return {
        ...item,
        node: panelData.filter(panelItem => panelItem.i === item.i)[0].node,
      }
    })

    setPanelData(layoutData)
  }
  // 面板容器变化时
  const gridItemChange = useMemo((id) => {

  }, [currentGridItem]);
  // 画板添加容器
  const panelAddContainer = () => {
    const layoutData = [...panelData];
    // 修改当前选中
    setCurrentGridItem(`panelItem-${panelData.length}`);
    // 添加新容器
    layoutData.push({
      i: `panelItem-${panelData.length}`,
      x: 0,
      y: panelData.length > 0 ? panelData[panelData.length - 1].h + panelData[panelData.length - 1].y : 0,
      w: 24,
      h: 10.75,
      node: <div id={`panelItem-${panelData.length}`} className="gridItem">

      </div>
    });
    setPanelData(layoutData)
  }
  // 点击排序布局
  const layoutClick = () => {
    setPanelData(autoLayout(panelData));
    messageApi.info('已排序布局');
  }

  return (
    <DndProvider backend={HTML5Backend}>
      {contextHolder}
      <div className={styles.lowCode}>
        {/* 顶部 */}
        <div className={styles.header}>
          <Button onClick={previewClick} type="primary" ghost>预览</Button>
        </div>
        {/* 报表区 */}
        <div className={styles.report}>
          {/* 面板 */}
          <div className={styles.panel}>
            <div className={styles.operate}>
              <div onClick={debounce(panelAddContainer, 100)}>
                <BarChartOutlined /> 添加图表
              </div>
              <div onClick={layoutClick}>
                <Tooltip title="排序布局">
                  <LayoutOutlined />
                </Tooltip>
              </div>
            </div>
            <Spin spinning={panelLoading}>
              <Scrollbars>
                <GridLayout
                  layoutData={panelData}
                  onLayoutChange={onPanelChange}
                  gridItemClick={id => setCurrentGridItem(id)}
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
            <Scrollbars>
              <div className={styles.dimension}>
                <div>维度</div>
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
              </div>
              <div className={styles.measure}>
                <div>度量</div>
                <div className={styles.list}>
                  {measureData.map((item, index) => {
                    return <DragContainer
                      type={item.type}
                      dragData={item}
                      childNode={(isDragging) =>
                        <div className={styles.measureItem}
                             style={isDragging ? {border: "1px solid #42c76e"} : null}>{item.name}</div>
                      }
                    />
                  })}
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default LowCode;