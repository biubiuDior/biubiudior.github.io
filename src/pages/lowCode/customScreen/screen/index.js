/*
 * @Name: 大屏
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2025-04-27
*/

import styles from "./index.less";
import ScalePage from "@/components/ScalePage";
import {useEffect, useState} from "react";
import { useLocation } from 'umi';
import {history} from "@/.umi/core/history";
import {useDispatch} from "react-redux";
import ScreenLayouts from "@/pages/lowCode/customScreen/screen/layouts";
import {Spin} from "antd";

const Screen = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [screenData, setScreenData] = useState({});
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    if (!location.state) history.push("/customScreen/home");

    const { screenId } = location.state;

    getScreenData(screenId)
  },[]);

  // 获取数据
  const getScreenData = (id) => {
    setScreenLoading(true);

    dispatch({
      type: "customScreen/fetchGetScreenData",
      payload: {
        id: id,
      }
    }).then(res => {
      setScreenData(res);
      setScreenLoading(false)
    });
  }

  return(
    <ScalePage>
      <div className={styles.screen}>
        {screenLoading ? <Spin size="large"/> :
          <ScreenLayouts {...screenData}/>
        }
      </div>
    </ScalePage>
  )
}
export default Screen;