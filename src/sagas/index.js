import { call, put, fork, take, all } from 'redux-saga/effects';
import {
  REQUEST_POST,
  RECEIVE_POST,
  GET_CUSTOMER_INFO
} from '../actions/actionTypes'
import{getMessageLoading,messageAllEnd,messageHotEnd,messageLocEnd}from '../actions'
import fetchData from '../api/fetchActions'
import {optionDeal} from '../api/utils'

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

function* watchInitData(){
      while (true) {
        const {options} = yield take(GET_CUSTOMER_INFO);
        if(options){
          yield fork(getCityAll,options);
          const optionsHot = optionDeal('get',{type:'hot'});
          const optionsLoc = optionDeal('get',{type:'guess'});
          yield fork(getCityHot,optionsHot);
          yield fork(getCityLoc,optionsLoc)
        }
      }
}

export default function* root() {
    yield all([
      fork(watchInitData)
    ])
}