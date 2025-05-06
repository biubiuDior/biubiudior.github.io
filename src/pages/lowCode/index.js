/*
 * @Name: 低代码开发
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-04-25
*/

import styles from "./index.less";
import dataReportPage from "@/assets/image/lowCode/dataReportPage.png"

const LowCode = (props) => {

  const typeData = [
    {name: "数据报表", url: "/dataReport", img: dataReportPage},
    {name: "定制大屏", url: "/customScreen", img: ""},
  ]

  // 卡片点击
  const cardClick = (data) => {
    window.open(data.url)
  }

  return(
    <div className={styles.lowCode}>
      {typeData.map((item,index) => {
        return <div key={index} className={styles.card} onClick={() => cardClick(item)}>
          <img src={item.img}/>
          <div className={styles.name}>{item.name}</div>
        </div>
      })}
    </div>
  )
}
export default LowCode;