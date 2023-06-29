const FETCH_STOCK_DIVIDENDS = 'FETCH_STOCK_DIVIDENDS';

export const fetchStockDividends = (data) => {
  return {
    type: FETCH_STOCK_DIVIDENDS,
    payload: data
  };
};

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
