import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {user,foodList} from './user'

export default combineReducers({
    user:user,
    foodList:foodList,
    //必须加上routing才能渲染成功
    routing: routerReducer
})