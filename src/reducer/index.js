import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import dealInitData from './dealInitData'

export default combineReducers({
    dealInitData,
    //必须加上routing才能渲染成功
    routing: routerReducer
})