/*
 * @Name: 固定布局1
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-04-28
*/

import styles from "./index.less";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import classNames from "classnames";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import {useSelector} from "react-redux";
import {CloseCircleOutlined} from "@ant-design/icons";
import DropArea from "@/pages/lowCode/dataReport/dropArea";
import ModuleContainer from "@/pages/lowCode/customScreen/components/ModuleContainer";

const FixedLayout1_edit = (props) => {
  const {
    screenId = "",
    modules = {},// 模块信息
  } = props;

  const { saveEditScreen } = useSelector(state => state.customScreen);
  const [currentModule, setCurrentModule] = useState("");// 当前编辑模块
  const [leftModuleList, setLeftModuleList] = useState(modules['leftContainer']);

  /* 保存 */
  const [saveState, setSaveState] = useState(false);
  useEffect(() => {
    if(saveState) {// 判断是否初次加载
      const saveData = {

      };

      console.log(saveData)
    }else {
      setSaveState(true)
    }
  },[saveEditScreen]);

  return (
    <div className={styles.fixedLayout1_edit}>
      <div className={styles.header}></div>
      <div className={styles.leftContainer}>
        <ModuleContainer
          id={"leftContainer"}
          moduleData={leftModuleList}
          direction={"vertical"}
          containerSize={940}
          renderData={data => setLeftModuleList(data)}
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.module4}></div>
        <div className={styles.module5}></div>
        <div className={styles.module6}></div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.module7}></div>
        <div className={styles.module8}></div>
      </div>
      <div className={styles.centerContainer}>
        <div className={styles.module9}>
        </div>
      </div>
    </div>
  )
}
export default FixedLayout1_edit;