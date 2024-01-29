/*
 * @Name: 顶部导航
 * @Description: 顶部导航
 * @Author: biubiu
 * @Date: 2023-12-06
*/

import React, {useEffect, useState} from "react";
import styles from "./index.less";
import { Menu, Layout } from "antd";
import {useDispatch, useSelector} from "react-redux";
import luckyImg from "@/assets/image/lucky头像.png";
import {history, useLocation} from "umi";


const HeaderLayout = (props) => {
  const dispatch = useDispatch();
  const { Header } = Layout;
  const location  = useLocation();

  const [menuList, setMenuList] = useState([]);// 菜单列表
  const [currentKey, setCurrentKey] = useState([]);// 当前选中


  const pathnameList = location.pathname.split("/");// 分割路径
  const { menuData } = useSelector(state => state.menu);

  useEffect(() => {
    // 获路由信息
    dispatch({
      type: 'menu/getMenuData'
    }).then((res) => {
      // 获取菜单列表
      getMenuList(res);
    })
  },[])

  // 获取菜单列表
  const getMenuList = (list) => {
    // 筛选路由
    let currentPathData = list.filter(item => {
      if(pathnameList[1].length < 1){// 判断当前路由是否为"/"
        return item.path === `/`;
      }else {
        return item.path === `/${pathnameList[1]}`
      }
    })
    if(currentPathData.length < 1) { // 路由匹配不到一级, 默认"/"
      currentPathData = list.filter(item => item.path === "/")
    }

    // 添加菜单数据
    let addList = [];
    // 循环添加
    currentPathData[0]['routes'].map(item => {
      if(item.path !== currentPathData[0].path){
        addList.push({
          key: item.path,
          label: item.name,
          title: item.name,
        })
      }
    })
    setMenuList(addList);

    // 设置当前活动页
    if(location.pathname === currentPathData[0].path){
      setCurrentKey([currentPathData[0]['routes'][0].redirect]);
    }else {
      setCurrentKey([location.pathname]);
    }
  }

  // 菜单点击调用
  const menuClick = (e) => {
    // 改变当前选中
    setCurrentKey([e.key]);
    // 跳转
    history.push({
      pathname: e.key,
    })
    setShareData({codePage: false},"EchartsAtlas");
  }

  // 改变共享状态
  const setShareData = (params,type) => {
    dispatch({
      type: `${type}/save`,
      payload: params
    });
  }

  return(
    <div className={styles.headerLayout}>
      <Header>
        <div className={styles.biubiu}>
          <img src={luckyImg}/>
          BIUBIU
        </div>
        <Menu
          theme="light"
          selectedKeys={currentKey}
          mode="horizontal"
          items={menuList}
          onClick={e => menuClick(e)}
        />
      </Header>
    </div>
  )
}
export default HeaderLayout;