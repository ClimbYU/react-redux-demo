import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux'
import {browserHistory, Router ,Route} from 'react-router';
//react-router-redux用于处理redux与react-router协同工作
import { syncHistoryWithStore } from 'react-router-redux';
// import thunk from 'redux-thunk';
import configureStore from './store/configureStore'


import Reducer from './reducer';
import routes from './routes';
import AppContainer from './containers/AppContainer';
import rootSaga from './sagas';


// const store = createStore(
//       Reducer,
//       applyMiddleware(thunk)
// )
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render (
      <Provider store={store}>
            <AppContainer history={history} routes={routes} />
      </Provider>,
     document.getElementById('root')
)
// var readFile = function (number){
//       return new Promise(function (resolve, reject){
//             setTimeout(function(){
//                   console.log('number='+ number)
//                   resolve(number + 'async')
//             },1000)
//       });
//     };

//     var gen = function* (){
//       var f1 = yield readFile(5);
//       console.log(f1.toString());
//       var f2 = yield readFile(6);
     
//       console.log(f2.toString());
//     };

//     var g = gen();
    
//     g.next().value.then(function(data){
//       g.next(data).value.then(function(data){
//         g.next(data);
//       });
//     })

// function run(gen){
//       var g = gen();
    
//       function next(data){
//         var result = g.next(data);
//         if (result.done) return result.value;
//         result.value.then(function(data){
//           next(data);
//         });
//       }
    
//       next();
//     }
    
//     run(gen);