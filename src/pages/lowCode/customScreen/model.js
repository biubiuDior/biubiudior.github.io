import {screenCenterData, screenData, modulesData} from "@/staticData/customScreen";

export default {
  namespace: 'customScreen',
  state: {
    saveEditScreen: false,
  },

  effects: {
    *fetchGetScreenCenterData({ payload }, { call, put, select}) {
      const resultData = screenCenterData

      return resultData;
    },

    *fetchGetScreenData({ payload }, { call, put, select}) {
      const { id } = payload;

      const resultData = screenData[id]

      return resultData;
    },

    *fetchGetModuleList({ payload }, { call, put, select}) {

      const resultData = modulesData.map((item,index) => {
        return {
          ...item,
          dragId: item.id,
          type: "module",
        }
      })

      return resultData;
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload}
    }
  }
}