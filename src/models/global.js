
export default {
  namespace: 'global',
  state: {
    screenScale: 1,// 缩放比例
  },
  effects: {

  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload}
    }
  }
}
