/*
 * @Name: Atlas组件
 * @Description: Echarts图集
 * @Author: biubiu
 * @Date: 2023-12-08
*/

import React, {useEffect, useState} from "react";
import styles from "./index.less";
import BiuIcon from "@/components/BiuIcon";
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'umi';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import CardList from "@/pages/Echarts/atlas/cardList";
import CodeShow from "@/pages/Echarts/atlas/codeShow";

const Atlas = () => {
  const dispatch = useDispatch();
  const { atlasTypeList, codePage } = useSelector(state => state.EchartsAtlas);
  const [tabActiveKey, setTabActiveKey] = useState("");// 当前标签页

  useEffect(()=>{
    fetchGetAtlasType();
  },[])

  // 获取图集类型
  const fetchGetAtlasType = () => {
    dispatch({
      type: 'EchartsAtlas/fetchGetAtlasType'
    }).then(res => {
      setTabActiveKey(res[0].name);
    })
  }

  return(
    <div className={styles.atlas}>
      <Tabs
        type="card"
        size="small"
        destroyInactiveTabPane={true}
        activeKey={tabActiveKey}
        onChange={tab => setTabActiveKey(tab)}
        animated={true}
        items={atlasTypeList.map((item, index) => {
          return {
            label: <div><BiuIcon type={item.icon}/>{item.name}</div>,
            key: item.name,
            children: <CardList type={item['type']}/>,
          };
        })}
      />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={codePage}
          classNames="codeShow"
          timeout={500}
          appear={true}
        >
          <>
            {codePage && <CodeShow />}
          </>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}
export default Atlas;