// actions.js

import axios from 'boot/axios';

// Action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE';

// Action creators

// Login action
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/login', { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

// Register action
export const register = (email, password, firstName, lastName) => async (dispatch) => {
  try {
    const role = 'USER';
    const response = await axios.post('/register', { email, password, firstName, lastName, role });
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

export const editProfile = (requestData, user) => async (dispatch) => {
  try {
    const response = await axios.patch('/user/update-profile', requestData, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    dispatch({ type: EDIT_PROFILE_SUCCESS, payload: response.data }); // Dispatch the response data
  } catch (error) {
    dispatch({ type: EDIT_PROFILE_FAILURE, payload: error });
  }
};
