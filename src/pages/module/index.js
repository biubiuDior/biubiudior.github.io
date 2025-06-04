/*
 * @Name: 组件库
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-05-20
*/

import styles from "./index.less";
import antvG6 from "@/assets/image/module/antvG6.png";
import {history} from "@/.umi/core/history";

const Module = (props) => {

  const data = [
    {name: "AntV_G6", img: antvG6, url: "/module/G6"},
  ];

  // 卡片点击
  const cardClick = (data) => {
    // window.open(data.url)
    history.push(data.url)
  }

  return(
    <div className={styles.modulePage}>
      {data.map((item,index) => {
        return <div key={index} className={styles.card} onClick={() => cardClick(item)}>
          <img src={item.img}/>
          <div className={styles.name}>{item.name}</div>
        </div>
      })}
    </div>
  )
}
export default Module;