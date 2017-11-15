import { call, put, fork, take, all } from 'redux-saga/effects';
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

//获取全部城市
function* getCityAll(options){
    yield put(getMessageLoading())
    const {data} = yield call(fetchData,options)
    yield put(messageAllEnd(data))
}
//获取热门城市
function* getCityHot(options){
  const {data} = yield call(fetchData,options)
  yield put(messageHotEnd(data))
}
//获取位置信息
function* getCityLoc(options){
  const {data} = yield call(fetchData,options)
  yield put(messageLocEnd(data))
}
//获取翻页信息
function* getNavMessage(options){
    const message = yield call(fetchData,options);
    yield put (messageNav(message))
}
//获取商家信息
function* getShop(options){
  const message = yield call(fetchData,options);
  yield put (shopMessageRes(message))
}
// 获取食物页面下拉列表信息
function* getRestaurant(options){
  const message = yield call(fetchData,options);
  yield put (getRestaurantRes(message))
}

//初始化信息
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
//监听获取店铺信息
function* watchShopMessage(){
  while(true){
    const res = yield take(LOC_GET_DATA);
    const {latitude,longitude} = res.data;
    const options = optionDeal('get',{latitude:latitude,longitude:longitude}, config.GET_SHOP_INFO)
    if(options){
      yield fork(getShop,options)
    }
  }
}
//获取首页轮播图信息
function* watchNavMessage(){
  while (true) {
    const {option} = yield take(NAV_MESSAGE_GET);
    if(option){
      yield fork (getNavMessage,option);
    }
  }
}

// 获取食物页下拉列表信息
function* watchRestaurantMessage(){
  while(true){
    const {option} = yield take(RESTAURANT_MESSAGE_GET);
    if(option){
      yield fork (getNavMessage,option);
    }
  }
}

export default function* root() {
    yield all([
      fork(watchInitData),
      fork(watchShopMessage),
      fork(watchNavMessage),
      fork(watchRestaurantMessage)
    ])
}