/*
 * @Name: 通用工具类
 * @Description: 通用工具类
 * @Author: biubiu
 * @Date: 2023-12-12
*/

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
 * @description   筛选路由模块信息
 * @param   routesList   路由数组
 * @param   modulesList   模块开启数组
 */
export const getRoutesData = (routesList,modulesList) => {
  // 筛选路由
  const routersFilter = (list = []) => {
    let newList = list.filter(item => {
      if(item.module && modulesList.indexOf(item.module) > 0) {
        return item
      }else if(!item.module) {
        return item
      }
    })
    return newList
  }
  // 循环判断是否开启模块功能
  let routesData = routersFilter(routesList).map((item,index) => {
    if(item.routes){
      return {
        ...item,
        layout: false,// 取消默认布局
        routes: routersFilter(item.routes)
      }
    }else {
      return {
        ...item,
        layout: false,// 取消默认布局
      }
    }
  })
  return routesData;
}