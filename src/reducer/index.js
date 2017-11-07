import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {dealInitData,foodList} from './common'

export default combineReducers({
    dealInitData,
    foodList,
    //必须加上routing才能渲染成功
    routing: routerReducer
})