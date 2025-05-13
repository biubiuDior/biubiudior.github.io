/*
 * @Name: 固定布局1
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-04-28
*/

import styles from "./index.less";
import {useEffect, useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import classNames from "classnames";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import {Spin} from "antd";


const FixedLayout1 = (props) => {
  const {
    screenId = "",// 大屏Id
    modules = {},// 模块信息
  } = props;



  useEffect(() => {
    // 转换module数据
    // const moduleList = {}
    // modules.map((item, index) => {
    //   moduleList[item.layoutPos] = item
    // });
  }, []);

  return (
    <div className={styles.fixedLayout1}>
      <div className={styles.header}></div>
      <div className={styles.leftContainer}>
        {modules['leftContainer'].map((item,index) => {
          return <div id={item.layoutPos} className={styles.module} style={{height: item.size}}></div>
        })}
      </div>
      <div className={styles.rightContainer}>
        <div className={classNames(styles.module4, styles.module)}></div>
        <div className={classNames(styles.module5, styles.module)}></div>
        <div className={classNames(styles.module6, styles.module)}></div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={classNames(styles.module7, styles.module)}></div>
        <div className={classNames(styles.module8, styles.module)}></div>
      </div>
      <div className={styles.centerContainer}>
        <div className={classNames(styles.module9, styles.module)}></div>
      </div>
    </div>
  )
}
export default FixedLayout1;