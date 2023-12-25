/*
 * @Name: 模块名称
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-06
*/

import React from "react";
import styles from "./index.less";
import { Carousel } from "antd";

const Home = () => {

  return(
    <div className={styles.home}>
      <div className={styles.carouselHead}>
        <Carousel autoplay autoplaySpeed={5000}>
          {['1','2','3'].map((item,index) => {
            return(
              <div className={styles.carouselCard}>
                {item}
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}
export default Home;