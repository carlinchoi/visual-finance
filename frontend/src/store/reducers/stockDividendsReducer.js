import { FETCH_STOCK_DIVIDENDS } from '../actions/stockDividendsActions';

const initialState = {
  stockDividendsData: [],
  loading: true,
  error: null,
  searchTicker: ''
};

const stockDividendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_DIVIDENDS:
      return {
        ...state,
        stockDividendsData: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default stockDividendsReducer;
