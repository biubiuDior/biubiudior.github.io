/*
 * @Name: Atlas组件
 * @Description: Echarts图集
 * @Author: biubiu
 * @Date: 2023-12-08
*/

import React, {useEffect, useState} from "react";
import styles from "./index.less";
import BIcon from "@/components/BIcon";
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'umi';
import CardList from "@/pages/Echarts/atlas/cardList";

const Atlas = () => {
  const dispatch = useDispatch();
  const { atlasTypeList } = useSelector(state => state.echartsAtlas);
  const [tabActiveKey, setTabActiveKey] = useState("");// 当前标签页

  useEffect(()=>{
    fetchTest();
  },[])

  // 获取图集类型
  const fetchTest = () => {
    dispatch({
      type: 'echartsAtlas/fetchGetAtlasType'
    }).then(res => {
      setTabActiveKey(res[0].name)
    })
  }
  //获取当前图集类型卡片List
  const getTypeCard = () => {

  }

  return(
    <div className={styles.atlas}>
      <Tabs
        type="card"
        size="small"
        activeKey={tabActiveKey}
        onChange={tab => setTabActiveKey(tab)}
        items={atlasTypeList.map((item, index) => {
          return {
            label: <div><BIcon type={item.icon}/>{item.name}</div>,
            key: item.name,
            children: <CardList type={tabActiveKey}/>,
          };
        })}
      />
    </div>
  )
}
export default Atlas;