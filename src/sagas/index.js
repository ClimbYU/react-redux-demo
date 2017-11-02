import { call, put, fork, take, all } from 'redux-saga/effects';
import {
  REQUEST_POST,
  RECEIVE_POST,
  GET_CUSTOMER_INFO,
  SHOP_MESSAGE_GET,
  LOC_GET_DATA
} from '../actions/actionTypes'
import{getMessageLoading,messageAllEnd,messageHotEnd,messageLocEnd,messageNav,shopMessageRes}from '../actions'
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
function* watchInitData(){
      while (true) {
        const {options} = yield take(GET_CUSTOMER_INFO);
        if(options){
          // yield fork(getCityAll,options);
          // const optionsHot = optionDeal('get',{type:'hot'}, config.GET_CUSTOMER_INFO);
          // const optionsLoc = optionDeal('get',{type:'guess'}, config.GET_CUSTOMER_INFO);
          const optionNav = optionDeal('get',{}, config.GET_NAV_MESSAGE);
          const optionShop = optionDeal('get',{}, config.GET_NAV_MESSAGE);
          // yield fork(getCityHot,optionsHot);
          yield fork(getCityLoc,options);
          yield fork (getNavMessage,optionShop);
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

export default function* root() {
    yield all([
      fork(watchInitData),
      fork(watchShopMessage)
    ])
}