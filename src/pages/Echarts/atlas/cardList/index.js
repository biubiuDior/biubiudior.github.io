/*
 * @Name: Echarts卡片列表
 * @Description: Echarts图展示卡片列表
 * @Author: biubiu
 * @Date: 2023-12-08
*/

import React from "react";
import styles from './index.less';

const CardList = (props) => {
  const {
    type = ""
  } = props;

  return(
    <div className={styles.cardList}>
      {type}
    </div>
  )
}
export default CardList;