// currentLiabilitiesReducer.js

import { FETCH_CURRENT_LIABILITIES } from './actions';

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
