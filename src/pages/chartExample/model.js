import {ChartStaticData} from "@/staticData/chartExample";
import {jsonSort} from "@/utils/utils";
import * as echarts from "echarts";
import {mapJSON} from "./mapData";

export default {
  namespace: 'chartExample',
  state: {},

  effects: {
    *fetchGetChartData({ payload }, { call, put, select}) {
      const { type, page, pageSize } = payload;

      /* echarts注册地图 */
      echarts.registerMap('china', mapJSON['china']);
      echarts.registerMap('河北省', mapJSON['河北省']);
      echarts.registerMap('广东省', mapJSON['广东省']);

      let resultList = [];
      let resultTotal = 0;

      // 筛选过滤类型
      if(type === "all") {
        resultList = ChartStaticData;
        resultTotal = ChartStaticData.length;
      }else {
        resultList = ChartStaticData.filter(item => item.type.includes(type));
        resultTotal = ChartStaticData.filter(item => item.type === type).length;
      }

      // 按时间排序
      resultList.map(item => item.date = new Date(item.date).getTime());
      resultList = jsonSort(resultList,"date",true);

      // 当前页码过滤
      resultList = resultList.slice((Number(page) - 1) * pageSize, page * pageSize);

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