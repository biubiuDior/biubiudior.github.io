/*
 * @Name: 模块容器
 * @Description: 可拖动改变顺序,变化大小及内容
 * @Author: biubiu
 * @Date: 2025-05-08
*/

import styles from "./index.less";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import React, {useRef, useState} from "react";
import classNames from "classnames";
import {CloseCircleOutlined, DragOutlined} from "@ant-design/icons";
import DropArea from "@/components/dropArea";
import MoveItem from "@/pages/lowCode/customScreen/components/ModuleContainer/move";

const ModuleContainer = (props) => {
  const {
    id = "",
    moduleData = [],
    direction = "horizontal",// 排序方向 vertical=竖直 | horizontal=水平
    containerSize = 500,
    minSize = 100,
    renderData = (data) => {},// 数据变更
  } = props;

  const [currentModule, setCurrentModule] = useState("");// 当前编辑模块

  // 模块数据变动
  const onModuleChange = (type, data = {}) => {
    let moduleList = [...moduleData];
    const {
      updateData = {},
      moduleInfo = {},
      index = undefined,
      preIndex = undefined,
    } = data;

    switch (type) {
      case "delete":
        moduleList = moduleList.filter((item, index) => item.layoutPos !== currentModule);
        break;

      case "update":
        moduleInfo.id = updateData.dragId;
        moduleList.splice(index, 1, moduleInfo);
        break;

      case "move":
        const [removed] = moduleList.splice(preIndex, 1);
        moduleList.splice(index, 0, removed);
        break;
    }

    renderData(moduleList)
  };

  // 移动交换模块
  const moveChange = (preIndex, nextIndex) => {
    onModuleChange("move", {index: nextIndex, preIndex: preIndex});
  }

  return(
    <div className="moduleContainer">
      <PanelGroup direction={direction}>
        {moduleData.map((item,index) => {
          return <>
            {index !== 0 && <PanelResizeHandle className="panelResizeHandle"><span>↓</span><span>↑</span></PanelResizeHandle>}
            <Panel defaultSize={item.size / containerSize * 100} minSize={minSize / containerSize * 100}>
              <MoveItem
                type={id}
                dragData={{id: item.id, index}}
                dragNode={currentModule === item.layoutPos ? <div className="move"><DragOutlined /></div> : <div/>}
                moveItem={moveChange}
              >
                <div id={item.layoutPos} className={currentModule === item.layoutPos ? classNames("activeModule","module") : "module"} onClick={() => setCurrentModule(item.layoutPos)}>
                  {currentModule === item.layoutPos && <>
                    <div className="delete" onClick={() => onModuleChange("delete")}>
                      <CloseCircleOutlined />
                    </div>
                  </>}
                  <DropArea
                    type="module"
                    mode="replace"
                    getDropData={data => onModuleChange("update",{updateData:data,moduleInfo:item,index})}
                    renderNode={(canDrop, maxItems, nodeList, setNodeList) => {
                      return <div className="moduleItem">
                        {item.id}
                      </div>
                    }}
                  />
                </div>
              </MoveItem>
            </Panel>
          </>
        })}
      </PanelGroup>
    </div>
  )
}
export default ModuleContainer;