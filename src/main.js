////////////////////////////////////////////////////////////////////  
//                            _ooOoo_                             //  
//                           o8888888o                            //      
//                           88" . "88                            //      
//                           (| -_- |)                            //      
//                           O\  =  /O                            //  
//                        ____/`---'\____                         //                          
//                      .'  \\|     |//  `.                       //  
//                     /  \\|||  :  |||//  \                      //      
//                    /  _||||| -:- |||||-  \                     //  
//                    |   | \\\  -  /// |   |                     //  
//                    | \_|  ''\---/''  |   |                     //          
//                    \  .-\__  `-`  ___/-. /                     //          
//                  ___`. .'  /--.--\  `. . ___                   //      
//                ."" '<  `.___\_<|>_/___.'  >'"".                //  
//              | | :  `- \`.;`\ _ /`;.`/ - ` : | |               //      
//              \  \ `-.   \_ __\ /__ _/   .-` /  /               //  
//        ========`-.____`-.___\_____/___.-`____.-'========       //      
//                             `=---='                            //  
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^      //  
//              佛祖保佑       永无BUG        永不修改              //  
////////////////////////////////////////////////////////////////////  

import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux'
import {browserHistory, Router ,Route} from 'react-router';
//react-router-redux用于处理redux与react-router协同工作
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore'
import Reducer from './reducer';
import routes from './routes';
import AppContainer from './containers/AppContainer';
import rootSaga from './sagas';

import './styles/common.scss';
import './styles/common1.css';


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render (
      <Provider store={store}>            
            <AppContainer history={history} routes={routes} />
      </Provider>,
     document.getElementById('root')
)