import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user'
import foods from './foods'

export default combineReducers({
    user:user,
    foods:foods,
    //必须加上routing才能渲染成功
    routing: routerReducer
})