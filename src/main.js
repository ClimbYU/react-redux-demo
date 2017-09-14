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
//   const routes = require('./routes')

ReactDOM.render (
      <Provider store={store}>
            <AppContainer history={history} routes={routes} />
      </Provider>,
     document.getElementById('root')
)
