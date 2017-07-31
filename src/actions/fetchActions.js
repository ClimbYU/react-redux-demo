import {URLADDRESS} from '../config'
import {
    REQUEST_POST,
    RECEIVE_POST
} from '../constants/actionTypes'

export const fetchPosts = (url) => dispatch => {
    dispatch(requestPosts('Loading...'));
    return fetch(URLADDRESS + url)
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