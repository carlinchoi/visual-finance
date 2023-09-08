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
export const SET_LOGGED_IN = 'SET_LOGGED_IN'; // New action type
export const SET_EDIT_STATUS = 'SET_EDIT_STATUS';
export const SET_REGISTER_STATUS = 'SET_REGISTER_STATUS';
// Action creators

// Login action
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/login', { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch({ type: SET_LOGGED_IN, payload: true });
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
    dispatch({ type: SET_REGISTER_STATUS, payload: true });
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

    console.log(response.data);
    dispatch({ type: EDIT_PROFILE_SUCCESS, payload: response.data });
    dispatch({ type: SET_EDIT_STATUS, payload: true });
  } catch (error) {
    dispatch({ type: EDIT_PROFILE_FAILURE, payload: error });
  }
};
