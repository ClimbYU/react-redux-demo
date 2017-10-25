import axios from 'axios'
import lodash from 'lodash'
import {URLADDRESS} from '../config'
import {
    REQUEST_POST,
    RECEIVE_POST,
    GET_CUSTOMER_INFO,
    RES_ERROR
} from '../actions/actionTypes'

import{
  requestPosts
}from '../actions'

const getData = (options) => {
    let {
      method = 'get',
      data,
      fetchType,
      url,
    } = options
  
    const cloneData = lodash.cloneDeep(data)
  
    switch (method.toLowerCase()) {
      case 'get':
        return axios.get(url, {
          params: cloneData,
        })
      case 'delete':
        return axios.delete(url, {
          data: cloneData,
        })
      case 'post':
        return axios.post(url, cloneData)
      case 'put':
        return axios.put(url, cloneData)
      case 'patch':
        return axios.patch(url, cloneData)
      default:
        return axios(options)
    }
  }

export default function fetchData(options) {
    return getData(options)
            .then(
                response => response
             )
            .catch((err) =>{
                console.log(err)
                // dispatch({
                //     type:RES_ERROR
                // })
            })
}