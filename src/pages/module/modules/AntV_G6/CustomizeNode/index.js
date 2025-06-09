/*
 * @Name: 定制节点
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-05-26
*/

import styles from "./index.less";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {NodeEvent} from "@antv/g6";
import useThrottle from "@/components/useThrottle";

const CustomizeNode = (props) => {
  const {
    graph = undefined,
    nodeId = "",
    nodeStates = [],
    nodeData = {},
  } = props;

  const [hoverState, setHoverState] = useState(false);// 悬浮状态

  /*节点悬浮*/
  useEffect(() => {
    setHoverState(nodeStates?.includes('highlight'))
  }, [nodeStates?.includes('highlight')]);

  /*监听节点交互事件*/
  // 节点单点
  const click = (event) => {
    event.preventDefault();

    const targetData = graph.getNodeData(event.target?.id);
  }
  // 节点双击
  const nodeDoubleClick = (event) => {
    event.preventDefault();

    const collapsedState = graph.getNodeData(nodeId)?.style?.collapsed;
    graph.updateNodeData([
      {
        id: nodeId,
        style: { collapsed: !collapsedState },
      },
    ]);
    graph.draw();
  }
  // 鼠标悬浮
  const pointerEnter = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const targetData = graph.getNodeData(nodeId);

    if (targetData.data.level === 1) {
      const children = graph.getDescendantsData(nodeId);

      // 设置拖拽状态
      graph.setElementState(nodeId, 'dragActive');
      children.map((childNode) => {
        graph.setElementState(childNode.id, 'dragActive');
      })
    }else if (targetData.data.level > 1) {
      const children = graph.getDescendantsData(targetData.data.parent);

      // 设置拖拽状态
      graph.setElementState(targetData.data.parent, 'dragActive');
      children.map((childNode) => {
        graph.setElementState(childNode.id, 'dragActive');
      })
    }

    setHoverState(true);
  };
  // 鼠标离开
  const pointerLeave = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const targetData = graph.getNodeData(nodeId);

    if (targetData.data.level === 1) {
      const children = graph.getDescendantsData(nodeId);

      // 设置拖拽状态
      graph.setElementState(nodeId, '');
      children.map((childNode) => {
        graph.setElementState(childNode.id, '');
      })
    }else if (targetData.data.level > 1) {
      const children = graph.getDescendantsData(targetData.data.parent);

      // 设置拖拽状态
      graph.setElementState(targetData.data.parent, '');
      children.map((childNode) => {
        graph.setElementState(childNode.id, '');
      })
    }

    setHoverState(false);
  }

  // 渲染节点
  const renderNode = () => {
    switch (nodeData.level) {
      case 0:
        return <div className={styles.centerIcon}>
        </div>
      break;

      case 1:
        return <div
          onDoubleClick={nodeDoubleClick}
          className={styles.parentIcon}
          style={hoverState ? {background: `radial-gradient(50% 50% at 50% 50%, ${nodeData.color}, ${nodeData.color}00), ${nodeData.color}`,boxShadow: `0px 20px 38px ${nodeData.color}3D, 0px 1px 5px rgba(255, 255, 255, 0.58) inset, 0px -10px 24px ${nodeData.color}5E inset, 5px 8px 10px ${nodeData.color}F2 inset`} : { }}
        >
          <div className={styles.icon} style={hoverState ? {border: "none"} : {borderColor: `${nodeData.color}`}}>
            {nodeData?.icon && <img src={nodeData?.icon} className={hoverState ? styles.img_hover : styles.img} style={hoverState ? {} : {filter: `drop-shadow(${nodeData.color} 0 200px)`}}/>}
          </div>
          <div className={styles.label} data-type={nodeData.level}>{nodeData?.name}</div>
        </div>
      break;

      default:
        return <div className={styles.childIcon} style={{backgroundColor: `${nodeData.color}`, boxShadow: `0px 5.48px 5.48px 0px ${nodeData.color}4A`}}>
          <div className={styles.bg} style={{backgroundColor: `${nodeData.color}42`}}/>
          <div className={styles.label} data-type={nodeData.level}>{nodeData?.name}</div>
        </div>
    }
  }

  return(
    <div
      className={styles.CustomizeNode}
      onMouseEnter={pointerEnter}
      onMouseLeave={pointerLeave}
    >
      {renderNode()}
    </div>
  )
}
export default CustomizeNode;