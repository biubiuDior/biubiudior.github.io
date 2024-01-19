/*
 * @Name: 碎片模块
 * @Description: 碎片模块
 * @Author: biubiu
 * @Date: 2023-12-06
*/

import React from "react";
import styles from "./index.less";
import { Carousel } from "antd";

const Fragment = () => {

  return(
    <div className={styles.fragment}>
      <div className={styles.row1}>
        <div className={styles.carouselCard}>
          <Carousel autoplay autoplaySpeed={8000}>
            {['1','2','3'].map((item,index) => {
              return(
                <div className={styles.carouselItem}>
                  {item}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className={styles.list}>
          组件
        </div>
        <div className={styles.element}>
          js方法/css样式
        </div>
      </div>
    </div>
  )
}
export default Fragment;