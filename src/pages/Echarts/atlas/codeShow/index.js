/*
 * @Name: Echarts代码详情
 * @Description: Echarts代码详情展示组件
 * @Author: biubiu
 * @Date: 2023-12-12
*/

import React, {useEffect, useRef, useState} from "react";
import styles from "./index.less";
import { useDispatch, useSelector } from 'umi';
import { Tooltip, Divider, message } from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import BiuCodeEditor from "@/components/BiuCodeEditor";
import {unicodeToChinese} from "@/utils/utils";
import BiuEcharts from "@/components/BiuEcharts";

const CodeShow = (props) => {
  const dispatch = useDispatch();
  const { currentCode } = useSelector(state => state.EchartsAtlas);
  // 定时器
  const codeTimer = useRef(null);
  // 状态state
  const [showCode, setShowCode] = useState("");// 展示代码
  const [newOption, setNewOption] = useState();// 新option
  const [codeError, setCodeError] = useState(false);// 编辑代码错误

  useEffect(() => {
    let str = unicodeToChinese(currentCode['code']).replace("() => {\n","").replace("return option;\n}","").replace("const option","option");
    setShowCode(str)
    setNewOption(eval(unicodeToChinese(currentCode['code']))())
  },[])

  // 改变共享状态
  const setShareData = (params) => {
    dispatch({
      type: 'EchartsAtlas/save',
      payload: params
    });
  }

  // 代码编辑改变时
  const codeChange = (newCode) => {
    clearTimeout(codeTimer.current)
    let getOption = () => {}
    codeTimer.current = setTimeout(() => {
      // 异常处理
      try {
        getOption = eval(`() => {${newCode.replace("option", "const option")} return option}`);
        setCodeError(false);
        setNewOption(getOption())
      } catch (error) {
        setCodeError(true);
      }
    }, 1000)
  }

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
          <ArrowLeftOutlined onClick={() => setShareData({codePage: false})} className={styles.goBack}/>
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
            <BiuEcharts optionCode={newOption} />
          }
        </div>
      </div>
    </div>
  )
}
export default CodeShow;