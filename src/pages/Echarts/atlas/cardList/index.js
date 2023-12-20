/*
 * @Name: Echarts卡片列表
 * @Description: Echarts图展示卡片列表
 * @Author: biubiu
 * @Date: 2023-12-08
*/

import React, {useEffect, useState} from "react";
import styles from './index.less';
import { Card, List } from 'antd';
import BiuEcharts from "@/components/BiuEcharts";
import { useDispatch, useSelector } from 'umi';
import moment from 'moment'
import {unicodeToChinese} from "@/utils/utils";

const CardList = (props) => {
  const {
    type = ""
  } = props;
  const dispatch = useDispatch();
  const { codeList } = useSelector(state => state.EchartsAtlas);

  useEffect(() => {
    // 获取数据
    fetchGetCodeList();
  },[]);

  // 获取tab对应Echarts代码列表
  const fetchGetCodeList = () => {
    dispatch({
      type: 'EchartsAtlas/fetchGetCodeList',
      payload: {type},
    })
  }
  // 改变共享状态
  const setShareData = (params,type) => {
    dispatch({
      type: `${type}/save`,
      payload: params
    });
  }

  return(
    <div className={styles.cardList}>
      <List
        grid={{ gutter: [24,0], column: 4 }}
        pagination={codeList.length > 0 && {
          defaultCurrent:1,
          total:codeList.length,
          pageSize: 12
        }}
        dataSource={codeList}
        renderItem={(item,index) => (
          <List.Item>
            <div className={styles.card} onClick={() => setShareData({codePage: true, currentCode: item},"EchartsAtlas")}>
              <div className={styles.echarts}>
                <BiuEcharts optionCode={eval(unicodeToChinese(item['code']))()}/>
              </div>
              <div className={styles.infoBox}>
                <div className={styles.content}>
                  <div className={styles.flexRow}>
                    <div className={styles.text}>图表名：<span>{item.name}</span></div>
                    <div className={styles.text}>类型：<span>{item.type}</span></div>
                  </div>
                  <div className={styles.flexRow}>
                    <div className={styles.text}>作者：<span>{item.author}</span></div>
                    <div className={styles.text}>更新日期：<span>{moment(item.date).format('YYYY.MM.DD')}</span></div>
                  </div>
                  <div className={styles.text}>备注：<span>{item.remark}</span></div>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}
export default CardList;