/*
 * @Name: html代码
 * @Description: 动态生成并返回html
 * @Author: biubiu
 * @Date: 2024-04-02
*/
import React, {useEffect, useState} from "react";
import styles from "./index.less";
import $ from 'jquery';

const BiuHTMLCode = (props) => {
  const {
    htmlCode = "",
    cssCode = "",
    jsCode = "",
  } = props;
  const [codeText, setCodeText] = useState("");

  // 处理代码
  useEffect(() => {
    const newCode = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title></title>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              height: 100%;
              width: 100%;
            }
          </style>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script type="text/javascript">${jsCode}</script>
        </body>
      </html>
    `;
    setCodeText(newCode)
  },[])

  return(
    <div className={styles.biuHTMLCode}>
      <iframe srcDoc={codeText}/>
    </div>
  )
}
export default BiuHTMLCode;