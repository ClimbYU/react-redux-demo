import { call, put, fork, take, all } from 'redux-saga/effects';
import { fromJS ,toJS} from "immutable";
import {
  REQUEST_POST,
  RECEIVE_POST,
  GET_CUSTOMER_INFO,
  SHOP_MESSAGE_GET,
  LOC_GET_DATA,
  NAV_MESSAGE_GET,
  RESTAURANT_MESSAGE_GET
} from '../actions/actionTypes'
import{
  getMessageLoading,
  messageAllEnd,
  messageHotEnd,
  messageLocEnd,
  messageNav,
  shopMessageRes,
  getRestaurantRes
}from '../actions'
import fetchData from '../api/fetchActions'
import {optionDeal} from '../api/utils'
import config from '../config' 


/**
 * 获取全部城市
 * @param {接口参数} options 
 */
function* getCityAll(options){
    yield put(getMessageLoading())
    const {data} = yield call(fetchData,options)
    yield put(messageAllEnd(data))
}
/**
 * 获取热门城市
 * @param {*接口参数} options 
 */
function* getCityHot(options){
  // 有阻塞地调用 saga 或者返回 promise 的函数，只在触发某个动作。
  const {data} = yield call(fetchData,options)
  // 触发某个action， 作用和dispatch相同：
  yield put(messageHotEnd(data))
}
/**
 * 获取位置信息
 * @param {*} options 
 */
function* getCityLoc(options){
  const data = yield call(fetchData,options)
  yield put(messageLocEnd(data))
}
/**
 * 获取翻页信息
 * @param {*} options 
 */
function* getNavMessage(options){
    const message = yield call(fetchData,options);
    yield put (messageNav(message))
}
/**
 * 获取商家信息
 * @param {*} options 
 */
function* getShop(options){
  const message = yield call(fetchData,options);
  yield put (shopMessageRes(message))
}
/**
 * 获取食物页面下拉列表信息
 * @param {*} options 
 */
function* getRestaurant(options){
  const message = yield call(fetchData,options);
  yield put (getRestaurantRes(message))
}

/**
 * 初始化信息
 */
function* watchInitData(){
      while (true) {
        const {options} = yield take(GET_CUSTOMER_INFO);
        if(options){
          // const optionShop = optionDeal('get',{}, config.GET_NAV_MESSAGE);
          yield fork(getCityLoc,options);
          // yield fork (getNavMessage,optionShop);
        }
      }
}
/**
 * 监听获取店铺信息
 */
function* watchShopMessage(){
  while(true){
    const res = yield take(LOC_GET_DATA);
    const {latitude,longitude} = res.data.toJS();
    const options = optionDeal('get',{latitude:latitude,longitude:longitude}, config.GET_SHOP_INFO)
    if(options){
      yield fork(getShop,options)
    }
  }
}
/**
 * 获取首页轮播图信息
 */
function* watchNavMessage(){
  while (true) {
    // 等待 dispatch 匹配NAV_MESSAGE_GET action 。
    const {option} = yield take(NAV_MESSAGE_GET);
    if(option){
      yield fork (getNavMessage,option);
    }
  }
}

/**
 * 获取食物页下拉列表信息
 */
function* watchRestaurantMessage(){
  while(true){
    const {option} = yield take(RESTAURANT_MESSAGE_GET);
    if(option){
      yield fork (getRestaurant,option);
    }
  }
}
/**
 * 
 */
export default function* root() {
    yield all([
      // 通常fork 和 cancel配合使用， 实现非阻塞任务，take是阻塞状态，也就是实现执行take时候，
      // 无法向下继续执行，fork是非阻塞的，同样可以使用cancel取消一个fork 任务。
      fork(watchInitData),
      fork(watchShopMessage),
      fork(watchNavMessage),
      fork(watchRestaurantMessage)
    ])
}