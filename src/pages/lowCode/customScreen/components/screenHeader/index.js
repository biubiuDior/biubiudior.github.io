/*
 * @Name: 大屏标题
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-04-27
*/

import styles from "./index.less";

const ScreenHeader = (props) => {
  const {
    title = ""
  } = props;

  return(
    <div className={styles.screenHeader}>
      <div className={styles.title}>
        <div className={styles.text}>
          {title}
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}
export default ScreenHeader;