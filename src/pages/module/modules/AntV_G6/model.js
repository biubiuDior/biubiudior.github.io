import {TreeData} from "@/staticData/module/AntV_G6";

export default {
  namespace: 'AntV_G6',
  state: {},

  effects: {
    *fetchGetTreeData({ payload }, { call, put, select}) {
      const resultData = TreeData

      return resultData;
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload}
    }
  }
}