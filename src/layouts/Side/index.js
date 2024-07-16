/*
 * @Name: 侧边导航栏
 * @Description: 侧边导航栏
 * @Author: biubiu
 * @Date: 2023-12-07
*/

import React, {useEffect, useState} from "react";
import styles from "./index.less";
import { Menu, Layout } from "antd";
import {history, Outlet, useLocation} from "umi";
import { Scrollbars } from "react-custom-scrollbars";
import { useDispatch, useSelector } from 'react-redux';
const { Sider } = Layout;

const SideLayout = (props) => {
  const location  = useLocation();
  const dispatch = useDispatch();
  const [menuList, setMenuList] = useState([]);// 菜单列表
  const [currentKey, setCurrentKey] = useState([]);// 当前选中

  useEffect(() => {
    // 获取菜单数据
    dispatch({
      type: 'menu/getMenuData'
    }).then(res => {
      getMenuList(res)
    })
  },[location.pathname])

  const getMenuList = (list) => {
    // 过滤筛选
    let menuList = [];
    list.map((item,index) => {
      if (item.path === location.pathname && item.component === "../layouts/Side") {
        item.children.map((childItem,childIndex) => {
          menuList.push({
            key: childItem.path,
            label: childItem.name,
            title: childItem.name,
          })
        })
      }else if(item.path === location.pathname) {
        const parentItem = list.filter(parentItem => item.parent === parentItem.path)[0]
        parentItem.children.map((childItem,childIndex) => {
          menuList.push({
            key: childItem.path,
            label: childItem.name,
            title: childItem.name,
          })
        })
      }
    })
    setMenuList(menuList);
    // 设置当前默认活动页
    let currentKey = menuList[0].key;
    menuList.map((item,index) => {
      if(location.pathname === item.key){
        currentKey = item.key
      }
    })
    setCurrentKey(currentKey)
  }

  // 菜单点击调用
  const menuClick = (e) => {
    // 改变当前选中
    setCurrentKey([e.key]);
    // 跳转
    history.push({
      pathname: e.key,
    })
  }

  return(
    <div className={styles.sideLayout}>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            selectedKeys={currentKey}
            items={menuList}
            onClick={e => menuClick(e)}
          />
        </Sider>
        <Layout className={styles.content}>
          <Scrollbars>
            <Outlet />
          </Scrollbars>
        </Layout>
      </Layout>
    </div>
  )
}
export default SideLayout;