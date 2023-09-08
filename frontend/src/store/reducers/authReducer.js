// reducers.js

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
  SET_LOGGED_IN,
  SET_EDIT_STATUS,
  SET_REGISTER_STATUS
} from '../actions/auth';

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
      return { ...state, error: action.payload };
    case LOGOUT:
      return { ...state, user: null, error: null };
    case EDIT_PROFILE_SUCCESS:
      return { ...state, error: null };
    case EDIT_PROFILE_FAILURE:
      return { ...state, user: null, error: action.payload };
    case SET_LOGGED_IN:
      return { ...state, loggedIn: action.payload };
    case SET_EDIT_STATUS:
      return { ...state, editStatus: action.payload };
    case SET_REGISTER_STATUS:
      return { ...state, registerStatus: action.payload };
    default:
      return state;
  }
};

export default authReducer;
