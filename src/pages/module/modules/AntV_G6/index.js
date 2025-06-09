/*
 * @Name: AntV_G6
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-05-20
*/

import styles from "./index.less";
import {useEffect, useRef, useState} from "react";
import {Spin} from "antd";
import {ConcentricLayout, ExtensionCategory, Graph, register} from '@antv/g6';
import { ReactNode } from '@antv/g6-extension-react';
import {useDispatch} from "react-redux";
import CustomizeNode from "@/pages/module/modules/AntV_G6/CustomizeNode";
import {InfoCircleOutlined} from "@ant-design/icons";

// 注册react节点
register(ExtensionCategory.NODE, 'react', ReactNode);

const AntV_G6 = (props) => {
  const dispatch = useDispatch();

  const treeRef = useRef(null);
  const graphRef = useRef(null);
  const [treeLoading, setTreeLoading] = useState(true);
  const [treeData, setTreeData] = useState({});

  useEffect(() => {
    getTreeData();
  }, []);
  // 获取树数据
  const getTreeData = () => {
    setTreeLoading(true);

    dispatch({
      type: "AntV_G6/fetchGetTreeData",
    }).then(res => {
      setTreeData(res);
      setTreeLoading(false);
    });
  }

  // 渲染树图
  useEffect(() => {
    if (!treeRef.current) return;

    // 销毁旧实例
    if (graphRef.current) {
      graphRef.current.destroy();
    }

    // 获取画布信息
    const containerWidth = treeRef.current.clientWidth;
    const containerHeight = treeRef.current.clientHeight;

    // 渲染树图画布
    const graph = new Graph({
      container: treeRef.current,
      autoFit: 'view',
      padding: 50,
      width: containerWidth,
      height: containerHeight,
      data: treeData,
      node: {
        type: 'react',
        style: {
          size: data => {
            if (data.data.level < 2) {
              return 48
            }else {
              return 18
            }
          },
          component: (data) =>
            <CustomizeNode
              graph={graph}
              nodeId={data.id}
              nodeStates={data.states}
              nodeData = {data.data}
            />,
        },
      },
      edge: {
        type: "line",
        style: {
          lineWidth: 1,
          stroke: '#CADDFC'
        },
        state: {
          highlight: {
            lineWidth: 3,
            stroke: (d) => {
              const targetData = graph.getNodeData(d.target);
              return targetData.data.color
            },
          },
        },
      },
      layout: {
        type: 'compact-box',
        radial: true,
        direction: 'RL',
        getVGap: (data) => {
          return 30
        },
        getHGap: (data) => {
          if (data.data.level === 1) {
            return 80
          }
          return 50
        },
      },
      behaviors: [
        'zoom-canvas',
        'drag-canvas',
        {
          key: 'drag-element',
          type: 'drag-element',
          state: 'dragActive',
          enable: event => {
            const targetData = graph.getNodeData(event.target?.id);
            return targetData.data.level > 0
          },
        },
        {
          key: 'hover-activate',
          type: 'hover-activate',
          degree: 5,
          direction: 'in',
          state: 'highlight',
          enable: (e) => {
            if (e.targetType === 'node') {
              return true;
            }
            return false;
          },
          // onHover: (event) => {
          //   event.view.setCursor('pointer');
          // },
          // onHoverEnd: (event) => {
          //   event.view.setCursor('default');
          // },
        },
      ],
      plugins: [
        {
          type: 'toolbar',
          position: 'top-left',
          onClick: (value) => {
            switch (value) {
              case 'zoom-in':
                graph.zoomBy(1.2, {duration: 300,});
                break;
              case 'zoom-out':
                graph.zoomBy(0.8, {duration: 300,});
                break;
              case 'auto-fit':
                graph.fitView();
                break;
            }
          },
          getItems: () => {
            return [
              { id: 'zoom-in', value: 'zoom-in' },// 放大
              { id: 'zoom-out', value: 'zoom-out' },// 缩小
              { id: 'auto-fit', value: 'auto-fit' },// 自适应画布
            ];
          },
        },
      ],
      animation: false,
    });

    graphRef.current = graph;

    graph.render();
  },[treeData])

  return (
    <div className={styles.g6}>
      <div className={styles.tips}>
        <div className={styles.icon}>
          <InfoCircleOutlined />
        </div>
        双击可收起/展开节点
      </div>
      {treeLoading ? <Spin/> : <>
        <div className={styles.treeMap} ref={treeRef}/>
      </>}
    </div>
  )
}
export default AntV_G6;