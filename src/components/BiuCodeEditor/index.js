/*
 * @Name: 代码编辑器
 * @Description: monaco-editor
 * @Author: biubiu
 * @Date: 2023-12-13
*/

import React, {useEffect, useState} from "react";
import MonacoEditor from "react-monaco-editor";

const BiuCodeEditor = (props) => {
  const {
    editorOption = {},// 编辑器配置项
    language = "javascript",// 代码语言
    theme = "vs-light",// 主题颜色
    code = "",// 代码
    onChange = () => {},// 代码编辑函数
  } = props

  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,// 是否只读,true/false
    cursorStyle: "line",
    automaticLayout: true, // 自动布局
    folding: true, // 是否启用代码折叠
    codeLens: true,
    ...editorOption
  };

  // 组件加载前
  const editorDidMount = (editor) => {
    console.log("editorDidMount", editor, editor.getValue(), editor.getModel());
    editor.focus();
  };

  return(
    <MonacoEditor
      width='100%'
      height="100%"
      theme={theme}
      language={language}
      value={code}
      options={options}
      onChange={value => onChange(value)}
      editorDidMount={editorDidMount}
    />
  )
}
export default BiuCodeEditor;