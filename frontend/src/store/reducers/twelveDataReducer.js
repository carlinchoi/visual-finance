import { FETCH_TWELVE_DATA } from '../actions/twelveDataActions';

const initialState = {
  twelveData: [],
  loading: true,
  error: null,
  searchTicker: ''
};

const twelveDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWELVE_DATA:
      return {
        ...state,
        twelveData: payload.action,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default twelveDataReducer;
