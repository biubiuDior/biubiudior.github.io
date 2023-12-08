/*
 * @Name: 菜单布局
 * @Description: 菜单布局
 * @Author: biubiu
 * @Date: 2023-12-06
*/

import React, {useEffect} from "react";
import styles from "./index.less";
import {Layout} from "antd";
import HeaderLayout from "./Header";
const { Header, Content, Sider } = Layout;
import { Outlet } from 'umi';
import { Scrollbars } from 'react-custom-scrollbars';

const PageLayout = (props) => {

  useEffect(() => {

  })

  return(
    <div className={styles.pageLayout}>
      <Layout>
        <HeaderLayout/>
        <Layout className={styles.content}>
          <Scrollbars>
            <Outlet />
          </Scrollbars>
        </Layout>
      </Layout>
    </div>
  )
}
export default PageLayout;