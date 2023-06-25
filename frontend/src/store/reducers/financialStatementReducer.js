// currentLiabilitiesReducer.js

const FETCH_CURRENT_LIABILITIES = 'FETCH_CURRENT_LIABILITIES';

export const fetchCurrentLiabilities = (data) => {
  return {
    type: FETCH_CURRENT_LIABILITIES,
    payload: data
  };
};

const initialState = {
  currentLiabilitiesData: [],
  loading: true,
  error: null
};

const currentLiabilitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_LIABILITIES:
      return {
        ...state,
        currentLiabilitiesData: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default currentLiabilitiesReducer;
