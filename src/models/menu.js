/*
 * @Name: 路由model
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2024-02-02
*/
import routes from "../../config/routes"

// 数组递归提取
const listRecursion = (arr,parent,routesData) => {
  arr.map((item,index) => {
    let childrenList = [];
    if(item.routes){
      item.routes.map((childItem,childIndex) => {
        if(childItem.redirect === undefined){
          childrenList.push({
            name: childItem.name || "",
            path: childItem.path || "",
            icon: childItem.icon || "",
          })
        }
      })
      listRecursion(item.routes,item.path,routesData)
    }
    if(item.redirect === undefined){// 去除重定向
      routesData.push({
        name: item.name || "",
        path: item.path || "",
        icon: item.icon || "",
        children: childrenList,
        parent: parent || "",
        component: item.component || ""
      });
    }
  })
}

export default {
  namespace: 'menu',
  state: {
    menuData: []
  },
  effects: {
    *getMenuData({ payload }, { put }) {
      // 排序过滤路由信息
      const routesData = [];
      listRecursion(routes,"",routesData);

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
