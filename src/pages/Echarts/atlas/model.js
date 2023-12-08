import {
  reqGetAtlasType
} from '@/services/echarts';
import { Message } from 'antd';

export default {
  namespace: 'echartsAtlas',
  state: {
    atlasTypeList: []
  },
  effects: {
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
    }
  },
  // reducers: Reducer 是 Action 处理器，用来处理同步操作，可以看做是 state 的计算器。它的作用是根据 Action，从上一个 State 算出当前 State
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload}
    }
  }

}