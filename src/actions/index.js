
import {URLADDRESS} from '../config'
import {
    REQUEST_POST,
    RECEIVE_POST,
    GET_CUSTOMER_INFO,
    RES_ERROR,
    START_GET_DATA,
    ALL_GET_DATA,
    HOT_GET_DATA,
    LOC_GET_DATA
} from '../actions/actionTypes'

export const requestPosts = data => ({
    type:REQUEST_POST,
    data
})

export const receivePosts = (data,json) =>({
    type:RECEIVE_POST,
    data,
    userInfo:json
})

export const initData = (options) =>({
    type:GET_CUSTOMER_INFO,
    options
})
//开始调用接口出来加载框
export const getMessageLoading = () => ({
    type:START_GET_DATA
})
//调用接口结束
export const messageLocEnd = (res) => ({
    type:LOC_GET_DATA,
    data:res
})

//调用接口结束
export const messageHotEnd = (res) => ({
    type:HOT_GET_DATA,
    data:res
})

//调用接口结束
export const messageAllEnd = (res) => ({
    type:ALL_GET_DATA,
    data:res
})