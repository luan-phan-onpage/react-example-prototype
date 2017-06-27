import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import { fromJS } from 'immutable';

const sagaMiddleware = createSagaMiddleware();
const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [sagaMiddleware]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    fromJS(initialState),
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}
  // run redux-saga
  store.runSaga = sagaMiddleware.run;
 if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        const makeRootReducer = reducerModule.default;
        const nextReducers = makeRootReducer(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store
}

export default createStore
