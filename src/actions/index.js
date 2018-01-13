
import {URLADDRESS} from '../config'
import {
    REQUEST_POST,
    RECEIVE_POST,
    GET_CUSTOMER_INFO,
    RES_ERROR,
    START_GET_DATA,
    ALL_GET_DATA,
    HOT_GET_DATA,
    LOC_GET_DATA,
    NAV_MESSAGE_RES,
    SHOP_MESSAGE_GET,
    SHOP_MESSAGE_RES,
    NAV_MESSAGE_GET,
    RESTAURANT_MESSAGE_GET,
    RESTAURANT_MESSAGE_RES
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
/**
 * 
 * @param {位置坐标} res 
 */
export const messageLocEnd = (res) => ({
    type:LOC_GET_DATA,
    data:res
})
/**
 * 
 * @param {餐馆列表} res 
 */
export const shopMessageRes = (res) =>({
    type:SHOP_MESSAGE_RES,
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

//获取轮播信息

export const getCarouselMessage = (option) =>({
    type:NAV_MESSAGE_GET,
    option
})

export const messageNav = (res) =>({
    type:NAV_MESSAGE_RES,
    data:res
})
//获取商家信息
export const shopMessage = (option) =>({
    type:SHOP_MESSAGE_GET,
    option
})

// 获取食物页面下拉列表信息
export const getRestaurant = (option) => ({
    type:RESTAURANT_MESSAGE_GET,
    option
})
export const getRestaurantRes = (res) => ({
    type:RESTAURANT_MESSAGE_RES,
    data:res
})
