import {
  reqGetAtlasType,
  reqGetCodeList,
} from '@/services/echarts';
import { Message } from 'antd';
import { jsonSort } from "@/utils/utils";

export default {
  namespace: 'EchartsAtlas',
  state: {
    atlasTypeList: [],
    codeList: [],
    codePage: false,// 代码页面展示
    currentCode: {},// 当前展示代码
  },
  effects: {
    *fetchGetCodeList({ payload }, { call, put, select}) {
      const { data, code, message, meta } = yield call(reqGetCodeList,payload);
      let list = [];
      const { type= "" } = payload;
      if (data && code === 200) {
        // 目前分类类型
        const existType = ["bar", "line", "pie", "map"];
        // 判断类型
        if(type === "all"){
          list = data;
        }else {
          if(existType.indexOf(type) > -1){
            list = data.filter(item => item.type === type);
          }else {
            list = data.filter(item => existType.indexOf(item.type) < 0);
          }
        }
        // 按时间排序
        list.map(item => item.date = new Date(item.date).getTime());
        list = jsonSort(list,"date",true);
        yield put({
          type: 'save',
          payload: {
            codeList: list || [] // 防止返回为null
          }
        })
      } else {
        Message.error(meta.messages || '获取失败')
      }
      return list
    },
    *fetchGetAtlasType({ payload }, { call, put, select}) {
      const { data, code, message, meta } = yield call(reqGetAtlasType,payload);
      if (data && code === 200) {
        yield put({
          type: 'save',
          payload: {
            atlasTypeList: data || [] // 防止返回为null
          }
        })
      } else {
        Message.error(meta.messages || '获取失败')
      }
      return data
    },
  },
  // reducers: Reducer 是 Action 处理器，用来处理同步操作，可以看做是 state 的计算器。它的作用是根据 Action，从上一个 State 算出当前 State
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload}
    }
  }

}