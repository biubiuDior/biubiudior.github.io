/*
 * @Name: 样式集
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-24
*/

import styles from "./index.less";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {Modal, Pagination, Spin, Tabs, Tooltip} from "antd";
import noImg from "@/assets/image/chartExample/暂无图片.png";
import BiuCodeEditor from "@/components/BiuCodeEditor";
import BiuIcon from "@/components/BiuIcon";
import {copyUrl, downloadImage} from "@/utils/utils";
import BiuHTMLCode from "@/components/BiuHTMLCode";

const CssLibrary = (props) => {
  const dispatch = useDispatch();
  const [cssData, setCssData] = useState([]);// chart列表数据
  const [cssLoading, setCssLoading] = useState(true);// chart列表数据
  const [cssTotal, setCssTotal] = useState(0);// 总数
  const [currentPage, setCurrentPage] = useState(1);// 当前分页
  const [pageSize, setPageSize] = useState(15);// 每页展示条数const
  const [codeModal, setCodeModal] = useState(false);// model
  const [demoModal, setDemoModal] = useState(false);// model
  const [codeData, setCodeData] = useState({});// code

  useEffect(() => {
    fetchGetCssData(currentPage,pageSize);
  },[]);

  // 获取Css数据
  const fetchGetCssData = (page,size) => {
    setCssLoading(true)
    dispatch({
      type: "cssLibrary/fetchGetCssData",
      payload: {
        page: page,
        pageSize: size
      }
    }).then(res => {
      setCssData(res.list);
      setCssTotal(res.total);
      setCssLoading(false)
    });
  }

  // 页码改变
  const onPageChange = (page) => {
    setCurrentPage(page);
    fetchGetCssData(page,pageSize);
  }

  // 标签页
  const codeTabData = [
    {
      key: 'html',
      label: <>
        <Tooltip title="复制代码">
        <BiuIcon type={"copyIcon"} className={styles.icon} onClick={() => copyUrl(codeData.htmlCode)}/>
        </Tooltip>
        <span>HTML</span>
      </>,
      children: <BiuCodeEditor code={codeData.htmlCode} language={'html'}/>,
    },
    {
      key: 'css',
      label: <>
        <Tooltip title="复制代码">
          <BiuIcon type={"copyIcon"} className={styles.icon} onClick={() => copyUrl(codeData.cssCode)}/>
        </Tooltip>
        <span>CSS</span>
      </>,
      children: <BiuCodeEditor code={codeData.cssCode} language={'css'}/>,
    }
  ];

  const modalOpen = (data,type) => {
    setCodeData(data);
    if(type === "demo") {
      setDemoModal(true)
    }else if(type === "code") {
      setCodeModal(true)
    }
  }

  return(
    <div className={styles.cssLibrary}>
      <div className={styles.cardList}>
        {cssData.map((item,index) => {
          return <div key={index} className={styles.card}>
            {cssLoading ? <Spin/> : <>
              <img className={styles.bg} src={item.exampleImg ? item.exampleImg : noImg}/>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.tip}>
                <div onClick={() => modalOpen(item,"demo")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-[20px] h-[20px]" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M17 18a28.201 28.201 0 0 0 4.848-5.49.93.93 0 0 0 0-1.02A28.201 28.201 0 0 0 17 6M7.004 18a28.2 28.2 0 0 1-4.848-5.49.93.93 0 0 1 0-1.02A28.2 28.2 0 0 1 7.004 6m7-1.999-4 16"></path>
                  </svg>
                  <span>demo</span>
                </div>
                <div onClick={() => modalOpen(item,"code")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-[20px] h-[20px]" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M17 18a28.201 28.201 0 0 0 4.848-5.49.93.93 0 0 0 0-1.02A28.201 28.201 0 0 0 17 6M7.004 18a28.2 28.2 0 0 1-4.848-5.49.93.93 0 0 1 0-1.02A28.2 28.2 0 0 1 7.004 6m7-1.999-4 16"></path>
                  </svg>
                  <span>code</span>
                </div>
              </div>
            </>}
          </div>
        })}
      </div>
      <Pagination
        total={cssTotal}
        pageSize={pageSize}
        showTotal={(total) => `css样式总数：${total}`}
        current={currentPage}
        onChange={onPageChange}
        showSizeChanger={false}
        // hideOnSinglePage={true}
      />
      <Modal
        title={"CSS代码"}
        open={codeModal}
        onCancel={() => setCodeModal(false)}
        footer={null}
        centered={true}
        destroyOnClose={true}
      >
        <div>
          <Tabs defaultActiveKey="1" items={codeTabData} tabPosition='left'/>
        </div>
      </Modal>
      <Modal
        title={<div>
          CSS示例
          <Tooltip title="下载图片">
            <BiuIcon type={"downLoadIcon"} onClick={() => downloadImage(codeData.exampleImg,codeData.name)}/>
          </Tooltip>
        </div>}
        open={demoModal}
        onCancel={() => setDemoModal(false)}
        footer={null}
        centered={true}
        destroyOnClose={true}
      >
        <BiuHTMLCode htmlCode={codeData.htmlCode} cssCode={codeData.cssCode}/>
      </Modal>
    </div>
  )
}
export default CssLibrary;