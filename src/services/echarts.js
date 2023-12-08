import { query } from '@/utils/request';

let baseAPI = `/api/echarts`;

// Echarts图集类型
export const reqGetAtlasType = params => {
  return query(`${baseAPI}/queryAtlasType`, params);
};