/*
 * @Name: 大屏编辑
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-05-06
*/

import styles from "./index.less";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import classNames from "classnames";
import {Scrollbars} from "react-custom-scrollbars";
import {Button, Input, Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import React, {useEffect, useState} from "react";
import DragContainer from "@/components/dragContainer";
import lackImg from "@/assets/image/图片缺失.png";

const ScreenEdit = (props) => {
  const {
    children = undefined,
    screenWidth = 1920,// 设计稿宽度
    screenHeight = 1080,// 设计稿高度
    backgroundColor = "#062352",// 背景色
  } = props;

  const dispatch = useDispatch();
  const { saveEditScreen } = useSelector(state => state.customScreen);

  const [modulesData, setModulesData] = useState([]);
  const [modulesLoading, setModulesLoading] = useState(true);

  // 保存编辑
  const saveEdit = () => {
    dispatch({
      type: 'customScreen/save',
      payload: {
        saveEditScreen: !saveEditScreen
      }
    });
  }

  useEffect(() => {
    getModulesData();
  },[])

  /* 获取组件数据 */
  const getModulesData = () => {
    setModulesLoading(true);

    dispatch({
      type: 'customScreen/fetchGetModuleList',
    }).then(res => {
      setModulesData(res);
      setModulesLoading(false);
    });
  }

  return(
    <DndProvider backend={HTML5Backend}>
      <div className={styles.screenEdit}>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={250 / 1920 * 100} minSize={100 / 1920 * 100}>
            <div className={styles.modulesPart}>
              <Input placeholder="输入筛选组件"/>
              <div className={styles.moduleList}>
                <Scrollbars>
                  <div className={styles.list}>
                    {modulesLoading ? <Spin/> :
                      modulesData.map((item, index) => {
                        return <DragContainer
                          type={item.type}
                          dragData={item}
                          childNode={(isDragging) =>
                            <div className={styles.moduleItem} style={isDragging ? {border: "2px solid #4b87ff"} : null}>
                              <img className={styles.img} src={item.img ?? lackImg}/>
                              <div className={styles.name}>{item.name}</div>
                            </div>
                          }
                        />
                      })
                    }
                  </div>
                </Scrollbars>
              </div>
            </div>
          </Panel>
          <PanelResizeHandle style={{ width: 1, background: "#ddd", cursor: "resize" }}/>
          <Panel defaultSize={1670 / 1920 * 100} minSize={500 / 1920 * 100}>
            <div className={styles.screenPart}>
              <div className={styles.operateHeader}>
                <Button size="small" className={styles.save} onClick={saveEdit} type="primary">保存</Button>
              </div>
              <div className={styles.screen}>
                <Scrollbars className={styles.scrollbars}>
                  <div className={styles.container} style={{backgroundColor: backgroundColor, width: screenWidth, height: screenHeight}}>
                    {children}
                  </div>
                </Scrollbars>
              </div>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </DndProvider>
  )
}
export default ScreenEdit;