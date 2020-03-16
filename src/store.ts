import { createStore, applyMiddleware, Dispatch } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/reducers';
import { AppActions } from './types/actions';

const logMiddleware = (store) => (dispatch: Dispatch<AppActions>) => (
  action,
) => {
  console.log(action.type);

  return dispatch(action);
};

const stringMiddleWare = () => (dispatch: Dispatch<AppActions>) => (
  action: string,
) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action,
    });
  }
  return dispatch(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleWare, logMiddleware),
);

export type AppState = ReturnType<typeof reducer>;

export default store;
