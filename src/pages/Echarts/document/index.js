/*
 * @Name: edit组件
 * @Description: Echarts编辑页面
 * @Author: biubiu
 * @Date: 2023-12-08
*/

import React from "react";
import styles from "./index.less";

const Document = () => {

  return(
    <div className={styles.document}>
      <iframe src={"https://echarts.apache.org/zh/option.html"}></iframe>
    </div>
  )
}
export default Document;