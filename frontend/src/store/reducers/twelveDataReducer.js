import { FETCH_TWELVE_LOGO, FETCH_TWELVE_EARNINGS } from '../actions/twelveDataActions';

const initialState = {
  twelveLogo: [],
  loading: true,
  error: null,
  searchTicker: '',
  twelveEarnings: []
};

const twelveDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWELVE_LOGO:
      return {
        ...state,
        twelveLogo: action.payload,
        loading: false,
        error: null
      };
    case FETCH_TWELVE_EARNINGS:
      console.log('action.payload:', action.payload);
      return {
        ...state,
        twelveEarnings: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default twelveDataReducer;
