/*
 * @Name: 缩放页面
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-04-27
*/

import styles from "./index.less";
import React, {useEffect, useState} from "react";
import { Outlet } from 'umi';
import {useDispatch} from "react-redux";

const ScalePage = (props) => {
  const {
    children = undefined,
    screenWidth = 1920,// 设计稿宽度
    screenHeight = 1080,// 设计稿高度
    backgroundColor = "#062352",// 背景色
  } = props;
  const dispatch = useDispatch();

  /* 大屏自适应 */
  useEffect(() => {
    // 大屏自适应
    screenAdapt();
    window.onresize = () => screenAdapt();
    // 退出大屏后自适应消失
    return () => (window.onresize = null);
  }, []);
  // 当前缩放比例
  const [scale, setScale] = useState(1);
  // 改变缩放
  const screenAdapt = () => {
    // 获取可视化窗口宽高与屏幕大小宽高比
    const wScale = window.innerWidth / screenWidth;
    const hScale = window.innerHeight / screenHeight;
    const currentScale = wScale > hScale ? hScale : wScale
    setScale(currentScale);
    dispatch({
      type: 'global/save',
      payload: {
        screenScale: currentScale
      }
    });
  }

  return(
    <div className={styles.scalePage} style={{backgroundColor: backgroundColor}}>
      <div className={styles.scaleContainer} style={{
        transform: `scale(${scale}) translate(-50%, -50%)`,
        width: screenWidth,
        height: screenHeight
      }}>
        {children}
      </div>
    </div>
  )
}
export default ScalePage;