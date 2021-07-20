import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createInjectorsEnhancer} from 'redux-injectors';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const createReducer = (appReducer: any) => (asyncReducers = {}) => {
  return combineReducers({
    ...asyncReducers,
    app: appReducer,
  });
};

export let store = {};

// Configure the store
export const initRedux = (appReducer: any, appSaga: any) => {
  const _createReducer = createReducer(appReducer);
  const reducer = _createReducer();

  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = __DEV__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

  // Add sagas middleware
  store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
      createInjectorsEnhancer({
        createReducer: _createReducer,
        runSaga: sagaMiddleware.run,
      }),
    ),
  );

  sagaMiddleware.run(appSaga);

  return {store};
};
