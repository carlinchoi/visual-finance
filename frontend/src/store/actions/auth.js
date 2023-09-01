// actions.js
import axios from 'boot/axios'; // Import your Axios instance

// Define action types as constants
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};
