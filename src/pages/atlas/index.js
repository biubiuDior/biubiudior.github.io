/*
 * @Name: Chart图集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-15
*/

import styles from "./index.less";
import {useLocation} from "@/.umi/exports";
import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {Pagination, Tooltip} from "antd";
import noImg from "@/assets/image/atlas/暂无图片.png";
import editIcon from "@/assets/image/atlas/编辑.png";
import copyIcon from "@/assets/image/atlas/复制.png";
import downLoadIcon from "@/assets/image/atlas/下载.png";

const Atlas = (props) => {
  const dispatch = useDispatch();
  const location  = useLocation();
  const [chartType, setChartType] = useState(location.pathname.split("/")[2]);
  const [chartData, setChartData] = useState([]);
  const [chartTotal, setChartTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    fetchGetChartData(currentPage,pageSize);
  },[]);

  // 获取chart数据
  const fetchGetChartData = (page,size) => {
    dispatch({
      type: "atlas/fetchGetChartData",
      payload: {
        type: chartType,
        page: page,
        pageSize: size
      }
    }).then(res => {
      console.log(res)
      setChartData(res.list);
      setChartTotal(res.total)
    });
  }

  // 页码改变时
  const onPageChange = (page) => {
    setCurrentPage(page);
    fetchGetChartData(page,pageSize);
  }

  return(
    <div className={styles.atlas}>
      <div className={styles.cardList}>
        {chartData.map((item,index) => {
          return <div key={index} className={styles.card}>
            <img className={styles.bg} src={item.exampleImg ? item.exampleImg : noImg}/>
            <div className={styles.content}>
              <div className={styles.operateRow}>
                <Tooltip title="编辑代码">
                  <img src={editIcon}/>
                </Tooltip>
                <Tooltip title="复制代码">
                  <img src={copyIcon}/>
                </Tooltip>
                <Tooltip title="下载图片">
                  <img src={downLoadIcon}/>
                </Tooltip>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.text}>图表名：<span>{item.name}</span></div>
                <div className={styles.text}>类型：<span>{item.type}</span></div>
              </div>
              <div className={styles.text}>备注：<span>{item.remark}</span></div>
            </div>
          </div>
        })}
      </div>
      <Pagination
        total={chartTotal}
        showTotal={(total) => `图表总数：${total}`}
        current={currentPage}
        onChange={onPageChange}
      />
    </div>
  )
}
export default Atlas;