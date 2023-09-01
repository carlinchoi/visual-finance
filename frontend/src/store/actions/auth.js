// actions.js

import axios from 'boot/axios';

// Action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';

// Action creators

// Login action
export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('/login', { username, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

// Register action
export const register = (username, password, role) => async (dispatch) => {
  try {
    const response = await axios.post('/register', { username, password, role });
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error });
  }
};

// Logout action
export const logout = () => async (dispatch) => {
  try {
    await axios.post('/logout');
    dispatch({ type: LOGOUT });
  } catch (error) {
    // Handle any errors during logout if needed
  }
};
