/*
 * @Name: 定制大屏
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-04-25
*/

import styles from "./index.less";
import {useEffect, useState} from "react";
import {Spin} from "antd";
import {Scrollbars} from "react-custom-scrollbars";
import ScalePage from "@/components/ScalePage";
import { history } from "umi";
import ScreenHeader from "@/pages/lowCode/customScreen/components/screenHeader";
import {useDispatch} from "react-redux";
import {FormOutlined} from "@ant-design/icons";

const CustomScreen = (props) => {
  const dispatch = useDispatch();

  const [screenLoading, setScreenLoading] = useState(true);
  const [screenData, setScreenData] = useState([]);

  useEffect(() => {
    getScreenData();
  },[])

  // 获取大屏列表信息
  const getScreenData = () => {
    setScreenLoading(true);
    dispatch({
      type: "customScreen/fetchGetScreenCenterData",
    }).then(res => {
      setScreenData(res);
      setScreenLoading(false);
    });
  }

  // 点击跳转
  const screenClick = (value,mode) => {
    history.push("/customScreen/screen",{...value,mode})
  }

  return(
    <ScalePage>
      <div className={styles.customScreen}>
        <div className={styles.screenHeader}>
          <ScreenHeader title={"大屏导航"}/>
        </div>
        <div className={styles.leftImg}/>
        <div className={styles.rightImg}/>
        <div className={styles.selectBox}>
          筛选过滤区
        </div>
        <div className={styles.screenContainer}>
          {screenLoading ? <Spin/> : <>
            <Scrollbars className={styles.scrollbars}>
              <div className={styles.cardList}>
                {screenData.map((item,index) => {
                  return <div className={styles.card} onClick={() => screenClick(item,"read")}>
                    <div className={styles.edit}>
                      <FormOutlined onClick={event => {event.stopPropagation(); screenClick(item,"edit")}}/>
                    </div>
                    <div className={styles.borderImg}/>
                    <div className={styles.name}>{item.name}</div>
                    <img className={styles.screenBg} src={item.bgImg}/>
                  </div>
                })}
              </div>
            </Scrollbars>
          </>}
        </div>
      </div>
    </ScalePage>
  )
}
export default CustomScreen;