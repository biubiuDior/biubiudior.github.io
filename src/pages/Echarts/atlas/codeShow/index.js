/*
 * @Name: Echarts代码详情
 * @Description: Echarts代码详情展示组件
 * @Author: biubiu
 * @Date: 2023-12-12
*/

import React, {useCallback, useEffect, useRef, useState} from "react";
import styles from "./index.less";
import { useDispatch, useSelector } from 'umi';
import { Tooltip, Divider, message } from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import BiuCodeEditor from "@/components/BiuCodeEditor";
import {unicodeToChinese} from "@/utils/utils";
import BiuEcharts from "@/components/BiuEcharts";
import {debounce} from "lodash";

const CodeShow = (props) => {
  const dispatch = useDispatch();
  const { currentCode } = useSelector(state => state.EchartsAtlas);
  // 定时器
  const codeTimer = useRef(null);
  // 状态state
  const [showCode, setShowCode] = useState("");// 展示代码
  const [newOption, setNewOption] = useState(currentCode['code']);// 新option
  const [codeError, setCodeError] = useState(false);// 编辑代码错误

  useEffect(() => {
    let str = unicodeToChinese(currentCode['code']).replace("(myChart) => {\n","").replace("return option;","").replace("const option","option").slice(0, -1);
    setShowCode(str)
  },[])

  // 改变共享状态
  const setShareData = (params,type) => {
    dispatch({
      type: `${type}/save`,
      payload: params
    });
  }

  // 代码编辑改变时
  const codeChange = useCallback(debounce(newCode => {
    try {
      eval(`() => {${newCode.replace("option", "const option")} return option}`)
      setCodeError(false);
      setNewOption(`() => {${newCode.replace("option", "const option")} return option}`)
    } catch (error) {
      setCodeError(true);
    }
  }, 500),[newOption])

  // 代码复制
  const copyUrl = (text) => {
    try {
      const textField = document.createElement('textarea')
      textField.value = text;
      document.body.appendChild(textField);// 添加临时实例
      textField.select();// 选择临时实例
      document.execCommand('copy')
      document.body.removeChild(textField); // 删除临时实例
      message.success('复制成功');
    }catch (error) {
      message.error('复制失败');
    }
  }

  return(
    <div className={styles.codeShow}>
      <div className={styles.header}>
        <Tooltip title="返回">
          <ArrowLeftOutlined onClick={() => setShareData({codePage: false},"EchartsAtlas")} className={styles.goBack}/>
        </Tooltip>
        <div className={styles.function}>
          <Tooltip title="复制代码">
            <div className={styles.copyIcon} onClick={() => copyUrl(showCode)}/>
          </Tooltip>
        </div>
      </div>
      <Divider className={styles.title}>{currentCode['name']}</Divider>
      <div className={styles.content}>
        <div className={styles.editor}>
          <BiuCodeEditor code={showCode} onChange={codeChange}/>
        </div>
        <div className={styles.echarts}>
          {codeError ? <div className={styles.tips}>编辑器内容有误！</div> :
            <BiuEcharts key={newOption} code={newOption} renderer={currentCode['renderer'] || 'svg'} id={currentCode['id']}/>
          }
        </div>
      </div>
    </div>
  )
}
export default CodeShow;