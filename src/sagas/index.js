import { call, put, fork, take, all } from 'redux-saga/effects';
import {fetchPostsGet,fetchPosts} from '../api/fetchActions'

function * getMessage(){
   const message =  yield call(fetchPostsGet, '/getCustomerInfo','011cnz202rlmkX0QLpZZ1c9E202cnz2u')
   if(message){
       console.log('success');
    // yield put(changeSubject.fromSaga(prevSubject));
   }
}

export default function* root() {
    yield all([
      fork(getMessage)
    ])
  }