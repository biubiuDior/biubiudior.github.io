/*
 * @Name: 路由菜单
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-01-29
*/

import routesList from "../../config/routes";
import {getRoutesData} from "@/utils/utils";

export default {
  namespace: 'menu',
  state: {
    menuData: []
  },
  effects: {
    // 获取路由信息
    *getMenuData({ payload }, { put }) {
      // 根据开启模块筛选路由
      const routesData = getRoutesData(routesList,process.env.MODULE);

      yield put({
        type: 'save',
        payload: {
          menuData: routesData,
        }
      })

      return routesData
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload}
    }
  }
}