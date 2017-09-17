import { call, put, fork, take, all } from 'redux-saga/effects';
import {fetchPostsGet,fetchPosts,requestPosts,receivePosts} from '../api/fetchActions'

// export function fetchPostsApi(reddit) {
//     return fetch(`http://139.196.22.147:8088/${reddit}` )
//             .then(response => response.json() )
//             .then(json => json.data.children.map(child => child.data) )
// }

function * getMessage(){
    yield put( requestPosts(['Loading...']) )
   const {data} =  yield call(fetchPostsGet, 'pipeApi/recharge/queryRecharge')
   yield put(receivePosts(data) )
   if(data){
       console.log('success');
    // yield put(changeSubject.fromSaga(prevSubject));
   }
}

export default function* root() {
    yield all([
      fork(getMessage)
    ])
  }