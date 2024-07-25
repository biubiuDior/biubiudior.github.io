import {ProblemStaticData} from "@/staticData/problem";
import {CssStaticData} from "@/staticData/cssLibrary";

export default {
  namespace: 'cssLibrary',
  state: {},

  effects: {
    *fetchGetCssData({ payload }, { call, put, select}) {
      const { page, pageSize } = payload;

      let resultList = [];
      let resultTotal = 0;

      resultList = CssStaticData.slice((Number(page) - 1) * pageSize, page * pageSize);
      resultTotal = CssStaticData.length;

      const resultData = {
        list: resultList,
        total: resultTotal
      }

      return resultData;
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload}
    }
  }
}