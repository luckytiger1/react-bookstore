import {
  GOOGLE_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_FAILURE,
  AppActions,
} from '../../types/actions';
import { UserState } from '../../types/types';

const initialState: UserState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action: AppActions): UserState => {
  switch (action.type) {
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case GOOGLE_SIGN_IN_FAILURE:
    case EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
