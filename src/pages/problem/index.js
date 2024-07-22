/*
 * @Name: 问题记录
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-07-19
*/

import styles from "./index.less";
import {useEffect, useState} from "react";
import { useDispatch } from 'react-redux';
import {Modal, Table, Tooltip} from "antd";
import {exportToJsFile, getLetterWidth} from "@/utils/utils";
import BiuCodeEditor from "@/components/BiuCodeEditor";

const Problem = (props) => {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [tablePage, setTablePage] = useState(1);
  const [tablePageSize, setTablePageSize] = useState(15);
  const [tableTotal, setTableTotal] = useState(0);
  const [tableLoading, setTableLoading] = useState(true);
  const [tableModal, setTableModal] = useState(false);
  const [problemData, setProblemData] = useState([]);

  useEffect(() => {
    fetchGetTableData(tablePage,tablePageSize)
  },[])

  // 获取table数据
  const fetchGetTableData = (page,pageSize) => {
    setTableLoading(true);
    dispatch({
      type: 'problem/fetchGetTableData',
      payload: {page,pageSize}
    }).then(res => {
      setTableTotal(res.total)
      setTableData(res.list)
      setTableLoading(false)
    })
  }

  // 页码切换
  const tablePageChange = (page, pageSize) => {
    setTablePage(page)
    fetchGetTableData(page,tablePageSize)
  }

  // 表格columns
  const tableColumns = [
    {
      title: '序号',
      dataIndex: 'index',
      width: "5%",
      render: (text, record, index) => {
        return <span>{index + 1}</span>
      }
    },
    {
      title: '问题名',
      dataIndex: 'name',
      width: "30%",
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: '简介',
      dataIndex: 'intro',
      width: "45%",
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: '类型',
      dataIndex: 'type',
      width: "12%",
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: '操作',
      dataIndex: 'operate',
      width: "8%",
      render: (text, record, index) => {
        return <div className={styles.tableOperate}>
          <span onClick={() => {setTableModal(true);setProblemData(record)}}>查看</span>
          <div className={styles.br}/>
          <span onClick={() => exportToJsFile(record.code,record.name)}>下载</span>
        </div>
      }
    },
  ]

  return(
    <div className={styles.problem}>
      <div className={styles.selectBox}>
        筛选过滤区
      </div>
      <Table
        columns={tableColumns}
        dataSource={tableData}
        size="small"
        bordered="true"
        loading={tableLoading}
        pagination={{
          current: tablePage,
          pageSize: tablePageSize,
          total: tableTotal,
          showTotal: total => `总数：${total}`,
          onChange: tablePageChange
        }}
        rowKey={record => record.id}
      />
      <Modal
        title={problemData.name}
        open={tableModal}
        onCancel={() => setTableModal(false)}
        footer={null}
        centered={true}
        width={800}
        destroyOnClose={true}
      >
        <div style={{height: 500, padding: 16, borderTop: "1px solid #f0f0f0"}}>
          <BiuCodeEditor code={problemData.code}/>
        </div>
      </Modal>
    </div>
  )
}
export default Problem;