/*
 * @Name: 通用工具类
 * @Description: 通用工具类
 * @Author: biubiu
 * @Date: 2023-12-12
*/

import { saveAs } from 'file-saver';
import {message} from "antd";

/**
 * @description    根据某个字段实现对json数组的排序
 * @param   array  要排序的json数组对象
 * @param   field  排序字段（此参数必须为字符串）
 * @param   reverse 是否倒序（默认为false）
 * @return  array  返回排序后的json数组
 */
export const jsonSort = (array, field, reverse) => {
  //数组长度小于2 或 没有指定排序字段 或 不是json格式数据
  if(array.length < 2 || !field || typeof array[0] !== "object") return array;
  //数字类型排序
  if(typeof array[0][field] === "number") {
    array.sort(function(x, y) { return x[field] - y[field]});
  }
  //字符串类型排序
  if(typeof array[0][field] === "string") {
    array.sort(function(x, y) { return x[field].localeCompare(y[field])});
  }
  //倒序
  if(reverse) {
    array.reverse();
  }
  return array;
}

/**
 * @description   对字符串中的Unicode码转中文
 * @param   str   转码字符串
 * @return  chineseStr   返回转码后字符串
 */
export const unicodeToChinese = (str) => {
  let chineseStr = str.replace(/\\u(\w{4})/gi, function(match, group1) {
    return String.fromCharCode(parseInt(group1, 16));
  });
  return chineseStr;
}

/**
 * @description   导出js文件
 * @param   data   内容数据
 * @param   name   文件名
 */
export const exportToJsFile = (data,name) => {
  let outData = data;
  // 将数据转换为JSON字符串
  if(typeof(data) !== 'string'){
    outData = JSON.stringify(data, null, 2);
  }
  // 创建Blob对象
  const blob = new Blob([outData], { type: 'text/json;charset=utf-8' });
  // 使用文件保存器保存文件
  saveAs(blob, name + '.js');
};

/**
 * @description		js计算字符串的宽度
 * @param			letter	文本(string)
 * @param			fontSize		预设字体大小(int)
 * @return		letterWidth		文本宽度
 */
export const getLetterWidth = (letter, fontSize, fontFamily) => {
  const dom = document.createElement('span');
  dom.style.display = 'inline-block';
  dom.style.fontSize = fontSize + 'px';
  dom.style.fontFamily = fontFamily;
  dom.textContent = letter;
  document.body.appendChild(dom);
  const width = dom.getBoundingClientRect().width;
  dom.remove();
  const letterWidth = Number(width.toFixed(2));
  return letterWidth;
};

/**
 * @description		文本复制
 * @param			text	文本(string)
 */
export const copyUrl = (text) => {
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