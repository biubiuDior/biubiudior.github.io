/*
 * @Name: Echarts卡片列表
 * @Description: Echarts图展示卡片列表
 * @Author: biubiu
 * @Date: 2023-12-08
*/

import React, {useEffect, useState} from "react";
import styles from './index.less';
import { List, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import BiuEcharts from "@/components/BiuEcharts";
import { useDispatch, useSelector } from 'umi';
import moment from 'moment'

const CardList = (props) => {
  const {
    type = ""
  } = props;
  const dispatch = useDispatch();
  const { codeList } = useSelector(state => state.EchartsAtlas);
  const [loading, setLoading] = useState(true);// 卡片加载
  const [page, setPage] = useState(1);// 页码
  const [total, setTotal] = useState(0);// 总数

  useEffect(() => {
    // 获取数据
    fetchGetCodeList(page);
  },[]);

  // 获取tab对应Echarts代码列表
  const fetchGetCodeList = (currentPage) => {
    setLoading(true)
    dispatch({
      type: 'EchartsAtlas/fetchGetCodeList',
      payload: {
        type,
        page: currentPage
      },
    }).then(res => {
      setPage(currentPage);
      setTotal(res);
      setTimeout(() => {
        setLoading(false)
      },50)
    })
  }
  // 改变共享状态
  const setShareData = (params,type) => {
    dispatch({
      type: `${type}/save`,
      payload: params
    });
  }
  // 页码切换
  const pageChange = (page, pageSize) => {
    fetchGetCodeList(page)
  }

  return(
    <div className={styles.cardList}>
      <List
        grid={{ gutter: [8,0], column: 4 }}
        pagination={codeList.length > 0 && {
          current:page,
          total:total,
          pageSize: 12,
          showTotal: total => `图表总数：${total}`,
          onChange: pageChange
        }}
        dataSource={codeList}
        renderItem={(item,index) => (
          <List.Item>
            <div className={styles.card} onClick={() => setShareData({codePage: true, currentCode: item},"EchartsAtlas")}>
              <div className={styles.echarts}>
                <Spin tip="加载中" spinning={loading}>
                  <BiuEcharts key={item['id']} code={item['code']} renderer={item['renderer'] || 'svg'} id={item['id']}/>
                </Spin>
                {/*{loading ? <Spin tip="加载中"/> : <BiuEcharts code={item['code']} renderer={item['renderer'] || 'svg'} id={item['id']}/>}*/}
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