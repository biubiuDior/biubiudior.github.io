/*
 * @Name: 固定布局1
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-04-28
*/

import styles from "./index.less";
import {useEffect, useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import ResizableBox from "@/pages/lowCode/customScreen/components/ResizableBox";
import classNames from "classnames";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";


const FixedLayout1 = (props) => {
  const {
    mode = "edit",// 模式 read=阅读模式 | edit=编辑模式
    screenId = "",// 大屏Id
    modules = [],// 模块信息
  } = props;

  const [moduleLoading, setModuleLoading] = useState(true);
  const [moduleData, setModuleData] = useState({});

  useEffect(() => {
    // 转换module数据
    const moduleList = {}
    modules.map((item, index) => {
      moduleList[item.layoutPos] = item
    });

    setModuleData(moduleList);
    setModuleLoading(false);
  }, []);


  return (
    <div className={styles.fixedLayout1}>
      <div className={styles.header}></div>
      <div className={styles.leftContainer}>
        <PanelGroup direction="vertical">
          <Panel defaultSize={60} minSize={20}>
            <div className={classNames(styles.module1, styles.module)}></div>
          </Panel>
          {/*<PanelResizeHandle style={{ height: 10, background: "#ddd", cursor: "row-resize" }}/>*/}
          <Panel>
            <div className={classNames(styles.module2, styles.module)}></div>
          </Panel>
          {/*<PanelResizeHandle style={{ height: 10, background: "#ddd", cursor: "row-resize" }}/>*/}
          <Panel>
            <div className={classNames(styles.module3, styles.module)}></div>
          </Panel>
        </PanelGroup>
        {/*<ResizableBox
          orient={"column"}
          mode={mode}
          loading={moduleLoading}
          minHeight={100}
          sizeData={[
            { width: moduleData["1"]?.width, height: moduleData["1"]?.height },
            { width: moduleData["2"]?.width, height: moduleData["2"]?.height },
            { width: moduleData["3"]?.width, height: moduleData["3"]?.height }
          ]}
        >
          <div className={classNames(styles.module1, styles.module)}></div>
          <div className={classNames(styles.module2, styles.module)}></div>
          <div className={classNames(styles.module3, styles.module)}></div>
        </ResizableBox>*/}
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
        <div className={styles.module9}></div>
      </div>
    </div>
  )
}
export default FixedLayout1;