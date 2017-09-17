// import axios from 'axios'
// import lodash from 'lodash'
import {URLADDRESS} from '../config'
import {
    REQUEST_POST,
    RECEIVE_POST
} from '../actions/actionTypes'

//get请求
// export const fetchPostsGet = (url) => dispatch => {
//     dispatch(requestPosts('Loading...'));
//     return fetch(URLADDRESS + url)
//             .then(response => response.json())
//             .then(json => dispatch(receivePosts('Success...',json)))
    
// }
// const fetch = (options) => {
//     let {
//       method = 'get',
//       data,
//       fetchType,
//       url,
//     } = options
  
//     const cloneData = lodash.cloneDeep(data)
  
//     switch (method.toLowerCase()) {
//       case 'get':
//         return axios.get(url, {
//           params: cloneData,
//         })
//       case 'delete':
//         return axios.delete(url, {
//           data: cloneData,
//         })
//       case 'post':
//         return axios.post(url, cloneData)
//       case 'put':
//         return axios.put(url, cloneData)
//       case 'patch':
//         return axios.patch(url, cloneData)
//       default:
//         return axios(options)
//     }
//   }
// export function fetchPostsGet(reddit) {
//     return fetch(URLADDRESS + reddit)
//             .then(
//                 (response) => {
//                     return{
//                         data:response.data,
//                         status:response.status
//                     }
//                 }
//              )
//             .catch(
//                 json =>  json 
//             )
// }

export function fetchPostsGet(reddit) {
    return fetch(URLADDRESS + reddit)
            .then(
                response => response.json()
             )
            .then(
                (json) =>  {
                    return {
                        data:json.data,
                        status:json.status
                    }
                }
            )
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

export const requestPosts = data => ({
    type:REQUEST_POST,
    data
})

export const receivePosts = (data,json) =>({
    type:RECEIVE_POST,
    data,
    userInfo:json
})