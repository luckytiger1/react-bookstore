import { createStore, applyMiddleware, Dispatch } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/reducers';
import { AppActions } from './types/actions';

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

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleWare),
);

export type AppState = ReturnType<typeof reducer>;

export default store;
