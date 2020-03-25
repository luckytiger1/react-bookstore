import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import thunkMiddleware from 'redux-thunk';
// import { persistStore } from 'redux-persist';
import reducer from './reducers/reducers';
// import { AppActions } from '../types/actions';
import sagaWatcher from './sagas/sagas';

// const stringMiddleWare = () => (dispatch: Dispatch<AppActions>) => (
//   action: AppActions,
// ) => {
//   if (typeof action === 'string') {
//     return dispatch({
//       type: action,
//     });
//   }
//   return dispatch(action);
// };

const saga = createSagaMiddleware();

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middlewares, saga));

saga.run(sagaWatcher);

// const persistor = persistStore(store);

export type AppState = ReturnType<typeof reducer>;

export default store;
