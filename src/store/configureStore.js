import { compose,createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer';
import rootSaga from '../sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    // applyMiddleware(
    //   sagaMiddleware
    // ),
    compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
  );
  sagaMiddleware.run(rootSaga);
  return store;
};