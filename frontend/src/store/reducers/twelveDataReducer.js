import { FETCH_TWELVE_LOGO, FETCH_TWELVE_EARNINGS, FETCH_TWELVE_INDICES } from '../actions/twelveDataActions';

const initialState = {
  twelveLogo: [],
  loading: true,
  error: null,
  searchTicker: '',
  twelveEarnings: [],
  twelveIndices: []
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
      return {
        ...state,
        twelveEarnings: action.payload,
        loading: false,
        error: null
      };
    case FETCH_TWELVE_INDICES:
      return {
        ...state,
        twelveIndices: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default twelveDataReducer;
