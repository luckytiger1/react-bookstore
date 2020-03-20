import { createStore, applyMiddleware, Dispatch } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/reducers';
import { AppActions } from './types/actions';
import sagaWatcher from './sagas';

const stringMiddleWare = () => (dispatch: Dispatch<AppActions>) => (
  action: AppActions,
) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action,
    });
  }
  return dispatch(action);
};

const saga = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleWare, saga),
);

saga.run(sagaWatcher);

export type AppState = ReturnType<typeof reducer>;

export default store;
