/*
 * @Name: 空白页
 * @Description: 装载子路由
 * @Author: biubiu
 * @Date: 2024-02-02
*/

import React from "react";
import styles from "./index.less";
import {Outlet} from "umi";

const BlankLayout = (props) => {

  return(
    <div className={styles.blankLayout}>
      <Outlet />
    </div>
  )
}
export default BlankLayout;