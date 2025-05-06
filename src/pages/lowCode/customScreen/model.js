import {screenCenterData, screenData} from "@/staticData/customScreen";

export default {
  namespace: 'customScreen',
  state: {},

  effects: {
    *fetchGetScreenCenterData({ payload }, { call, put, select}) {
      const resultData = screenCenterData

      return resultData;
    },

    *fetchGetScreenData({ payload }, { call, put, select}) {
      const { id } = payload;

      const resultData = screenData[id]

      return resultData;
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload}
    }
  }
}