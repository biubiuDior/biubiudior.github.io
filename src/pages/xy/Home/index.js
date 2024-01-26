/*
 * @Name: 首页
 * @Description: 首页
 * @Author: biubiu
 * @Date: 2024-01-19
*/
import React, {useEffect} from "react";
import styles from "./index.less";
import { history } from "umi";

/* 静态资源 */
import lucky from "@/assets/image/lucky头像.png"

const HomePage = (props) => {

  useEffect(() => {
    console.log("测试输出")
  },[])

  return(
    <div className={styles.homePage}>
      首页cs2
      <div
        className={styles.card}
        onClick={() => {
          history.push({
            pathname: "https://www.baidu.com",
            params: {a: "5555"}
          })
        }}
      >
        测试卡片
      </div>
    </div>
  )
}

export default HomePage;