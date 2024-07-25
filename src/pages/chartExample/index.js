/*
 * @Name: Chart图集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-15
*/

import styles from "./index.less";
import {useLocation} from "@umijs/max";
import {useCallback, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {Divider, Modal, Pagination, Tooltip, Spin} from "antd";
import noImg from "@/assets/image/chartExample/暂无图片.png";
import BiuChart from "@/components/BiuChart";
import {copyUrl, downloadImage} from "@/utils/utils";
import BiuIcon from "@/components/BiuIcon";
import BiuCodeEditor from "@/components/BiuCodeEditor";
import {debounce} from "lodash";

const ChartExample = (props) => {
  const dispatch = useDispatch();
  const location  = useLocation();
  const [chartType, setChartType] = useState(location.pathname.split("/")[2]);
  const [chartData, setChartData] = useState([]);// chart列表数据
  const [chartLoading, setChartLoading] = useState(true);// chart列表数据
  const [chartTotal, setChartTotal] = useState(0);// 总数
  const [currentPage, setCurrentPage] = useState(1);// 当前分页
  const [pageSize, setPageSize] = useState(15);// 每页展示条数
  const [editing, setEditing] = useState(false);// 编辑页面
  const [editData, setEditData] = useState({});// 当前代码编辑数据
  const [chartCode, setChartCode] = useState({});// 当前图表代码
  const [codeError, setCodeError] = useState(false);// 编辑代码错误

  useEffect(() => {
    fetchGetChartData(currentPage,pageSize);
  },[]);

  // 获取Chart数据
  const fetchGetChartData = (page,size) => {
    setChartLoading(true)
    dispatch({
      type: "chartExample/fetchGetChartData",
      payload: {
        type: chartType,
        page: page,
        pageSize: size
      }
    }).then(res => {
      setChartData(res.list);
      setChartTotal(res.total);
      setChartLoading(false)
    });
  }

  // 页码改变
  const onPageChange = (page) => {
    setCurrentPage(page);
    fetchGetChartData(page,pageSize);
  }

  // 代码编辑
  const codeChange = useCallback(debounce(code => {
    try {
      eval(`(myChart,echarts) => {${code.replace("option", "const option")} return option}`)
      setCodeError(false);
      setChartCode(`(myChart,echarts) => {${code.replace("option", "const option")} return option}`)
    } catch (error) {
      setCodeError(true);
    }
  }, 1500),[chartCode])

  // 点击编辑
  const editClick = (data) => {
    const newOption = `(myChart,echarts) => {${data.code.replace("option", "const option")} return option}`
    setEditing(true);
    setEditData(data);
    setChartCode(newOption)
  }

  return(
    <div className={styles.chartExample}>
      {editing ? <div className={styles.editPage}>
        <div className={styles.header} onClick={() => setEditing(false)}>
          <BiuIcon type="backIcon"/>
          返回
        </div>
        <Divider className={styles.title}>{editData['name']}</Divider>
        <div className={styles.content}>
          <div className={styles.editor}>
            <BiuCodeEditor code={editData['code']} onChange={codeChange}/>
          </div>
          <div className={styles.chart}>
            {codeError ? <div className={styles.tips}>编辑内容有误！</div> :
              <BiuChart code={chartCode}/>
            }
          </div>
        </div>
      </div> : <>
        <div className={styles.cardList}>
          {chartData.map((item,index) => {
            return <div key={index} className={styles.card}>
              {chartLoading ? <Spin/> : <>
                <img className={styles.bg} src={item.exampleImg ? item.exampleImg : noImg}/>
                <div className={styles.content}>
                  <div className={styles.operateRow}>
                    <Tooltip title="编辑图例">
                      <BiuIcon type={"editIcon"} className={styles.icon} onClick={() => editClick(item)}/>
                    </Tooltip>
                    <Tooltip title="复制代码">
                      <BiuIcon type={"copyIcon"} className={styles.icon} onClick={() => copyUrl(item.code)}/>
                    </Tooltip>
                    <Tooltip title="下载图片">
                      <BiuIcon type={"downLoadIcon"} className={styles.icon} onClick={() => downloadImage(item.exampleImg,item.name)}/>
                    </Tooltip>
                  </div>
                  <div className={styles.infoRow}>
                    <div className={styles.text} style={{width: "65%"}}>图表名：<span>{item.name}</span></div>
                    <div className={styles.text} style={{width: "35%"}}>类型：<span>{chartType === "all" ? item.type : chartType}</span></div>
                  </div>
                  <div className={styles.text}>备注：<span>{item.remark}</span></div>
                </div>
              </>}
            </div>
          })}
        </div>
        <Pagination
          total={chartTotal}
          pageSize={pageSize}
          showTotal={(total) => `chart图例总数：${total}`}
          current={currentPage}
          onChange={onPageChange}
          showSizeChanger={false}
          // hideOnSinglePage={true}
        />
      </>}
    </div>
  )
}
export default ChartExample;