/*
 * @Name: 顶部导航
 * @Description: 顶部导航
 * @Author: biubiu
 * @Date: 2023-12-06
*/

import React, {useEffect, useState} from "react";
import styles from "./index.less";
import { Menu, Layout } from "antd";
const { Header } = Layout;
import routes from "../../../config/routes";
import { history, useDispatch } from "umi";
import luckyImg from "@/assets/image/lucky头像.jpg";

const HeaderLayout = (props) => {
  const dispatch = useDispatch();
  const [menuList, setMenuList] = useState([]);// 菜单列表
  const [currentKey, setCurrentKey] = useState([]);// 当前选中

  const pathnameList = window.location.pathname.split("/");// 分割路径
  const routesList = routes[0].routes;

  useEffect(() => {
    // 获取菜单列表
    getMenuList();
    // 设置当前活动页
    if(pathnameList[1].length < 1){// 判断是否初次进入
      if(routesList[0].redirect){// 判断重定向
        history.push(routesList[0].redirect);
        setCurrentKey([routesList[0].redirect]);
      }
    }else {
      setCurrentKey([`/${pathnameList[1]}`]);
    }
  },[])

  // 获取菜单列表
  const getMenuList = () => {
    let addList = [];
    // 循环添加
    routesList.map(item => {
      if(item.path !== "/"){
        addList.push({
          key: item.path,
          label: item.name,
          title: item.name,
        })
      }
    })
    setMenuList(addList);
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