/*
 * @Name: 侧边导航栏
 * @Description: 侧边导航栏
 * @Author: biubiu
 * @Date: 2023-12-07
*/

import React, {useEffect, useState} from "react";
import styles from "./index.less";
import { Menu, Layout } from "antd";
import routes from "../../../config/routes";
import { history, Outlet } from "umi";
import { Scrollbars } from "react-custom-scrollbars";
const { Sider } = Layout;

const SiderLayout = (props) => {
  const [menuList, setMenuList] = useState([]);// 菜单列表
  const [currentKey, setCurrentKey] = useState([]);// 当前选中

  const pathnameList = window.location.pathname.split("/");
  const routesList = routes[0].routes.filter(item => item.path === `/${pathnameList[1]}`)[0].routes;

  useEffect(() => {
    // 获取菜单列表
    getMenuList();
    // 设置当前活动页
    const pathName = window.location.pathname;
    if(pathnameList.length < 3 && routesList[0].redirect){// 判断重定向
      history.push(routesList[0].redirect);
    }
    setCurrentKey(pathName)
  },[currentKey])

  // 获取菜单列表
  const getMenuList = () => {
    let addList = [];
    // 循环添加
    routesList.map(item => {
      if(item.path !== `/${pathnameList[1]}`){
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
  }

  return(
    <div className={styles.siderLayout}>
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
export default SiderLayout;