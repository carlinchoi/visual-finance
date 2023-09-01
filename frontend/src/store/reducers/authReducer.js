// reducers.js

import { LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT } from '../actions/auth';

const initialState = {
  user: null,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, user: null, error: action.payload };
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case REGISTER_FAILURE:
      return { ...state, user: null, error: action.payload };
    case LOGOUT:
      return { ...state, user: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
