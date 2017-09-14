import {URLADDRESS} from '../config'
import {
    REQUEST_POST,
    RECEIVE_POST
} from '../actions/actionTypes'

//get请求
export const fetchPostsGet = (url) => dispatch => {
    dispatch(requestPosts('Loading...'));
    return fetch(URLADDRESS + url)
            .then(response => response.json())
            .then(json => dispatch(receivePosts('Success...',json)))
    
}
//post请求
export const fetchPosts = (url,data) => dispatch => {
    dispatch(requestPosts('Loading...'));
     return fetch(URLADDRESS + url,{    
          method: "POST",
          headers: {
                 "Content-type":"application/json;charset=UTF-8"
        },
          body:JSON.stringify({
                    code: data
                })
     })
            .then(response => response.json())
            .then(json => dispatch(receivePosts('Success...',json)))
}

const requestPosts = flag => ({
    type:REQUEST_POST,
    flag
})

const receivePosts = (flag,json) =>({
    type:RECEIVE_POST,
    flag,
    userInfo:json
})