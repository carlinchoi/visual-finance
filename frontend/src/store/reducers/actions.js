// action - account reducer
export const LOGIN = '@auth/LOGIN';
export const LOGOUT = '@auth/LOGOUT';
export const REGISTER = '@auth/REGISTER';

export const FETCH_CURRENT_LIABILITIES = 'FETCH_CURRENT_LIABILITIES';

export const fetchCurrentLiabilities = (data) => {
  return {
    type: FETCH_CURRENT_LIABILITIES,
    payload: data
  };
};
