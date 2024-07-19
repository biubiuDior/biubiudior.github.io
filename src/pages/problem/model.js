import {ProblemStaticData} from "@/staticData/problem";

export default {
  namespace: 'problem',
  state: {},

  effects: {
    *fetchGetTableData({ payload }, { call, put, select}) {
      const { page, pageSize } = payload;

      let resultList = [];
      let resultTotal = 0;

      resultList = ProblemStaticData.slice((Number(page) - 1) * pageSize, page * pageSize);
      resultTotal = ProblemStaticData.length;

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