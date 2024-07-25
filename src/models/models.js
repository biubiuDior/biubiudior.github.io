/**
 * model模板
 */
// import { } from '@/services/api';

export default {
  // 命名空间
  namespace: 'test',
  // 该 Model 当前的状态。数据保存在这里，直接决定了视图层的输出
  state: {
    testList: []
  },
  // effects：Action 处理器，处理异步动作，基于 Redux-saga 实现。
  effects: {
    // 方法
    // Generator函数
    // Generator函数是ES6增加的异步编程解决方案之一，与普通的函数行为完全不同，类似于一个状态机，内部封装了多个状态。
    // 在函数定义的形式上，跟普通函数差不多，有两处不同：
    // 一是function关键字与函数名之间需要一个星号（*），
    // 二是函数内部使用yield语句定义各种状态，且yield只能用在Generator函数中，否则报错
    *fetchTest({ payload }, { call, put, select}) {
      const { data, code, message, meta } = yield call(fetchTest,payload);
      if (data && code == 200) {
        const { testList } = data; // 获取接口返回数据
        yield put({
          type: 'save',
          payload: {
            testList: testList || [] // 防止返回为null
          }
        })
      } else {
        message.error(meta.messages || '测试失败')
      }
    }
  },
  // reducers: Reducer 是 Action 处理器，用来处理同步操作，可以看做是 state 的计算器。它的作用是根据 Action，从上一个 State 算出当前 State
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload}
    }
  }
}
/* index中输出
*   导入：import {useDispatch,useSelector} from 'react-redux';
*   定义：const dispatch = useDispatch();
*   使用：const { testList } = useSelector(state => state.test);
*   调用：
* const fetchTest = () => {
    dispatch({
      type: 'test/fetchTest'
    })
  }
  * useEffect(()=>{
    getDataOverview();
  },[])
*
* */
